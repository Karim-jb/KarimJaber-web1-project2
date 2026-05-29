import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer_body">
      <div className="head_container">
        <img src="media/images/icons/Logo.png" />
        <div className ="list_container">
          <a href="#">About us</a>
          <a href="#">Services</a>
          <a href="#">Use cases</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
          <a href="#">Request a quote</a>
        </div>
        <img style={{ width: '100px' }} src="media/images/icons/Social icons.png" />
      </div>
      <div className="middle_container">
        <div className="info">
          <h1>Contact us:</h1>
          <p>Email: 22410036@students.liu.edu.lb</p>
          <p>Phone: +961 76 776 503</p>
          <p>Address: Lebanese international university</p>
        </div>
        <div className="form">
          <form>
            <input type="email" placeholder="Email" />
          </form>
          <div className="subscribe_container"><h1>Subscribe to news</h1></div>
        </div>
      </div>
      <div className="end">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;