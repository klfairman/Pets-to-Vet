import React from "react";

const Modal = props => (
    <div id={props.modalID} className="modal">
      <div className="modal-content">
        <h4>{props.title}</h4>
        {props.children}
        <a id="close" href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
      </div>
    </div>
  );
  
  export default Modal;