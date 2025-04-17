import { useState } from "react";
import UserInfo from "./UserInfo";

const initialUsers = [
  { name: "John Doe", age: 25, email: "john.doe@example.com" },
  { name: "Jane Doe", age: 26, email: "jane.doe@example.com" },
  { name: "John Smith", age: 30, email: "john.smith@example.com" },
  { name: "Jane Smith", age: 31, email: "jane.smith@example.com" },
];


const App = () => {
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (name) => {    
    setUsers((prevUsers)=>{
      const newUsers = prevUsers.filter((user) => user.name !== name);
      return newUsers;
    });
  }
  
  const setSearch = (char)=>{
    const newUsers = initialUsers.filter((user)=>user.name.toLocaleLowerCase().includes(char.toLocaleLowerCase()));
    setUsers(newUsers);
  }


  return (
    <div>
      <input type="text" onChange={(e)=>setSearch(e.target.value)} />
      {users.map((user) => (
        <UserInfo key={user.name} {...user} handleDelete={()=>handleDelete(user.name)} />
      ))}
    </div>
  );
};

export default App;
