import React from "react";

function FiftyFiftyButton({ fiftyFifty, isAvailable, loaderIcon }) {
    const buttonStyle = isAvailable ? "" : "btn-disabled";
    const isIconVisible = loaderIcon ? "none" : "inline-block";
    return (
        <div className="prompt">
            <button
                style={{ display: `${isIconVisible}` }}
                className={"btn btn-prompt " + buttonStyle}
                onClick={() => fiftyFifty(isAvailable)}
            >
                50:50
            </button>
        </div>
    );
}

export default FiftyFiftyButton;
