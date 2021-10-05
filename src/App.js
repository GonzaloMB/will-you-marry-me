import React from "react";
import "./App.css";
import Confetti from "react-confetti";
class App extends React.Component {
  move() {
    const height = 400;
    const width = 400;
    const btn = document.getElementById("myDIV");

    btn.addEventListener("mouseover", () => {
      let randY = Math.floor(Math.random() * height + 1);
      let randX = Math.floor(Math.random() * width + 1);
      btn.style.top = randY + "px";
      btn.style.right = randX + "px";
    });
  }

  popupShow() {
    var popup = document.getElementById("myPopup");
    var confetti = document.getElementById("confetti");
    popup.classList.toggle("show");
    confetti.classList.toggle("yes");
  }

  render() {
    return (
      <div className="App">
        <div className="merry-counter">
          <img src="./ring.png" className="App-logo" />
          <h1>Will you marry me ?</h1>
          <div className="button-counter" id="tsparticles">
            <button className="yes-btn popup btnParty" onClick={this.popupShow}>
              Yes 😍
              <span className="popuptext" id="myPopup">
                YEY! I already knew your answer 💕
              </span>
            </button>
            <button id="myDIV" className="no-btn" onMouseOver={this.move}>
              No 😢
            </button>
          </div>
        </div>
        <Confetti id="confetti" className="confetti" />
      </div>
    );
  }
}

export default App;
