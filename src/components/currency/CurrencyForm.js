import { HiOutlineArrowsRightLeft } from 'react-icons/hi2'
import SelectCurrency from './SelectCurrency'
import styles from './currencyForm.module.css'
import Button from '../UI/Button'

function CurrencyForm() {
  return (
    <div className={styles.currenyForm}>
      <form>
        <div className={styles.currencyForm__select_currency}>
          <SelectCurrency text="From" />
          <HiOutlineArrowsRightLeft />
          <SelectCurrency text="To" />
        </div>
        <div>
          <input type="number" />
        </div>
        <Button />
      </form>
    </div>
  )
}

export default CurrencyForm
