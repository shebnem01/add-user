import React, { createContext, useState } from "react";

export const globalContext = createContext();
function GlobalProvider({ children }) {
  const [users, setUsers] = useState([
    {
      id:1,
      firstName: "Admin",
      lastName: "Lorem",
      email: "admin@gmail.com",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQVL91YzGDh4zghVN0-Ui_2NA2kmPpRnqFw&usqp=CAU",
      bio: "Game of as rest time eyes with of this it. Add was music merry any truth since going. Happiness she ham but instantly put departure propriety. She amiable all without say spirits shy clothes morning. ",
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
