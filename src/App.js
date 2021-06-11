import { Route, Switch } from "react-router";
import WorkLog from "./pages/worklog/WorkLog";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Header from "./layouts/header/Header";
import { BrowserRouter } from "react-router-dom";
import DashBoardAD from "pages/dashboard/DashBoardAD";

function App() {
  return (
    <>
      {/*헤더랑 화면이 같이 뜨게 하는법 */}
      <BrowserRouter>
        <Header />
        <div>
          <Switch>
            <Route path="/worklog" component={WorkLog} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/dashboard" component={DashBoardAD} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
