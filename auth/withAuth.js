import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";
import { useContext } from 'react'

const withAuth = (WrappedComponent) => {
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const router = useRouter();

      const [isAuthed, setIsAuthed] = useContext(AuthContext)
      
      // If there is no access token we redirect to "/" page.
      if (!isAuthed.authed) {
        router.replace("/");
        return null;
      }

      // If this is an accessToken we just render the component that was passed with all its props

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;