import React from "react";
import "./style-sites.css";
const Sites = ({ dataEm, id }) => {
  const sites = dataEm.sites;
  return (
    <>
      <div className="container-sites">
        <div className="card w-20">
          <div className="card-header card-header-site">
            <strong>{dataEm.contractor_name}</strong>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <p><strong>CUIT:</strong> {dataEm.contractor_code}</p>
              </li>
              {sites.map((sites, i) => (
                <li className="list-group-item" key={i}>
                <p><strong>- Sitio -</strong></p>
                <p><strong>Ubicación:</strong> {dataEm.sites[id].location_name}</p>
                <p><strong>Descripcion:</strong> {dataEm.sites[id].site_description}</p>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sites;
