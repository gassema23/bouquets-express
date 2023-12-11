import { useState } from "react";

function Slider({ photos }) {
  const [changePhoto, setChangePhoto] = useState(photos[0]);

  return (
    <div className=" flex flex-col">
      {/** Grande */}
      <div>
        <img src={"../" + changePhoto} alt="" className="w-full" />
      </div>
      {/** Miniature */}
      <div className="flex flex-row gap-x-4 w-full justify-center mt-6 overflow-hidden">
        {photos.map((photo) => (
          <>
            <img
              onClick={() => setChangePhoto(photo)}
              src={"../" + photo}
              className="w-[50px] hover:grayscale transition duration-500 cursor-pointer"
              key={photo}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default Slider;
