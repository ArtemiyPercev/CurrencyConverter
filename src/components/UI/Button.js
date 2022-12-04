import styles from './Button.module.css'

const Button = ({ onConvert }) => {
  return (
    <>
      <button className={styles.button} type="submit" onClick={onConvert}>
        Convert
      </button>
    </>
  )
}

export default Button
