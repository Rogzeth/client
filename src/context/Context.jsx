import {createContext, useState, useEffect} from "react";

export const Context = createContext();

export function Provider(props) {
  const [user, setUser] = useState({})
  // const test = {
  //   id: 1,
  //   username: "Admin",
  //   email: "a@gmail.com"
  // }
  //
  // useEffect(() =>setUser({...test}), []);

  return (
    <Context.Provider value={{user, setUser}}>
      {props.children}
    </Context.Provider>
  )
}


