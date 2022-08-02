import { useEffect } from "react";
import "./App.css";
import { getData } from "./GraphQL/graphQL";

function App() {
  useEffect(() => {
    getData() //
      .then(res => console.log(res));
  }, []);

  return <div className='App'>GraphQL</div>;
}

export default App;
