import React from "react";

const ContactForm = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="review_form_container">
              <div className="review_form_title">get in touch</div>
              <div className="review_form_content">
                <form action="#" id="review_form" className="review_form" />
                <div className="d-flex flex-md-row flex-column align-items-start justify-content-between">
                  <input
                    type="text"
                    className="review_form_input"
                    placeholder="Name"
                    required="required"
                  />
                  <input
                    type="email"
                    className="review_form_input"
                    placeholder="E-mail"
                    required="required"
                  />
                  <input
                    type="text"
                    className="review_form_input"
                    placeholder="Subject"
                  />
                </div>
                <textarea
                  className="review_form_text"
                  name="review_form_text"
                  placeholder="Message"
                ></textarea>
                <button type="submit" className="review_form_button">
                  send message
                </button>
                <form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
