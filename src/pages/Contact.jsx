import Form from "../components/Form";

import Slide from "react-reveal/Slide";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h3>Contact</h3>
      <Slide right duration={2000}>
        <div className="contact-content">
          <Form />
          <div className="contact-text">
            <h3>
              Have any question? <br /> Leave a message!
            </h3>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Contact;
