import { useState, useEffect } from 'react'
import { HiOutlineArrowsRightLeft } from 'react-icons/hi2'
import SelectCurrency from './SelectCurrency'
import styles from './currencyForm.module.css'
import Button from '../UI/Button'
import InputAmount from './InputAmount'
import axios from 'axios'

const URL = 'https://my.transfergo.com/api/fx-rates'
const URLFLAGS =
  'https://www.transfergo.com/static/images/flags/svg/${country.name}.svg'

const CurrencyForm = () => {
  const [fromCurrency, setFromCurrency] = useState('GBP')
  const [toCurrency, setToCurrency] = useState('TRY')
  const [amount, setAmount] = useState(0)

  useEffect(() => {
    getData()
    // getFlags()
  }, [])

  const getData = async (from, to, amount) => {
    try {
      const response = await axios.get(URL, { params: { from, to, amount } })
      return response
    } catch (error) {
      return error
    }
  }

  // const getFlags = async (country) => {
  //   try {
  //     const res = await axios.get(URLFLAGS, { params: { country } })
  //     return res
  //   } catch (error) {
  //     return error
  //   }
  // }

  const handleSetAmount = (value) => {
    // setAmount(value)
    // getData(fromCurrency, toCurrency, value)
    // console.log(value)
    // postojanno proveriat
  }

  const handleSetFromCurrency = (value) => {
    // setFromCurrency(value)
    // getData(value, toCurrency, amount)
    // console.log(value)
  }

  const handleSetToCurrency = (value) => {
    setToCurrency(value)
    getData(fromCurrency, value, amount)

    console.log(value)
  }

  const handleOnConvert = () => {
    // snachal vziat znachenija s inputov to , from i amount
    // sdelat zapros na API
    // izobrazhenija po front endu
  }

  const onResult = () => {}

  return (
    <div className={styles.currenyForm}>
      <form onSubmit={onResult}>
        <div className={styles.currencyForm_Selects}>
          <SelectCurrency
            setCurrency={handleSetFromCurrency}
            currency={fromCurrency}
          />
          <HiOutlineArrowsRightLeft className={styles.currencyForm_arrows} />
          <SelectCurrency
            setCurrency={handleSetToCurrency}
            currency={toCurrency}
          />
        </div>
        <div className={styles.currencyForm_Inputs}>
          <InputAmount setAmount={handleSetAmount} value={amount} />
        </div>
        <Button type="submit" onConvert={handleOnConvert} />
      </form>
    </div>
  )
}

export default CurrencyForm
