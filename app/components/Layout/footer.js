import Link from "next/link";

const Footer = () => {
  return (
    <div className="container-fluid bg-sec text-white mt-5 py-5 px-sm-3 px-md-5">
      <div className="row pt-5">
        <div className="col-lg-6 col-md-6 mb-5">
          <a
            href=""
            className="navbar-brand font-weight-bold text-main m-0 mb-4 p-0"
            style={{ fontSize: "40px", lineHeight: "40px" }}
          >
            <span className="text-white" style={{ whiteSpace: "normal" }}>
              Durga Model School Ludhiana
            </span>
          </a>
          <p>
            The school is preparing the students for P.S.E.B the examination
            that is recognised by the Govt. of India through an Act of the
            Parliament and the Councils appointed as once of the Indian
            examination bodies.
          </p>
          <div className="d-flex justify-content-start mt-4">
            <a
              className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
              style={{ width: "38px", height: "38px" }}
              href="#"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
              style={{ width: "38px", height: "38px" }}
              href="#"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
              style={{ width: "38px", height: "38px" }}
              href="#"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
              style={{ width: "38px", height: "38px" }}
              href="#"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h3 className="text-main mb-4">Get In Touch</h3>
          <div className="d-flex">
            <h4 className="fa fa-map-marker-alt text-main"></h4>
            <div className="pl-3">
              <h5 className="text-white">Address</h5>
              <p>New Shivpuri, Santokh Nagar, Ludhiana</p>
            </div>
          </div>
          <div className="d-flex">
            <h4 className="fa fa-envelope text-main"></h4>
            <div className="pl-3">
              <h5 className="text-white">Email</h5>
              <p>durgamodelschoolludhiana@gmail.com</p>
            </div>
          </div>
          <div className="d-flex">
            <h4 className="fa fa-phone-alt text-main"></h4>
            <div className="pl-3">
              <h5 className="text-white">Phone</h5>
              <p>99889-99217</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h3 className="text-main mb-4">Quick Links</h3>
          <div className="d-flex flex-column justify-content-start">
            <Link className="text-white mb-2" href="/">
              <i className="fa fa-angle-right mr-2"></i>Home
            </Link>
            <Link className="text-white mb-2" href="/about">
              <i className="fa fa-angle-right mr-2"></i>About Us
            </Link>
            <Link className="text-white" href="/contact">
              <i className="fa fa-angle-right mr-2"></i>Contact Us
            </Link>
          </div>
        </div>
        {/* <div className="col-lg-3 col-md-6 mb-5">
          <h3 className="text-main mb-4">Newsletter</h3>
          <form action="">
            <div className="form-group">
              <input
                type="text"
                className="form-control border-0 py-4"
                placeholder="Your Name"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control border-0 py-4"
                placeholder="Your Email"
                required="required"
              />
            </div>
            <div>
              <button
                className="btn btn-primary btn-block border-0 py-3 border-30"
                type="submit"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div> */}
      </div>
      <div
        className="container-fluid pt-5"
        style={{ borderTop: "1px solid rgba(23, 162, 184, 0.2)" }}
      >
        <p className="m-0 text-center text-white">
          &copy;
          <Link className="text-main font-weight-bold" href="/">
            Durga Model School Ludhiana
          </Link>
          . All Rights Reserved.
          {/* <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/}
        </p>
      </div>
    </div>
  );
};

export default Footer;
