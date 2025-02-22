import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>I am Prachi Agarwal</h2>
                  <p>
                    Hi! My name is Prachi Agarwal. I am a computer science undergraduate, passionate and dedicated to my work. With one year of experience as a web developer, I have acquired the skills and knowledge necessary to make your project a success. I specialize in front-end development and enjoy creating visually appealing and user-friendly websites. Additionally, I am actively involved in competitive coding, which sharpens my problem-solving abilities and keeps me updated with the latest programming trends. I enjoy every step of the design process, from initial discussions and collaboration to final implementation.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>prachiagarwal2002july@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>B.Tech</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+91 7007574696</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Greater Noida</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Internship : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/docs/resume.pdf"
                        target="_blank"
                        className="btn"
                      >
                        Download CV
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>HTML5</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>CSS3</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>TypeScript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "50%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>ReactJS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2021 to Present
                          </h6>
                          <h4 className="timeline-title">
                            B.Tech in Computer Science
                          </h4>
                          <p className="timeline-text">
                            Pursuing my B.Tech in Computer Science from GL Bajaj Institute of Technology and Management, Greater Noida, with a current SGPA of 7.7.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019 to 2021
                          </h6>
                          <h4 className="timeline-title">
                            Higher Secondary Education
                          </h4>
                          <p className="timeline-text">
                            Completed my higher secondary education from City Montessori School with a score of 92%.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019
                          </h6>
                          <h4 className="timeline-title">
                            High School
                          </h4>
                          <p className="timeline-text">
                            Completed high school from St. Fidelis College, Lucknow, with a score of 93%.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
