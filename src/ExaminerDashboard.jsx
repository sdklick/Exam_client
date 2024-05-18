import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ExaminerDashboard = () => {
  const [dashboard, setdashboard] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    dashboarddata();
  }, []);
  const dashboarddata = async () => {
    let dataall = await axios.get(
      "https://exam-server-4pe7.onrender.com/api/examinerDashboard"
    );
    setdashboard(dataall.data);
  };

  const deletequestionset = async (setid) => {
    let dataall = await axios.post(
      "https://exam-server-4pe7.onrender.com/api/examinerdatadelete",
      { dataid: setid }
    );
    console.log(dataall);
  };

  const Logout = () => {
    let surelogout = confirm("Are You Sure Logout");
    if (surelogout) {
      localStorage.clear();
      window.location.reload(false);
      setlogin(false);
    }
  };

  return (
    <>
      <div className="card text-center">
        <div className="card-header">
          Examiner DashBoard
          <button onClick={Logout} className="btn btn-danger col-1 float-end">Logout</button>
        </div>
        <div className="card-body">
          {dashboard.map((value, index) => {
            return (
              <div className="table-responsive" key={index}>
                <table className="table">
                  <thead>
                    <tr className="table-primary">
                      <th>ExamSubject</th>
                      <th>Examkey</th>
                      <th>Settime</th>
                      <th>SetDate</th>
                      <th>AllView</th>

                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="table-success">
                      <td>
                        <p>{value.examsubject}</p>
                      </td>
                      <td>
                        <p>{value.examkey}</p>
                      </td>
                      <td>
                        <p>{value.settime}</p>
                      </td>
                      <td>
                        <p>{value.setdate}</p>
                      </td>
                      <td>
                        <NavLink to={`/updatequestion/${value._id}`}>
                          <button className="btn btn-primary">View</button>
                        </NavLink>
                      </td>
                      <td>
                        <button
                          className="btn"
                          onClick={() => {
                            deletequestionset(value._id);
                            location.reload();
                          }}
                        >
                          <i className="fa fa-trash-o"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ExaminerDashboard;
