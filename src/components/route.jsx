import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  } from "react-router-dom";
import PlayWithBoss from './ready-play-boss'
import RoomOnline from './room-online'
import PlayOnline from './play-online'
import Home from './home'

export default () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/room-online" component={RoomOnline} />
        <Route exact path="/play-online/roomId=:roomId" component={PlayOnline}/>
        <Route exact path="/play-with-boss" component={PlayWithBoss}/>
      </Switch>
    </div>
  );
}