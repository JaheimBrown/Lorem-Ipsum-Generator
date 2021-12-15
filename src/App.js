import React, { useState } from "react";
import Data from "./Data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) {
      return;
    }
    if (amount >= Data.length) {
      amount = Data.length;
    }
    setText(Data.slice(0, amount));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form">
        <h1 className="title">Tired of boring lorem ipsum?</h1>
        <div className="items">
          <label htmlFor="amount">Paragraphs: </label>
          <input
            type="number"
            name="amount"
            id="amount"
            min={0}
            max={Data.length}
            value={count}
            onChange={e => setCount(e.target.value)}
          />
          <button className="btn" type="submit">
            GENERATE
          </button>
        </div>
      </form>

      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </div>
  );
}

export default App;
