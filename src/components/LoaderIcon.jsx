import React from "react";

function LoaderIcon({ loaderIcon }) {
    const isIconVisible = loaderIcon ? "block" : "none";
    // const isIconVisible = "block";
    return (
        <div
            style={{ display: `${isIconVisible}` }}
            className="loader-icon"
        ></div>
    );
}

export default LoaderIcon;
