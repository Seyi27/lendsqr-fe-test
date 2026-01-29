import { useEffect, useRef, useState } from "react";
import { BiFilter } from "react-icons/bi";
import {
  BsEye,
  BsPersonCheck,
  BsPersonX,
  BsThreeDotsVertical,
} from "react-icons/bs";
import "./UsersTable.scss";
import Skeleton from "react-loading-skeleton";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { useNavigate } from "react-router-dom";
import type { User, UsersTableType } from "../../types/appTypes";
import FilterModal from "../filter-modal/FilterModal";
import Pagination from "../pagination/Pagination";
import { formatDate } from "../../utils/formatDate";

const UsersTable = ({ data, loader }: UsersTableType) => {
  const navigate = useNavigate();
  const [tableDropdownId, setTableDropdownId] = useState<number | null>(null);

  const [openFilterModal, setOpenFilterModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedData = data?.users.slice(startIndex, endIndex);

  const dropdownRefs = useRef<Map<number, HTMLDivElement | null>>(new Map());

  // Close dropdown of the present active dropdown
  useEffect(() => {
    if (tableDropdownId !== null) {
      const handleClickOutside = (event: MouseEvent | TouchEvent) => {
        const ref = dropdownRefs.current.get(tableDropdownId);
        if (ref && !ref.contains(event.target as Node)) {
          setTableDropdownId(null);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("touchstart", handleClickOutside);
      };
    }
  }, [tableDropdownId]);

  const handleViewDetails = (item: User) => {
    navigate(`/users/user-details/${item.id}`);
    localStorage.setItem("user_details", JSON.stringify(item));
  };

  if (loader) {
    return <Skeleton height={"450px"} borderRadius={10} />;
  }

  return (
    <div style={{ position: "relative" }}>
      <div className="user-table_wrapper">
        <table>
          <thead>
            <tr style={{ position: "relative" }}>
              <th>
                <div
                  className="th_name"
                  onClick={() => setOpenFilterModal(true)}
                >
                  ORGANIZATION <BiFilter size={20} />
                </div>
              </th>
              <th>
                <div
                  className="th_name"
                  onClick={() => setOpenFilterModal(true)}
                >
                  USERNAME <BiFilter size={20} />
                </div>
              </th>
              <th>
                <div
                  className="th_name"
                  onClick={() => setOpenFilterModal(true)}
                >
                  EMAIL <BiFilter size={20} />
                </div>
              </th>
              <th>
                <div
                  className="th_name"
                  onClick={() => setOpenFilterModal(true)}
                >
                  PHONE NUMBER <BiFilter size={20} />
                </div>
              </th>
              <th>
                <div
                  className="th_name"
                  onClick={() => setOpenFilterModal(true)}
                >
                  DATE JOINED <BiFilter size={20} />
                </div>
              </th>
              <th>
                <div
                  className="th_name"
                  onClick={() => setOpenFilterModal(true)}
                >
                  STATUS <BiFilter size={20} />
                </div>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {paginatedData && paginatedData?.length > 0 ? (
              paginatedData?.map((item, idx) => (
                <tr key={idx}>
                  <td>{item?.organization}</td>
                  <td>{item?.username}</td>
                  <td>{item?.email}</td>
                  <td>{item?.phone_number}</td>
                  <td>{formatDate(item?.date_joined)}</td>
                  <td>
                    <span className={`status_pill ${item?.status}`}>
                      {capitalizeFirstLetter(item?.status)}
                    </span>
                  </td>
                  <td style={{ position: "relative", cursor: "pointer" }}>
                    <div
                      ref={(el) => {
                        dropdownRefs.current.set(item?.id, el); // This line is attaching a ref (reference) to each dropdown wrapper individually, based on the row’s item.id.
                      }}
                      style={{ position: "relative" }}
                    >
                      <BsThreeDotsVertical
                        onClick={(e) => {
                          e.stopPropagation();
                          setTableDropdownId((prev) =>
                            prev === item?.id ? null : item?.id,
                          );
                        }}
                      />

                      {tableDropdownId === item?.id && (
                        <div className="dropdown">
                          <p onClick={() => handleViewDetails(item)}>
                            <BsEye /> View Details
                          </p>

                          <p>
                            <BsPersonCheck /> Blacklist User
                          </p>
                          <p>
                            <BsPersonX /> Approve request
                          </p>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>
                  <div className="no_activity_wrapper">
                    <div className="no_activity_container">
                      <h3>No Users found</h3>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {openFilterModal && (
        <FilterModal closeModal={() => setOpenFilterModal(false)} />
      )}

      {paginatedData && paginatedData?.length > 0 && (
        <Pagination
          totalItems={data?.users.length ?? 0}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
          onPageSizeChange={(size) => {
            setPageSize(size);
            setCurrentPage(1); // reset page
          }}
        />
      )}
    </div>
  );
};

export default UsersTable;
