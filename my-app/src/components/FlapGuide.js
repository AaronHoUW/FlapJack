import * as React from "react";
import sea from '../imgs/bg-sea.png'
// import sea from "../imgs/sea.png"
import rectangle from "../imgs/excel.png";
import bubble from "../imgs/bubbles.png";
import pancake from "../imgs/flapjack-guide.png";
import userPlaceholder from "../imgs/user.png";
import fish from "../imgs/sally.png";

const App = () => {
  return (<>
    <img src={sea} style={{width: '100%' }} />;
    <div>
      <img className="speech" src={require("../imgs/text.png")} />
      <img className="talk" src={require("../imgs/interaction.png")} />
      <img className="excel" src={require("../imgs/excel.png")} />
      <img className="bubble" src={require("../imgs/bubbles.png")} />
      <img className="fish" src={require("../imgs/sal.png")} />
      <img className="flapjack-guide" src={require("../imgs/flapjack-guide.png")} />
      <img className="user-placeholder" src={require("../imgs/user.png")} />
    </div>

    </>);
};

export default App;

