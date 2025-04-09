import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "Manoj",
        id: 777,
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ManojKumar666666");
    const json = await data.json();
    this.setState({ userInfo: json });
  }
  render() {
    const { login, id } = this.state.userInfo;

    return (
      <div className="user">
        <h1>Name: {login}</h1>
        <h3>Location:{id}</h3>
      </div>
    );
  }
}
export default UserClass;
