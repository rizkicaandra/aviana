import './App.css';
import {
  Switch,
  Route
} from "react-router-dom"
import Login from './pages/login'
import Home from './pages/home'
import Register from './pages/register'
import AddKyc from './pages/addKyc'
import KYC from './pages/kyc'
import DetailKyc from './pages/detailKyc'

function App() {
  return (
    <>
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/detailkyc/:id">
        <DetailKyc />
      </Route>
      <Route path="/addkyc">
        <AddKyc />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/kyc">
        <KYC />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
    </>
  );
}

export default App;
