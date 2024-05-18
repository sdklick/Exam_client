import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EXDashboarddataView = () => {
  const [alldata, setalldata] = useState({});
  const [qn, setqn] = useState([]);
  const params = useParams();
  
  let idno = { dataid: params.id };

  const Updatedashboarddata = async () => {
    let result = await axios.post(
      "https://exam-server-4pe7.onrender.com/api/examinerupdatedata",
      idno
    );
    let { examsubject, examkey } = result.data;
    setalldata({ examsubject, examkey });
    setqn(result.data.question);
  };

  return (
    <>
      <div class="card text-center">
        <div class="card-header">
          <button className="btn" onClick={() => Updatedashboarddata()}>
            <i
              class="fa fa-eye"
              style={{ fontSize: "48px", color: "black" }}
            ></i>
          </button>
        </div>
        <div class="card-body">
          <div className="container mt-5 mb-5">
            <form>
              <div class="row">
                <div class="col">
                  <input
                    defaultValue={alldata.examsubject || ""}
                    type="text"
                    name="Examsubject"
                    class="form-control"
                    placeholder="Examsubject"
                  />
                </div>
                <div class="col">
                  <input
                    defaultValue={alldata.examkey || ""}
                    type="text"
                    name="Examkey"
                    class="form-control"
                    placeholder="Examkey"
                  />
                </div>
              </div>
              {qn.map((value, index) => {
                return (
                  <>
                    <div class="row mt-5">
                      <div class="col">
                        <input
                          defaultValue={value[`_${index + 1}q`] || ""}
                          type="text"
                          name={`_${index + 1}q`}
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="row mt-5">
                      <div class="col">
                        <input
                          defaultValue={value[`op1question${index + 1}`] || ""}
                          type="text"
                          name={`op1question${index + 1}`}
                          class="form-control"
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          name={`op2question${index + 1}`}
                          class="form-control"
                          defaultValue={value[`op2question${index + 1}`] || ""}
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          name={`op3question${index + 1}`}
                          class="form-control"
                          defaultValue={value[`op3question${index + 1}`] || ""}
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          name={`ansquestion${index + 1}`}
                          class="form-control"
                          defaultValue={value[`ansquestion${index + 1}`] || ""}
                        />
                      </div>
                    </div>
                  </>
                );
              })}

              <div class="d-grid gap-2 col-1 mx-auto">
                <NavLink to="/setquestion">
                  <button class="btn btn-success mt-4" type="submit">
                    <i
                      class="fas fa-angle-double-left"
                      style={{ fontSize: "24px" }}
                    ></i>
                  </button>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EXDashboarddataView;
