import type { NextPage } from "next";
import React from "react";

const Portfolio: NextPage = () => {
  return (
    <main>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Projects</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-info">
                  <h4>Project One</h4>
                  <p>This project involves building a responsive web design using HTML5, CSS3, and JavaScript. It features modern UI components and animations.</p>
                  <a href="https://github.com/yourusername/project-one" target="_blank" className="btn">GitHub Link</a>
                </div>
              </div>
            </div>
            {/* Portfolio Item End */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-info">
                  <h4>Project Two</h4>
                  <p>This project is a full-stack web application built with ReactJS and Node.js. It includes user authentication, a dynamic dashboard, and RESTful APIs.</p>
                  <a href="https://github.com/yourusername/project-two" target="_blank" className="btn">GitHub Link</a>
                </div>
              </div>
            </div>
            {/* Portfolio Item End */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-info">
                  <h4>Project Three</h4>
                  <p>This project showcases a static website designed for a local business. It focuses on responsive design, SEO optimization, and accessibility features.</p>
                  <a href="https://github.com/yourusername/project-three" target="_blank" className="btn">GitHub Link</a>
                </div>
              </div>
            </div>
            {/* Portfolio Item End */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-info">
                  <h4>Project Four</h4>
                  <p>This project is a personal blog created with a headless CMS and ReactJS. It supports markdown, dynamic content loading, and user comments.</p>
                  <a href="https://github.com/yourusername/project-four" target="_blank" className="btn">GitHub Link</a>
                </div>
              </div>
            </div>
            {/* Portfolio Item End */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
