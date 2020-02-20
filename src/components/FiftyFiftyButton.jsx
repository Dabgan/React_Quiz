import React from "react";

function FiftyFiftyButton({ fiftyFifty, isAvailable }) {
    const buttonStyle = isAvailable ? "" : "btn-disabled";
    return (
        <div className="prompt">
            <button
                className={"btn btn-prompt " + buttonStyle}
                onClick={() => fiftyFifty(isAvailable)}
            >
                50:50
            </button>
        </div>
    );
}

export default FiftyFiftyButton;
