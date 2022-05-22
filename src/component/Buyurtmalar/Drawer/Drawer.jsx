import React from "react";
import { Drawer, Close } from "./style";
export default function Index({ value,children,style, open, onClose }) {
  return (
 <>
  <div 
  style={style}
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

// <>
//   <div
//     class="offcanvas offcanvas-end"
//     tabindex="-1"
//     id="offcanvasRight"
//     aria-labelledby="offcanvasRightLabel"
//   >
//     {children}
//   </div>
// </>
