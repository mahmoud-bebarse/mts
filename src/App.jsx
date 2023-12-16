import React from "react";

import Home from "./Home"
import Pager from "./Pager";
import Title from "./Title";
export default function App() {
  const [page, setPage] = React.useState(1)
  return (
    <>
      <Title page={page} />
      <Pager setPage={setPage} page={page} />
      <Home page={page} />
      <Pager setPage={setPage} page={page} />
    </>
  );
}

