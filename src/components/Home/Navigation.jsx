import img from "../../assets/lws-logo-en.svg";
const Navigation = () => {
  return (
    <>
      <div className="flex justify-between py-5 px-16 bg-[#0f6c4f]">
        <img className="h-12" src={img} alt="" />
        <button className="bg-[#172227] text-white px-6 py-2 font-normal text-base leading-6 rounded-full">
          Get Admission
        </button>
      </div>
    </>
  );
};

export default Navigation;
