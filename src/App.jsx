import { useRef } from "react";

const App = () => {
  const textRef = useRef();
  console.log(textRef.current);
  return <div></div>;
};

export default App;
