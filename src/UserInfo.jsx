const UserInfo = ({ name, age, email }) => {
  const handleDelete = (e,value) => {
    console.log(value);
  };
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };
  return (
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Email: {email}</li>
        <li>
          <button onClick={(e)=>handleDelete(e,"test")}>Delete</button>
          {/* <input type="text" onChange={handleChange} /> */}
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;
