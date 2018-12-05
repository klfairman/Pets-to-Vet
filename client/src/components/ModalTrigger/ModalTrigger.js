import React from "react";

const ModalTrigger = props => (
    <a id={props.ID} onClick={props.click} className="waves-effect waves-light green btn modal-trigger" href={props.IDof}>{props.buttonName}</a>
  );
  
  export default ModalTrigger;