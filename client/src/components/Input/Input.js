import React from "react";

const Input = props => (

        <div className="row">
            <div className="input-field col s6">
                <input onChange={props.change} id={props.inputTitle} value={props.value} name={props.name} type="text" className="validate"></input>
                <label>{props.inputTitle}</label>
            </div>
        </div>
  );
  
  export default Input;