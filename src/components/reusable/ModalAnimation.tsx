import React from "react";
interface ModalAnimationTypes{
    isVisible:boolean
}
const ModalAnimation:React.FC<ModalAnimationTypes> = ({isVisible}) => {
  return (
    <div className=" fixed left-0 top-0 bg-[#010101] z-50 w-[100vw] h-screen">
      <div className="  w-full flex items-center justify-center h-full">
        <div className={`popup-message fixed bottom-0 left-1/2 transform -translate-x-1/2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} p-6 bg-white rounded-lg shadow-lg border-4 border-transparent bg-clip-border transition-all duration-500 z-50`}>
          <div className="p-4 flex flex-col gap-3 ">
            <h2 className="text-center text-[36px]">Join the Demo!</h2>
            <p className="text-center text-[20px]">
              Be the first to know about the demo! Login for early access.
            </p>
            <form action="" className=" space-y-8">
              <div className="w-full flex flex-col gap-1 border-b border-b-white">
                <label htmlFor="" className=" text-base">
                  Name
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className=" border-none outline-none bg-[#222720] px-3 py-1.5"
                />
              </div>
              <div className="w-full flex flex-col gap-1 border-b border-b-white">
                <label htmlFor="" className=" text-base">
                  E-mail Id
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className=" border-none outline-none bg-[#222720] px-3 py-1.5"
                />
              </div>
              <div className="w-full flex flex-col gap-1 border-b border-b-white">
                <label htmlFor="" className=" text-base">
                  Contact No
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className=" border-none outline-none bg-[#222720] px-3 py-1.5"
                />
              </div>
              <div className="w-full flex flex-col gap-1 border-b border-b-white">
                <label htmlFor="" className=" text-base">
                  Country (Optional)
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className=" border-none outline-none bg-[#222720] px-3 py-1.5"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className=" px-[15px] text-base py-[8px] bg-white rounded-full text-black "
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

export default ModalAnimation;
