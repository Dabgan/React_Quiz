import React from "react";

function SubmitButton(props) {
    const { onSubmit } = props;
    return (
        <button className="btn" onClick={onSubmit}>
            Submit answer
        </button>
    );
}

export default SubmitButton;
