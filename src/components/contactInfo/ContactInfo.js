import React from "react";

import contactInfo1 from "../../images/contact_info_1.png";
import contactInfo2 from "../../images/contact_info_2.png";
import contactInfo3 from "../../images/contact_info_3.png";

const ContactInfo = () => {
  return (
    <div className="contact_text">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="contact_info">
              <div className="contact_title">contact info</div>
              <div className="contact_info_content">
                <ul>
                  <li>
                    <div className="contact_info_icon">
                      <img src={contactInfo1} alt="" />
                    </div>
                    <div className="contact_info_text">
                      Россия, Ростов-на-Дону, Ул. Серафимовича 82
                    </div>
                  </li>
                  <li>
                    <div className="contact_info_icon">
                      <img src={contactInfo2} alt="" />
                    </div>
                    <div className="contact_info_text">
                      obitski_ramila@mail.ru
                    </div>
                  </li>
                  <li>
                    <div className="contact_info_icon">
                      <img src={contactInfo3} alt="" />
                    </div>
                    <div className="contact_info_text">+7 951 528-42-71</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-7"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
