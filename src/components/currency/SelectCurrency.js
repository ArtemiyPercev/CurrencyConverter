import Flag from 'react-world-flags'
import styles from './SelectCurrency.module.css'
import { useState } from 'react'

function SelectCurrency({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false)

  const options = ['EUR', 'PLN', 'GBP']

  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropdown_btn}
        onClick={(e) => setIsActive(!isActive)}
      >
        {selected}
      </div>
      {isActive && (
        <div className={styles.dropdown_content}>
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option)
                setIsActive(false)
              }}
              className={styles.dropdown_item}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default SelectCurrency

// return (
//   <div>
//     <div class={styles.select_container}>
//       <div class={styles.option_container}></div>
//       <div class={styles.select}>
//         <input
//           type="text"
//           id="input"
//           placeholder="select"
//           onfocus="this.blur();"
//         />
//       </div>
//       {options.map((option) => {
//         return (
//           <>
//             <div class={styles.option}>
//               <label>
//                 <Flag code={option.value} height="16" />
//                 <span>{option.label}</span>
//               </label>
//             </div>
//           </>
//         )
//       })}
//     </div>
//   </div>
// )
