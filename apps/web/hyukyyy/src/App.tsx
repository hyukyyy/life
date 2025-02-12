import './styles/index.css'
import './styles/reset.css'
import {Suspense} from "react";
import Routes from "@/router";

function App() {
  return <Suspense fallback={<></>}>
    {Routes()}
  </Suspense>;
}

export default App;
