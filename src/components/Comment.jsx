import { ThumbsUp, Trash } from "phosphor-react"
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/APOLOWILKER.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Apolo Wilker</strong>
              <time title="19 de Abril às 17:00" dateTime="2024-04-19 17:10:30">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar commentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Devon, parabens!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>
    </div>
  )
}
