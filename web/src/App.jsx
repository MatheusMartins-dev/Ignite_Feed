import { Post } from "./components/Post/Post";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post
            author="Matheus Martins"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat impedit eius culpa, distinctio veritatis voluptate dolores beatae asperiores 
            excepturi recusandae, voluptas quibusdam nostrum ad itaque? Enim velit reiciendis dicta cum!"
            casa="Centro"
          />
          <Post
            author="Helyel Freitas"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat impedit eius culpa, distinctio veritatis voluptate dolores beatae asperiores 
            excepturi recusandae, voluptas quibusdam nostrum ad itaque? Enim velit reiciendis dicta cum!"
            casa="Lagoinha"
          />
        </main>
      </div>
    </div>
  );
}
