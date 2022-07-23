import { Component } from "react";
import { USERS_LIST } from "../constant/api";
import { APIServices } from "../services/Common";
import { Button } from "primereact/button";


class UserListDetails extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            id: 0,
            UserListvalue:[],
        }
    };

    componentDidMount() {
        const { id } = this.props.match.params;
        this.temp(id);
    }

    temp = (id: any) => {
        const url = `${USERS_LIST}/${id}`;
        console.log(url);
        APIServices.getUserData(url).then((res: any) => {
            const data = res.data;
            this.setState({ UserListvalue: data });
            console.log(data);
        }); 
    };

  render () {
    const { email, id, phone, username } = this.state.UserListvalue;
    return (
        <>  
            <div className="UserList" >
                <strong > ID:- {id} </strong> 
                <strong > Email:- {email} </strong> 
                <strong > Phone:- {phone} </strong> 
                <strong > UserName:- {username} </strong> 
            </div>
            <Button label="Back" type="button" onClick={() => window.location.replace("/userlist")}>
            </Button>
        </>
    );
  }
};

export default UserListDetails;