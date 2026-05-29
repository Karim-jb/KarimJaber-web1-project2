import "../styles/team.css";

function Team() {
  return (
    <>
      <header className="header">
        <h1>Our Team</h1>
        <p>
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </header>

      <main className="team-container">
        <div className="card">
          <div className="person-identification">
            <img src="/media/images/persons/person1.png" />
            <div className="person-name">
              <h1>John Doe</h1>
              <p>CEO and founder</p>
            </div>
            <img className="icon" src="/media/images/persons/linkdln.png" />
          </div>
          <div className="description">
            <p>
              10+ years of experience in digital marketing. Expertise in SEO,
              PPC, and content strategy
            </p>
          </div>
        </div>

        <div className="card">
          <div className="person-identification">
            <img src="/media/images/persons/person2.png" />
            <div className="person-name">
              <h1>Jane Doe</h1>
              <p>Director of opertaions</p>
            </div>
            <img className="icon" src="/media/images/persons/linkdln.png" />
          </div>
          <div className="description">
            <p>
              7+ years of experience in project management and team leadership.
              Strong organizational and communication skills
            </p>
          </div>
        </div>

        <div className="card">
          <div className="person-identification">
            <img src="/media/images/persons/person3.png" />
            <div className="person-name">
              <h1>Michael Brown</h1>
              <p>Senior SEO Specialist</p>
            </div>
            <img className="icon" src="/media/images/persons/linkdln.png" />
          </div>
          <div className="description">
            <p>
              5+ years of experience in SEO and content creation. Proficient in
              keyword research and on-page optimization
            </p>
          </div>
        </div>

        <div className="card">
          <div className="person-identification">
            <img src="/media/images/persons/person4.png" />
            <div className="person-name">
              <h1>Emily Johnson</h1>
              <p>PPC Manager</p>
            </div>
            <img className="icon" src="/media/images/persons/linkdln.png" />
          </div>
          <div className="description">
            <p>
              3+ years of experience in paid search advertising. Skilled in
              campaign management and performance analysis
            </p>
          </div>
        </div>

        <div className="card">
          <div className="person-identification">
            <img src="/media/images/persons/person5.png" />
            <div className="person-name">
              <h1>Brian Williams</h1>
              <p>Social Media Specialistr</p>
            </div>
            <img className="icon" src="/media/images/persons/linkdln.png" />
          </div>
          <div className="description">
            <p>
              4+ years of experience in social media marketing. Proficient in
              creating and scheduling content, analyzing metrics, and building
              engagement
            </p>
          </div>
        </div>

        <div className="card">
          <div className="person-identification">
            <img src="/media/images/persons/person6.png" />
            <div className="person-name">
              <h1>Sarah Kim</h1>
              <p>Content Creator</p>
            </div>
            <img className="icon" src="/media/images/persons/linkdln.png" />
          </div>
          <div className="description">
            <p>
              2+ years of experience in writing and editing Skilled in creating
              compelling, SEO-optimized content for various industries
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Team;