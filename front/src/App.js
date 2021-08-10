import { Route, Switch } from "react-router";
import WorkLog from "./pages/Worklog/WorkLog";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Header from "./layouts/Header/Header";
import { BrowserRouter } from "react-router-dom";
import DashBoardAD from "pages/Dashboard/DashBoardAD";
import NoticeList from "pages/Notice/NoticeList/noticelist";
import noticedetail from "pages/Notice/NoticeDetail/noticedetail";
import noticeupload from "pages/Notice/NoticeUpload/noticeupload";
import recipedetail from "pages/Recipe/RecipeDetail";
import RecipeList from "pages/Recipe/RecipeList";
import handoverupload from "pages/Handover/HandoverUpload";
import handoverlist from "pages/Handover/HandoverList";
import handoverdetail from "pages/Handover/HandoverDetail";
import profile from "pages/Profile";
import StaffList from "pages/Staff/StaffList";
import Manual from "pages/Manual";

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
            <Route exact path="/notice" component={NoticeList} />
            <Route exact path="/notice/detail" component={noticedetail} />
            <Route exact path="/notice/upload" component={noticeupload} />
            <Route exact path="/menu/:categoryid?" component={RecipeList} />
            <Route exact path="/menu/detail" component={recipedetail} />
            <Route exact path="/handoverlist" component={handoverlist} />
            <Route exact path="/handvoer/upload" component={handoverupload} />
            <Route exact path="/handvoer/detail" component={handoverdetail} />
            <Route exact path="/profile" component={profile} />
            <Route exact path="/staff" component={StaffList} />
            <Route exact path="/manual/:categoryid?" component={Manual} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
