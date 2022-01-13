import React from "react";
import './style-sites.css';
const Sites = ({ dataEm }) => {
  return (
    <>
      <div className="container-sites">
        <div className="card">
          <div className="card-header card-header-site">{dataEm.employee_name}</div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <p>CUIL: {dataEm.employee_code}</p>
              </li>
              <li className="list-group-item">
                <p>Contratista</p>
                <p>CUIT: {dataEm.contractor_code}</p>
                <p>Razon Social: {dataEm.contractor_name}</p>
              </li>
              <li className="list-group-item">
                <p>Tareas</p>
                <p>{dataEm.total_declaration_sites}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sites;
