import Modules from "../Modules";

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
      <div className="col-xl-3">
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

        <ul className="container wd-button-list">
          {shortcutLabels.map((label, index) => (
            <li key={index}>
              <a className="wd-btn" href="#">
                {shortcutIcons.at(index)}
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div>
          <div className="d-flex flex-row justify-content-between align-items-bottom">
            <h5 className="">Coming Up</h5>
            <a className="wd-coming-up-list d-flex gap-2" href="#">
              <i className="bi bi-calendar-event text-dark"></i>
              <div className="d-inline d-xl-none d-xxl-inline">
                View Calendar
              </div>
            </a>
          </div>
          <hr />

          <div className="d-flex wd-coming-up-list gap-2">
            <i className="bi bi-calendar-event"></i>
            <div className="">
              <a href="#">Lecture</a>
              <br />
              CS4500.12631.202410
              <br />
              Sep 7 at 11:45am
            </div>
          </div>
          <div className="d-flex wd-coming-up-list gap-2">
            <i className="bi bi-calendar-event"></i>
            <div className="">
              <a href="#">Lecture</a>
              <br />
              CS4550.12631.202410
              <br />
              Sep 11 at 11:45am
            </div>
          </div>
          <div className="d-flex wd-coming-up-list gap-2">
            <i className="bi bi-calendar-event"></i>
            <div className="">
              <a href="#">Lecture</a>
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
