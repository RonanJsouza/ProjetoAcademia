import { useNavigate } from 'react-router-dom'

import WorkoutForm from '../workout/WorkoutForm'

import styles from './NewWorkout.module.css'

function NewWorkout() {
  const history = useNavigate()  // permite fazer redirect nas páginas

  function createPost(workout) {
 
    fetch('http://localhost:5000/workouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(workout),
    })
      .then((resp) => resp.json())
      .then((data) => {
        history.push('/workouts', { message: 'Treino criado com sucesso!' })
      })
  }

  return (
    <div className={styles.newworkout_container}>
      <h1>Criar Treino</h1>
      <p>Um jeito mais fácil de organizar seus treinos!</p>
      <WorkoutForm handleSubmit={createPost} btnText="Criar Treino" />
    </div>
  )
}

export default NewWorkout
