import Modules from "../Modules";
import { Link } from "react-router-dom";

function Home() {
  const shortcutLabels = [
    "Import Existing",
    "Import Commons",
    "Choose Home Page",
    "View Course Stream",
    "New Announcement",
    "New Analytics",
    "View Course Notifications",
  ];
  const shortcutIcons = [
    <i className="bi bi-file-earmark-arrow-up"></i>,
    <i className="bi bi-arrow-right-circle"></i>,
    <i className="bi bi-bullseye"></i>,
    <i className="bi bi-bar-chart-line-fill"></i>,
    <i className="bi bi-megaphone"></i>,
    <i className="bi bi-bar-chart-line-fill"></i>,
    <i className="bi bi-bell"></i>,
  ];
  return (
    <div className="row gap-2">
      <div className="col">
        <Modules />
      </div>
      <div className="col-xl-3 d-flex flex-column gap-3">
        <div>
          <h5>Course Status</h5>
          <div className="btn-group pb-2">
            <button type="button" className="btn btn-light">
              <i className="bi bi-check-circle-fill bi-x-circle"></i>
              Unpublish
            </button>
            <button type="button" className="btn text-light btn-success">
              <i className="bi bi-check-circle-fill text-success text-light"></i>
              Published
            </button>
          </div>
        </div>

        <div className="container d-flex flex-column gap-1">
          {shortcutLabels.map((label, index) => (
            <button key={index} className="wd-btn w-100">
              {shortcutIcons.at(index)}
              {label}
            </button>
          ))}
        </div>

        <div>
          <div className="d-flex flex-row justify-content-between align-items-end-center">
            <h5 className="m-0">Coming Up</h5>
            <Link className="wd-coming-up-list d-flex gap-2" to={{}}>
              <i className="bi bi-calendar-event text-dark"></i>
              <div className="d-inline d-xl-none d-xxl-inline">
                View Calendar
              </div>
            </Link>
          </div>
          <hr />

          <div className="d-flex wd-coming-up-list gap-2">
            <i className="bi bi-calendar-event"></i>
            <div className="">
              <Link to={{}}>Lecture</Link>
              <br />
              CS4500.12631.202410
              <br />
              Sep 7 at 11:45am
            </div>
          </div>
          <div className="d-flex wd-coming-up-list gap-2">
            <i className="bi bi-calendar-event"></i>
            <div className="">
              <Link to={{}}>Lecture</Link>
              <br />
              CS4550.12631.202410
              <br />
              Sep 11 at 11:45am
            </div>
          </div>
          <div className="d-flex wd-coming-up-list gap-2">
            <i className="bi bi-calendar-event"></i>
            <div className="">
              <Link to={{}}>Lecture</Link>
              <br />
              CS5410 06 SP23
              <br />
              Sep 11 at 6pm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
