import Header from "../index";

function DesktopHeader({ setHeaderSelection, headerSelection }) {
  return (
    <div className="header">
      <div className="header-subcontainer">
        <Header
          setHeaderSelection={setHeaderSelection}
          headerSelection={headerSelection}
        />
      </div>
    </div>
  );
}

export default DesktopHeader;
