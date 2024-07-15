import mail from '../assets/images/mail.png';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p>
          <div className="contact-info">
            <a href="mailto:mardiyahzahratul@gmail.com">
              <img src={mail} alt="Email" style={{ width: '16px', marginRight: '5px' }} />
              mardiyahzahratul@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;