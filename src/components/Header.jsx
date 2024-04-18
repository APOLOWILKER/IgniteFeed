import igniteLogo from '../assets/Ignite-logo.svg';
import styles from './Header.module.css';

console.log(styles)

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={igniteLogo} alt="Logotipo Ignite" />
        <strong>Ignite Feed</strong>
      </div>
    </header>
  );
}
