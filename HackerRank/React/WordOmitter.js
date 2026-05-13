import React, { useState } from "react";

const OMITTED_WORDS = ["a", "the", "and", "or", "but"];

function WordOmitter({ omittedWords = OMITTED_WORDS }) {
  const [inputText, setInputText] = useState("");
  const [omitWords, setOmitWords] = useState(true);

  const filterText = (text) => {
    return text
      .split(" ")
      .filter((word) => !omittedWords.includes(word.toLowerCase()))
      .join(" ");
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const toggleOmitWords = () => {
    setOmitWords((prev) => !prev);
  };

  const clearFields = () => {
    setInputText("");
  };

  const outputText = omitWords ? filterText(inputText) : inputText;

  return (
    <div className="omitter-wrapper">
      <textarea placeholder="Type here..." value={outputText} onChange={handleInputChange} data-testid="input-area" />
      <div>
        <button onClick={toggleOmitWords} data-testid="action-btn">
          {omitWords ? "Show All Words" : "Omit Words"}
        </button>
        <button onClick={clearFields} data-testid="clear-btn">
          Clear
        </button>
      </div>
      <div>
        <h2>Output:</h2>
        <p data-testid="output-text">{outputText}</p>
      </div>
    </div>
  );
}

export { WordOmitter };
