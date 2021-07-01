import React from "react";

const DropDownMenu = ({ children, positionX, menuRef}: any) => {
  let posX: any = { right: "0" };

  if (positionX === "left") {
    posX = { left: "0" };
  }

  const style = {
    ...posX,
    cursor: "text",
    top: "45px",
    boxShadow: "0 .5rem 1rem rgba(0,0,0,.3)",
    zIndex: "100"
  }

  return (
    <div className={`drop-down-menu bg-white h-auto rounded position-absolute`} style={style} ref={menuRef}>
      <div
        className="text-left d-flex flex-column"
        aria-labelledby="dropdownMenuButton"
      >
        {children}
      </div>
    </div>
  );
};

export default DropDownMenu;