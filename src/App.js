import "./App.css";
import Id from "./components/Id";
import ZoomIn from "./components/ZoomIn";
import { Data } from "./components/Data";
import "reactjs-popup/dist/index.css";
import { useState } from "react";

function App() {
  const [popUpValue,setPopUpValue]=useState(false);
  const IDs = Data.map((data) => {
    return (
      
        <>
        <div className="id__click" onClick={(event)=>
          {
            
            setPopUpValue(true)
            console.log(event.target);

          }}>
          <Id 
          name={data.fname} 
          designation={data.des[0]} 
          intro={data.intro} />





          
      
          </div>
        
          <ZoomIn
            name={data.fname}
            trigger={popUpValue}
            setPopUp={setPopUpValue}
            joiningDate={data.volsince}
            designation={data.des}
            intro={data.intro}
            work={data.Work}
            />
       
            </>
    );
  });

  // console.log(IDs)

  return <div className="App">

    {IDs}

    
    </div>;
}

export default App;
