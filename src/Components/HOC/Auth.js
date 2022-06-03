import React from "react";

import { useUserContext } from "../Utils/context";

const AuthGard = (Component) => {
  const user = useUserContext();

  console.log(user);

  class AuthHoc extends React.Component {
    authCheck = () => {
      if (user) {
        return <Component />;
      } else {
        console.log("hello");
      }
    };

    render() {
      return this.authCheck();
    }
  }

  return AuthHoc;
};

export default AuthGard;
