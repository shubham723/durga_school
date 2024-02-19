"use client"
import Link from "next/link";
import Footer from "./Layout/footer";
import Navbar from "./Layout/navbar";
import Banner from "./banner";
import Facilites from "./facilites";
import Introduction from "./introduction";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";
import axios from "axios";

const Homepage = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.post("/api/contact", data);
      toast.success("Message sent! We'll be in touch shortly.");
      reset();
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Banner />
      <Facilites />
      <Introduction />

      {/* class */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5">
              <span className="px-2">Empowering Excellence</span>
            </p>
            <h1 className="mb-4"> Welcome to Our Dynamic Learning Community</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-5">
              <div className="card border-0 bg-light shadow-sm pb-2">
                <img
                  className="card-img-top mb-2"
                  src="/img/student-7.jpeg"
                  alt=""
                />
                <div className="card-body text-center">
                  <h4 className="card-title">Durga Model School</h4>
                  <p className="card-text">
                    Durga Model School, situated in New Shivpuri, Ludhiana,
                    offers nursery education to children aged 3 and above.
                    Affiliated with the Punjab School Education Board (PSEB),
                    Mohali, it diligently prepares students for the Board's All
                    India Secondary School Examination, ensuring comprehensive
                    academic development.With a diverse curriculum, experienced
                    educators, and a supportive environment, we inspire students
                    to become lifelong learners and responsible global citizens.
                    Join us today by clicking below.
                  </p>
                </div>
                {/* <div className="card-footer bg-transparent py-4 px-5">
                  <div className="row border-bottom">
                    <div className="col-6 py-1 text-right border-right">
                      <strong>Age of Kids</strong>
                    </div>
                    <div className="col-6 py-1">3 - 6 Years</div>
                  </div>
                  <div className="row border-bottom">
                    <div className="col-6 py-1 text-right border-right">
                      <strong>Total Seats</strong>
                    </div>
                    <div className="col-6 py-1">40 Seats</div>
                  </div>
                  <div className="row border-bottom">
                    <div className="col-6 py-1 text-right border-right">
                      <strong>className Time</strong>
                    </div>
                    <div className="col-6 py-1">08:00 - 10:00</div>
                  </div>
                  <div className="row">
                    <div className="col-6 py-1 text-right border-right">
                      <strong>Tution Fee</strong>
                    </div>
                    <div className="col-6 py-1">$290 / Month</div>
                  </div>
                </div> */}
                <Link
                  href="/about"
                  className="btn btn-primary px-4 mx-auto mb-4 border-30"
                >
                  Join Now
                </Link>
              </div>
            </div>

            <div className="col-lg-4 mb-5">
              <div className="card border-0 bg-light shadow-sm pb-2">
                <img
                  className="card-img-top mb-2"
                  src="/img/student-9.jpeg"
                  alt=""
                />
                <div className="card-body text-center">
                  <h4 className="card-title">Mentorship and Guidance</h4>
                  <p className="card-text">
                    Our school fosters a culture of mentorship and guidance,
                    where experienced educators provide personalized support and
                    encouragement to students. Through one-on-one interactions
                    and group sessions, students receive valuable advice that
                    navigate there personal growth. Our mentors serve as role
                    models, inspiring students to reach their full potential and
                    develop essential life skills. By fostering strong
                    relationships and open communication, we empower students to
                    succeed academically and thrive in all aspects of their
                    lives.
                  </p>
                </div>
                {/* <div className="card-footer bg-transparent py-4 px-5">
                  <div className="row border-bottom">
                    <div className="col-6 py-1 text-right border-right">
                      <strong>Age of Kids</strong>
                    </div>
                    <div className="col-6 py-1">3 - 6 Years</div>
                  </div>
                  <div className="row border-bottom">
                    <div className="col-6 py-1 text-right border-right">
                      <strong>Total Seats</strong>
                    </div>
                    <div className="col-6 py-1">40 Seats</div>
                  </div>
                  <div className="row border-bottom">
                    <div className="col-6 py-1 text-right border-right">
                      <strong>className Time</strong>
                    </div>
                    <div className="col-6 py-1">08:00 - 10:00</div>
                  </div>
                  <div className="row">
                    <div className="col-6 py-1 text-right border-right">
                      <strong>Tution Fee</strong>
                    </div>
                    <div className="col-6 py-1">$290 / Month</div>
                  </div>
                </div> */}
                <Link
                  href="/about"
                  className="btn btn-primary px-4 mx-auto mb-4 border-30"
                >
                  Join Now
                </Link>
              </div>
            </div>

            <div className="col-lg-4 mb-5">
              <div className="card border-0 bg-light shadow-sm pb-2">
                <img
                  className="card-img-top mb-2"
                  src="/img/student-8.jpeg"
                  alt=""
                />
                <div className="card-body text-center">
                  <h4 className="card-title">P.S.E.B Board</h4>
                  <p className="card-text">
                    The Punjab School Education Board (PSEB) is a state-level
                    educational board in Punjab, India, responsible for
                    governing and regulating the curriculum and examinations for
                    public schools. Established in 1969, PSEB aims to promote
                    quality education and academic excellence across primary,
                    secondary, and higher secondary levels. With its
                    headquarters in Mohali, PSEB oversees the development of
                    syllabi, textbooks, and conducts annual board examinations
                    for millions sof students enrolled in affiliated schools.
                  </p>
                </div>
                <Link
                  href="/about"
                  className="btn btn-primary px-4 mx-auto mb-4 border-30"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <p className="section-title pr-5">
                <span className="pr-2">Book A Seat</span>
              </p>
              <h1 className="mb-4">Book A Seat For Your Kid</h1>
              <p>
                Reserve a place for your child in our dynamic learning
                environment, where they can thrive and grow academically,
                socially, and personally.
              </p>
              <ul className="list-inline m-0">
                <li className="py-2">
                  <i className="fa fa-check text-success mr-3"></i>Reserve your
                  child's spot hassle-free through our streamlined enrollment
                  process.
                </li>
                <li className="py-2">
                  <i className="fa fa-check text-success mr-3"></i>Benefit from
                  our team of experienced educators dedicated to providing
                  quality education and support.
                </li>
                <li className="py-2">
                  <i className="fa fa-check text-success mr-3"></i> Experience
                  tailored learning programs designed to meet each student's
                  unique needs and interests.
                </li>
              </ul>
              <a href="" className="btn btn-primary mt-4 py-2 px-4 border-30">
                Book Now
              </a>
            </div>
            <div className="col-lg-5">
              <div className="card border-0">
                <div className="card-header bg-sec text-center p-4">
                  <h1 className="text-white m-0">Book A Seat</h1>
                </div>
                <div className="card-body rounded-bottom bg-main p-5">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control border-0 p-4"
                        placeholder="Your Name"
                        name="name"
                        id="name"
                        {...register("name", {
                          required: "Name is required",
                        })}
                      />
                      {errors.name && (
                        <span className="error">{errors.name.message}</span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control border-0 p-4"
                        placeholder="Your Email"
                        required="required"
                        name="email"
                        id="email"
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                      {errors.email && (
                        <span className="error">{errors.email.message}</span>
                      )}
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="number"
                        className="form-control border-0 p-4"
                        placeholder="Your Mobile Number"
                        required="required"
                        min={0}
                        name="mobileNumber"
                        id="mobileNumber"
                        {...register("mobileNumber", {
                          required: "Mobile Number is required",
                        })}
                      />
                      {errors.mobileNumber && (
                        <span className="error">
                          {errors.mobileNumber.message}
                        </span>
                      )}
                    </div>
                    <div>
                      <button
                        className="btn btn-sec btn-block border-0 py-3 border-30"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? <Spinner animation="grow" /> : "Book Now"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Homepage;
