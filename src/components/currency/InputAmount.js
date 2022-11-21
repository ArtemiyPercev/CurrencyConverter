import styles from './inputAmount.module.css'

function InputAmount({ text, setText }) {
  return (
    <div className={styles.inputNum} onChange={(e) => setText(e.target.value)}>
      <h4>{text}</h4>
      <input type="number" />
    </div>
  )
}

export default InputAmount
