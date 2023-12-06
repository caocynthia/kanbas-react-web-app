import AccountNav from "./accountNav";
import Account from "../../users/account";
import Signin from "../../users/signin";
import Signup from "../../users/signup";
import UserTable from "../../users/table";
import { Routes, Route } from "react-router";

function AccountPage() {
  return (
    <>
      <div className="wd-top-bar">
        <h1>Account</h1>
      </div>

      <div className="d-flex flex-column gap-4">
        <AccountNav />
        <Routes>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="account" element={<Account />} />
          <Route path="admin/users" element={<UserTable />} />
          <Route path="account/:id" element={<Account />} />
        </Routes>
      </div>
    </>
  );
}
export default AccountPage;
