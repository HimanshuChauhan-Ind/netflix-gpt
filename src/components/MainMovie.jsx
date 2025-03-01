const MainMovie = ({ title, overview }) => {
  return (
    <div className="absolute pt-[20%] w-screen aspect-video p-20 bg-gradient-to-l form to-black">
      <p className="text-3xl font-bold text-white">{title}</p>
      <p className="text-xl text-white w-[40%]">{overview}</p>
      <div className=" mt-4">
        <button className=" bg-white p-2 font-bold rounded-md cursor-pointer hover:opacity-80">
          ▶️ Play
        </button>
        <button className="ml-4 bg-gray-800 opacity-80 text-white p-2 font-bold rounded-md cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default MainMovie;
