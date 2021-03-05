import {
    BrowserRouter as Router,
    Switch,
    Route

} from "react-router-dom"
import {Farm} from "./pages/Farm";
import {NotFound} from "./pages/NotFound";
import {MainPage} from "./pages/MainPage";


function App() {
    return (

        <Router>

            <Switch>
                <Route path="/farm">
                    <Farm/>
                </Route>
                <Route exact path="/">
                    <MainPage/>
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>

        </Router>

    );
}


export default App;
