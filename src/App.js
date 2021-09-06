import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorScreen from './screens/ErrorScreen';
import HomeScreen from './screens/HomeScreen/index';
import PostsScreen from './screens/PostsScreen/index';
import AlbumsScreen from './screens/AlbumsScreen/index';
import ToDosScreen from './screens/ToDosScreen/index';
import TopBar from './components/TopBar';
import BreadCrumb from './components/Breadcrumb';

function App() {
  return (
    <main>
      <TopBar/>
      <BreadCrumb/>
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/postagens" component={PostsScreen} />
        <Route path="/albuns" component={AlbumsScreen} />
        <Route path="/to-dos" component={ToDosScreen} />
        <Route component={ErrorScreen} />
      </Switch>
    </main>
  );
}

export default App;
