import React, {Fragment} from "react";
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom"
import Calendar from "./calendar";
import Datenav from "./datenav"
import Tooltip from "./tooltip"
import Edit from "./edit"

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Navigate to="/edit"/>}/>
          <Route exact path="/viewswitch" element={<Calendar />}/>
          <Route exact path="/datenav" element={<Datenav />}/>
          <Route exact path="/tooltip" element={<Tooltip />}/>
          <Route exact path="/edit" element={<Edit />}/>
          <Route path="*" element={<Navigate to="/edit"/>}/>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
