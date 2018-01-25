import React, { Component } from 'react';


class FieldsetCollapse extends Component {
  render(){
    return (
      <div>
      <fieldset className="fieldset-information fieldset-background display-none">
        <legend className="title">Formación</legend>
        <hr/>

        {/*   COLAPSABLE 1  -------------*/}
        <div>
          <div id="firstEducationBox">
            <div className="add-project caja-educacion">
              <div className="addfield" data-id={0}>
                <a href="#" className="textadd">Añadir formación 1</a>
              </div>
              <div className="buttons-project-container">
                <img className="buttons-project margin-right-buttons papelera" src="img/trash.png" alt="Icono de papelera" data-id={0} />
                <img id="arrowUpFirstElement" className="buttons-project margin-right-buttons" src="img/arrowup.png" alt="Flecha hacia arriba" />
                <img id="arrowDownFirstElement" className="buttons-project flecha-abajo" src="img/arrowdown.png" alt="Flecha hacia abajo" />
              </div>
            </div>

          {/*  FORMULARIO FORMACIÓN   -------------*/}
            <div className="drop-down hidden">
              <label className="label-form" htmlFor="title-education">
                Título
              </label>
              <label className="label-form" htmlFor="title-education">
                Título
              </label>
              <input className="input-form title-education main-value" type="text" name="title-education" placeholder="Título" required />
              <label className="label-form" htmlFor="center-education">
                Centro de formación
              </label>
              <input className="input-form center-education" type="text" name="company-project" placeholder="Centro de formación" required />
              <label htmlFor="date-start-education">
                Fecha de inicio
              </label>
              <input className="input-form date-start-education" type="date" name="company-project" placeholder="Fecha inicio" required />
              <label htmlFor="date-end-education">
                Fecha de finalización
              </label>
              <input className="input-form date-end-education" type="date" name="company-project" placeholder="Fecha fin" required />
            </div>
          </div>

          {/*   COLAPSABLE 2   -------------*/}
          <div id="secondEducationBox">
            <div className="add-project caja-educacion">
              <div className="addfield" data-id={1}>
                <a href="#" className="textadd">Añadir formación 2</a>
              </div>
              <div className="buttons-project-container">
                <img className="buttons-project margin-right-buttons papelera" src="img/trash.png" alt="Icono de papelera" data-id={1} />
                <img id="arrowUpSecondElement" className="buttons-project margin-right-buttons" src="img/arrowup.png" alt="Flecha hacia arriba" />
                <img id="arrowDownSecondElement" className="buttons-project" src="img/arrowdown.png" alt="Flecha hacia abajo" />
              </div>
            </div>

            {/*  FORMULARIO FORMACIÓN   -------------*/}
            <div className="drop-down hidden">
              <label className="label-form" htmlFor="title-education1">
                Título
              </label>
              <input className="input-form title-education1 main-value" type="text" name="title-education1" placeholder="Título" required />
              <label className="label-form" htmlFor="center-education1">
                Centro de formación
              </label>
              <input className="input-form center-education1" type="text" name="company-project" placeholder="Centro de formación" required />
              <label htmlFor="date-start-education1">
                Fecha de inicio
              </label>
              <input className="input-form date-start-education1" type="date" name="company-project" placeholder="Fecha inicio" required />
              <label htmlFor="date-end-education1">
                Fecha de finalización
              </label>
              <input className="input-form date-end-education1" type="date" name="company-project" placeholder="Fecha inicio" required />
            </div>
          </div>
        </div>
      </fieldset>


      {/*   FIELDSET PROYECTS   -------------*/}
      <fieldset className="fieldset-information fieldset-projects display-none">
        <legend className="title">Proyectos</legend>
        <hr />
        <div>

        {/*   COLAPSABLE 1   -------------*/}
          <div id="firstProyectBox">
            <div className="add-project caja-proyectos">
              <div className="addfield" data-id={2}>
                <a href="#" className="textadd">Añadir proyecto 1</a>
              </div>
              <div className="buttons-project-container">
                <img className="buttons-project margin-right-buttons papelerauno" src="img/trash.png" alt="Icono de papelera" data-id={0} />
                <img className="buttons-project margin-right-buttons arrowUpFirstProject" src="img/arrowup.png" alt="Flecha hacia arriba" />
                <img className="buttons-project arrowDownFirstProject" src="img/arrowdown.png " alt="Flecha hacia abajo" />
              </div>
            </div>

          {/*   FIELDSET PROYECTS   -------------*/}
            <div className="drop-down hidden">
              <label className="label-form" htmlFor="name-project">
                Nombre del proyecto
              </label>
              <input className="input-form main-value name-project" id="name-project" type="text" name="name-project" placeholder="Nombre del proyecto" required />
              <label className="label-form" htmlFor="company-project">
                Empresa o proyecto personal
              </label>
              <input className="input-form company-project" id="company-project" type="text" name="company-project" placeholder="Empresa o proyecto personal" required />
              <label htmlFor="month-project">
                Fecha de realización:
              </label>
              <div className="containter-data-project">
                <select className="input-form select-date" name="month-project">
                  <option className="option-form grey" disabled selected>Mes</option>
                  <option>Enero</option>
                  <option>Febrero</option>
                  <option>Marzo</option>
                  <option>Abril</option>
                  <option>Mayo</option>
                  <option>Junio</option>
                  <option>Julio</option>
                  <option>Agosto</option>
                  <option>Septiembre</option>
                  <option>Octubre</option>
                  <option>Noviembre</option>
                  <option>Diciembre</option>
                </select>
                <select className="input-form select-date" name="year-project" id="selectorYear">
                  <option className="option-form" disabled selected>Año</option>
                </select>
              </div>
              <label htmlFor="description-project">
                Descripción del proyecto :
              </label>
              <textarea className="input-form description-project" name="description-project" rows={8} cols={80} defaultValue={""} />
            </div>
          </div>

          {/*   COLAPSABLE 2   -------------*/}
          <div id="secondProyectBox">
            <div className="add-project caja-proyectos">
              <div className="addfield" data-id={3}>
                <a href="#" className="textadd">Añadir proyecto 2</a>
              </div>
              <div className="buttons-project-container ">
                <img className="buttons-project margin-right-buttons papelerauno" src="img/trash.png" alt="Icono de papelera" data-id={1} />
                <img className="buttons-project margin-right-buttons arrowUpSecondProject" src="img/arrowup.png" alt="Flecha hacia arriba" />
                <img className="buttons-project arrowDownSecondProject" src="img/arrowdown.png" alt="Flecha hacia abajo" />
              </div>
            </div>

            {/*   FORMULARIO PROYECTOS  -------------*/}
            <div className="drop-down hidden">
              <label className="label-form" htmlFor="name-project1">
                Nombre del proyecto
              </label>
              <input className="input-form main-value name-project1" id="name-project" type="text" name="name-project1" placeholder="Nombre del proyecto" required />
              <label className="label-form" htmlFor="company-project1">
                Empresa o proyecto personal
              </label>
              <input className="input-form company-project1" id="company-project" type="text" name="company-project" placeholder="Empresa o proyecto personal" required />
              <label htmlFor="month-project">
                Fecha de realización:
              </label>
              <div className="containter-data-project">
                <select className="input-form select-date" name="month-project">
                  <option className="option-form grey" disabled selected>Mes</option>
                  <option>Enero</option>
                  <option>Febrero</option>
                  <option>Marzo</option>
                  <option>Abril</option>
                  <option>Mayo</option>
                  <option>Junio</option>
                  <option>Julio</option>
                  <option>Agosto</option>
                  <option>Septiembre</option>
                  <option>Octubre</option>
                  <option>Noviembre</option>
                  <option>Diciembre</option>
                </select>
                <select className="input-form select-date" name="year-project" id="selectorYearSecond">
                  <option className="option-form" disabled selected>Año</option>
                </select>
              </div>
              <label htmlFor="description-project1">
                Descripción del proyecto :
              </label>
              <textarea className="input-form description-project1" name="description-project1" rows={8} cols={80} defaultValue={""} />
            </div>
          </div>
        </div>
      </fieldset>


      {/*   FIELDSET EXPERIENCIE   -------------*/}
      <fieldset className="fieldset-information fieldset-experience display-none">  {/* Anita Experiencia */}
        <legend className="title">Experiencia laboral</legend>
        <hr />
        <div>

        {/*   COLAPSABLE 1   -------------*/}
          <div id="firstExperienceBox">
            <div className="add-project caja-experiencia">
              <div className="addfield" data-id={4}>
                <a href="#" className="textadd">Añadir experiencia 1</a>
              </div>
              <div className="buttons-project-container ">
                <img className="buttons-project margin-right-buttons papelerados" src="img/trash.png" alt="Icono de papelera" data-id={0} />
                <img className="buttons-project margin-right-buttons arrowUpFirstExperience" src="img/arrowup.png" alt="Flecha hacia arriba" />
                <img className="buttons-project arrowDownFirstExperience" src="img/arrowdown.png" alt="Flecha hacia arriba" />
              </div>
            </div>

          {/*   FORMULARIO EXPERIENCIA  -------------*/}
            <div className="drop-down hidden">
              <label className="label-form" htmlFor="name-company">
                Empresa
              </label>
              <input className="input-form main-value name-company" id="company" type="text" name="company" placeholder="Empresa" required />
              <label className="label-form" htmlFor="name-position">
                Puesto de trabajo
              </label>
              <input className="input-form name-position" id="position" type="text" name="position" placeholder="Puesto de trabajo" required />
              <label htmlFor="date-start-experience">
                Fecha de inicio:
              </label>
              <input className="input-form date-start-experience" id="init-data-experience" type="date" name="date-start-experience'" required />
              <label htmlFor="date-end-experience">
                Fecha fin:
              </label>
              <input className="input-form date-end-experience" id="finish-data-experience" type="date" name="date-end-experience" required />
              <label htmlFor="description-experience">
                Descripción del puesto:
              </label>
              <textarea className="input-form description-experience" name="description-experience" rows={8} cols={80} defaultValue={"                      "} />
            </div>
          </div>

          {/*   COLAPSABLE 2   -------------*/}
          <div id="secondExperienceBox">
            <div className="add-project caja-experiencia">
              <div className="addfield" data-id={5}>
                <a href="#" className="textadd">Añadir experiencia 2</a>
              </div>
              <div className="buttons-project-container">
                <img className="buttons-project margin-right-buttons papelerados" src="img/trash.png" alt="Icono de papelera" data-id={1} />
                <img className="buttons-project margin-right-buttons arrowUpSecondExperience" src="img/arrowup.png" alt="Flecha hacia arriba" />
                <img className="buttons-project arrowDownSecondExperience" src="img/arrowdown.png" alt="Flecha hacia abajo" />
              </div>
            </div>

            {/*   FORMULARIO EXPERIENCIA  -------------*/}
            <div className="drop-down hidden">
              <label className="label-form" htmlFor="name-company1">
                Empresa
              </label>
              <input className="input-form main-value name-company1" id="company" type="text" name="name-company1" placeholder="Empresa" required />
              <label className="label-form" htmlFor="name-position1">
                Puesto de trabajo
              </label>
              <input className="input-form name-position1" id="position" type="text" name="name-position1" placeholder="Puesto de trabajo" required />
              <label htmlFor="date-start-experience1">
                Fecha de inicio:
              </label>
              <input className="input-form date-start-experience1" id="init-data-experience" type="date" name="init-data-experience" required />
              <label htmlFor="date-end-experience1">
                Fecha fin:
              </label>
              <input className="input-form date-end-experience1" id="finish-data-experience" type="date" name="finish-data-experience" required />
              <label htmlFor="description-experience1">
                Descripción del puesto:
              </label>
              <textarea className="input-form description-experience1" name="description-experience1" rows={8} cols={80} defaultValue={"                      "} />
            </div>
          </div>
        </div>
      </fieldset>
      </div>

    );
  }

}

export default FieldsetCollapse;
