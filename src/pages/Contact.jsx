import Form from "../components/Form";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h3>Contact</h3>
      <div className="contact-content">
        <Form />
        <div className="contact-text">
          <h3>
            Have any question? <br /> Leave a message!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
