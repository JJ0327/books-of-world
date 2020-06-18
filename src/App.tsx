import * as React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { MainPage, BookPage } from "pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/books" component={BookPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
