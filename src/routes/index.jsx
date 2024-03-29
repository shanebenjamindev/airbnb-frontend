import { Route } from "react-router-dom";
import { lazy } from "react";

const routes = [
  {
    path: "",
    element: lazy(() => import("../components/Main")),
    nested: [
      {
        path: "",
        element: lazy(() => import("../pages/Home/Home")),
      },
      //   {
      //     path: "user-info",
      //     element: lazy(() => import("../pages/UserInfo")),
      //   },
      //   {
      //     path: "roombycity/:id",
      //     element: lazy(() => import("../pages/RoomByCity")),
      //   },
      //   {
      //     path: "roomdetail/:id",
      //     element: lazy(() => import("../pages/RoomDetail")),
      //   },
      //   {
      //     path: "login-page",
      //     element: lazy(() => import("../pages/Login")),
      //   },
      //   {
      //     path: "register-page",
      //     element: lazy(() => import("../pages/Register")),
      //   },
    ],
  },
];

const renderRoutes = () => {
  return routes.map((route) => {
    if (route.nested) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.nested.map((item) => {
            return (
              <Route
                key={item.path}
                path={item.path}
                element={<item.element />}
              />
            );
          })}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};
export default renderRoutes;
