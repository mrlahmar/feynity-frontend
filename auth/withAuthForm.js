import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";
import { useContext } from 'react'

const withAuth = (WrappedComponent) => {
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const router = useRouter();

      //const accessToken = localStorage.getItem("accessToken");
      const [isAuthed, setIsAuthed] = useContext(AuthContext)
      
      // If he accessed this page when he's logged he should be redirected
      if (isAuthed.authed) {
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