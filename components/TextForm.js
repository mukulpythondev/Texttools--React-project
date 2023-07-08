import React, { useState } from "react";

export default function (props) {
  //setText("Type the text");
  const handleupclick = (event) => {
    event.preventDefault();

    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleclclick = (event) => {
    event.preventDefault();

    setText("");
  };
  const handleloclick = (event) => {
    event.preventDefault();

    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  const totalWords = text.split(" ").length;
  const averageTimePerWord = 0.3;
  const totalTimeInSeconds = totalWords * averageTimePerWord;
  const minutes = Math.floor(totalTimeInSeconds / 60);
  const seconds = Math.round(totalTimeInSeconds % 60);
  return (
    <>
      <div style={{ color: props.mode === "dark" ? `white` : "black" }}>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              <h2>{props.heading}</h2>
            </label>
            <textarea
              className="form-control"
              style={{
                backgroundColor: props.mode === "dark" ? `#113361` : "white",color: props.mode === "dark" ? `white` : "black"
              }}
              id="exampleFormControlTextarea1"
              rows="7"
              value={text}
              onChange={handleonchange}
            ></textarea>
          </div>
          <button
            className="btn btn-primary my-2 mz-2 "
            onClick={handleupclick}
          >
            Uppercase
          </button>
          <button
            className="btn btn-primary my-2 mx-2 "
            onClick={handleloclick}
          >
            Lowercase
          </button>
          <button
            className="btn btn-primary my-2 mx-2 "
            onClick={handleclclick}
          >
            Clear
          </button>
        </form>
        <div className="container my-4">
          <h2>Text Stats</h2>
          <p>
            No of words {totalWords} and No of characters {text.length}
          </p>
          <p>
            Time taken to read: {minutes} minutes {seconds} seconds
          </p>
          <h3>Preview</h3>
          <p> {text.length>0?text:"Enter the text in text box to preview it."} </p>
        </div>
      </div>
    </>
  );
}
