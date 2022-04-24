import "./css/styles.css";
import "./css/github-markdown.css";
import { useRoutes, Navigate } from "react-router-dom";
import Document from "./Document";
import documentRoutes from "./document-routes";

function routes() {
  const documentPaths = Object.keys(documentRoutes);

  const documentRoutesParams = documentPaths.map((path) => {
    return {
      path: path,
      element: <Document />
    };
  });

  const basicRoutes = [
    {
      path: "/",
      element: <Navigate to="/privacy" />
    },
    {
      path: "*",
      element: <div>No such document</div>
    }
  ];

  return [...basicRoutes, ...documentRoutesParams];
}

export default function App() {
  const routesElement = useRoutes(routes());
  return <div className="App">{routesElement}</div>;
}
