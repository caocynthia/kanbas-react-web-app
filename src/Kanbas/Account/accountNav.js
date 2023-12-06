import { useLocation, Link } from "react-router-dom";

function AccountNav() {
  const { pathname } = useLocation();
  return (
    <div className="d-flex gap-2">
      <Link
        to="/Kanbas/Account/signin"
        className={
          pathname.includes("signin")
            ? "wd-btn wd-btn-red"
            : "wd-btn text-decoration-none"
        }
      >
        Sign in
      </Link>
      <Link
        to="/Kanbas/Account/signup"
        className={
          pathname.includes("signup")
            ? "wd-btn wd-btn-red"
            : "wd-btn text-decoration-none"
        }
      >
        Sign up
      </Link>
      <Link
        to="/Kanbas/Account/account"
        className={
          pathname.includes("account")
            ? "wd-btn wd-btn-red"
            : "wd-btn text-decoration-none"
        }
      >
        Account
      </Link>
    </div>
  );
}

export default AccountNav;
