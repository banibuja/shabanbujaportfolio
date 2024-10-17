"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isSubjectValid, setIsSubjectValid] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailPattern.test(value));
  };

  const handleSubjectChange = (e) => {
    const value = e.target.value;
    setSubject(value);

    const subjectPattern = /^[a-zA-Z0-9\s.,!?'-]{3,}$/; 
    setIsSubjectValid(subjectPattern.test(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, subject, message); 


    const data = {
      email,
      subject,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "https://shabanbujaportfolio.onrender.com/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.ok) {
        console.log("Message sent.", resData.message);
        setEmailSubmitted(true);

        setEmail('');
        setSubject('');
        e.target.message.value = '';
      } else {
        console.error("Failed to send email:", resData.error);
      }
    } catch (error) {
      console.error("Error occurred while sending email:", error);
    }
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
  <Link href="https://github.com/banibuja" target="_blank" rel="noopener noreferrer">
    <button className="flex items-center justify-center bg-[#e3edf7] p-5 rounded-lg shadow-lg transition-transform duration-500 hover:shadow-inner hover:bg-white hover:translate-y-1">
      <svg
        width="40"
        height="40"
        fill="#0092E4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="github"
        className="transition-transform duration-500 hover:scale-90 hover:fill-[#333333]"
      >
        <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
      </svg>
    </button>
  </Link>
  
  <Link href="https://www.linkedin.com/in/banibuja/" target="_blank" rel="noopener noreferrer">
    <button className="flex items-center justify-center bg-[#e3edf7] p-5 rounded-lg shadow-lg transition-transform duration-500 hover:shadow-inner hover:bg-white hover:translate-y-1">
      <svg
        width="40"
        height="40"
        fill="#0077B5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="linkedin"
        className="transition-transform duration-500 hover:scale-90 hover:fill-[#333333]"
      >
        <path d="M19.024,3H4.976C3.885,3,3,3.885,3,4.976v14.048C3,20.115,3.885,21,4.976,21h14.048c1.091,0,1.976-.885,1.976-1.976V4.976C21,3.885,20.115,3,19.024,3z M8.25,18.25H6.1V10.25h2.15V18.25z M7.175,9.375a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,7.175,9.375z M17.9,18.25h-2.15v-4.75c0-1.13-.021-2.6-1.575-2.6c-1.575,0-1.825,1.25-1.825,2.55v4.85h-2.15V10.25h2.05v1.1h.03c.285-.54,1.025-1.1,2.105-1.1c2.25,0,2.67,1.48,2.67,3.4v5.6H17.9z"></path>
      </svg>
    </button>
  </Link>
 
</div>

      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block text-sm font-medium mb-2"
              >
              </label>
              <div className="relative form-control">
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  className={`bg-transparent border-0 border-b-2 text-gray-100 text-sm block w-full py-2.5 placeholder-transparent focus:outline-none peer 
                    ${isEmailValid ? 'border-green-500' : email ? 'border-red-500' : 'border-white'}`}
                  placeholder="jacob@google.com"
                />
                <label
                  htmlFor="email"
                  className={`absolute left-0 transition-all duration-300 text-gray-100 text-sm
                    ${email ? 'top-[-14px] text-lightblue' : 'top-5'} 
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                    peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-lightblue`}
                >
                  {Array.from("Email").map((char, index) => (
                    <span key={index} style={{ transitionDelay: `${index * 50}ms` }}>
                      {char}
                    </span>
                  ))}
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm font-medium mb-2"
              >
              </label>
              <div className="relative form-control">
                <input
                  name="subject"
                  type="text" 
                  id="subject"
                  required
                  value={subject}
                  onChange={handleSubjectChange} 
                  className={`bg-transparent border-0 border-b-2 text-gray-100 text-sm block w-full py-2.5 placeholder-transparent focus:outline-none peer 
                    ${isSubjectValid ? 'border-green-500' : subject ? 'border-red-500' : 'border-white'}`} // Updated condition for green border
                  placeholder="Enter subject"
                />
                <label
                  htmlFor="subject"
                  className={`absolute left-0 transition-all duration-300 text-gray-100 text-sm
                    ${subject ? 'top-[-14px] text-lightblue' : 'top-5'} 
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                    peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-lightblue`}
                >
                  {Array.from("Subject").map((char, index) => (
                    <span key={index} style={{ transitionDelay: `${index * 50}ms` }}>
                      {char}
                    </span>
                  ))}
                </label>
              </div>
            </div>

            <div className="mb-6">
              <div className="relative form-control">
                <textarea
                  name="message"
                  id="message"
                  className="bg-transparent border-0 border-b-2 border-white text-gray-100 text-sm block w-full py-2.5 placeholder-transparent focus:outline-none focus:border-lightblue peer"
                  placeholder="Let's talk about..."
                  rows="4"
                />
               <label
                  htmlFor="email"
                  className={`absolute left-0 transition-all duration-300 text-gray-100 text-sm
                    ${email ? 'top-[-14px] text-lightblue' : 'top-5'} 
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                    peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-lightblue`}
                >
                  
                  {Array.from("Let's talk about...").map((char, index) => (
                    <span key={index} style={{ transitionDelay: `${index * 50}ms` }}>
                      {char}
                    </span>
                  ))}
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#86efac] hover:bg-[#0f766e] text-white font-medium py-2.5 px-5 rounded-lg w-full flex items-center justify-center overflow-hidden transition-all duration-200 hover:scale-95 animate-fly-1"
            >
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="transition-transform duration-300 transform"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span className="ml-3 transition-all duration-300">Send</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
