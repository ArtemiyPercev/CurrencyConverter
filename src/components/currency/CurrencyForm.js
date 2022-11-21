import { useState, useEffect } from 'react'
import { HiOutlineArrowsRightLeft } from 'react-icons/hi2'
import SelectCurrency from './SelectCurrency'
import styles from './currencyForm.module.css'
import Button from '../UI/Button'
import InputAmount from './InputAmount'
import { getAccordionDetailsUtilityClass } from '@mui/material'
import axios from 'axios'

const URL = 'https://my.transfergo.com/api/fx-rates'

function CurrencyForm() {
  const [text1, setText1] = useState(1)
  const [text2, setText2] = useState(1)
  const [country, setCountry1] = useState(['GBP', 'TRY', 'PLN'])
  const [country2, setCountry2] = useState(['GBP', 'TRY', 'PLN'])
  const [value1, setValue1] = useState(1)
  const [value2, setValue2] = useState(1)

  useEffect(() => {
    getData()
  }, [])

  async function getData(from, to, amount) {
    try {
      const response = await axios.get(URL, { params: { from, to, amount } })
      return response
    } catch (error) {
      return error
    }
  }

  function convert() {}

  return (
    <div className={styles.currenyForm}>
      <form onSubmit={convert}>
        <div className={styles.currencyForm__select_currency}>
          <SelectCurrency
            country={country}
            text={'From'}
            setValue={setValue1}
          />
          <HiOutlineArrowsRightLeft className={styles.currencyForm__arrows} />
          <SelectCurrency country={country2} text={'To'} setValue={setValue2} />
        </div>
        <div className={styles.inputs}>
          <InputAmount text="Amount" setText={setText1} />
          <InputAmount text="Converted to" setText={setText2} />
        </div>
        <Button type="submit" />
      </form>
    </div>
  )
}

export default CurrencyForm
