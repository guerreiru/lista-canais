import styles from './Modal.module.css';

export function Modal({ setIsOpen }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Canal não encontrado</h1>
        <button onClick={() => setIsOpen(false)}>Fechar</button>
      </div>
    </div>
  );
}
