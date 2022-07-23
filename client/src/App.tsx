import {Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import UserList from "./pages/User-List";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 

const App = () => {
  return (
    // <>
    //   <Router>
    //     <GoogleAuth />;
    //     <Route path="/" component={UserList} />  
    //   </Router>
    // </>    
  <Switch>
    <Route exact path='/' component={Login}/>
    <Route exact path='/userlist' component={UserList}/>
  </Switch>
  );
};

export default App;
