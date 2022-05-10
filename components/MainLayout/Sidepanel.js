import React from "react";

function Sidepanel({ PageComponent }) {
  return (
    <div className="sidepanel">
      <div className="sidepanel-subcontainer h-full sm:m-8 flex flex-col justify-center sm:justify-start">
        <PageComponent />
      </div>
    </div>
  );
}

export default Sidepanel;
