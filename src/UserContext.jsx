import { createContext, useState } from "react";

const initialUsers = [
  { id: 1, name: "محمد حسینی", email: "mohammad@hosseini.com" },
  { id: 2, name: "علی رضایی", email: "ali@rezai.com" },
  { id: 3, name: "مهدی احمدی", email: "mehdi@ahmadi.com" },
  { id: 4, name: "سارا موسوی", email: "sara@mousavi.com" },
  { id: 5, name: "حسین قلی", email: "hossein@goli.com" },
  { id: 6, name: "فاطمه محمدی", email: "fatima@mohammadi.com" },
  { id: 7, name: "امیر حسین پور", email: "amir@hosseinpour.com" },
  { id: 8, name: "زهرا علی پور", email: "zahra@alipour.com" },
];

export const UserContext = createContext({
    users: [],
    setUsers: () => {},
    addUser: () => {},
    deleteUser: () => {},
    hasPermission: false,
    setHasPermission: () => {},
});

const UserContextProvider = ({ children }) => {
  const [hasPermission, setHasPermission] = useState(true);
  const [users, setUsers] = useState(initialUsers);
  const addUser = (user) => {
    setUsers([...users, user]);
  };
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <UserContext.Provider value={{ users,setUsers, addUser, deleteUser, hasPermission, setHasPermission }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
