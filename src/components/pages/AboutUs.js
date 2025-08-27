import styles from './AboutUs.module.css';

function AboutUs() {
  return (
    <section className={styles.aboutUs_container}>
      <h1 className={styles.aboutUs_heading}>Sobre Nós</h1>

      <p className={styles.aboutUs_paragraph}>
        A Profitness é uma plataforma inovadora criada para ajudar você a gerenciar seus treinos de maneira prática e eficiente. Nosso objetivo é tornar a organização do seu plano de exercícios mais simples, acessível e personalizada.
      </p>

      <h1 className={styles.aboutUs_heading}>O que oferecemos</h1>

      <p className={styles.aboutUs_paragraph}>Com nossa plataforma, você pode:</p>
      <ul className={styles.aboutUs_list}>
        <li className={styles.aboutUs_listItem}>
          <strong className={styles.aboutUs_strong}>Criar e personalizar seus treinos</strong> conforme suas necessidades e objetivos.
        </li>
        <li className={styles.aboutUs_listItem}>
          <strong className={styles.aboutUs_strong}>Acompanhar seu progresso</strong> e manter-se motivado ao longo da sua jornada.
        </li>
        <li className={styles.aboutUs_listItem}>
          <strong className={styles.aboutUs_strong}>Acessar planos de treino</strong> organizados de forma clara e intuitiva.
        </li>
        <li className={styles.aboutUs_listItem}>
          <strong className={styles.aboutUs_strong}>Gerenciar atividades físicas</strong> com um sistema simples e funcional, ideal tanto para iniciantes quanto para profissionais.
        </li>
      </ul>

      <h1 className={styles.aboutUs_heading}>Funcionalidades do CRUD de Treinos</h1>

      <p className={styles.aboutUs_paragraph}>
        Além disso, oferecemos um <strong className={styles.aboutUs_strong}>sistema completo de CRUD de treinos</strong>, onde você pode:
      </p>
      <ul className={styles.aboutUs_list}>
        <li className={styles.aboutUs_listItem}><strong className={styles.aboutUs_strong}>Adicionar treinos</strong> com informações como:</li>
        <ul className={styles.aboutUs_list}>
          <li className={styles.aboutUs_listItem}><strong className={styles.aboutUs_strong}>Nome</strong> do treino.</li>
          <li className={styles.aboutUs_listItem}><strong className={styles.aboutUs_strong}>Duração</strong> para cada sessão.</li>
          <li className={styles.aboutUs_listItem}><strong className={styles.aboutUs_strong}>Dia da semana</strong> em que será realizado.</li>
          <li className={styles.aboutUs_listItem}><strong className={styles.aboutUs_strong}>Descrição</strong> detalhada do exercício.</li>
          <li className={styles.aboutUs_listItem}>
            <strong className={styles.aboutUs_strong}>Categoria</strong> do treino, com opções como <em className={styles.aboutUs_em}>cardio</em>, <em className={styles.aboutUs_em}>treino livre</em>, <em className={styles.aboutUs_em}>yoga</em>, <em className={styles.aboutUs_em}>HIIT</em>, <em className={styles.aboutUs_em}>força</em> ou <em className={styles.aboutUs_em}>flexibilidade</em>.
          </li>
        </ul>
        <li className={styles.aboutUs_listItem}><strong className={styles.aboutUs_strong}>Editar, excluir e visualizar</strong> facilmente todos os treinos cadastrados.</li>
      </ul>

      <p className={styles.aboutUs_paragraph}>
        Seja você alguém que está começando ou já possui experiência, a Profitness está aqui para facilitar sua rotina e ajudar você a alcançar uma vida ativa e equilibrada. Comece hoje mesmo e transforme seus objetivos em realidade com a Profitness!
      </p>
    </section>
  );
}

export default AboutUs;
