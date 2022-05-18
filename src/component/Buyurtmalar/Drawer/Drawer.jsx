import React from "react";

export default function Drawer({ children }) {
  return (
    <>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        {children}
      </div>
    </>
  );
}
