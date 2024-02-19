import { BsFileMusic } from "react-icons/bs";
import { SiSnapcraft } from "react-icons/si";
import { FaBus } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { MdTour } from "react-icons/md";
import { GiGroundbreaker } from "react-icons/gi";

const Facilites = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="container pb-3">
        <div className="row">
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="d-flex bg-light shadow-sm border-top rounded mb-4"
              style={{ padding: "30px" }}
            >
              <div className="h1 font-weight-normal text-main mb-3">
                <GiGroundbreaker />
              </div>
              <div className="pl-4">
                <h4>Play Ground</h4>
                <p className="m-0">
                  We believe learning should be as fun as playtime. Our
                  innovative approach combines structured education with
                  hands-on experiences, fostering creativity, curiosity, and a
                  love for learning.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="d-flex bg-light shadow-sm border-top rounded mb-4"
              style={{ padding: "30px" }}
            >
              <div className="h1 font-weight-normal text-main mb-3">
                <BsFileMusic />
              </div>
              {/* <i className="flaticon-022-drum h1 font-weight-normal text-primary mb-3"></i> */}
              <div className="pl-4">
                <h4>Personalized Education</h4>
                <p className="m-0">
                  We understand that every student is unique, with individual
                  strengths, interests, and learning styles. That's why we
                  prioritize personalized education to reach their full
                  potential.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="d-flex bg-light shadow-sm border-top rounded mb-4"
              style={{ padding: "30px" }}
            >
              <div className="h1 font-weight-normal text-main mb-3">
                <SiSnapcraft />
              </div>
              <div className="pl-4">
                <h4>Experienced Educators</h4>
                <p className="m-0">
                  Our school is proud to boast a team of highly qualified and
                  passionate educators who bring years of experience and
                  expertise to the classroom, ensuring enriching learning for
                  all students.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="d-flex bg-light shadow-sm border-top rounded mb-4"
              style={{ padding: "30px" }}
            >
              <div className="h1 font-weight-normal text-main mb-3">
                <FaBus />
              </div>
              <div className="pl-4">
                <h4>Safe Transportation</h4>
                <p className="m-0">
                  Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                  lorem amet elitr vero...
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="d-flex bg-light shadow-sm border-top rounded mb-4"
              style={{ padding: "30px" }}
            >
              <div className="h1 font-weight-normal text-main mb-3">
                <FaBowlFood />
              </div>
              <div className="pl-4">
                <h4>Healthy food</h4>
                <p className="m-0">
                  Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                  lorem amet elitr vero...
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-1">
            <div
              className="d-flex bg-light shadow-sm border-top rounded mb-4"
              style={{ padding: "30px" }}
            >
              <div className="h1 font-weight-normal text-main mb-3">
                <MdTour />
              </div>
              <div className="pl-4">
                <h4>Educational Tour</h4>
                <p className="m-0">
                  Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                  lorem amet elitr vero...
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Facilites;
