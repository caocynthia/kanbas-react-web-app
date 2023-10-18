import { Link, useParams, useLocation } from "react-router-dom";

function TopBar() {
  return (
    <div>
      <div className="d-none d-lg-flex wd-top-bar align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-list wd-hamburger"></i>
          <nav
            className="wd-center"
            styles="--bs-breadcrumb-divider: '>';"
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/kanbas/Courses/Home/index.html">
                  CS4550.19753.202410
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Assignments
              </li>
            </ol>
          </nav>
        </div>

        <button className="wd-btn">
          <i className="bi bi-eyeglasses"></i>
          Student View
        </button>
      </div>
      <div className="d-flex d-lg-none">
        <div className="wd-top-bar wd-alternate-top d-flex align-items-center justify-content-between">
          <a href="/kanbas/KanbasNavigation/alternate-nav.html">
            <i className="bi bi-list wd-hamburger"></i>
          </a>
          <div className="text-light text-center">
            <h6>CS4550.19753.202410</h6>
            <small>Grades</small>
          </div>
          <div className="d-flex gap-2">
            <i className="text-light bi bi-eyeglasses wd-glasses"></i>
            {/* FIX THIS */}
            <a href="/kanbas/Courses/CourseNavigation/alternate-nav.html">
              <i className="bi bi-chevron-down text-light wd-glasses"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopBar;
