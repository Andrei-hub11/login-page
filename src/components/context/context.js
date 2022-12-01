import React from "react";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [navOpen, setNavOpen] = React.useState(false);

  return (
    <UserContext.Provider
      value={{
        addContact: [navOpen, setNavOpen],
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
