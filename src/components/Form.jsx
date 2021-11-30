import React from "react";

const Form = () => {
  return (
    <form action="">
      <div className="credentials">
        <input type="text" placeholder="name" id="name" />
        <input type="email" placeholder="email" id="email" />
      </div>
      <textarea placeholder="message" id="message" />
      <input type="submit" id="submit" value="Send" />
    </form>
  );
};

export default Form;
