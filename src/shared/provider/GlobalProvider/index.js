import React, { createContext, useState } from "react";

export const globalContext = createContext();
function GlobalProvider({ children }) {
  const [users, setUsers] = useState([
    {
      id:1,
      firstName: "Kim",
      lastName: "Salam",
      email: "sem",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQVL91YzGDh4zghVN0-Ui_2NA2kmPpRnqFw&usqp=CAU",
      bio: "ewer",
    },
  ]);

  const deleteUser = (id) => {
    let newUsers = [...users];
    let filteredUser = newUsers.filter((item) => item.id !== id);
    setUsers(filteredUser);
  };
  let value = {
    users,
    setUsers,
    deleteUser,
  };
  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
}
export default GlobalProvider;
