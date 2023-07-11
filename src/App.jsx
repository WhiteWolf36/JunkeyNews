import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <>
        <BrowserRouter>
          <div>
            <Navbar />
            <LoadingBar
              height={3}
              color="#FF0000"
              progress={this.state.progress}
            />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <News
                    setProgress={this.setProgress}
                    pageSize={15}
                    key="general"
                    country="us"
                    category="general"
                  />
                }
              ></Route>
              <Route
                exact
                path="/business"
                element={
                  <News
                    setProgress={this.setProgress}
                    pageSize={15}
                    key="business"
                    country="us"
                    category="business"
                  />
                }
              ></Route>
              <Route
                exact
                path="/entertainment"
                element={
                  <News
                    setProgress={this.setProgress}
                    pageSize={15}
                    key="entertainment"
                    country="us"
                    category="entertainment"
                  />
                }
              ></Route>
              <Route
                exact
                path="/general"
                element={
                  <News
                    setProgress={this.setProgress}
                    pageSize={15}
                    key="general"
                    country="us"
                    category="general"
                  />
                }
              ></Route>
              <Route
                exact
                path="/health"
                element={
                  <News
                    setProgress={this.setProgress}
                    pageSize={15}
                    key="health"
                    country="us"
                    category="health"
                  />
                }
              ></Route>
              <Route
                exact
                path="/science"
                element={
                  <News
                    setProgress={this.setProgress}
                    pageSize={15}
                    key="science"
                    country="us"
                    category="science"
                  />
                }
              ></Route>
              <Route
                exact
                path="/sports"
                element={
                  <News
                    setProgress={this.setProgress}
                    pageSize={15}
                    key="sports"
                    country="us"
                    category="sports"
                  />
                }
              ></Route>
              <Route
                exact
                path="/technology"
                element={
                  <News
                    setProgress={this.setProgress}
                    pageSize={15}
                    key="technology"
                    country="us"
                    category="technology"
                  />
                }
              ></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </>
    );
  }
}
