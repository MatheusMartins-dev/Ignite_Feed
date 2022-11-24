import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";
import imgDeveloper from "../../assets/img-developer.avif";

export function Sidebar() {
  return (
    <div>
      <aside className={styles.sidebar}>
        <img className={styles.cover} src={imgDeveloper} />

        <div className={styles.profile}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/112344370?v=4"
            alt="imgGitHub"
          />
          <strong>Matheus Martins</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={18}/>
            Edite seu perfil
          </a>
        </footer>
      </aside>
    </div>
  );
}
