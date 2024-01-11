import bannerImg from "../../assets/hero-graphics.svg";

const HiroSection = () => {
  return (
    <div className="flex justify-between items-center bg-[#106c4f] py-20 px-[150px]">
      <div className="left-content w-1/2">
        <h1 className="text-white text-6xl font-bold leading-[62px]">
          The Future of Learning starts with students at the center
        </h1>
        <button className="bg-[#038c61] font-normal px-6 py-[10px] rounded-full mt-10 text-white">
          Learn More
        </button>
      </div>
      <div className="right-img w-1/2 animate-updown">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default HiroSection;
