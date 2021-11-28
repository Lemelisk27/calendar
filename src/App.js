import React, {Fragment} from "react";
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom"
import Calendar from "./calendar";
import Datenav from "./datenav"

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Navigate to="/viewswitch"/>}/>
          <Route exact path="/viewswitch" element={<Calendar />}/>
          <Route exact path="/datenav" element={<Datenav />}/>
          <Route path="*" element={<Navigate to="/viewswitch"/>}/>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
