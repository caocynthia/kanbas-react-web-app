import ModuleList from "../Modules/ModuleList";

function Home() {
  return (
    <div className="row gap-2">
      {/* <h2>Home</h2> */}
      <div className="col">
        <ModuleList />
      </div>
      <div class="col-xl-3">
        <h5>Course Status</h5>
        <div class="btn-group pb-2">
          <button type="button" class="wd-btn">
            <i class="bi bi-check-circle-fill bi-x-circle"></i>
            Unpublish
          </button>
          <button type="button" class="btn text-light btn-success">
            <i class="bi bi-check-circle-fill text-success text-light"></i>
            Published
          </button>
        </div>

        <ul class="container wd-button-list">
          <li>
            <a class="wd-btn" href="#">
              <i class="bi bi-file-earmark-arrow-up"></i>
              Import Existing
            </a>
          </li>
          <li>
            <a class="wd-btn" href="#">
              <i class="bi bi-arrow-right-circle"></i>
              Import Commons
            </a>
          </li>
          <li>
            <a class="wd-btn" href="#">
              <i class="bi bi-bullseye"></i>
              Choose Home Page
            </a>
          </li>
          <li>
            <a class="wd-btn" href="#">
              <i class="bi bi-bar-chart-line-fill"></i>
              View Course Stream
            </a>
          </li>
          <li>
            <a class="wd-btn" href="#">
              <i class="bi bi-megaphone"></i>
              New Announcement
            </a>
          </li>
          <li>
            <a class="wd-btn" href="#">
              <i class="bi bi-bar-chart-line-fill"></i>
              New Analytics
            </a>
          </li>
          <li>
            <a class="wd-btn" href="#">
              <i class="bi bi-bell"></i>
              View Course Notifications
            </a>
          </li>
        </ul>

        <div>
          <div class="d-flex flex-row justify-content-between align-items-center">
            <h5 class="d-inline m-0">Coming Up</h5>
            <a class="wd-coming-up-list" href="#">
              <i class="bi bi-calendar-event text-dark"></i>
              <div class="d-inline d-xl-none d-xxl-inline">View Calendar</div>
            </a>
          </div>

          <hr />
          <ul class="wd-coming-up-list">
            <li>
              <a href="#">Lecture</a>
              <br />
              CS4500.12631.202410
              <br />
              Sep 7 at 11:45am
            </li>
            <li>
              <a href="#">Lecture</a>
              <br />
              CS4550.12631.202410
              <br />
              Sep 11 at 11:45am
            </li>
            <li>
              <a href="#">Lecture</a>
              <br />
              CS5410 06 SP23
              <br />
              Sep 11 at 6pm
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Home;
