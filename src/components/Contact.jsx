import React from "react";

import Title from "./Title";
import Button from "./Button";
import Input from "./Input";
import Map from "./Map";

const Contact = () => {
  return (
    <div className="bg-black w-full px-8 py-6" id="contact">
      <div className="max-w-[1100px] mx-auto">
        <Title title="Contact Us" color="text-white" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 w-[90%] sm:w-[70%] md:w-full mx-auto">
          <div className="bg-yellow overflow-hidden">
            <Map />
          </div>
          <div className="bg-white p-4">
            <form action="">
              <h1 className="text-lg font-semibold mb-4">Get In Touch</h1>
              <Input type="text" name="name" placeholder="name" />
              <Input
                type="email"
                name="email"
                placeholder="email"
                margin="my-3"
              />
              <Input type="tel" name="phone" placeholder="phone" />
              <textarea
                name="message"
                placeholder="message"
                className="outline-none py-1 px-2 border-b-[2px] border-b-[#cecece] w-full text-sm focus:border-b-[#ffaaaa] resize-none my-3"
                rows={5}
              />
              <Button text="Send Message" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
