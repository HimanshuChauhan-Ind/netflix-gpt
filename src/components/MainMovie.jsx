const MainMovie = ({ movieId, title, overview }) => {
  console.log(movieId, title, overview);
  return (
    <div className="pt-64 w-3/4 p-20">
      <p className="text-3xl font-bold">{title}</p>
      <p className="text-xl">{overview}</p>
      <div className="mt-4">
        <button className="bg-gray-500 text-white p-2 font-bold rounded-md cursor-pointer">
          {" "}
          ▶️ Play
        </button>
        <button className="ml-4 bg-gray-500 text-white p-2 font-bold rounded-md cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default MainMovie;
