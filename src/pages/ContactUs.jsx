import "../styles/contactUs.css";

function ContactUs() {
  return (
    <>
      <main className="contact_container">
        <div className="form_box">
          <form>
            <div className="checkBox_container">
              <label>
                <input className="checkBox" type="checkbox" />
                <span>Say Hi</span>
              </label>

              <label>
                <input className="checkBox" type="checkbox" />
                <span className="span">Get a quote</span>
              </label>
            </div>
            <div className="inputText_container">
              <h1>Name*</h1>
              <input type="text" placeholder="Name" />
              <h1>Email*</h1>
              <input type="text" placeholder="Email" />
              <h1>Message*</h1>
              <input className="big_input" type="text" placeholder="Mesaage" />
              <button>Send Message</button>
            </div>
          </form>
        </div>
        <div className="image-contact-box">
          <img src="/media/images/Contact.png" alt="" />
        </div>
      </main>
    </>
  );
}

export default ContactUs;