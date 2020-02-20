import React from "react";

function DeleteOneButton({ deleteOne, isAvailable }) {
    const buttonStyle = isAvailable ? "" : "btn-disabled";

    return (
        <div className="prompt">
            <button
                className={"btn btn-prompt " + buttonStyle}
                onClick={() => deleteOne(isAvailable)}
            >
                Delete one
            </button>
        </div>
    );
}

export default DeleteOneButton;
