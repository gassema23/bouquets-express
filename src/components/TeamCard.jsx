function TeamCard({ picture, name, description }) {
  return (
    <div className="relative bg-cover flex items-center justify-center overflow-hidden w-full h-[350px] group">
      <div
        className="absolute w-full h-full transition-all duration-700 ease-in-out transform bg-center bg-cover group-hover:scale-110 group-hover:grayscale"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.4), rgba(30, 30, 30, 0.1)),url(${picture})`,
        }}
      ></div>
      <div className="w-full flex flex-col justify-end relative items-center pb-4 translate-y-[450%] group-hover:translate-y-[220%]  bg-dark/80 transition-all duration-500">
        <div className="text-white text-xl font-bold text-shadow">{name}</div>
        <div className="text-white text-shadow">{description}</div>
      </div>
    </div>
  );
}

export default TeamCard;
