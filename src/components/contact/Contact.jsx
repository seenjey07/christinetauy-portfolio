import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let&apos;s work together!</h1>
        <div className="contactDetails">
          <h2>📧 Mail</h2>
          <span>
            <a href="mailto:chrosales07@gmail.com">chrosales07@gmail.com</a>
          </span>
        </div>
        <div className="contactDetails">
          <h2>🏠 Address</h2>
          <span>Tanza, Cavite, Philippines</span>
        </div>
        <div className="contactDetails">
          <h2>📞 Phone</h2>
          <span>+63950-303-3001</span>
        </div>
      </div>

      <div className="formContainer">
        <form>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows={8} placeholder="Message" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
