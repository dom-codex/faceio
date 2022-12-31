import logo from './logo.svg';
import './App.css';
import SignInPage from './pages/signin';
import Header from './components/header';
import StudentDashBoard from './pages/studentDashboard';
import SupervisorLogin from './pages/supervisorLogin';
import SupervisorDashboard from './pages/supervisordashboard';

function App() {
  return (
    <div className="App">
<SupervisorDashboard/>
    </div>
  );
}

export default App;
