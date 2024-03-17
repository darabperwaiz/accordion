import React from 'react'
import {questions} from '../../questionsData'
import style from './accordians.module.css'
import Accordian from "../Accordian/Accordian"


const Accordians = () => {
  return (
    <div className={style.accordians}>
      <h1>Frequently Asked Questions</h1>
      {questions.map((question, index) => (
        <Accordian key={index} question={question} />
      ))}
      {/* <Accordian /> */}
    </div>
  )
}

export default Accordians
