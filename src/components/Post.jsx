import { Comment } from "./Comment"
import styles from './Post.module.css'

export function Post ()  {

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
           src="https://github.com/APOLOWILKER.png"
          />
          <div className={styles.authorInfo}>
            <strong>Apolo Wilker</strong>
            <span>Web Development</span>
          </div>
        </div>
        <time title="18 de Abril às 17:00h" dateTime="2024-04-18">
          Publicado a 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>


        <p>Acabei de subir mais um projeto no meu portifa.
        É um projeto que fiz no NLW Return, evento da Rocketseat.
        O nome do projeto é DoctorCare 🚀</p>

        <p>👉<a href="#"> jane.design/doctorcare</a></p>

        <p>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>
          Deixe seu Feedback
        </strong>

        <textarea
        placeholder="Deixe um commentario"
        />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>

      </div>
    </article>
  )
}
