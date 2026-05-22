import FormCalc from '../components/FormCalc'
import { useState } from 'react';
import { data } from "../data/data";
import ImcTable from '../components/ImcTable';

function CalculadoraIMC(){
 const calcImc = (e, height, weight) => {
    e.preventDefault(); 

    if (!weight || !height) return;

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(2);

    setImc(imcResult);
    // Percorre os dados para encontrar a classificação correta
    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass)
      }
    });
  }

  const resetCalc = () => {
    setImc("");
    setInfo("");
    setInfoClass("");
  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");
  const dadosPagina = {
         title : "Calculadora de IMC",
         labelValorUm :"Altura (m)",
         placeholderValorUm : "Ex: 1,75",
         labelValorDois : "Peso (kg)",
         placeholderValorDois : "Ex: 80,8"
  }

  return (
    <div className="container">
     {!imc ? (
        <FormCalc calcular={calcImc} dadosPagina={dadosPagina}
         
        />
      ) : (
        <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc} />
      )
      }
    </div>
  )
}

export default CalculadoraIMC