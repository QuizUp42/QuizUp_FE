import logo from "../../../assets/logo.png";

const MobileEnter = () => {
  return (
    <>
      <img src={logo} alt="" />
      <input
        type="text"
        placeholder="입장 코드 입력"
        className="w-full px-6 py-3 bg-primary-white text-black font-bold placeholder:text-[#b6b6b6] placeholder:font-bold border-2 rounded-full shadow-[2px_8px_4px_2px_rgba(0,0,0,1)]"
      />
      <button className="px-8 py-2 text-2 font-bold bg-primary-light text-primary-white rounded-full shadow-[2px_6px_4px_0px_rgba(0,0,0,0.25)]">
        입장
      </button>
    </>
  );
};

export default MobileEnter;
