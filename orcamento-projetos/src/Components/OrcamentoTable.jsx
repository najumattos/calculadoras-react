import { useState } from 'react';
import Button from './Button'
import './ImcTable.css'

// Recebe os dados 
const OrcamentoTable = ({ data, resultadoOrcamento, info, infoClass, resetCalc }) => {
  const [valorUrgente, setValorUrgente] = useState("");
  const taxaUrgenciaCalc = () => {
    const valorOriginal = parseFloat(resultadoOrcamento);
    
    const valorComTaxa = valorOriginal * 1.20;
    
    setValorUrgente(valorComTaxa.toFixed(2));
};
    return (
    <div id="result-container">
      <p id="imc-number">Orçamento: <span className={infoClass}> {resultadoOrcamento} </span> </p>
      <p id="imc-info"> Tipo de Projeto: <span className={infoClass}> {info} </span> </p>
    
        <h3>Confira as classificações</h3>
        
        <div className="imc-table">
            <div className="table-header">
                <h4>Orçamento</h4>
                <h4>Classificação</h4>
                <h4>Complexidade</h4>
            </div>

            {/* Percorrer o array data e exibir cada item */}
            {data.map((item) =>(
                <div className="table-data">
                    <p>{item.classification}</p>
                    <p>{item.info}</p>
                    <p>{item.complexity}</p>
                </div>
            ))}
        </div>

            {/* 12. Botão que chama a função de resetar a calculadora */}
        <div className="action-control" style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <Button id="back-btn" text="Calcular Novamente" action={resetCalc}/>
        <Button id="urgencia-btn" text="Tá com pressa?" action={taxaUrgenciaCalc}/>
      </div>
      {valorUrgente && (
        <div id="urgencia-container" style={{ marginTop: '20px', padding: '10px', backgroundColor: '#ffebe6', borderRadius: '5px', textAlign: 'center' }}>
          <p style={{ color: '#ff4d4f', margin: 0 }}>
            ⚡ <strong>Orçamento com Urgência (Entrega Rápida):</strong> R$ {valorUrgente.replace(".", ",")}
          </p>
          <small style={{ color: '#595959' }}>*Acréscimo de 20% aplicado sobre o valor original</small>
        </div>
      )}
    </div>

    
  );
};

export default OrcamentoTable;