import Header from "./components/Header"
import CustomInput from "./components/CustomInput"
import { useState } from 'react'

function App() {

  let [data, setData] = useState(
    {
      inicial: 0,
      anual: 0,
      retorno: 0,
      periodo: 0
    }
  )

  const handleChange = (field, value) => {

    setData((prevData) => {
      return {
        ...prevData,
        [field]: value
      }
    })

  }

  return (<>
    <Header />
    <div id="user-input">
      <div className="input-group">
        <CustomInput label="INVESTIMENTO INICIAL" value={data.inicial} onChange={handleChange} field="inicial" />
        <CustomInput label="INVESTIMENTO ANUAL" value={data.anual} onChange={handleChange} field="anual" />
      </div>
      <div className="input-group">
        <CustomInput label="RETORNO" value={data.retorno} onChange={handleChange} field="retorno" />
        <CustomInput label="PERIODO" value={data.periodo} onChange={handleChange} field="periodo" />
      </div>
    </div>
    <table id="result">
      <thead>
        <td></td>
      </thead>
    </table>
  </>
  )
}

export default App
