import React from "react";

const ContactUsForm = () => {
  return (
    <div>
      <form action="">
        <div className=" space-y-6">
          <div className=" border-b-2 border-black flex flex-col">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name=""
              id=""
              className=" px-3 py-2 border-none outline-none"
            />
          </div>
          <div className=" border-b-2 border-black flex flex-col">
            <label htmlFor="">E-mail Id</label>
            <input
              type="text"
              name=""
              id=""
              className=" px-3 py-2 border-none outline-none"
            />
          </div>
          <div className=" border-b-2 border-black flex flex-col">
            <label htmlFor="">Contact No</label>
            <input
              type="text"
              name=""
              id=""
              className=" px-3 py-2 border-none outline-none"
            />
          </div>
          <div className=" border-b-2 border-black flex flex-col">
            <label htmlFor="">Country (Optional)</label>
            <input
              type="text"
              name=""
              id=""
              className=" px-3 py-2 border-none outline-none"
            />
          </div>
          <div className=" border-b-2 border-black flex flex-col">
            <label htmlFor="">Company</label>
            <input
              type="text"
              name=""
              id=""
              className=" px-3 py-2 border-none outline-none"
            />
          </div>
          <div className=" border-b-2 border-black flex flex-col">
            <label htmlFor="">Message</label>
            <input
              type="text"
              name=""
              id=""
              className=" px-3 py-2 border-none outline-none"
            />
          </div>
        </div>
        <button className=" bg-black text-white rounded-full px-5 py-1.5 mt-8">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
