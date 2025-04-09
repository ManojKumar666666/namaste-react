const User = ({ name, location }) => {
  return (
    <div className="user">
      <h1>Name: {name}</h1>
      <h3>Location:{location}</h3>
    </div>
  );
};
export default User;
