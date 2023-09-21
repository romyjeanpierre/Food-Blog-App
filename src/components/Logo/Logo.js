import styles from './Logo.module.css';
import logomod3 from '../../assets/logomod3.png';

export default function Logo() {
return (
  <div className={styles.Logo}>
    <img src={logomod3} />
    <div>RommY</div>
  </div>
);
}