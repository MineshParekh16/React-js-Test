import React, { Component } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import SimpleReactValidator from "simple-react-validator";
import { APIServices } from "../../services/Common";
import { SIGNIN_URL } from "../../constant/api";

class Login extends Component<any,any> {
  toast: any;
  constructor(props: any) {
    super(props);
    this.state = {
      postUser: {
        email: "rahul.trivedi+11@brainvire.com",
        password: "Brain@2019",
      },
      validator: new SimpleReactValidator({
        messages: {
          alpha: "Please Enter the Valid Name",
          email: "Please Enter the Valid Email.",
          alpha_num: "Must only container letters and numbers",
          default: "Please Enter the value of required", // will override all messages
        },
      }),
    };
  }

  onEmailChange = (e: any) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      postUser: { ...this.state.postUser, email: value },
    });
  };

  onPasswordChange = (e: any) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      postUser: { ...this.state.postUser, password: value },
    });
  };

  savePost = (ev: any) => {
    ev.preventDefault();
    if (this.state.validator.allValid()) {
      const { actions, navigate } = this.props;
      const data = {
        email: this.state.postUser.email,
        password: this.state.postUser.password,
        role: "ADMIN",
      };
      actions.showLoader();
      APIServices.postCmsData(SIGNIN_URL, data).then(
        (res: any) => {
          const data = JSON.stringify(res.data.data);
          localStorage.setItem("rowData", data);
          setTimeout(() => {
            navigate("/Dashboard");
          }, 1500);
          actions.fetchUsers(res);
          actions.hideLoader();
        },
        (err) => {
          actions.showLoader();
          const error = err.response.data.meta.message;
          alert(error);
          actions.hideLoader();
        }
      );
    } else {
      this.state.validator.showMessages();
      this.forceUpdate();
    }
  };

  useAuth = () => {
    const user = localStorage.getItem("rowData");
    if (user) {
      return true;
    } else {
      return false;
    }
  };
  user = this.useAuth();

  render() {
    const footer = (
      <span className="login-bottom-btns">
        <Button
          label="Login"
          icon="pi pi-check"
          className="p-button-success"
          onClick={this.savePost}
          type="submit"
        />
      </span>
    );
    const { validator, postUser } = this.state;
    return (
      <div className="login-container">
        <Card
          title="Login"
          subTitle="Sign in to your account"
          className="Login-card"
          footer={footer}
        >
          <div className="p-input-icon-left">
            <i className="pi pi-user" />
            <InputText
              placeholder="Enter Username"
              value={postUser?.email}
              onChange={this.onEmailChange}
            />
          </div>
          {validator.message("email", postUser?.email, "required|email", {
            className: "text-danger",
          })}
          <br />
          <div className="p-input-icon-left">
            <i className="pi pi-lock  " />
            <Password
              toggleMask
              placeholder="Enter Password"
              onSubmit={this.savePost}
              value={postUser?.password}
              onChange={this.onPasswordChange}
            />
          </div>
          {validator.message("Password", postUser?.password, "required", {
            className: "text-danger",
          })}
          <br />
        </Card>
      </div>
    );
  }
}





export default Login;
