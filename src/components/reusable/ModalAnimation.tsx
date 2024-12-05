import React from "react";

interface ModalAnimationTypes {
  isVisible: boolean;
  onClose: () => void;
}

const ModalAnimation: React.FC<ModalAnimationTypes> = ({ isVisible, onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#010101] z-50 flex items-center justify-center">
      <div
        className={`popup-message ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          } max-h-[719px] max-w-[540px] p-6 bg-black rounded-[50px] shadow-lg border-4 border-green-500 bg-clip-border transition-all duration-500 max-w-lg w-full px-4 sm:px-6 relative`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-white bg-black  rounded-full p-2 transition font-bold"
          aria-label="Close Modal"
        >
          ✕
        </button>

        {/* Modal Content */}
        <div className="p-4 flex flex-col gap-6">
          <h2 className="text-center text-[24px] sm:text-[28px] font-bold text-white">
            Join the Demo!
          </h2>
          <p className="text-center text-[16px] sm:text-[18px] text-white">
            Be the first to know about the demo! Login for early access.
          </p>
          <form className="space-y-6">
            <div className="w-full flex flex-col gap-1 border-b border-b-white pb-2">
              <label htmlFor="name" className="text-sm sm:text-base text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-none outline-none bg-black px-3 text-white"
                required
              />
            </div>
            <div className="w-full flex flex-col gap-1 border-b border-b-white pb-2">
              <label htmlFor="email" className="text-sm sm:text-base text-white">
                E-mail Id
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border-none outline-none bg-black px-3 text-white"
                required
              />
            </div>
            <div className="w-full flex flex-col gap-1 border-b border-b-white pb-2">
              <label htmlFor="contact" className="text-sm sm:text-base text-white">
                Contact No
              </label>
              <input
                type="text"
                name="contact"
                id="contact"
                className="border-none outline-none bg-black px-3 text-white"
                required
              />
            </div>
            <div className="w-full flex flex-col gap-1 border-b border-b-white pb-2">
              <label htmlFor="country" className="text-sm sm:text-base text-white">
                Country (Optional)
              </label>
              <input
                type="text"
                name="country"
                id="country"
                className="border-none outline-none bg-black px-3 text-white"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="px-[20px] py-[8px] text-sm sm:text-base bg-white rounded-full text-black hover:bg-[#3DA229] transition-all duration-300 ease-in-out"
              >
                Submit
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalAnimation;
