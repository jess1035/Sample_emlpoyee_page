import "./App.css";
import Id from './components/Id';
import ZoomIn from './components/ZoomIn';
import {Data} from './components/Data';
function App() {
  return(
  <div className="App">

  <Id
  name={Data.fname}
  designation={Data.des}
  intro={Data.intro}

  />
  <ZoomIn
   name={Data.fname}
   joiningDate={Data.volsince}
   designation={Data.des}
   intro={Data.intro}
  />

  </div>
     );
}

export default App;
