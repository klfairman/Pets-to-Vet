import React from "react";

const ModalTrigger = props => (
    <a className="waves-effect waves-light btn modal-trigger" href={props.IDof}>{props.buttonName}</a>
  );
  
  export default ModalTrigger;