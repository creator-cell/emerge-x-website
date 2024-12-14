interface HeadingsPropsTypes {
  label: string;
  heading: string;
}
const Headings: React.FC<HeadingsPropsTypes> = ({ label, heading }) => {
  return (
    <div className="max-w-[85%] md:max-w-[40%]  mx-auto space-y-4 md:space-y-7 mb-16 md:mb-28 ">
      <h2 className=" text-greyishblack text-lg md:text-xl text-center ">{label}</h2>
      <h2 className=" text-greyishblack text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
        {heading}
      </h2>
    </div>
    // a 
  );
};

export default Headings;
