import React from "react";
import "./style-sites.css";
const Sites = ({ dataEm, id }) => {
  const sites = dataEm.sites;
  const CollapseNum = (num, idd) => `#${idd}-${num}`;
  const CollapseCard = (num, idd) => `${idd}-${num}`;
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
                <p>
                  <strong>CUIT:</strong> {dataEm.contractor_code}
                </p>
              </li>
              {sites.map((sites, i) => (
                <li className="list-group-item" key={i}>
                  <div id="accordion">
                    <div class="card cardCollapse">
                      <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                          <button
                            class="btn btn-link"
                            data-toggle="collapse"
                            data-target={CollapseNum(i, id)}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Sitio {i + 1}
                          </button>
                        </h5>
                      </div>

                      <div
                        id={CollapseCard(i, id)}
                        class="collapse"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          <p>
                            <strong>Ubicación:</strong>{" "}
                            {dataEm.sites[i].location_name}
                          </p>
                          <p>
                            <strong>Descripcion:</strong>{" "}
                            {dataEm.sites[i].site_description}
                          </p>
                          <p>
                            <strong>Calle:</strong>{" "}
                            {dataEm.sites[i].street_address}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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