import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = props => {
    const [user, setUserStatus] = useState( {loggedIn: false, userId: '', name : '', job:'',email:'',address:'',phone:'' } );
   
    return(
      <AuthContext.Provider value={[user, setUserStatus]}>
        {props.children}
      </AuthContext.Provider>
    )
  }
export const UserConsumer = AuthContext.Consumer;
export default AuthContext;
