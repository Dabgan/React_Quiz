import React from "react";

function DeleteOneButton({ deleteOne, isAvailable, loaderIcon }) {
    const buttonStyle = isAvailable ? "" : "btn-disabled";
    const isIconVisible = loaderIcon ? "none" : "inline-block ";

    return (
        <div className="prompt">
            <button
                style={{ display: `${isIconVisible}` }}
                className={"btn btn-prompt " + buttonStyle}
                onClick={() => deleteOne(isAvailable)}
            >
                Delete one
            </button>
        </div>
    );
}

export default DeleteOneButton;
