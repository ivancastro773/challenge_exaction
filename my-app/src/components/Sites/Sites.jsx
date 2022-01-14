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
/* 
<p><strong>- Sitio -</strong></p>
                <p><strong>Ubicación:</strong> {dataEm.sites[id].location_name}</p>
                <p><strong>Descripcion:</strong> {dataEm.sites[id].site_description}</p> */

{
  /* <div id="accordion">
  <div class="card cardCollapse">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div> */
}
