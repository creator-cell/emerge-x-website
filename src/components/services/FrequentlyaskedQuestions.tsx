'use client'

import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Importing arrow icons

const FrequentlyaskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Array of questions and answers
  const faqData = [
    {
      question: "What types of projects do you work on?",
      answer: "We work on web development, mobile apps, and custom software solutions."
    },
    {
      question: "How do I get started?",
      answer: "Simply contact us via the 'Ask a Question' button, and we will get in touch."
    },
    {
      question: "What is your pricing model?",
      answer: "Our pricing is flexible based on the type and scope of the project. We offer both hourly and project-based rates."
    },
    {
      question: "Can I see a demo?",
      answer: "Yes, we can provide a demo based on the service you're interested in. Just reach out!"
    }
  ];

  return (
    <div>
      <form>
        <div className="flex flex-col md:flex-row justify-between font-semibold text-black text-lg md:text-xl gap-4">
          <div className="w-full md:w-[47%]">
            <p>Frequently asked </p>
            <p>Questions</p>
          </div>

          <div className="w-full md:w-[47%] space-y-5">
            <p>
              Got questions? Here are answers to the ones we get asked most often.
            </p>
            <button className="bg-customGreen text-white text-base rounded-full px-6 py-3">
              Ask a Question
            </button>
          </div>
        </div>

        <div className="mt-5 space-y-5">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b-2  border-gray-500 flex flex-col pb-4">
              <div
                className="flex justify-between items-center cursor-pointer py-2"
                onClick={() => handleToggle(index)}
              >
                <label>{faq.question}</label>
                <div
                  className={`transition-transform duration-300 ease-in-out ${openIndex === index ? 'rotate-180' : ''
                    }`}
                >
                  {openIndex === index ? (
                    <IoIosArrowUp size={20} /> // Arrow up when open
                  ) : (
                    <IoIosArrowDown size={20} /> // Arrow down when closed
                  )}
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                {openIndex === index && (
                  <div className="px-3 py-2 mt-1 text-gray-500">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default FrequentlyaskedQuestions;
