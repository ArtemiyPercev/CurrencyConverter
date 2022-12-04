import styles from './SelectCurrency.module.css'

const SelectCurrency = ({ currency, setCurrency }) => {
  const currencies = ['GBP', 'PLN', 'TRY']

  return (
    <div>
      <label>From</label>
      <select
        className={styles.selectCurrency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        {currencies.map((currency1, index) => {
          return <option key={index}>{currency1}</option>
        })}
      </select>
    </div>
  )
}
export default SelectCurrency
