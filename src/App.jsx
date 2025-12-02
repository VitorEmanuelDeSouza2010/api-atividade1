import { useState, useEffect } from 'react'
import s from './App.module.css'
import { api } from './api/api'
import { Card } from './components/card'

function App() {
const [data, setData] = useState([])


  useEffect(() => {
    api.get(`/characters/students`).then((response) => {
      setData(response.data)
      console.log(response.data)
    }).catch((error) => {
      console.error("NÃO FOI POSSÍVEL ACESSAR API", error)
    })
  }, [])

  return (
    <>
      <h1 className={s.title}>Harry Potter API</h1>
      <main>
        <div style={{display: "flex", gap: "10px", alignItems: "center", justifyContent: "center"}}>
        </div>


        <div className={s.wrapCards}>
          {data.map((item, index) => {
            return(
              <div key={index} style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center"}}>
                  <Card image={item.image} name={item.name} race={item.race} gender={item.gender} />
              </div>
            )
          })}

        </div>

      </main>
    </>
  )
}

export default App
