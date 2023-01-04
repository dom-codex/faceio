/*global someFunction, a*/
/*eslint no-undef: "error"*/
import React,{useEffect} from "react"
import {Route} from "wouter"
import SignInPage from './pages/signin';
import StudentDashBoard from './pages/studentDashboard';
import SupervisorLogin from './pages/supervisorLogin';
import SupervisorDashboard from './pages/supervisordashboard';
import LookUpResult from './pages/lookupresult';
import Attendance from './pages/attendance';
function App() {
  return (
    <div className="App">
      <Route component={SignInPage} path={"/student/login"}/>
      <Route component={StudentDashBoard} path={"/student/dashboard"}/>
      <Route component={SupervisorLogin} path={"/supervisor/login"}/>
      <Route component={SupervisorDashboard} path={"/supervisor/dashboard"}/>
      <Route path={"/supervisor/lookup/:matric"}>{(params)=><LookUpResult matric={params.matric}/>}</Route>
      <Route component={Attendance} path={"/exam/attendance"}/>
    </div>
  );
}
/*download icon
submit icon
next icon
logout icon*/
export default App;
