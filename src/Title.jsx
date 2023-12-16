import React from "react";
export default function Title({ page }) {
  return (
    <p
      style={{
        color: "#5da93c",
        fontSize: "1.4rem",
        textAlign: "center",
        margin: "0px",
      }}
    >
      {page === 1 ? "YIFY Movies" : `YIFY Movies Page ${page}`}
    </p>
  );
}
