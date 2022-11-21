import Flag from 'react-world-flags'
import { BsChevronDown } from 'react-icons/bs'
import styles from './SelectCurrency.module.css'
import { useState } from 'react'

import { FormControl, NativeSelect, InputLabel, Select } from '@mui/material'

function SelectCurrency({ country, text, setValue }) {
  const flags = ['gbr', 'try', 'pol']
  return (
    <>
      <FormControl
        className={styles.select}
        onChange={(e) => setValue(e.target.value)}
      >
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          {text}
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          {country.map((currency) => {
            return <option>{currency}</option>
          })}
        </NativeSelect>
      </FormControl>
    </>
  )
}
export default SelectCurrency

// return (
// <Flag code="gbr" height="16" />
//      <Flag code="pol" height="16" />
//      <Flag code="gbr" height="16" />
// { <Flag code="try" height="16" />}
