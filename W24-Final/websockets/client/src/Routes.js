import {Switch, Route} from 'react-router-dom'
import './App.css'

import { lazy, Suspense } from 'react'

const Login = lazy(() => import('./components/Login'))
const Header = lazy(() => import('./components/Header'))
const Home = lazy(() => import('./components/Home'))
const Chat = lazy(() => import('./components/Chat'))

export default function Routes() {

    return <Suspense fallback={<h4> ...Loading</h4>}>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/home'>
                <Header />
                <Home />
            </Route>
            <Route exact path='/chat'>
                <Header />
                <Chat />
            </Route>
            <Route component={Unknown}/>
        </Switch>
    </Suspense>
}

function Unknown() {
    return <div>Error 404! Page not found</div>
}