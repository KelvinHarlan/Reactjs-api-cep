import React from "react";
import './form.css';




 export default (props) => {
    return (
        <div className="form-box">
            <form className="form" action="#">
                
                <label htmlFor="cep" >CEP: </label>
                <input onBlur={props.api} type="text" name="cep" id="cep" placeholder="Insira seu CEP"/>

                <label htmlFor="rua" >Rua: </label>
                <input type="text" name="rua" id="rua" placeholder="Insira sua Rua"/>

                
                <label htmlFor="bairro" >Bairro: </label>
                <input type="text" name="bairro" id="bairro" placeholder="Insira seu Bairro"/>

                
                <label htmlFor="cidade" >Cidade: </label>
                <input type="text" name="cidade" id="cidade" placeholder="Insira sua Cidade"/>

                
                <label htmlFor="estado" >Estado: </label>
                <input type="text" name="estado" id="estado" placeholder="Estado"/>

                <button className="btn-enviar">
                    Enviar
                </button>
            </form>
        </div>
    )
}
