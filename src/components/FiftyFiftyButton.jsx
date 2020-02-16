import React from "react";

function FiftyFiftyButton({ fiftyFifty, isAvailable }) {
    const buttonStyle = isAvailable ? "" : "btn-prompt-disabled";
    return (
        <div className="prompt">
            <button
                className={"btn btn-prompt " + buttonStyle}
                onClick={fiftyFifty}
            >
                50/50
            </button>
        </div>
    );
}

export default FiftyFiftyButton;
