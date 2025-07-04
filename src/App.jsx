import Header from "./components/Header"
import CustomInput from "./components/CustomInput"
import { useState } from 'react'
import { formatter } from "./util/investment"

function App() {

  let [data, setData] = useState(
    {
      inicial: 15000,
      anual: 900,
      retorno: 5.5,
      periodo: 12
    }
  )

  const handleChange = (field, value) => {

    setData((prevData) => {

      return {
        ...prevData,
        [field]: +value
      }
    })
  }

  let dadosAnuais = []

  const derivateDadosAnuais = () => {

    let valorAcumulado = data.inicial;
    let jurosAcumulado = 0;
    for (let i = 1; i <= data.periodo; i++) {

      let jurosDoAno = valorAcumulado * (data.retorno / 100)
      jurosAcumulado += jurosDoAno
      valorAcumulado += jurosDoAno + data.anual


      dadosAnuais = [
        ...dadosAnuais,
        {
          sequencial: i,
          valorInvestido: +data.inicial + (data.anual * i),
          jurosAnual: jurosDoAno,
          jurosTotal: jurosAcumulado,
          valorTotal: valorAcumulado
        }
      ]

    }
  }

  derivateDadosAnuais()


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
        <tr>
          <th>Ano</th>
          <th>Valor Total</th>
          <th>Juros Anual</th>
          <th>Juros Total</th>
          <th>Valor Investido</th>
        </tr>
      </thead>
      <tbody>
        {dadosAnuais.map(ano =>
          <tr>
            <td>{ano.sequencial}</td>
            <td>{formatter.format(ano.valorTotal)}</td>
            <td>{formatter.format(ano.jurosAnual)}</td>
            <td>{formatter.format(ano.jurosTotal)}</td>
            <td>{formatter.format(ano.valorInvestido)}</td>
          </tr>
        )}
      </tbody>
    </table>
  </>
  )
}

export default App
