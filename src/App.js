import React from 'react';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';

import ClientList from './containers/ClientList'
import ClientEdit from './containers/ClientEdit'
import ClientAdd from './containers/ClientAdd';

import store from './stores/rootStore'

function App(props) {
  return (

    <Provider store={store}>
  		<Router>
  	    <NavigationBar/>
      	<Container>
      		<Row>
      			<Col lg={12} style={{marginTop: "20px"}}>
      				<Switch>
      					<Route path = "/" exact component = {Welcome}/>
      					<Route path = "/clients" exact component = {ClientList}/>
                <Route path = "/clients/:id" exact component = {ClientEdit}/>
                <Route path = "/add" exact component = {ClientAdd}/>
      				</Switch>
      			</Col>
      		</Row>
      	</Container>
      </Router>
    </Provider>
  );
}
export default App;