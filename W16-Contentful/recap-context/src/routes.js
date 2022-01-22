import React from 'react'
import {Switch, Route} from 'react-router-dom'

import MainLayout from './hoc/mainLayout';
import Home from './components/home'
import TweetPage from './components/tweetPage'

export default function Routes () {
  return(
      <Switch>
        <Route path="/" exact><MainLayout><Route component = {Home} /></MainLayout></Route>
        <Route path="/tweet/:id" exact><MainLayout><Route component = {TweetPage} /></MainLayout></Route>

        {/* 404 page example  */}
        {/* <Route ><MainLayout><Route component = {PageNotFound}/></MainLayout></Route>  */}
        
      </Switch>
  )
}