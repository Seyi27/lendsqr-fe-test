import React from "react";
import "./Pagination.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

type PaginationProps = {
  totalItems: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
};

const pageSizes = [10, 20, 50, 100];

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  pageSize,
  currentPage,
  onPageChange,
  onPageSizeChange,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination_wrapper">
      {/* left side */}
      <div className="pagination_left">
        <span>Showing</span>

        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
        >
          {pageSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

        <span>out of {totalItems}</span>
      </div>

      {/*  right side */}
      <div className="pagination_right">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="arrows"
        >
          <BsChevronLeft color="#213F7D" />
        </button>

        {pages.map((page) => (
          <button
            key={page}
            className={page === currentPage ? "active_page" : "inactive_page"}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="arrows"
        >
          <BsChevronRight color="#213F7D" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
