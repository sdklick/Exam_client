import React, { useEffect, useState } from "react";
import lightpng from "../src/assets/light.png";
import nightpng from "../src/assets/night.png";

const Nightday = () => {
  const [data, setdata] = useState("light");
  const darknight = () => {
    data == "light"
      ? (window.document.getElementsByTagName("body")[0].style.backgroundColor =
          "white")
      : (window.document.getElementsByTagName("body")[0].style.backgroundColor =
          "black");
  };
  useEffect(() => {
    darknight();
  }, [data]);
  document.getElementsByTagName("body");
  return (
    <>
      <div className="border rounded-circle" style={{ marginRight: "12px" }}>
        {data == "light" ? (
          <img
            onClick={() => setdata("night")}
            src={lightpng}
            style={{ height: "34px" }}
          />
        ) : (
          <img
            onClick={() => setdata("light")}
            src={nightpng}
            style={{ height: "34px" }}
          />
        )}
      </div>
    </>
  );
};

export default Nightday;
