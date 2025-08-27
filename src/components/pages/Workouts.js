import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Container from '../layout/Container'
import Loading from '../layout/Loading'

import LinkButton from '../layout/LinkButton'
import WorkoutCard from '../workout/WorkoutCard'
import Message from '../layout/Message'

import styles from './Workouts.module.css'

function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [workoutMessage, setWorkoutMessage] = useState('')

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    // Simular carregamento para exibição do loading
    setTimeout(() => {
      fetch('http://localhost:5000/workouts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setWorkouts(data)
          setRemoveLoading(true)
        })
    }, 100)
  }, [])

  function removeWorkout(id) {
    fetch(`http://localhost:5000/workouts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setWorkouts(workouts.filter((workout) => workout.id !== id))
        setWorkoutMessage('Treino removido com sucesso!')
      })
  }

  return (
    <div className={styles.workout_container}>
      <div className={styles.title_container}>
        <h1>Meus Treinos</h1>
        <LinkButton to="/newworkout" text="Criar treino" />
      </div>
      {message && <Message type="success" msg={message} />}
      {workoutMessage && <Message type="success" msg={workoutMessage} />}
      <Container customClass="start">
        {workouts.length > 0 &&
          workouts.map((workout) => (
            <WorkoutCard
              id={workout.id}
              name={workout.name}
              time={workout.time} 
              category={workout.category}
              dayOfWeek={workout.dayOfWeek}
              description={workout.description} 
              key={workout.id}
              handleRemove={removeWorkout}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && workouts.length === 0 && (
          <p>Não há treinos cadastrados!</p>
        )}
      </Container>
    </div>
  )
}

export default Workouts