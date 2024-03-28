import { useEffect, useRef, useState } from "react";

const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(divRef.current);
        }
      },
      {
        threshold: 1, // Adjust this value based on when you want the animation to trigger
      }
    );

    observer.observe(divRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container-fluid py-5">
      <div className="container" ref={divRef}>
        <div className="row align-items-center" style={{ display: isVisible ? "flex" : "none" }}>
          <div className={`col-lg-5 ${isVisible && 'introLeft'}`}>
            <img
              className="img-fluid rounded mb-5 mb-lg-0"
              src="/img/student-2.jpeg"
              alt=""
            />
          </div>
          <div className={`col-lg-7 ${isVisible && 'introRight'}`}>
            <p className="section-title pr-5">
              <span className="pr-2">Learn About Us</span>
            </p>
            <h1 className="mb-4">Best School For Your Kids</h1>
            <p>
              Aim of education should be to facilitate learning by crafting
              learning experiences which brings out the unique potentials of an
              individual. This one can do only if learning experiences one
              creates are varied and focussed on different Domains of learning,
              growth and development.
            </p>
            <div className="row pt-2 pb-4">
              <div className="col-6 col-md-4">
                <img
                  className="img-fluid rounded"
                  src="/img/student-3.jpeg"
                  alt=""
                />
              </div>
              <div className="col-6 col-md-8">
                <ul className="list-inline m-0">
                  <li className="py-2 border-top border-bottom">
                    <i className="fa fa-check text-primary mr-3"></i>
                    Discover our school's rich history, values, and commitment to academic excellence.
                  </li>
                  <li className="py-2 border-bottom">
                    <i className="fa fa-check text-primary mr-3"></i>
                    Explore our diverse curriculum, extracurricular activities, and specialized programs tailored to student success.
                  </li>
                  <li className="py-2 border-bottom">
                    <i className="fa fa-check text-primary mr-3"></i>
                    Meet our dedicated team of educators and staff members, passionate about nurturing student potential.
                  </li>
                </ul>
              </div>
            </div>
            <a href="" className="btn btn-primary mt-2 py-2 px-4 border-30">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
