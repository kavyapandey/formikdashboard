import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import Users from "./Users";
import CreateUser from "./CreateUser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditUser from "./EditUser";
import { UserProvider } from "./userContext";
import Product from "./Product";
import ProductCreate from "./product-create";
import ProductEdit from "./product-edit";

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div class="container-fluid">
              <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <UserProvider>
                  <Route path="/users" component={Users} exact={true} />
                  <Route
                    path="/users/edit/:id"
                    component={EditUser}
                    exact={true}
                  />
                  <Route
                    path="/create-user"
                    component={CreateUser}
                    exact={true}
                  />
                   <Route path="/Product" component={Product} exact={true} />
                <Route
                  path="/product-create"
                  component={ProductCreate}
                  exact={true}
                />
                <Route
                  path="/product/edit/:id"
                  component={ProductEdit}
                  exact={true}
                />
                </UserProvider>
               
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
