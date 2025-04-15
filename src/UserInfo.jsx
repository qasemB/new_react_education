const UserInfo = ({ name, age, email }) => {
  return (
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Email: {email}</li>
      </ul>
    </div>
  );
};

export default UserInfo;
