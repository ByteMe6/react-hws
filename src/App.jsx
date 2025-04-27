import React from 'react'
import './App.css'

function App() {
  const name = "ByteMe6"
  const favoriteSite = { siteName: "Google", url: "https://www.google.com/" }
  const num1 = 5
  const num2 = 10
  const sum = num1 + num2
  const colors = ["Червоний", "Синій", "Зелений"]

  return (
    <div className="App">
      <h1>{`Привіт, ${name}!`}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src="https://picsum.photos/200/300" alt="Приклад зображення" /> <br />
      <a href={favoriteSite.url} target="_blank" rel="noopener noreferrer">
        {favoriteSite.siteName}
      </a>
      <p>Сума: {sum}</p>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
