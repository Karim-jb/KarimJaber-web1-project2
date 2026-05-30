import "../styles/team.css";

function Team() {
  const getAssetUrl = (path) => new URL(`/public/${path}`, import.meta.url).href;

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
            <img src={getAssetUrl("media/images/persons/person1.png")} alt="John Doe" />
            <div className="person-name">
              <h1>John Doe</h1>
              <p>CEO and founder</p>
            </div>
            <img className="icon" src={getAssetUrl("media/images/persons/linkdln.png")} alt="LinkedIn" />
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
            <img src={getAssetUrl("media/images/persons/person2.png")} alt="Jane Doe" />
            <div className="person-name">
              <h1>Jane Doe</h1>
              <p>Director of opertaions</p>
            </div>
            <img className="icon" src={getAssetUrl("media/images/persons/linkdln.png")} alt="LinkedIn" />
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
            <img src={getAssetUrl("media/images/persons/person3.png")} alt="Michael Brown" />
            <div className="person-name">
              <h1>Michael Brown</h1>
              <p>Senior SEO Specialist</p>
            </div>
            <img className="icon" src={getAssetUrl("media/images/persons/linkdln.png")} alt="LinkedIn" />
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
            <img src={getAssetUrl("media/images/persons/person4.png")} alt="Emily Johnson" />
            <div className="person-name">
              <h1>Emily Johnson</h1>
              <p>PPC Manager</p>
            </div>
            <img className="icon" src={getAssetUrl("media/images/persons/linkdln.png")} alt="LinkedIn" />
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
            <img src={getAssetUrl("media/images/persons/person5.png")} alt="Brian Williams" />
            <div className="person-name">
              <h1>Brian Williams</h1>
              <p>Social Media Specialistr</p>
            </div>
            <img className="icon" src={getAssetUrl("media/images/persons/linkdln.png")} alt="LinkedIn" />
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
            <img src={getAssetUrl("media/images/persons/person6.png")} alt="Sarah Kim" />
            <div className="person-name">
              <h1>Sarah Kim</h1>
              <p>Content Creator</p>
            </div>
            <img className="icon" src={getAssetUrl("media/images/persons/linkdln.png")} alt="LinkedIn" />
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