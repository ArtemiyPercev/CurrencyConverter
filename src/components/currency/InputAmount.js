import styles from './inputAmount.module.css'

const InputAmount = ({ setAmount }) => {
  return (
    <div className={styles.inputNum}>
      <input type="number" onChange={(e) => setAmount(e.target.value)} />
    </div>
  )
}

export default InputAmount
