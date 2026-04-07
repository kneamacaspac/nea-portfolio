import { useState } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "./SectionTitle";
import SocialButtons from "./SocialButtons";
import "../styles/contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showButton, setShowButton] = useState(false);

  function handleChange(e) {
    const updatedForm = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(updatedForm);

    // check if all fields are filled
    const isFilled =
      updatedForm.name.trim() !== "" &&
      updatedForm.email.trim() !== "" &&
      updatedForm.message.trim() !== "";

    setShowButton(isFilled);
  }

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .send(
        "service_ij7urrc",
        "template_sjfy73j",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "4lwVZtFQ-C2QaFMdT",
      )
      .then(() => {
        alert("Message sent!");
        setForm({ name: "", email: "", message: "" });
        setShowButton(false);
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong.");
      });
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <h3 className="contact-title">Get In Touch</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Name:"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email:"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group message-group">
            <textarea
              name="message"
              placeholder="Message:"
              value={form.message}
              onChange={handleChange}
            ></textarea>

            {/* SEND BUTTON */}
            {showButton && (
              <button type="submit" className="send-btn">
                Send
              </button>
            )}
          </div>
        </form>

        <div className="contact-social-row">
          <p>Connect with me:</p>
          <SocialButtons />
        </div>
      </div>
    </section>
  );
}

export default Contact;
