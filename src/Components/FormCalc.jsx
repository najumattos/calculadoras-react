import { useState } from "react";
import "./ImcCalc.css"
import Button from "./Button";

const FormCalc = ({ calcular, dadosPagina }) => {
    const [valorUm, setValorUm] = useState("");
    const [valorDois, setValorDois] = useState("");
    const { title, labelValorUm, placeholderValorUm, labelValorDois, placeholderValorDois } = dadosPagina;

    const clearForms = (e) => {
        e.preventDefault();
        setValorUm("");
        setValorDois("");
    }

    /* Permitir apenas números */
    const validDigits = (text) => {
         return text.replace(/[^0-9,]/g, "")
    }

    const handleHeightChange = (e) => {
        const updateValue = validDigits(e.target.value);
        setValorUm(updateValue);
    }

    const handleWeightChange = (e) => {
        const updateValue = validDigits(e.target.value);
        setValorDois(updateValue);
    }

  return (
    <div id="calc-container">
      <h2>{title}</h2>
        {/* Form para obter peso e altura */}
        <form id="imc-form">
            <div className="form-inputs">
                {/* Campo de altura */}
                <div className="form-control">
                    <label htmlFor="height">{labelValorUm}</label>
                    <input type="text"
                           name="height"
                           id="height"
                           placeholder={placeholderValorUm}
                           onChange={(e) => handleHeightChange(e)}
                           value={valorUm} />
                </div>
                {/* Campo de Peso */}
                <div className="form-control">
                    <label htmlFor="weight">{labelValorDois}</label>
                    <input type="text"
                           name="weight"
                           id="weight"
                           placeholder={placeholderValorDois}
                           onChange={(e) => handleWeightChange(e)}
                           value={valorDois} />
                </div>
            </div>
            <div className="action-control">
                <Button id="calc-btn" text="Calcular" action={(e) => calcular(e, valorUm, valorDois)}/>
                <Button id="clear-btn" text="Limpar" action={clearForms}/>
            </div>
        </form>
    </div>
  );
};

export default FormCalc;