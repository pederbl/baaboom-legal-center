import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";
import documentRoutes from "./document-routes";
import logo from "./images/baaboom-logo.png";

export default function Document() {
  const [content, setContent] = useState("");
  const location = useLocation();

  function setContentFromPath() {
    const documentFile = documentRoutes[location.pathname];
    if (!documentFile) throw new Error("File not found");

    fetch(documentFile)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }

  useEffect(setContentFromPath, [location.pathname]);

  return (
    <div>
      <div>
        <img src={logo} alt="Baaboom logo" id="logo" />
      </div>
      <div className="markdown-body">
        <ReactMarkdown children={content} />
      </div>
    </div>
  );
}
