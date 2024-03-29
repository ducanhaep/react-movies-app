import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

//Styles
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./Theme";

const App = () => (
  <Router>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  </Router>
);

export default App;
