import React, { useState } from "react";

const OMITTED_WORDS = ["a", "the", "and", "or", "but"];

function WordOmitter({ omittedWords = OMITTED_WORDS }) {
  const [inputText, setInputText] = useState("");
  const [showText, setShowText] = useState("");
  const [omitWords, setOmitWords] = useState(true);

  const filterText = (str) => {
    return str
      .split(" ")
      .filter((t) => !omittedWords.includes(t))
      .join(" ");
  };

  const handleInputChange = (e) => {
    let text = e.target.value;
    setInputText(text);

    if (omitWords) {
      text = filterText(text);
    }
    setShowText(text);
  };

  const toggleOmitWords = () => {
    setShowText(omitWords ? inputText : filterText(inputText));
    setOmitWords(!omitWords);
  };

  const clearFields = () => {
    setInputText("");
    setShowText("");
  };

  const getProcessedText = () => {
    return omitWords ? filterText(inputText) : inputText;
  };

  return (
    <div className="omitter-wrapper">
      <textarea placeholder="Type here..." value={showText} onChange={handleInputChange} data-testid="input-area" />
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
        <p data-testid="output-text">{getProcessedText()}</p>
      </div>
    </div>
  );
}

export { WordOmitter };
