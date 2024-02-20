"use client";
import Footer from "../components/Layout/footer";
import Navbar from "../components/Layout/navbar";
import Header from "../components/Layout/header";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";
import axios from "axios";

const Contact = () => {
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
    <div>
      <Navbar />
      <Header title={"Contact Us"} />

      {/* Contact */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5">
              <span className="px-2">Get In Touch</span>
            </p>
            <h1 className="mb-4">Contact Us For Any Query</h1>
          </div>
          <div className="row">
            <div className="col-lg-7 mb-5">
              <div className="contact-form">
                <div id="success"></div>
                <form
                  name="sentMessage"
                  id="contactForm"
                  novalidate="novalidate"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="control-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      // data-validation-required-message="Please enter your name"
                      {...register("name", {
                        required: "Name is required",
                      })}
                    />
                    {errors.name && (
                      <span className="error">{errors.name.message}</span>
                    )}
                  </div>
                  <div className="control-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      data-validation-required-message="Please enter your email"
                      {...register("email", {
                        required: "Email is required",
                      })}
                    />
                    {errors.email && (
                      <p className="help-block text-danger">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="control-group mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="mobileNumber"
                      name="mobileNumber"
                      placeholder="Mobile Number"
                      data-validation-required-message="Please enter your mobile number"
                      {...register("mobileNumber", {
                        required: "Mobile Number is required",
                      })}
                    />
                    {errors.mobileNumber && (
                      <p className="help-block text-danger">
                        {errors.mobileNumber.message}
                      </p>
                    )}
                  </div>
                  <div className="control-group mb-2">
                    <textarea
                      className="form-control"
                      rows="6"
                      id="message"
                      name="message"
                      placeholder="Message"
                      data-validation-required-message="Please enter your message"
                      {...register("message", {
                        required: "Message is required",
                      })}
                    ></textarea>
                    {errors.message && (
                      <p className="help-block text-danger">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <button
                      className="btn btn-primary py-2 px-4 border-30"
                      type="submit"
                      id="sendMessageButton"
                      disabled={loading}
                    >
                      {loading ? <Spinner animation="grow" /> : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 mb-5">
              <p>
                Reserve a place for your child in our dynamic learning
                environment, where they can thrive and grow academically,
                socially, and personally.
              </p>
              <div className="d-flex">
                <i
                  className="fa fa-map-marker-alt d-inline-flex align-items-center justify-content-center bg-main text-sec rounded-circle"
                  style={{ width: "45px", height: "45px" }}
                ></i>
                <div className="pl-3">
                  <h5>Address</h5>
                  <p>Guru Ramdas Nagar, Tajpur Road, Ludhiana</p>
                </div>
              </div>
              <div className="d-flex">
                <div>
                <i
                  className="fa fa-envelope d-inline-flex align-items-center justify-content-center bg-main text-secondary rounded-circle"
                  style={{ width: "45px", height: "45px" }}
                ></i>

                </div>
                <div className="pl-3">
                  <h5>Email</h5>
                  <p>durgamodelschoolludhiana@gmail.com</p>
                </div>
              </div>
              <div className="d-flex">
                <i
                  className="fa fa-phone-alt d-inline-flex align-items-center justify-content-center bg-main text-secondary rounded-circle"
                  style={{ width: "45px", height: "45px" }}
                ></i>
                <div className="pl-3">
                  <h5>Phone</h5>
                  <p>+91 9988999217, +91 9988999218</p>
                </div>
              </div>
              <div className="d-flex">
                <i
                  className="far fa-clock d-inline-flex align-items-center justify-content-center bg-main text-secondary rounded-circle"
                  style={{ width: "45px", height: "45px" }}
                ></i>
                <div className="pl-3">
                  <h5>Opening Hours</h5>
                  <strong>Sunday - Friday:</strong>
                  <p className="m-0">08:00 AM - 05:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
