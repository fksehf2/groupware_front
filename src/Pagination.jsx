import { useEffect, useState } from "react";
import "./css/page.css";
const Pagination = ({ total, page, setPage, perPageNum, fetchList }) => {
  const pageNums = Math.max(1, Math.ceil(total / perPageNum));
  console.log(pageNums);

  useEffect(() => {
    console.log(page, perPageNum);
    fetchList(page, perPageNum);
  }, [page]);

  return (
    <div id="page_navi" className="page_wrap">
      <div id="page_nationpage_navi" className="page_nation">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </button>
        {Array.from({ length: pageNums }, (_, i) => (
          <button
            className={`page_nation ${page === i + 1 ? "active" : ""}`}
            key={i + 1}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={() => setPage(page + 1)} disabled={page === pageNums}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
