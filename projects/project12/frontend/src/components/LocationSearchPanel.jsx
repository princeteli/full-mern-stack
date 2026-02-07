import React from "react";

const LocationSearchPanel = (props) => {


  // sample array for location
  const location = ['Lorem ipsum dolor sit amet1', 'Lorem ipsum dolor sit amet2', 'Lorem ipsum dolor sit amet3', 'Lorem ipsum dolor sit amet4', 'Lorem ipsum dolor sit amet5']



  return (
    <div>
      {/* this is just temp data  */}

      {location.map((item, index) => {
        return (
          <div onClick={()=>{
            props.setVehiclePanelOpen(true)
            props.setPanelOpen(false)
          }} key={index} className="flex gap-4 my-2 border-gray-100  p-2 active:border-2 active:border-black active:rounded-xl items-center justify-start">
            <h2 className="bg-[#eee] flex items-center justify-center h-10 w-10 rounded-full">
              <i className="ri-map-pin-line text-xl"></i>
            </h2>
            <h4 className="font-semibold text-lg">{item}</h4>
          </div>
        )
      })}


    </div>
  );
};

export default LocationSearchPanel;
