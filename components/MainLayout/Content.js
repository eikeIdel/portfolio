import React from "react";

function Content({ PageContent }) {
  return (
    <div className="content">
      <div className="content-subcontainer m-2 sm:m-8 flex flex-col items-center">
        <PageContent />
      </div>
    </div>
  );
}

export default Content;
