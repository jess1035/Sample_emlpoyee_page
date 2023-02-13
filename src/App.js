import "./App.css";
import Id from "./components/Id";
import ZoomIn from "./components/ZoomIn";
import { Data } from "./components/Data";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const IDs = Data.map((data) => {
    return (
      
        <Id name={data.fname} designation={data.des[0]} intro={data.intro} />
      
    );
  });

  const ZoomInS = Data.map((data) => {
    return (
      <ZoomIn
        name={data.fname}
        joiningDate={data.volsince}
        designation={data.des}
        intro={data.intro}
        work={data.Work}
      />
    );
  });

  return (
    <div className="App">
      <Router>
        <>
          <Routes>
            <Route path="/ZoomIn" element={ZoomInS} />
            <Route path="/" element={IDs} />
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
