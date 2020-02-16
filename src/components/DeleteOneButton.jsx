import React from "react";

function DeleteOneButton({ deleteOne, isAvailable }) {
    const buttonStyle = isAvailable ? "" : "btn-prompt-disabled";

    return (
        <div className="prompt">
            <button
                className={"btn btn-prompt " + buttonStyle}
                onClick={deleteOne}
            >
                Delete One
            </button>
        </div>
    );
}

export default DeleteOneButton;
