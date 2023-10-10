function TopBar() {
  return (
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
          <a href="/kanbas/Courses/CourseNavigation/alternate-nav.html">
            <i class="bi bi-chevron-down text-light wd-glasses"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default TopBar;
