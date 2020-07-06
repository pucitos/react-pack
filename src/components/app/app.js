import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './app.scss';

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// Containers
//const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));

// Pages
const Home = React.lazy(() => import("../../views/pages/home"));
const Page404 = React.lazy(() => import("../../views/pages/page404"));
const Page500 = React.lazy(() => import("../../views/pages/page500"));


function App() {
  return (
    

<React.Suspense fallback={loading()}>
  <Router>
          <Switch>
            <Route
              exact
              path="/"
              name="Home Page"
              render={(props) => <Home {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />
            <Route path="*" render={(props) => <Page404 {...props} />} />
          </Switch>
        </Router>
        </React.Suspense>
  );
}

export default App;