import React, { useState,useEffect } from "react";
import Sites from "../Sites/Sites";

const Employee = ({ dataEm }) => {
  const cant_sites = dataEm.declaration_sites;

  const colorStatus =()=>{
    var x = document.getElementById("headerStatus");
    if (dataEm.status == 0) {
      x.classList.add('card-header-employee-0');
    }if (dataEm.status==1) {
      x.classList.add('card-header-employee-1');
    }else{
      x.classList.add('card-header-employee-2')
    }
  }
  useEffect(() => {
    colorStatus();
  });
  return (
    <>
      <div className="card w-50">
        {colorStatus}
        <div id="headerStatus" className="card-header">
          <strong>{dataEm.employee_name}</strong>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <p>
                <strong>CUIL:</strong> {dataEm.employee_code}
              </p>
            </li>
            <li className="list-group-item">
              <p>
                <strong>Contratista</strong>
              </p>
              <p>
                <strong>CUIT:</strong> {dataEm.contractor_code}
              </p>
              <p>
                <strong>Razon Social:</strong> {dataEm.contractor_name}
              </p>
            </li>
            <li className="list-group-item">
              <p>
                <strong>Tareas</strong>
              </p>
              <p>{dataEm.tasks}</p>
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
          <Sites key={i} id={i} dataEm={cant_sites[i]} />
        ))}
      </div>
    </>
  );
};
export default Employee;
{
  /* <p key={i}>{cantidad[i].contractor_name}</p> */
}
/* const cant_sites = [
  {
    contractor_name: "LOTOI S.A.",
    contractor_code: "30-71587045-9",
    sites: [
      {
        site_description: "CALL CENTER PERSONAL PLAZA",
        street_address: "AV COLON 4450",
        location_name: "Cordoba ",
      },
      {
        site_description: "BALNEARIO MAR DEL PLATA_WI-FI",
        street_address: "PASEO VICTORIA OCAMPO S/N° (d)",
        location_name: "Mar Del Plata",
      },
    ],
  },
  {
    contractor_name: "PEPE S.A.",
    contractor_code: "30-71587045-9",
    sites: [
      {
        site_description: "CALL CENTER PERSONAL PLAZA",
        street_address: "AV COLON 4450",
        location_name: "Cordoba ",
      },
      {
        site_description: "BALNEARIO MAR DEL PLATA_WI-FI",
        street_address: "PASEO VICTORIA OCAMPO S/N° (d)",
        location_name: "Mar Del Plata",
      },
    ],
  },
]; */