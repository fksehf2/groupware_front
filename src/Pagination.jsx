import { useEffect, useState } from "react";
import "./css/page.css";
const Pagination = ({ total, page, setPage, limit, fetchList }) => {
  const pageNums = Math.ceil(total / limit);
  console.log(pageNums);

  useEffect(() => {
    console.log(page, limit);
    fetchList(page, limit);
  }, [page]);

  return (
    <div id="page_navi" className="page_wrap">
      <div id="page_nationpage_navi" className="page_nation">
        {/* <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </button> */}
        {Array(pageNums)
          .fill()
          .map((_, i) => (
            <button className="page_nation" key={i + 1} onClick={() => setPage(i + 1)}>
              {i + 1}
            </button>
          ))}
        {/* <button onClick={() => setPage(page + 1)} disabled={page === pageNums}>
          &gt;
        </button> */}
      </div>
    </div>
  );
};

export default Pagination;
