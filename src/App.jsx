import UserInfo from "./UserInfo";

const App = () => {
  const users = [
    { name: "John Doe", age: 25, email: "john.doe@example.com" },
    { name: "Jane Doe", age: 26, email: "jane.doe@example.com" },
    { name: "John Smith", age: 30, email: "john.smith@example.com" },
    { name: "Jane Smith", age: 31, email: "jane.smith@example.com" },
  ];

  return (
    <div>
      {users.map((user) => (
        <UserInfo key={user.name} {...user} />
      ))}
    </div>
  );
};

export default App;
