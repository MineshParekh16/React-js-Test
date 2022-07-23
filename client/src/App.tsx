import {Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import UserList from "./pages/UserList";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import UserListDetails from "./pages/UserListDetails";
 

const App = () => {
  return (  
  <Switch>
    <Route exact path='/' component={Login}/>
      <Route path="/userlist" component={UserList} />
        <Route path="/userdetails/:id" component={UserListDetails}/>
  </Switch>
  );
};

export default App;
