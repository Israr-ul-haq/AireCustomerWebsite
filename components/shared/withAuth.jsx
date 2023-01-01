import { useRouter } from "next/router";

const withAuth = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const parseJwt = (token) => {
      try {
        return JSON.parse(atob(token.split(".")[1]));
      } catch (e) {
        return null;
      }
    };

    if (typeof window !== "undefined") {
      const Router = useRouter();
      const accessToken1 = localStorage.getItem("aireuser");
      if (accessToken1) {
        return <WrappedComponent {...props} />;
      } else {
        debugger;
        Router.replace("/login");
        return null;
      }
      //   const Router = useRouter();

      //   if (
      //     accessToken1?.exp * 1000 < Date.now() &&
      //     Router.pathname !== "/login" &&
      //     accessToken1?.exp * 1000 < Date.now() &&
      //     Router.pathname !== "/signup" &&
      //     Router.pathname !== "/forgot"
      //   ) {
      //     debugger;
      //     Router.replace("/login");
      //     return null;
      //   } else if (
      //     (accessToken1?.exp * 1000 < Date.now() &&
      //       Router.pathname === "/login") ||
      //     (accessToken1?.exp * 1000 < Date.now() &&
      //       Router.pathname === "/signup") ||
      //     (accessToken1?.exp * 1000 < Date.now() && Router.pathname === "/forgot")
      //   ) {
      //     debugger;
      //     return <WrappedComponent {...props} />;
      //   } else if (
      //     (accessToken1?.exp * 1000 < Date.now() &&
      //       Router.pathname === "/login") ||
      //     (accessToken1?.exp * 1000 < Date.now() &&
      //       Router.pathname === "/signup") ||
      //     (accessToken1?.exp * 1000 < Date.now() && Router.pathname === "/forgot")
      //   ) {
      //     debugger;
      //     Router.replace("/");
      //     return null;
      //   }
      //   debugger;
      //   // If this is an accessToken we just render the component that was passed with all its props
      // return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default withAuth;
