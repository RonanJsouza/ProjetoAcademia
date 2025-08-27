import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './Workout.module.css';

import Loading from '../layout/Loading';
import Container from '../layout/Container';
import WorkoutForm from '../workout/WorkoutForm';
import Message from '../layout/Message';

function Workout() {
  let { id } = useParams();
  const [workout, setWorkout] = useState([]);
  const [showWorkoutForm, setShowWorkoutForm] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('success');

  useEffect(() => {
    // Para ver o loading
    setTimeout(() => {
      fetch(`http://localhost:5000/workouts/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setWorkout(data);
        });
    }, 0);
  }, [id]);

  function editPost(workout) {
    fetch(`http://localhost:5000/workouts/${workout.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(workout),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setWorkout(data);
        setShowWorkoutForm(!showWorkoutForm);
        setMessage('Treino atualizado!');
        setType('success');
      });
  }

  function toggleWorkoutForm() {
    setShowWorkoutForm(!showWorkoutForm);
  }

  return (
    <>
      {workout.name ? (
        <div className={styles.workout_details}>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
            <div className={styles.details_container}>
              <h1>Treino: {workout.name}</h1>
              <button className={styles.btn} onClick={toggleWorkoutForm}>
                {!showWorkoutForm ? 'Editar treino' : 'Fechar'}
              </button>
              {!showWorkoutForm ? (
                <div className={styles.form}>
                  <p>
                    <span>Categoria:</span> {workout.category.name}
                  </p>
                  <p>
                    <span>Duração do treino:</span> {workout.time} minutos
                  </p>
                  <p>
                    <span>Dia da Semana:</span> {workout.dayOfWeek.name}
                  </p>
                  <p>
                    <span>Descrição:</span> {workout.description}
                  </p>
                </div>
              ) : (
                <div className={styles.form}>
                  <WorkoutForm
                    handleSubmit={editPost}
                    btnText="Concluir Edição"
                    workoutData={workout}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Workout;
