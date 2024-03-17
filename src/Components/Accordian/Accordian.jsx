import React, { useEffect, useState, useRef } from 'react'
import style from './accordian.module.css'

const Accordian = ({question}) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current &&!ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mouseup', handleClickOutside);
      return () => {
        document.removeEventListener('mouseup', handleClickOutside);
      };
    }, [ref])

  return (
    <div className={style.accordian} ref={ref}>
      <div className={style.accordianHead}>
      <h3>{question.question}</h3>
      <button onClick={()=> setIsOpen(!isOpen)}>{isOpen ? '-': '+'}</button>
      </div>
     
     {isOpen && <div className={style.accordianContent}>
        <p>{question.answers}</p>
      </div>}
      
    </div>
  )
}

export default Accordian
