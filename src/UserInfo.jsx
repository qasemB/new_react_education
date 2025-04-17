const UserInfo = ({ name, age, email, handleDelete }) => {

  return (
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Email: {email}</li>
        <li>
          <button onClick={handleDelete}>Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;
