import React from "react";

export default function Pager({ page, setPage }) {
    let paging = []
    let numbers = [];
    let next = (
      <button onClick={()=>setPage(prevPage => prevPage + 1)}>
        Next &gt;&gt;
      </button>
    );
    let previous = (
      <button onClick={()=>setPage((prevPage) => prevPage - 1)}>
        &lt;&lt;Previous
      </button>
    );
    let first = (
      <button onClick={()=>setPage(1)}>
        &lt;&lt;First
      </button>
    );
    
    if (page < 7) {
        for (let i = 1; i <= 8; i++) {
            numbers.push(<button style={page === i ? {backgroundColor: "#5da93c"}: null} onClick={() => setPage(i)}>{i}</button>);
            paging = [
                <div className="pager">
                    {numbers}
                    <button disabled>...</button>
                    {next}
                </div>,
            ];
            if (page === 2) {
                paging = [
                  <div className="pager">
                    {previous}
                    {numbers}
                    <button disabled>...</button>
                    {next}
                  </div>,
                ];
            }
            if (page === 3) {
                paging = [
                  <div className="pager">
                    {first}
                    {previous}
                    {numbers}
                    <button disabled>...</button>
                    {next}
                  </div>,
                ];
            }
            if (page > 3) {
                paging = [
                  <div className="pager">
                    {first}
                    {previous}
                    {numbers}
                    <button disabled>...</button>
                    {next}
                  </div>,
                ];
            }
        }

    } else if (page > 6) {
        let pages = []
        for (let i = page - 3; i <= page + 3; i++) {
            pages.push(
              <button
                style={page === i ? { backgroundColor: "#5da93c" } : null}
                onClick={() => setPage(i)}
              >
                {i}
              </button>
            );
            paging = [
              <div className="pager">
                {first}
                {previous}
                <button onClick={()=>setPage(1)}>1</button>
                <button onClick={()=>setPage(2)}>2</button>
                <button disabled>...</button>
                {pages}
                <button disabled>...</button>
                {next}
              </div>
            ];
        }
    }
    return paging
}