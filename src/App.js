import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./jsx/components/NavBar";
import Footer from "./jsx/components/Footer";
import Home from "./jsx/pages/Home";
import EditPage from "./jsx/pages/EditPage";
import Cards from "./jsx/pages/Cards";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

function App() {
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }

  return (
    <AlertProvider template={AlertTemplate} {...options}>
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/cards/:id/edit" component={EditPage}/>
        <Route path="/cards">
          <Cards />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
    </AlertProvider>
  );
}

export default App;
