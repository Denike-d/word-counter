import logo from "./logo.svg";
import "./App.css";
import { Fragment, useState } from "react";

function App() {
  const [wordCount, setWordCount] = useState(0);
  const [lineCount, setLineCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [whiteSpace, setWhiteSpace] = useState(0);

  function handleChange(event) {
    setUserInput(event.target.value);
    setCharacterCount(event.target.value.length);
    setWordCount(() => {
      let words = event.target.value.split(" ");
      return words.filter((word) => word !== "").length;
    });
    setLineCount(() => {
      let line = event.target.value.split("\n");
      return line.filter((line) => line !== "").length;
    });
    setSentenceCount(() => {
      let sentence = event.target.value.split(".");
      return sentence.filter((sentence) => sentence !== "").length;
    });
    // setWhiteSpace(() => {
    //   let whiteSpace = event.target.value.split("");
    //   return whiteSpace.filter((whiteSpace) => whiteSpace !== " ").length;
    // });
  }
  return (
    <Fragment>
      <div className="background">
        <div className="header">
          <nav className="navbar">
            <p>
              Word <span>Counter</span>
            </p>
            <div className="navlink">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Log in</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="textarea-background">
          <div className="counter">
            <p>
              Characters
              <span className="count">{characterCount}</span>
            </p>
            <p>
              Words
              <span className="count">{wordCount}</span>
            </p>
            <p>
              Lines
              <span className="count">{lineCount}</span>
            </p>
            <p>
              Sentence<span className="count">{sentenceCount}</span>
            </p>
            {/* <p>
              White-Space
              <br /> <span className="count">{whiteSpace}</span>
            </p> */}
          </div>
          <form>
            <div>
              <textarea
                className="textarea"
                type="textarea"
                onChange={handleChange}
                placeholder="Start typing or paste your text"
                value={userInput}
              ></textarea>
            </div>
          </form>
        </div>

        <footer></footer>
      </div>
    </Fragment>
  );
}

export default App;
