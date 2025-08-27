import { Link } from 'react-router-dom';
import styles from './WorkoutCard.module.css';

// Ícones de categorias
import { FaRunning, FaDumbbell, FaCaretUp, FaHeartbeat } from 'react-icons/fa';
import { GiMeal } from 'react-icons/gi';
import { MdOutlineFitnessCenter } from 'react-icons/md'; // para Treino Livre

import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

// Mapeamento de categorias para ícones
const categoryIcons = {
  Cardio: <FaRunning />,
  Força: <FaDumbbell />,
  Flexibilidade: <GiMeal/>,
  HIIT: <FaHeartbeat />,
  Yoga: <FaCaretUp />,
  'Treino Livre': <MdOutlineFitnessCenter />,
};

function WorkoutCard({ id, name, time, category, description, dayOfWeek, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <div className={styles.workout_card}>
      <h4>{name}</h4>
      <p>
        <span>Duração: </span>{time} minutos
      </p>
      <p>
        <span>Dia da Semana: </span> {dayOfWeek && dayOfWeek.name ? dayOfWeek.name : 'não especificado'}
      </p>
      <p>
        <span>Descrição: </span>{description}
      </p>
      <p className={styles.category_text}>
        {/* Ícone correspondente à categoria */}
        {categoryIcons[category.name]} {category.name}
      </p>
      <div className={styles.workout_card_actions}>
        <Link to={'/workout/' + id}>
          <BsPencil /> Editar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>
    </div>
  );
}

export default WorkoutCard;
