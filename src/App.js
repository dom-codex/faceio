import logo from './logo.svg';
import './App.css';
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
      <Route component={LookUpResult} path={"/supervisor/lookup"}/>
      <Route component={Attendance} path={"/exam/attendance"}/>
    </div>
  );
}
/*download icon
submit icon
next icon
logout icon*/
export default App;
