import logo from "./logo.svg";
import "./App.css";
import { Fragment, useState } from "react";

function App() {
  const [wordCount, setWordCount] = useState(0);
  const [lineCount, setLineCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [userInput, setUserInput] = useState("");

  function handleChange(event) {
    setUserInput(event.target.value);
    setCharacterCount(event.target.value.length);
    setWordCount(() => {
      let words = event.target.value.split(" ");
      return words.filter((word) => word !== "").length;
    });
    // setLineCount(() => {
    //   let text = event.target.value.split("/n").length;
    //   return text;
    // });
    setSentenceCount(() => {
      let sentence = event.target.value.split(".");
      return sentence.filter((sentence) => sentence !== "").length;
    });
  }
  return (
    <Fragment>
      <div className="background">
        <div className="header">
          <nav className="navbar">
            <p>Word Counter</p>
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
              <br />
              <span className="count">{characterCount}</span>
            </p>
            <p>
              Words <br />
              <span className="count">{wordCount}</span>
            </p>
            <p>
              Lines
              <br /> <span className="count">{lineCount}</span>
            </p>
            <p>
              Sentence <br /> <span className="count">{sentenceCount}</span>
            </p>
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
