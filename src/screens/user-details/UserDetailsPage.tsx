import { useNavigate, useParams } from "react-router-dom";
import "./UserDetailsPage.scss";
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import CustomButton from "../../components/common/custom-button/CustomButton";
import avatar from "../../assets/icons/avatar.svg";
import { Rating } from "react-simple-star-rating";
import type { User } from "../../types/appTypes";
import { formatPrice } from "../../utils/formatPrice";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

const UserDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeItem, setActiveItem] = useState("General Details");
  const [userDetails, setUserDetails] = useState<User>();

  // fetch based on id
  useEffect(() => {
    if (id) {
      const userString = localStorage.getItem("user_details");
      if (userString) {
        const user = JSON.parse(userString);
        setUserDetails(user);
      }
    }
  }, [id]);

  const navItems = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];

  return (
    <div>
      {/* Back to Users */}
      <div className="user_details_navigate" onClick={() => navigate("/users")}>
        <BsArrowLeft />
        <p>Back to Users</p>
      </div>

      {/* User Details */}
      <div
        className="user_details_header_container"
        onClick={() => navigate(-1)}
      >
        <p className="dashboard_header_title">User Details</p>

        <div>
          <CustomButton
            label="BLACKLIST USER"
            width={"130px"}
            height="30px"
            bgColor="transparent"
            textColor="#E4033B"
            fontSize={12}
            fontWeight={600}
            borderRadius="5px"
            borderColor="#E4033B"
            borderWidth="1px"
          />

          <CustomButton
            label="ACTIVATE USER"
            width={"150px"}
            height="30px"
            bgColor="transparent"
            textColor="#39CDCC"
            fontSize={12}
            fontWeight={600}
            borderRadius="5px"
            borderColor="#39CDCC"
            borderWidth="1px"
          />
        </div>
      </div>

      {/* content header */}
      <div className="user_details_content_header_wrapper">
        <div className="user_row">
          <div>
            <img src={avatar} />

            <div>
              <p className="name">{userDetails?.full_name}</p>
              <span className="user_id">{userDetails?.user_id}</span>
            </div>
          </div>

          <div>
            <div className="divider1" />

            <div>
              <p className="tier">User’s Tier</p>
              <Rating
                initialValue={userDetails?.user_tier}
                size={14}
                readonly
                iconsCount={3}
              />
            </div>

            <div className="divider2" />

            <div>
              <p className="price">
                ₦{formatPrice(Number(userDetails?.balance))}
              </p>
              <span className="bank">
                {userDetails?.account_no} / {userDetails?.bank_account}
              </span>
            </div>
          </div>
        </div>

        <div className="nav_items_container">
          {navItems.map((item, i) => (
            <span
              key={i}
              onClick={() => setActiveItem(item)}
              className={`${activeItem === item && "active_item"}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* content body */}
      <div className="user_details_content_wrapper">
        {/* Personal information */}
        <div>
          <p className="user_details_content_header">Personal Information</p>

          <div className="user_details_content_row">
            <div className="user_details_content_column">
              <div>
                <span>FULL NAME</span>
                <p>{userDetails?.full_name}</p>
              </div>

              <div>
                <span>MARITAL STATUS</span>
                <p>{userDetails?.marital_status}</p>
              </div>
            </div>

            <div className="user_details_content_column">
              <div>
                <span>PHONE NUMBER</span>
                <p>{userDetails?.phone_number}</p>
              </div>

              <div>
                <span>CHILDREN</span>
                <p>{userDetails?.children ? "YES" : "NONE"}</p>
              </div>
            </div>

            <div className="user_details_content_column">
              <div>
                <span>EMAIL ADDRESS</span>
                <p>{userDetails?.email}</p>
              </div>

              <div>
                <span>TYPE OF RESIDENCE</span>
                <p>{userDetails?.residence_type}</p>
              </div>
            </div>

            <div className="user_details_content_column">
              <div>
                <span>BVN</span>
                <p>{userDetails?.bvn}</p>
              </div>
            </div>

            <div className="user_details_content_column">
              <div>
                <span>GENDER</span>
                <p>{capitalizeFirstLetter(userDetails?.gender ?? "")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education and Employment */}
        <div>
          <p className="user_details_content_header">
            Education and Employment
          </p>

          <div className="user_details_content_ee_row">
            <div className="user_details_content_column">
              <div>
                <span>LEVEL OF EDUCATION</span>
                <p>{userDetails?.education_level}</p>
              </div>

              <div>
                <span>OFFICE EMAIL</span>
                <p>{userDetails?.official_email}</p>
              </div>
            </div>

            <div className="user_details_content_column">
              <div>
                <span>EMPLOYEMENT STATUS</span>
                <p>{userDetails?.employment_status}</p>
              </div>

              <div>
                <span>MONTHLY INCOME</span>
                <p>{userDetails?.monthly_income}</p>
              </div>
            </div>

            <div className="user_details_content_column">
              <div>
                <span>SECTOR OF EMPLOYMENT</span>
                <p>{userDetails?.employment_sector}</p>
              </div>

              <div>
                <span>LOAN REPAYMENT</span>
                <p>{userDetails?.loan_repayment}</p>
              </div>
            </div>

            <div className="user_details_content_column">
              <div>
                <span>DURATION OF EMPLOYMENT</span>
                <p>{userDetails?.employment_duration}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div>
          <p className="user_details_content_header">Socials</p>

          <div className="user_details_content_row">
            <div className="user_details_content_column">
              <div>
                <span>TWITTER</span>
                <p>{userDetails?.twitter}</p>
              </div>
            </div>

            <div className="user_details_content_column">
              <div>
                <span>FACEBOOK</span>
                <p>{userDetails?.facebook}</p>
              </div>
            </div>

            <div className="user_details_content_column">
              <div>
                <span>INSTAGRAM</span>
                <p>{userDetails?.instagram}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantor */}
        <div>
          <p className="user_details_content_header">Guarantor</p>

          <div className="user_details_content_row">
            <div className="user_details_content_column">
              <div>
                <span>FULL NAME</span>
                <p>{userDetails?.guarantor_name}</p>
              </div>
            </div>

            <div className="user_details_content_column">
              <div>
                <span>PHONE NUMBER</span>
                <p>{userDetails?.phone_number}</p>
              </div>
            </div>

            <div className="user_details_content_column">
              <div>
                <span>EMAIL ADDRESS</span>
                <p>{userDetails?.email}</p>
              </div>
            </div>

            <div className="user_details_content_column">
              <div>
                <span>RELATIONSHIP</span>
                <p>{userDetails?.guarantor_relationship}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
