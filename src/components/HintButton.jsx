import React from "react";

function HintButton({ deleteMethod, isAvailable, loaderIcon, btnText }) {
    const buttonStyle = isAvailable ? "" : "btn-disabled";
    const isIconVisible = loaderIcon ? "none" : "inline-block";
    return (
        <div className="prompt">
            <button
                style={{ display: `${isIconVisible}` }}
                className={"btn btn-prompt " + buttonStyle}
                onClick={() => deleteMethod(isAvailable)}
            >
                {btnText}
            </button>
        </div>
    );
}

export default HintButton;
