import "../styles/style1.css";

function Home() {
  return (
    <>
      <section className="intro">
        <div className="w-40">
          <h1>Navigating the digital landscape for success</h1>
          <p>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button>Book a consultation</button>
        </div>
        <div className="w-60">
          <img src="media/images/Illustration.png" />
        </div>
      </section>

      {/* <!-- list of companies --> */}

      <section className="comp-list">
        <img src="media/images/icons/amazon (1).png" />
        <img src="media/images/icons/Notion (1).png" />
        <img src="media/images/icons/HubSpot.png " />
        <img src="media/images/icons/Dribble.png" />
        <img src="media/images/icons/zoom.png" />
        <img src="media/images/icons/netflix.png" />
      </section>

      {/* <!-- intro to services --> */}

      <div className="service-cont">
        <h1>Services</h1>
        <p>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      {/* <!-- services layout --> */}

      <section className="services">
        <div className="card" style={{ backgroundColor: "white" }}>
          <div className="w-50">
            <div>
              <h2>Search Engine</h2>
              <h2>Optimization</h2>
            </div>
            <a href="#">
              <img src="media/images/icons/BlackLink (1).png" />
            </a>
          </div>

          <img className="img" src="media/images/Illustration (1).png" />
        </div>

        <div className="card" style={{ backgroundColor: "rgb(200, 222, 62)" }}>
          <div className="w-50">
            <div>
              <h2>Pay-Per-Click</h2>
              <h2>Advertisig</h2>
            </div>
            <a href="#">
              <img src="media/images/icons/BlackLink (1).png" />
            </a>
          </div>

          <img className="img" src="media/images/Illustration (2).png" />
        </div>

        <div className="card" style={{ backgroundColor: "rgb(42, 42, 39)" }}>
          <div className="w-50">
            <div>
              <h2 style={{ backgroundColor: "white" }}>Social Media</h2>
              <h2 style={{ backgroundColor: "white" }}>Marketing</h2>
            </div>
            <a href="#">
              <img src="media/images/icons/WhiteLink.png" />
            </a>
          </div>

          <img className="img" src="media/images/Illustration (3).png" />
        </div>

        <div className="card" style={{ backgroundColor: "rgb(142, 142, 63)" }}>
          <div className="w-50">
            <div>
              <h2>Email</h2>
              <h2>Marketing</h2>
            </div>
            <a href="#">
              <img src="media/images/icons/BlackLink (1).png" />
            </a>
          </div>

          <img
            className="img"
            src="media/images/tokyo-sending-messages-from-one-place-to-another 1.png"
          />
        </div>

        <div className="card" style={{ backgroundColor: "rgb(215, 215, 6)" }}>
          <div className="w-50">
            <div>
              <h2>Content</h2>
              <h2>Creation</h2>
            </div>
            <a href="#">
              <img src="media/images/icons/BlackLink (1).png" />
            </a>
          </div>

          <img className="img" src="media/images/Illustration (4).png" />
        </div>

        <div className="card" style={{ backgroundColor: "rgb(0, 0, 0)" }}>
          <div className="w-50">
            <div>
              <h2 style={{ backgroundColor: "rgb(255, 255, 255)" }}>
                Analytics and
              </h2>
              <h2 style={{ backgroundColor: "rgb(255, 255, 255)" }}>
                Tracking
              </h2>
            </div>
            <a href="#">
              <img src="media/images/icons/WhiteLink.png" />
            </a>
          </div>

          <img className="img" src="media/images/Illustration (5).png" />
        </div>
      </section>

      {/* <!-- oopurtiunity --> */}

      <section className="opertunity">
        <div className="Text-w-40">
          <h2>Lets make this happen</h2>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button>Get ur free Proposal</button>
        </div>
        <img
          src="media/images/Illustration(proposal).png"
          style={{ width: "400px", height: "400px" }}
        />
      </section>

      <div className="service-cont">
        <h1>Case Studies</h1>
        <p>
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <section className="cases">
        <div className="size">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <a href="#" style={{ height: "150px", width: "150px" }}>
            <img src="./media/images/icons/BlackLink (1).png" />
          </a>
        </div>

        <div className="size">
          <p>
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <a href="#" style={{ height: "150px", width: "150px" }}>
            <img src="./media/images/icons/BlackLink (1).png" />
          </a>
        </div>

        <div className="size">
          <p style={{ border: "none" }}>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <a href="#" style={{ height: "150px", width: "150px" }}>
            <img src="./media/images/icons/BlackLink (1).png" />
          </a>
        </div>
      </section>

      <div className="service-cont">
        <h1>Our Working Process</h1>
        <p>Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>

      <section className="process">
        <div className="father">
          <div className="process1">
            <div className="title-cont">
              <div className="title">
                <h1 style={{ fontSize: "60px" }}>01</h1>
                <h1>Consultation</h1>
              </div>
              <div>
                <img src="media/images/icons/Plus icon.png" />
              </div>
            </div>
            <p style={{ paddingTop: "30px" }}>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
          <div className="process2">
            <div className="title">
              <div>
                <h1 style={{ fontSize: "60px" }}>02</h1>
              </div>
              <div>
                <h1>Research and Strategy Development</h1>
              </div>
            </div>
            <div>
              <img src="media/images/icons/Plus icon (1).png" />
            </div>
          </div>

          <div className="process2">
            <div className="title">
              <div>
                <h1 style={{ fontSize: "60px" }}>03</h1>
              </div>
              <div>
                <h1>Implementation</h1>
              </div>
            </div>
            <div>
              <img src="media/images/icons/Plus icon (1).png" />
            </div>
          </div>

          <div className="process2">
            <div className="title">
              <div>
                <h1 style={{ fontSize: "60px" }}>04</h1>
              </div>
              <div>
                <h1>Monitoring and Optimization</h1>
              </div>
            </div>
            <div>
              <img src="media/images/icons/Plus icon (1).png" />
            </div>
          </div>

          <div className="process2">
            <div className="title">
              <div>
                <h1 style={{ fontSize: "60px" }}>05</h1>
              </div>
              <div>
                <h1>Reporting and Communication</h1>
              </div>
            </div>
            <div>
              <img src="media/images/icons/Plus icon (1).png" />
            </div>
          </div>

          <div className="process2">
            <div className="title">
              <div>
                <h1 style={{ fontSize: "60px" }}>06</h1>
              </div>
              <div>
                <h1>Continual Improvement</h1>
              </div>
            </div>
            <div>
              <img src="media/images/icons/Plus icon (1).png" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
