import { div } from "framer-motion/client";
import React from "react";

const FrequentlyaskedQuestions = () => {
  return (
    <div>
      <form>
        <div className="flex flex-col md:flex-row justify-between font-semibold text-black text-lg md:text-xl gap-4">
          <div className=" w-full md:w-[47%]">
            <p>Frequently asked </p>
            <p>Questions</p>
          </div>

          <div className=" w-full md:w-[47%]  space-y-5">
            <p>
              Got questions? Here are answers to the ones we get asked most
              often.
            </p>
            <button className=" bg-customGreen text-white text-base rounded-full px-6 py-3">
              Ask a Question
            </button>
          </div>
        </div>
        <div className="mt-8 space-y-8">
          <div className=" border-b-2 border-dotted border-black flex flex-col">
            <label htmlFor="">What types of projects do you work on?</label>
            <input
              type="text"
              name=""
              id=""
              className="px-3 py-2 mt-1 outline-none border-none"
            />
          </div>
          <div className=" border-b-2 border-dotted border-black flex flex-col">
            <label htmlFor="">What types of projects do you work on?</label>
            <input
              type="text"
              name=""
              id=""
              className="px-3 py-2 mt-1 outline-none border-none"
            />
          </div>
          <div className=" border-b-2 border-dotted border-black flex flex-col">
            <label htmlFor="">What types of projects do you work on?</label>
            <input
              type="text"
              name=""
              id=""
              className="px-3 py-2 mt-1 outline-none border-none"
            />
          </div>
          <div className=" border-b-2 border-dotted border-black flex flex-col">
            <label htmlFor="">What types of projects do you work on?</label>
            <input
              type="text"
              name=""
              id=""
              className="px-3 py-2 mt-1 outline-none border-none"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FrequentlyaskedQuestions;
