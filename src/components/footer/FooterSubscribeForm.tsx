import React from "react";

const FooterSubscribeForm = () => {
  return (
    <div  className="relative h-[81%]">
      <form action="">
        <div className="flex flex-col sm:flex-row items-center gap-3  h-[40px]">
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Email"
            className=" border outline-none px-4 py-2 h-full rounded-[20px] "
          />
          <button className=" bg-customGreen text-white h-full py-2 px-4 rounded-[20px]">
            Subscribe
          </button>
        </div>
      </form>
      <div className="flex lg:justify-between lg:gap-0 gap-[10px] absolute  bottom-0 w-100">
        <div className="text-[16px]">
          <p className="font-semibold">Phone</p>
          <p>+1 (800) 555-1234</p>
        </div>
        <div className="text-[16px]">
          <p className="font-semibold">Email</p>
          <p>info@emergex.com</p>
        </div>
      </div>
    </div>
  );
};

export default FooterSubscribeForm;
