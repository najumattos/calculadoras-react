import FormCalc from '../components/FormCalc';
import { useState } from 'react';
import { projetoData } from "../data/projetoData";
import OrcamentoTable from '../components/OrcamentoTable';

function CalculadoraOrcamento() {
  const calcularPrecoProjeto = (e, valorHora, horasEstimadas) => {
    e.preventDefault(); 

    if (!valorHora || !horasEstimadas) return;

    const valorHoraFloat = parseFloat(valorHora.replace(",", "."));
    const horasFloat = parseFloat(horasEstimadas.replace(",", "."));

    const totalItem = (valorHoraFloat * horasFloat).toFixed(2);

    setResultadoOrcamento(totalItem);
    projetoData.forEach((item) => {
          if (totalItem >= item.min && totalItem <= item.max) {
            setInfo(item.info);
            setInfoClass(item.infoClass)
          }
        });
  };

    const resetCalc = () => {
    setResultadoOrcamento("");
    setInfo("");
    setInfoClass("");
  };

  const [resultadoOrcamento, setResultadoOrcamento] = useState("");
 const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");
  const dadosPagina = {
    title: "Orçamento De Projeto",
    labelValorUm: "Valor Hora (R$)",
    placeholderValorUm: "Ex: 50",
    labelValorDois: "Estimativa de Horas",
    placeholderValorDois: "Ex: 40"
  };

  return (
    <div className="container">
     {!resultadoOrcamento ? (
        <FormCalc 
          calcular={calcularPrecoProjeto} 
          dadosPagina={dadosPagina} 
        />
      ) : (
        <OrcamentoTable data={projetoData} resultadoOrcamento={resultadoOrcamento} info={info} infoClass={infoClass} resetCalc={resetCalc} />
      )}
    </div>
  );
}

export default CalculadoraOrcamento;