import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./userContext";

export default function Users() {
  const userContext = useContext(UserContext);
  let handleDelete = index => {
    let confirm = window.confirm("Do you want to delete?");
    if (confirm) {
      userContext.userList.splice(index - 1, 1);
      userContext.setUserList([...userContext.userList]);
    }
  };
  
  return (
    <>
      <h1 className="h3 mb-2 text-gray-800">Users</h1>
      <Link
        to="/create-user"
        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
      >
        <i className="text-white-50"></i> Add User
      </Link>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {userContext.userList.length > 0 ? (
                  userContext.userList.map((obj, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{obj.userName}</td>
                        <td>{obj.position}</td>
                        <td>{obj.office}</td>
                        <td>{obj.age}</td>
                        <td>{obj.startDate}</td>
                        <td>{obj.salary}</td>
                        <td>
                          <Link
                            to={`/users/edit/${index + 1}`}
                            className="btn btn-sm btn-primary"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => {
                              handleDelete(index + 1);
                            }}
                            className="btn btn-sm btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td>No Users</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}


