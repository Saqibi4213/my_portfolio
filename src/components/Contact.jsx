import React, { useState, useEffect } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("contactFormData"));
    if (savedData) {
      setName(savedData.name);
      setEmail(savedData.email);
      setPhone(savedData.phone);
      setMessage(savedData.message);
    }
  }, []);

  const saveDataToLocalStorage = () => {
    const formData = { name, email, phone, message };
    localStorage.setItem("contactFormData", JSON.stringify(formData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);

    saveDataToLocalStorage();
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 animate__animated animate__fadeIn animate__delay-1s">
          <img
            src="/images/contact.png"
            alt="Contact"
            className="rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left animate__animated animate__fadeIn animate__delay-1s">
            Contact Me
          </h2>

          {/* Success Message */}
          {isSuccess && (
            <div className="bg-green-500 text-white text-center p-4 rounded mb-6 animate__animated animate__fadeIn animate__delay-1s">
              Message sent successfully!
            </div>
          )}

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="shine-effect">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 border rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <div className="shine-effect">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <div className="shine-effect">
              <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-4 border rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="shine-effect">
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-4 border rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
