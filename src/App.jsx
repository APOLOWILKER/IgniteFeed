import { Header } from "./components/Header"
import { Post } from "./components/Post"
import './global.css'

import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

function App() {

  return (
    <>
    <Header />



    <div className={styles.wrapper}>
      <Sidebar />
      <main>
      <Post
      author="Apolo Wilker"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deserunt impedit modi error fuga officia. Doloremque facilis, alias maxime id tenetur impedit nostrum. Optio suscipit consequuntur tempora magni possimus incidunt."
    />
    <Post
      author="Jhon Does"
      content="Outro post legal"
    />
      </main>
    </div>
    </>

  )
}


export default App
