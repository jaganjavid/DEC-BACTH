import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { useNavigate, useSearchParams } from "react-router-dom";

const CustomPagination = ({ resPerpage, filteredProductsCount }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  let [searchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const keyword = searchParams.get("keyword"); // 👈 grabbing keyword from URL

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const setCurrentPagaNumber = (pageNumber) => {
    setCurrentPage(pageNumber);

    if (keyword) {
      navigate(`?keyword=${keyword}&page=${pageNumber}`);
    } else {
      navigate(`?page=${pageNumber}`);
    }
  };

  // ✅ Auto-hide pagination if not needed
  const shouldShowPagination =
    filteredProductsCount > resPerpage && (page || keyword);

  return (
    <>
      {shouldShowPagination && (
        <div className="d-flex justify-content-center my-5">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={resPerpage}
            totalItemsCount={filteredProductsCount}
            pageRangeDisplayed={4}
            onChange={setCurrentPagaNumber}
            nextPageText={"Next"}
            prevPageText={"Prev"}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      )}
    </>
  );
};

export default CustomPagination;
