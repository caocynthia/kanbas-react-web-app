import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account/account");
  };

  return (
    <div className="d-flex flex-column col-4 gap-2">
      <h3>Sign in</h3>
      <input
        className="wd-input"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        className="wd-input"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <div>
        <button className="wd-btn" onClick={signin}>
          Sign in
        </button>
      </div>
    </div>
  );
}
export default Signin;
