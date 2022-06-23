import React from 'react';
import { useSelector } from "react-redux";
function Header() {
    const store = useSelector((store) => store);
    console.log("store in header", store);
    return (
        <div>
            Header is React
        </div>
    )
}

export default Header;