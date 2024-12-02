import React from "react";

const FooterSubscribeForm = () => {
  return (
    <div>
      <form action="">
        <div className="flex flex-col sm:flex-row items-center gap-3  h-[40px]">
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Email"
            className=" border outline-none px-4 py-2 h-full "
          />
          <button className=" bg-customGreen text-white h-full py-2 px-4">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default FooterSubscribeForm;
