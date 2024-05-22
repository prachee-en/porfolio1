
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/alsiam.png"
              alt="Al Siam Profile"
              className="shadow-dark"
            />
            <h1>Prachi Agarwal</h1>
            <p>Computer Science undergrad and a web developer</p>
            <div className="social-links">
              <a href="https://x.com/prachee_en?t=ew5AGN5AcXvyw6nuST8-_w&s=08" target="_blank">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://github.com/prachee-en" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.instagram.com/prachi_7340?igsh=cWtrc3Y1bmc4MzQx" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/prachi-agarwal-000378230/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
