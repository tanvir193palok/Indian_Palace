import { useContext } from "react"
import { DropdownMenuContext } from "../contexts";



export const useDropdownMenu = () => {
    const {dropdownMenu, setDropdownMenu} = useContext(DropdownMenuContext);

    return {dropdownMenu, setDropdownMenu};
}