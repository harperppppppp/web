import styles from './Child.module.css';

export default function Child() {
  return (
    <>
      <button className="btn">child button</button>
      <button className={styles.btn}>child button blue</button>
      <button className={styles.activeBtn}>액티브</button>
    </>
  )
}