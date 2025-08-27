import styles from './Home.module.css'
import homeImg from '../../img/dumbbell-gym-svgrepo-com.svg'

import LinkButton from '../layout/LinkButton'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo a <span>Profitness</span>
      </h1>
      <p>Comece a gerenciar seu treino agora mesmo!</p>
      <LinkButton to="/newworkout" text="Criar Treino" />
      <img src={homeImg} alt="homeImg" />
    </section>
  )
}

export default Home
