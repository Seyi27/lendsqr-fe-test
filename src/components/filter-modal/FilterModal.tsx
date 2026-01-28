import { useEffect, useRef, useState } from "react";
import Select, { type SingleValue } from "react-select";
import type { DropdownSelectType, FilterModalProp } from "../../types/appTypes";
import CustomButton from "../common/custom-button/CustomButton";
import "./FilterModal.scss";

const FilterModal = ({  closeModal }: FilterModalProp) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState<string>("");
  const [organization, setOrganization] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [status, setStatus] = useState("");

  const modalRef = useRef<HTMLDivElement | null>(null);

  // close modal when clikec outside of it
  useEffect(() => {

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ closeModal]);

  const organizationOptions = [
    { label: "Lendsqr", value: "lendsqr" },
    { label: "Irorun", value: "irorun" },
  ];

  const statusOptions = [
    { label: "Inactive", value: "inactive" },
    { label: "Active", value: "active" },
    { label: "Pending", value: "pending" },
    { label: "Blacklisted", value: "blackisted" },
  ];

  const handleOrganizationOnchange = (
    newValue: SingleValue<DropdownSelectType>,
  ) => {
    if (newValue) {
      setOrganization(newValue.value);
    }
  };

  const handleStatusOnchange = (newValue: SingleValue<DropdownSelectType>) => {
    if (newValue) {
      setStatus(newValue.value);
    }
  };

  const resetButton = () => {
    setUsername("");
    setEmail("");
    setDate("");
    setOrganization("");
    setPhoneNo("");
    setStatus("");
  };

  return (
    <div ref={modalRef} className="filter_modal_container">
      {/* organization */}
      <div>
        <label>Organization</label>

        <Select
          isSearchable={true}
          name="organization"
          options={organizationOptions}
          placeholder="Select"
          value={organizationOptions?.find(
            // display label based on the value condition
            (option) => option.value === organization,
          )}
          onChange={handleOrganizationOnchange}
          menuPosition="fixed"
          styles={{
            control: (base) => ({
              ...base,
              backgroundColor: "",
              borderColor: "#D1D5DB", // lighter on focus
              borderWidth: "1px", // ✅ thinner border
              color: "#ffffff",
              fontSize: "14px",
              boxShadow: "none",
              borderRadius: "8px",
              "&:hover": {
                borderColor: "#D1D5DB",
              },
              flex: 1,
            }),
            input: (base) => ({
              ...base,
              color: "black", // ✅ makes typed text white
            }),
            menu: (base) => ({
              ...base,
              backgroundColor: "white",
              marginTop: "4px",
              borderRadius: "6px",
              overflow: "hidden",
              border: "1px solid #a1a1aa",
            }),
            menuList: (base) => ({
              ...base,
              padding: 0,
              maxHeight: "180px", // limit height
              overflowY: "auto", // scrollable
              scrollbarWidth: "thin", // Firefox
              scrollbarColor: "#555 #000", // Firefox (thumb color, track color)
              "&::-webkit-scrollbar": {
                width: "6px", // Chrome/Safari width
              },
              "&::-webkit-scrollbar-track": {
                background: "#000", // track color
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#555", // thumb color
                borderRadius: "3px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#777", // hover color
              },
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isFocused
                ? "#f7f8f9" // background on hover
                : state.isSelected
                  ? "#e3e4e6" // background when selected
                  : "transparent",
              color: state.isSelected ? "black" : "", // text color
              cursor: "pointer",
              fontSize: "14px",
              padding: "10px 12px",
              // borderBottom: "1px solid #27272a", // thin divider
              // "&:last-of-type": {
              //   borderBottom: "none",
              // },
            }),
            singleValue: (base) => ({
              ...base,
              color: "black",
            }),
            dropdownIndicator: (base) => ({
              ...base,
              color: "#545F7D",
              // "&:hover": {
              //   color: "#ffffff",
              // },
            }),
            indicatorSeparator: () => ({
              display: "none", // ✅ removes the vertical border
            }),
            // ✅ Selected values (chips)
            multiValue: (base) => ({
              ...base,
              backgroundColor: "#27272a", // chip background
              borderRadius: "6px",
              padding: "2px 6px",
            }),
            multiValueLabel: (base) => ({
              ...base,
              color: "#ffffff", // text color
              fontSize: "13px",
              fontWeight: 500,
              paddingRight: "4px",
            }),
            multiValueRemove: (base, state) => ({
              ...base,
              color: state.isFocused ? "#ffffff" : "#a1a1aa",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#18181b",
                color: "#ffffff",
              },
            }),
            placeholder: (base) => ({
              ...base,
              color: "#545F7D",
              fontSize: "12px",
            }),
          }}
        />
      </div>

      {/* username */}
      <div>
        <label>Username</label>

        <input
          name="username"
          type="text"
          value={username}
          className="text_input"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="User"
        />
      </div>

      {/* email */}
      <div>
        <label>Email</label>
        <br></br>

        <input
          name="email"
          type="text"
          value={email}
          className="text_input"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>

      {/* date */}
      <div>
        <label>Date</label>
        <br></br>

        <input
          name="date"
          type="date"
          value={date}
          className="text_input"
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
        />
      </div>

      {/* Phone Number */}
      <div>
        <label>Phone Number</label>

        <input
          name="phoneNo"
          type="text"
          value={phoneNo}
          className="text_input"
          onChange={(e) => setPhoneNo(e.target.value)}
          placeholder="Phone Number"
        />
      </div>

      {/* status */}
      <div>
        <label>Status</label>

        <Select
          isSearchable={true}
          name="status"
          options={statusOptions}
          placeholder="Select"
          value={statusOptions?.find(
            // display label based on the value condition
            (option) => option.value === status,
          )}
          onChange={handleStatusOnchange}
          menuPosition="fixed"
          styles={{
            control: (base) => ({
              ...base,
              backgroundColor: "",
              borderColor: "#D1D5DB", // lighter on focus
              borderWidth: "1px", // ✅ thinner border
              color: "#ffffff",
              fontSize: "14px",
              boxShadow: "none",
              borderRadius: "8px",
              "&:hover": {
                borderColor: "#D1D5DB",
              },
              flex: 1,
            }),
            input: (base) => ({
              ...base,
              color: "black", // ✅ makes typed text white
            }),
            menu: (base) => ({
              ...base,
              backgroundColor: "white",
              marginTop: "4px",
              borderRadius: "6px",
              overflow: "hidden",
              border: "1px solid #a1a1aa",
            }),
            menuList: (base) => ({
              ...base,
              padding: 0,
              maxHeight: "180px", // limit height
              overflowY: "auto", // scrollable
              scrollbarWidth: "thin", // Firefox
              scrollbarColor: "#555 #000", // Firefox (thumb color, track color)
              "&::-webkit-scrollbar": {
                width: "6px", // Chrome/Safari width
              },
              "&::-webkit-scrollbar-track": {
                background: "#000", // track color
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#555", // thumb color
                borderRadius: "3px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#777", // hover color
              },
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isFocused
                ? "#f7f8f9" // background on hover
                : state.isSelected
                  ? "#e3e4e6" // background when selected
                  : "transparent",
              color: state.isSelected ? "black" : "", // text color
              cursor: "pointer",
              fontSize: "14px",
              padding: "10px 12px",
              // borderBottom: "1px solid #27272a", // thin divider
              // "&:last-of-type": {
              //   borderBottom: "none",
              // },
            }),
            singleValue: (base) => ({
              ...base,
              color: "black",
            }),
            dropdownIndicator: (base) => ({
              ...base,
              color: "#545F7D",
              // "&:hover": {
              //   color: "#ffffff",
              // },
            }),
            indicatorSeparator: () => ({
              display: "none", // ✅ removes the vertical border
            }),
            // ✅ Selected values (chips)
            multiValue: (base) => ({
              ...base,
              backgroundColor: "#27272a", // chip background
              borderRadius: "6px",
              padding: "2px 6px",
            }),
            multiValueLabel: (base) => ({
              ...base,
              color: "#ffffff", // text color
              fontSize: "13px",
              fontWeight: 500,
              paddingRight: "4px",
            }),
            multiValueRemove: (base, state) => ({
              ...base,
              color: state.isFocused ? "#ffffff" : "#a1a1aa",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#18181b",
                color: "#ffffff",
              },
            }),
            placeholder: (base) => ({
              ...base,
              color: "#545F7D",
              fontSize: "12px",
            }),
          }}
        />
      </div>

      <div className="btn_container">
        <CustomButton
          label="Reset"
          width={"100%"}
          height="35px"
          bgColor="transparent"
          textColor="#545F7D"
          fontSize={12}
          fontWeight={600}
          borderWidth="1px"
          borderColor="#545F7D"
          borderRadius="5px"
          onClick={resetButton}
        />

        <CustomButton
          label="Filter"
          width={"100%"}
          height="35px"
          bgColor="#39CDCC"
          textColor="white"
          fontSize={12}
          borderRadius="5px"
          fontWeight={600}
        />
      </div>
    </div>
  );
};

export default FilterModal;
