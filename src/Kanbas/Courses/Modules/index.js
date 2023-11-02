import ModuleList from "./ModuleList";

function Modules() {
  return (
    <div className="">
      <div className="d-flex justify-content-end gap-1 pb-3">
        <button type="button" className="wd-btn">
          Collapse All
        </button>
        <button type="button" className="wd-btn">
          View Progress
        </button>
        <span className="dropdown wd-btn">
          <a
            className="dropdown-toggle"
            href="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Publish All
          </a>

          <ul className="dropdown-menu wd-btn">
            <li>
              <a className="dropdown-item" href="/">
                Publish All
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Option 2
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Option 3
              </a>
            </li>
          </ul>
        </span>
        <button type="button" className="wd-btn wd-btn-red">
          <i className="bi bi-plus-lg"></i>
          Module
        </button>
        <span className="dropdown">
          <a
            className="wd-btn"
            href="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-three-dots-vertical"></i>
          </a>

          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/">
                Dropdown
              </a>
            </li>
          </ul>
        </span>
      </div>

      <hr />
      <ModuleList />
    </div>
  );
}
export default Modules;
