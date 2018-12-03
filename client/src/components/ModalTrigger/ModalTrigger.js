import React from "react";

const ModalTrigger = props => (
    <a id={props.ID} className="waves-effect waves-light green btn modal-trigger" href={props.IDof}>{props.buttonName}</a>
  );
  
  export default ModalTrigger;