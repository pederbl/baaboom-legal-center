import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import routes from "./routes";

export default function Document() {
  const [content, setContent] = useState("");

  function setContentFromPath() {
    const documentFile = routes[window.location.pathname];
    if (!documentFile) throw new Error("No such document");

    fetch(documentFile)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }

  useEffect(setContentFromPath, []);

  return (
    <div className="markdown-body">
      <ReactMarkdown children={content} />
    </div>
  );
}
