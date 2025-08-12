import React, { useState , useEffect } from "react";
import conectd from '../srcassets/Connected_world_Customizable_Flat_Illustrations___Rafiki_Style-removebg-preview.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUsForm = () => {
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a07a0e81-d855-4150-8037-7f2c72ae0822");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();

      if (result.success) {
        setMessage("Form submitted successfully!");
        console.log("Success", result);
      } else {
        setMessage("There was an error submitting the form.");
        console.log("Error", result);
      }
    } catch (error) {
      setMessage("There was an error submitting the form.");
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div>
      <div className="container margin_top_container">
        <div className="row ">
          <div className="col-md-6 ">
              <div className="text-center">
              <div className="mt-1 d-flex gap-2 justify-content-center align-items-center " data-aos="zoom-in">
                  <h1 className="fw-semibold "> Lets Get</h1>
                  <h1 className="font_color_green fw-semibold ">Connected</h1>
                </div>
              </div>
              <div className="" data-aos="fade-right">
                    <img src={conectd} className="w-100"/>
              </div>

          </div>
          <div className="col-md-6 mt-3 " data-aos="fade-left">
            <form
              className="bg-white p-4 width_container_contactuse mx-auto rounded-3 mb-4"
              onSubmit={onSubmit}
            >
              <div className="font_contant_us mb-4">Contact us</div>
              {message && (
                <div className="alert alert-success mt-4">{message}</div>
              )}

              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="mb-2 font_weight_buttoncontuse">
                    First Name
                  </div>
                  <input
                    type="text"
                    name="first_name"
                    className="form-control w-75"
                    aria-label="First Name"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="col-md-6">
                  <div className="mb-2 font_weight_buttoncontuse">
                    Last Name
                  </div>
                  <input
                    type="text"
                    name="last_name"
                    className="form-control w-75"
                    aria-label="Last Name"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="mb-2 font_weight_buttoncontuse">
                  Phone Number
                </div>
                <input
                  type="tel"
                  name="phone_number"
                  className="form-control"
                  placeholder="No."
                  aria-label="Phone Number"
                  aria-describedby="basic-addon1"
                  required
                  pattern="\d{10}"
                  title="Please enter exactly 10 digits"
                />
              </div>
              <div className="mb-3">
                <div className="mb-2 font_weight_buttoncontuse">Email</div>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="@"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>

              <div className="mb-3">
                <div className="mb-2 font_weight_buttoncontuse">Message</div>
                <textarea
                  name="message"
                  className="form-control"
                  aria-label="With textarea"
                ></textarea>
              </div>
              <div>
                <button
                  className="submitbuttong_contactus w-100 py-2 rounded-3 font_weight_buttoncontuse"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
