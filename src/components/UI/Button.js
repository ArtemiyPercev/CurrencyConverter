import styles from './Button.module.css'

function Button() {
  return (
    <>
      <button className={styles.button} type="submit">
        Convert
      </button>
    </>
  )
}

export default Button
