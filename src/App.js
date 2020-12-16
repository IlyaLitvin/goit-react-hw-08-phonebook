import React, { Component, lazy, Suspense } from "react";
import routes from "./routes.js";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import UserMenu from "./components/UserMenu/UserMenu";
import { connect } from "react-redux";
import authOperations from "./redux/auth/authOperations";
import Loader from "./components/Loading/Loading";

const AsynkHomeView = lazy(() => import("./views/HomeView.js"));
const AsynkLoginView = lazy(() => import("./views/LoginView.js"));
const AsynkRegisterView = lazy(() => import("./views/RegisterView.js"));
const AsynkContactsView = lazy(() => import("./views/ContactsView.js"));

const styles = {
  loading: {
    color: "blue",
  },
};

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Suspense
            fallback={
              <>
                <h1 style={styles.loading}>
                  Loading... <Loader />
                </h1>
              </>
            }
          >
            {this.props.isAuthenticated && <UserMenu />}
            <Switch>
              <Route exact path={routes.HomeView} component={AsynkHomeView} />
              <Route exact path={routes.LoginView} component={AsynkLoginView} />
              <Route
                exact
                path={routes.RegisterView}
                component={AsynkRegisterView}
              />
              <Route
                exact
                path={routes.ContactsView}
                component={AsynkContactsView}
              />
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token,
});

export default connect(mapStateToProps, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
