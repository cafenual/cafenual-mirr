import { Route, Switch } from "react-router";
import WorkLog from "./pages/Worklog/WorkLog";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Header from "./layouts/Header/Header";
import { BrowserRouter } from "react-router-dom";
import DashBoardAD from "pages/Dashboard/DashBoardAD";
import Sidemenu from "layouts/Sidemenu/Sidemenu";

function App() {
  return (
    <>
      {/*헤더랑 화면이 같이 뜨게 하는법 */}
      <BrowserRouter>
        <Header />
        <Sidemenu />
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
