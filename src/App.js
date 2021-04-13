import Search from "./components/search";
import {BrowserRouter, Route} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Homepage from "./components/homepage/homepage";
import Details from "./components/details/details";

function App() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Route
                    exact={true}
                    path={["/SignIn"]}>
                    <SignIn/>
                </Route>

                <Route
                    exact={true}
                    path={["/SignUp"]}>
                    <SignUp/>
                </Route>

                <Route
                    exact={true}
                    path={["/", "/homepage/:role"]}>
                    <Homepage/>
                </Route>

                <Route
                    exact={true}
                    path={["/search", "/:role/search/:title"]}>
                    <Search/>
                </Route>

                <Route
                    exact={true}
                    path={["/:role/details/:ID"]}>
                    <Details/>
                </Route>

            </BrowserRouter>
        </div>
    );
}

export default App;