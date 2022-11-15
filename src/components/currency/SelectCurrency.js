import Flag from 'react-world-flags'
import Select from 'react-select'
import styles from './SelectCurrency.module.css'

function SelectCurrency({ children, text }) {
  const options = [
    { value: 'eur', label: 'EUR' },
    { value: 'pln', label: 'PLN' },
    { value: 'gbp', label: 'GBP' },
  ]
  return (
    <div className={styles.select}>
      <h4>{text}</h4>
      <Select options={options} className={styles.select__currency} />
      {/* <Flag code="pol" height="16" /> */}
    </div>
  )
}

export default SelectCurrency
