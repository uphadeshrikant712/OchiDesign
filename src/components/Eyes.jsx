import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX; //exact location of mouse on x axis
      let mouseY = e.clientY; //exact location of mouse on y axis

      //window.innerWidth = whole screen = 1000px
      //window.innerWidth/2 = center of screen = 500px

      let deltaX = mouseX - window.innerWidth / 2; //center point of screen on x axis i.e. 500px
      let deltaY = mouseY - window.innerHeight / 2; // center point of screen on y axis i.e. 500px

      //we get angle value in radianse to convert it into degree we need to multiply it by (180 / Math.PI) because 1 radianse = 56.29 deg which is equal to (180 / Math.PI)
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className=' relative w-full h-full bg-cover bg-center bg-[url("../EyesPageBackground.jpg")] '
      >
        <div  className="absolute w-1/2 h-[40vh] flex items-center justify-center gap-2  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  ">
          <div className=" flex items-center justify-center w-[15vw] h-[15vw] bg-slate-100 rounded-full">
            <div className="relative flex items-center justify-center w-[9vw] h-[9vw] bg-slate-900 rounded-full">
              <h1 className="uppercase text-[1.3vw] font-medium">play</h1>

              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-[3vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] "
              >
                <div className="w-[2vw] h-[2vw] bg-slate-200 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className=" flex items-center justify-center w-[15vw] h-[15vw] bg-slate-200 rounded-full">
            <div className="relative flex items-center justify-center w-[9vw] h-[9vw] bg-slate-900 rounded-full">
              <h1 className="uppercase text-[1.3vw] font-medium">play</h1>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-[3vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  "
              >
                <div className="w-[2vw] h-[2vw] bg-slate-200 rounded-full "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
