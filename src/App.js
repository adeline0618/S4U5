import { useEffect, useRef, useState } from "react";
import "./App.css";
import { getData } from "./GraphQL/graphQL";

function App() {
  const [list, setList] = useState([]);
  const inputRef = useRef();
  useEffect(() => {
    getData() //
      .then(res => {
        setList(res);
      });
  }, []);

  const handleClick = async () => {
    const number = inputRef.current.value;
    console.log(number);
    await getData(number) //
      .then(res => {
        setList(res);
      });
  };

  return (
    <div className='App'>
      GraphQL
      {/* <input ref={inputRef} type='number' /> */}
      {/* <button onClick={handleClick}>show</button> */}
      {list.map((el, index) => (
        <p key={index}>{el.title}</p>
      ))}
    </div>
  );
}

export default App;
