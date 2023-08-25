import Button from "./Button.js";
import { memo, useState } from "react";
import PropTypes from "prop-types";

function App() {
  const [value, setValue] = useState(50);
  Button.propTypes = {
    fontSize: PropTypes.number,
  };
  const changeValue = () => {
    setValue((current) => current + 1);
  };
  const MemorizedButton = memo(Button);
  return (
    <div>
      <h1 onClick={changeValue}>hellow</h1>
      <MemorizedButton fontSize={value} />
      <MemorizedButton fontSize={30} />
    </div>
  );
}

export default App;
