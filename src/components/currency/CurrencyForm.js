import { HiOutlineArrowsRightLeft } from 'react-icons/hi2'
import SelectCurrency from './SelectCurrency'
import styles from './currencyForm.module.css'
import Button from '../UI/Button'
import { useState } from 'react'

function CurrencyForm() {
  const [selected, setSelected] = useState('EUR')
  return (
    <div className={styles.currenyForm}>
      <form>
        <div className={styles.currencyForm__select_currency}>
          <SelectCurrency selected={selected} setSelected={setSelected} />
          <HiOutlineArrowsRightLeft />
          <SelectCurrency selected={selected} setSelected={setSelected} />
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
