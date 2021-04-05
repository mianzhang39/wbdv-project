import Search from "./components/search";
import Details from "./components/details";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Route
                    exact={true}
                    path={["/"]}>
                    <Home/>
                </Route>

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
                    path={["/search", "/search/:title"]}>
                    <Search/>
                </Route>
                <Route
                    exact={true}
                    path={["/details/:ID"]}>
                    <Details/>
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;