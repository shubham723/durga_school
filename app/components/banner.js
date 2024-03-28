import Link from "next/link";

const Banner = () => {
  return (
    <div className="container-fluid bg-main px-0 px-md-5 mb-5">
      <div className="row align-items-center px-3 bannerImg">
        <div className="col-lg-6 cold-md-12 text-center text-lg-left bannerLeft">
          <h4 className="text-white mb-4 mt-5 mt-lg-0">Durga Model School Ludhiana</h4>
          <h1 className="display-3 font-weight-bold text-white">
            New Approach to Kids Education
          </h1>
          <p className="text-white mb-4">
            Durga Model School is located in new Shivpuri, Ludhiana. The
            school enrols children of 3+ in to Nursery. The school is affiliated
            with the Punjab School Education Board (PSEB), Mohali and
            prepares students for the Board’s All India Secondary School
            Examination.
          </p>
          <Link href="/about" className="btn btn-sec mt-1 py-3 px-5 border-30">
            Learn More
          </Link>
        </div>
        <div className="col-lg-6 col-md-12 text-center text-lg-right bannerRight">
          <img className="img-fluid mt-5" src="img/header.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
