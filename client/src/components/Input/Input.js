import React from "react";

const Input = props => (

        <div class="row">
            <div class="input-field col s6">
                <input id={props.inputTitle} value={props.value} name={props.name} type="text" class="validate"></input>
                <label for={props.inputTitle}>{props.inputTitle}</label>
            </div>
        </div>
  );
  
  export default Input;