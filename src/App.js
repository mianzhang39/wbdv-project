import Search from "./components/search";
import {BrowserRouter, Route} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Homepage from "./components/homepage/homepage";
import Details from "./components/details/details";
import Home from './components/homepage/linktohomepage';
import PrivateProfile from "./components/profile/privateProfile";
import PublicProfile from "./components/profile/publicProfile";
import SellBooks from "./components/details/sell-books";
import LikeList from "./components/details/likes-list";
import AboutUs from "./components/logo-slogan-navigator/about-us";
import Following from "./components/profile/following";
import FollowedBy from "./components/profile/followedby";
import Comments from "./components/profile/comments";
import Liked from "./components/profile/liked";

function App() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Route
                    exact={true}
                    path={'/'}
                    component={Home}
                    ></Route>

                <Route
                    exact={true}
                    path={[
                        "/profile",
                        "/profile/:userId",
                        // "/profile/:role"
                    ]}>
                    <PrivateProfile/>
                </Route>

                <Route
                    exact={true}
                    path={["/aboutus"]}>
                    <AboutUs/>
                </Route>

                <Route
                    exact={true}
                    path={["/followingby"]}>
                    <FollowedBy/>
                </Route>

                <Route
                    exact={true}
                    path={["/following"]}>
                    <Following/>
                </Route>

                <Route
                    exact={true}
                    path={["/comments"]}>
                    <Comments/>
                </Route>

                <Route
                    exact={true}
                    path={["/liked"]}>
                    <Liked/>
                </Route>
















                <Route
                    exact={true}
                    path={["/signin"]}>
                    <SignIn/>
                </Route>

                <Route
                    exact={true}
                    path={["/signup"]}>
                    <SignUp/>
                </Route>

                <Route
                    exact={true}
                    path={[
                        "/homepage",
                        // "/homepage/:role"
                    ]}>
                    <Homepage/>
                </Route>

                <Route
                    exact={true}
                    path={[
                        // "/search",
                        // "/:role/search/:title",
                        "/search/:title"
                    ]}>
                    <Search/>
                </Route>

                <Route
                    exact={true}
                    path={[
                        // "/:role/details/:ID",
                        "/details/:ID"
                    ]}>
                    <Details/>
                </Route>

                <Route
                    exact={true}
                    path={["/:role/details/:ID/sell"]}>
                    <SellBooks/>
                </Route>

                <Route
                    exact={true}
                    path={["/:ID/likes"]}>
                    <LikeList/>
                </Route>

            </BrowserRouter>
        </div>
    );
}

export default App;