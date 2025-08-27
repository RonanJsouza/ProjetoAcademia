import styles from './Contact.module.css';

function Contact() {
  return (
    <section className={styles.contact_container}>
      <h1 className={styles.contact_heading}>Contato</h1>

      <p className={styles.contact_paragraph}>
        Entre em contato conosco ou visite nossa academia física. Estamos aqui para ajudar você a alcançar seus objetivos fitness!
      </p>

      <div className={styles.contactDetails}>
        <h2 className={styles.contact_heading}>Informações de Contato</h2>
        <ul className={styles.contact_list}>
          <li className={styles.contact_listItem}>
            <strong className={styles.contact_strong}>Endereço:</strong> Rua Saúde e Bem-Estar, 123 - Centro, Rio de Janeiro, RJ
          </li>
          <li className={styles.contact_listItem}>
            <strong className={styles.contact_strong}>Telefone:</strong> (11) 1234-5678
          </li>
          <li className={styles.contact_listItem}>
            <strong className={styles.contact_strong}>E-mail:</strong> <a href="mailto:contato@profitness.com" className={styles.contact_em}>contato@profitness.com</a>
          </li>
        </ul>
      </div>

      <div className={styles.socialMedia}>
        <h2 className={styles.contact_heading}>Redes Sociais</h2>
        <ul className={styles.contact_list}>
          <li className={styles.contact_listItem}>
            <strong className={styles.contact_strong}>Instagram:</strong> <a href="https://instagram.com/profitness" className={styles.contact_em} target="_blank" rel="noreferrer">@profitness</a>
          </li>
          <li className={styles.contact_listItem}>
            <strong className={styles.contact_strong}>Facebook:</strong> <a href="https://facebook.com/profitness" className={styles.contact_em} target="_blank" rel="noreferrer">ProFitness</a>
          </li>
          <li className={styles.contact_listItem}>
            <strong className={styles.contact_strong}>Twitter:</strong> <a href="https://twitter.com/profitness" className={styles.contact_em} target="_blank" rel="noreferrer">@profitness</a>
          </li>
          <li className={styles.contact_listItem}>
            <strong className={styles.contact_strong}>YouTube:</strong> <a href="https://youtube.com/profitness" className={styles.contact_em} target="_blank" rel="noreferrer">ProFitness Oficial</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
