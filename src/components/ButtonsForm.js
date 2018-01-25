import React, { Component } from 'react';

class ButtonsForm extends Component {
render(){
return(
  <div className="buttonsChangeForm">
  <button className="buttonSave hidden" data-id={0}>Guardar</button>
  <button className="buttonSave hidden" data-id={1}>Guardar</button>
  <button className="buttonSave hidden" data-id={2}>Guardar</button>
  <button className="buttonSave hidden" data-id={3}>Guardar</button>
  <button className="buttonSave hidden" data-id={4}>Guardar</button>
  <button className="buttonSave hidden" data-id={5}>Guardar</button>
  <button className="buttonContinue">Continuar</button>
  </div>
);
}
}

export default ButtonsForm;
