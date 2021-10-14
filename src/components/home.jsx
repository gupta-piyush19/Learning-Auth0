import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    loginWithRedirect,
    loginWithPopup,
    isLoading,
    error,
    user,
    isAuthenticated,
    logout,
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
  }
  return (
    <div>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <>
          <button onClick={loginWithRedirect}>Login With Redirect</button>
          <button onClick={loginWithPopup}>Login With Popup</button>
        </>
      )}
      <Link to="/secret" className="secret-btn">
        Secret
      </Link>
      {user && (
        <>
          {user.name && <div>Name - {user.name}</div>}
          {user.nickname && <div>Nickname - {user.nickname}</div>}
          {user.family_name && <div>Family Name - {user.family_name}</div>}
          {user.email && <div>Email - {user.email}</div>}
        </>
      )}
    </div>
  );
};

export default Home;
