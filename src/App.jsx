import React from 'react'
import Greeting from './Greeting'
import Message from './Message'
import Button from './Button'
import './App.css'

const App = () => {
  const handleClick = () => {
    console.log('Кнопка натиснута!')
  }

  return (
    <div>
      <Greeting name="ByteMe6" />
      <Message text="message (text)" />
      <Button onClick={handleClick} />
    </div>
  )
}

export default App
