import { useState, useEffect } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './WorkoutForm.module.css'

function WorkoutForm({ handleSubmit, btnText, workoutData }) {
  const [workout, setWorkout] = useState(workoutData || {})
  const [categories, setCategories] = useState([])
  const [daysOfWeek, setDaysOfWeek] = useState([])

  // Fetch de categorias
  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data)
      })
  }, [])

  // Fetch de dias da semana
  useEffect(() => {
    fetch('http://localhost:5000/daysOfWeek', { 
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setDaysOfWeek(data) 
      })
  }, [])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(workout) // A função que executa no submit
  }

  function handleChange(e) {
    setWorkout({ ...workout, [e.target.name]: e.target.value }) // Atualiza os campos gerais
  }

  function handleCategory(e) {
    setWorkout({
      ...workout,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    })
  }

  function handleDay(e) {
    setWorkout({
      ...workout,
      dayOfWeek: { 
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do Treino"
        name="name"
        placeholder="Insira o nome do Treino"
        handleOnChange={handleChange}
        value={workout.name || ''}
      />
      <Input
        type="number"
        text="Duração do Treino (em minutos)"
        name="time"
        placeholder="Insira a duração do treino"
        handleOnChange={handleChange}
        value={workout.time || ''}
      />
      <Select
        name="category"
        text="Tipo de Treino"
        options={categories}
        handleOnChange={handleCategory}
        value={workout.category ? workout.category.id : ''}
      />
      <Select
        name="dayOfWeek" 
        text="Dia da Semana"
        options={daysOfWeek}
        handleOnChange={handleDay}
        value={workout.dayOfWeek ? workout.dayOfWeek.id : ''}
      />
      <Input
        type="text"
        text="Descrição do treino"
        name="description"
        placeholder="Insira a descrição do treino"
        handleOnChange={handleChange}
        value={workout.description || ''}
      />
      <SubmitButton text={btnText} />
    </form>
  )
}

export default WorkoutForm
