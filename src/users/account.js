import * as client from "./client";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate, Link } from "react-router-dom";

function Account() {
  const [account, setAccount] = useState(null);
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const navigate = useNavigate();
  const { id } = useParams();

  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, [id]);

  const save = async () => {
    await client.updateUser(account);
  };

  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/signin");
  };

  return (
    <div className="d-flex flex-column col-4 gap-2">
      <h3>Account</h3>
      {account && (
        <div>
          <div className="d-flex flex-column gap-2">
            <input
              className="wd-input"
              value={account.password}
              onChange={(e) =>
                setAccount({ ...account, password: e.target.value })
              }
              placeholder="Password"
            />
            <input
              className="wd-input"
              value={account.firstName}
              onChange={(e) =>
                setAccount({ ...account, firstName: e.target.value })
              }
              placeholder="First name"
            />
            <input
              className="wd-input"
              value={account.lastName}
              onChange={(e) =>
                setAccount({ ...account, lastName: e.target.value })
              }
              placeholder="Last name"
            />
            <input
              className="wd-input"
              value={account.dob}
              onChange={(e) => setAccount({ ...account, dob: e.target.value })}
              placeholder="Date of birth"
            />
            <input
              className="wd-input"
              value={account.email}
              onChange={(e) =>
                setAccount({ ...account, email: e.target.value })
              }
              placeholder="Email"
            />
            <select
              className="wd-input"
              onChange={(e) => setAccount({ ...account, role: e.target.value })}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select>
          </div>
          <div className="d-flex flex-column gap-4">
            <div className="d-flex gap-2 mt-2">
              <button className="wd-btn wd-btn-red" onClick={save}>
                Save
              </button>
              <button className="wd-btn" onClick={signout}>
                Signout
              </button>
            </div>
            <Link
              to="/Kanbas/Account/admin/users"
              className="btn btn-warning w-100"
            >
              Users
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default Account;
