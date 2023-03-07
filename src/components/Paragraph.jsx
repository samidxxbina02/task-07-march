import React, { useState } from "react";

const Paragraph = () => {
  const [inputValue, setInputValue] = useState("");
  const [paragraphs, setParagraphs] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setParagraphs([...paragraphs, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Add Paragraph</button>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Paragraph;
