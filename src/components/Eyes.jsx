
// import React, { useEffect, useState, useRef } from "react";

// function Eyes() {
//   const [rotate, setRotate] = useState(0);
//   const firstMovableDivRef = useRef(null);
//   const secondMovableDivRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       // Mouse position from the window
//       const mouseX = e.clientX;
//       const mouseY = e.clientY;

//       // Mouse position from the center of the window
//       const deltaX = mouseX - window.innerWidth / 2;
//       const deltaY = mouseY - window.innerHeight / 2;

//       // Calculate the angle (convert from radians to degrees) => 1 radian = 180 / Math.PI
//       const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

//       // Update the rotation
//       setRotate(angle - 180);

//       // Move the divs
//       const moveDiv = (divRef) => {
//         if (divRef.current) {
//           const rect = divRef.current.getBoundingClientRect();
//           const divX = rect.left + rect.width / 2; // Center of the div
//           const divY = rect.top + rect.height / 2; // Center of the div

//           const moveX = (mouseX - divX) * 0.05; // Adjust the factor to control movement speed
//           const moveY = (mouseY - divY) * 0.05; // Adjust the factor to control movement speed

//           divRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
//         }
//       };

//       moveDiv(firstMovableDivRef);
//       moveDiv(secondMovableDivRef);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
    
//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="eyes w-[100%] h-[100px] pt-20  sm:h-[120px]  sm:pt-0 bg- md: md:h-[800px] z-100 overflow-hidden">
//       <div
//         data-scroll
//         data-scroll-section
//         data-scroll-speed="-0.7"
//         className="w-full relative h-[10rem] mt-5 sm:h-screen bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
//       >
//         <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
//           <div className="w-[24vw] md:w-[15vw] h-[24vw] md:h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
//             <div
//               ref={firstMovableDivRef}
//               className="w-1/3 h-[75%]  relative rounded-full bg-zinc-900"
//               style={{ position: 'absolute' }}
//             >
//               <p className=" text-md mt-1 sm:mt-0 sm:text-xl absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[80%]">PLAY</p>
//               <div
//                 style={{
//                   transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
//                 }}
//                 className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
//               >
//                 <div className="w-[3vw] h-[3vw] rounded-full bg-zinc-100"></div>
//               </div>
//             </div>
//           </div>
//           <div className="w-[24vw] md:w-[15vw] h-[24vw] md:h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
//             <div
//               ref={secondMovableDivRef}
//               className="w-1/3 h-[75%]  relative rounded-full bg-zinc-900"
//               style={{ position: 'absolute' }}
//             >
//               <p className="text-md mt-1 sm:mt-0 sm:text-xl absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[80%]">PLAY</p>
//               <div
//                 style={{
//                   transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
//                 }}
//                 className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
//               >
//                 <div className="w-[3vw] h-[3vw] rounded-full bg-zinc-100"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Eyes;


import React, { useEffect, useState, useRef } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  const firstMovableDivRef = useRef(null);
  const secondMovableDivRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);

      const moveDiv = (divRef) => {
        if (divRef.current) {
          const rect = divRef.current.getBoundingClientRect();
          const divX = rect.left + rect.width / 2;
          const divY = rect.top + rect.height / 2;
          const moveX = (mouseX - divX) * 0.05;
          const moveY = (mouseY - divY) * 0.05;
          divRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
      };

      moveDiv(firstMovableDivRef);
      moveDiv(secondMovableDivRef);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes w-full  h-[500px] overflow-hidden sm:h-[120px] sm:pt-0 md:h-[1000px] lg-[800px] z-100 sm:overflow-hidden">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.7"
        className="w-full relative h-[500px] md-:h-[1000px] mt-5 sm:h-screen bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
      >
        <div className="absolute flex gap-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[24vw] md:w-[15vw] h-[24vw] md:h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div
              ref={firstMovableDivRef}
              className="w-1/3 h-[75%] relative rounded-full bg-zinc-900"
              style={{ position: 'absolute' }}
            >
              <p className="text-md mt-1 sm:mt-0 sm:text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">PLAY</p>
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-[3vw] h-[3vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[24vw] md:w-[15vw] h-[24vw] md:h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div
              ref={secondMovableDivRef}
              className="w-1/3 h-[75%] relative rounded-full bg-zinc-900"
              style={{ position: 'absolute' }}
            >
              <p className="text-md mt-1 sm:mt-0 sm:text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">PLAY</p>
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-[3vw] h-[3vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
