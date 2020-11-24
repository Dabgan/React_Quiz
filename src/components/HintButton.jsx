import React from "react";

function HintButton({ deleteMethod, isAvailable, btnText }) {
    const buttonStyle = isAvailable ? "" : "btn-disabled";
    return (
        <div className="prompt">
            <button
                className={"btn btn-prompt " + buttonStyle}
                onClick={() => deleteMethod(isAvailable)}
            >
                {btnText}
            </button>
        </div>
    );
}

export default HintButton;
