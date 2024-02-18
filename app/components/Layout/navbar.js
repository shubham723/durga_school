import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid bg-light position-relative shadow">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
          <Link
            href="/"
            className="navbar-brand font-weight-bold text-secondary logo"
          >
            <i className="flaticon-043-teddy-bear"></i>
            <span className="text-main">Durga Model School</span>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav font-weight-bold mx-auto py-0">
              <Link href="/" className="nav-item nav-link active">
                Home
              </Link>
              <Link href="/about" className="nav-item nav-link">
                About
              </Link>
              {/* <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu rounded-0 m-0">
                  <a href="blog.html" className="dropdown-item">
                    Blog Grid
                  </a>
                  <a href="single.html" className="dropdown-item">
                    Blog Detail
                  </a>
                </div>
              </div> */}
              <Link href="/contact" className="nav-item nav-link">
                Contact
              </Link>
            </div>
            <a href="" className="btn btn-primary px-4 border-30">
              Join Class
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
