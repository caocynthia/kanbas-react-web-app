import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/Kanbas/Account/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="d-flex flex-column col-4 gap-2">
      <h3>Sign up</h3>
      {error && <div>{error}</div>}
      <input
        className="wd-input"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({
            ...credentials,
            username: e.target.value,
          })
        }
      />
      <input
        className="wd-input"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({
            ...credentials,
            password: e.target.value,
          })
        }
      />
      <div>
        <button className="wd-btn" onClick={signup}>
          Sign up
        </button>
      </div>
    </div>
  );
}
export default Signup;
