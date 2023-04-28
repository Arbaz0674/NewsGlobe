import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API_KEY;
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  apiKey={this.apiKey}
                  key="general"
                  pageSize={6}
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  apiKey={this.apiKey}
                  key="business"
                  pageSize={6}
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  apiKey={this.apiKey}
                  key="entertainment"
                  pageSize={6}
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  apiKey={this.apiKey}
                  key="health"
                  pageSize={6}
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  apiKey={this.apiKey}
                  key="science"
                  pageSize={6}
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  apiKey={this.apiKey}
                  key="sports"
                  pageSize={6}
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  apiKey={this.apiKey}
                  key="technology"
                  pageSize={6}
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
        {/* <News apiKey={this.apiKey} pageSize={6} category="technology" /> */}
      </div>
    );
  }
}
