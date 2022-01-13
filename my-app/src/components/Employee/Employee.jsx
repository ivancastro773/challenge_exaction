import React from "react";
import Sites from "../Sites/Sites";
import { useState } from "react";
const Employee = ({ dataEm }) => {
  const cant_sites = [1, 2, 3, 1];
  const [data, setData] = useState("");
  return (
    <>
      <div className="card w-50">
        <div className="card-header card-header-employee">{dataEm.employee_name}</div>
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

      {cant_sites == 0 ? (
        <h2>No posee sitios declarados.</h2>
      ) : (
        <h2>Los sitios declarados son:</h2>
      )}
      <div className="sites">
        {cant_sites.map((sites, i) => (
          <Sites key={i} dataEm={dataEm} />
        ))}
      </div>
    </>
  );
};
export default Employee;
