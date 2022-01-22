import { Switch, Route } from "react-router";
import App from "./App";
import Home from './components/Home'


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={App}/>
        </Switch>
        )
}