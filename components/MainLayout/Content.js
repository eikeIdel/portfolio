import React from "react";

function Content({ PageComponent }) {
  return (
    <div className="content">
      <div className="content-subcontainer m-2 sm:m-8 flex flex-col items-center">
        <PageComponent />
      </div>
    </div>
  );
}

export default Content;
