import React, { useState } from "react";

function Popover({ content, src = "#", children }) {
  const [pophover, setPophover] = useState(false);
  return (
    <div className="group">
      <a
        href={src}
        onMouseEnter={() => setPophover((e) => !e)}
        onMouseLeave={() => setPophover((e) => !e)}
      >
        {children}
      </a>
      {pophover && (
        <div className="absolute -top-12 left-0 mr-3 block w-fit z-30 leading-normal text-xs text-left no-underline break-words rounded bg-gray-800 p-2 text-white">
          {content}
        </div>
      )}
    </div>
  );
}

export default Popover;
