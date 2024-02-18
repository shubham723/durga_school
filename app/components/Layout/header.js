import Link from "next/link";

const Header = ({ title }) => {
  return (
    <div className="container-fluid bg-main mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "400px" }}
        >
          <h3 className="display-3 font-weight-bold text-white">{title}</h3>
          <div className="d-inline-flex text-white">
            <p className="m-0">
              <Link className="text-white" href="/">
                Home
              </Link>
            </p>
            <p className="m-0 px-2">/</p>
            <p className="m-0">{title}</p>
          </div>
        </div>
      </div>
  )
};

export default Header;
