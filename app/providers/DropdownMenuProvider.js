"use client";

import { useState } from "react";
import { DropdownMenuContext } from "../contexts";

const DropdownMenuProvider = ({ children }) => {
  const [dropdownMenu, setDropdownMenu] = useState(false);

  return (
    <DropdownMenuContext.Provider value={{ dropdownMenu, setDropdownMenu }}>
      {children}
    </DropdownMenuContext.Provider>
  );
};

export default DropdownMenuProvider;
