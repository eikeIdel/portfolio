import React from "react";

function Sidepanel({ PageSidepanel }) {
  return (
    <div className="sidepanel">
      <div className="sidepanel-subcontainer h-full sm:m-8 flex flex-col justify-center sm:justify-start">
        <PageSidepanel />
      </div>
    </div>
  );
}

export default Sidepanel;
