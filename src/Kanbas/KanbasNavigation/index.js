import { Link, useLocation } from "react-router-dom";
import "../index.css";
import Logo from "./logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";

function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];
  const icons = [
    <i id="wd-account" class="bi bi-person-circle"></i>,
    <i class="bi bi-speedometer2"></i>,
    <i class="bi bi-journals"></i>,
    <i class="bi bi-calendar2-week"></i>,
    <i class="bi bi-inbox"></i>,
    <i class="bi bi-clock"></i>,
    <i class="bi bi-play-btn"></i>,
    <i class="bi bi-arrow-right-circle"></i>,
    <i class="bi bi-question-circle"></i>,
  ];

  const { pathname } = useLocation();
  return (
    <div className="wd-kanbas-nav d-flex flex-column">
      <img className="wd-logo" src={Logo} alt="Northeastern University logo" />
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={` ${pathname.includes(link) && "active"}`}
        >
          {icons.at(index)} <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
