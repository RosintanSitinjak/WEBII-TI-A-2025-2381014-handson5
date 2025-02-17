import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Your Full Name" />
        <br />

        <input type="email" placeholder="Your Email" />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
