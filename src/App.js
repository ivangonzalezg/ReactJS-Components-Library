import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/header";
import ImageHover from "./views/imageHover";
import Home from "./views/home";
import List from "./views/list";
import Pricing from "./views/pricing";
import DShading from "./views/3dshading";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Container>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/List" component={List} exact />
            <Route path="/pricing" component={Pricing} exact />
            <Route path="/imagehover" component={ImageHover} exact />
            <Route path="/3dshading" component={DShading} exact />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
