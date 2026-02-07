import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import MacContainer from "./MacContainer";
import { div } from "three/tsl";

const App = () => {
  return (
    <div className="w-full h-screen font-['Helvetica_Now_Display']">
      <div className="navbar flex gap-5 absolute  top-0 left-1/2 -translate-x-1/2">
        {["iPhone", "iPad", "Srvices", "ios", "MacBook", "Products"].map(
          (item, idx) => {
            <a key={idx} href="" className="text-while font-[500] text-sm ">
              {item}
            </a>;
          }
        )}
      </div>
      <div className="absolute flex flex-col items-center  text-white top-40 left-1/2 -translate-x-1/2 ">
        <h3 className="masked text-7xl tracking-tighter font-[700]">
          MacBook Pro.
        </h3>
        <h5>Oh So Pro!</h5>
        <p className="text-center w-3/4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
          voluptatum ipsa omnis possimus harum delectus cupiditate veniam unde
          pariatur error amet quaerat, dignissimos dolore, maxime molestias
          libero saepe aliquid? Recusandae.
        </p>
      </div>

      {/* Canvas  */}
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/brown_photostudio_02_4k.exr",
          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
