function TopBar() {
  return (
    <div>
      <div class="d-flex d-lg-none">
        <div class="wd-top-bar wd-alternate-top d-flex align-items-center justify-content-between">
          <a href="/kanbas/KanbasNavigation/alternate-nav.html">
            <i class="bi bi-list wd-hamburger"></i>
          </a>
          <div class="text-light text-center">
            <h6>CS4550.19753.202410</h6>
            <small>Grades</small>
          </div>
          <div class="d-flex gap-2">
            <i class="text-light bi bi-eyeglasses wd-glasses"></i>
            {/* FIX THIS */}
            <a href="/kanbas/Courses/CourseNavigation/alternate-nav.html">
              <i class="bi bi-chevron-down text-light wd-glasses"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="d-none d-lg-inline">
        <div class="d-flex wd-top-bar justify-content-between">
          <div class="d-flex wd-top-bar border-0 p-0 m-0">
            <i class="bi bi-list wd-hamburger"></i>
            <nav
              class="wd-center"
              styles="--bs-breadcrumb-divider: '>';"
              aria-label="breadcrumb"
            >
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/kanbas/Courses/Home/index.html">
                    CS4550.19753.202410
                  </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Assignments
                </li>
              </ol>
            </nav>
          </div>

          <button class="btn btn-secondary">
            <i class="bi bi-eyeglasses"></i>
            Student View
          </button>
        </div>
      </div>
    </div>
  );
}
export default TopBar;
