import {
  BsChevronDown,
  BsPersonCheckFill,
  BsPersonXFill,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";
import briefcase from "../../assets/icons/briefcase.svg";
import decisionModels from "../../assets/icons/decision-models.svg";
import feesAndCharges from "../../assets/icons/fees-charges.svg";
import guarantors from "../../assets/icons/guarantors.svg";
import home from "../../assets/icons/home.svg";
import loanRequests from "../../assets/icons/loan-requests.svg";
import loans from "../../assets/icons/loans.svg";
import reports from "../../assets/icons/reports.svg";
import savingsProducts from "../../assets/icons/savings-products.svg";
import savings from "../../assets/icons/savings.svg";
import serviceAccount from "../../assets/icons/service-account.svg";
import services from "../../assets/icons/services.svg";
import settlements from "../../assets/icons/settlements.svg";
import transactions from "../../assets/icons/transactions.svg";
import users from "../../assets/icons/users.svg";
import preference from "../../assets/icons/preference.svg";
import feeAndPricing from "../../assets/icons/fees-and-pricing.svg";
import aufitLogs from "../../assets/icons/audit-logs.svg";
import systemsMessages from "../../assets/icons/systems-messages.svg";
import logOut from "../../assets/icons/log-out.svg";
import "./Sidebar.scss";

const Sidebar = () => {
  const customersSidebarItems = [
    {
      icon: <img src={users} />,
      name: "Users",
      route: "/users",
    },
    {
      icon: <img src={guarantors} />,
      name: "Guarantors",
      route: "/guarantors",
    },
    {
      icon: <img src={loans} />,
      name: "Loans",
      route: "/loans",
    },
    {
      icon: <img src={decisionModels} />,
      name: "Decision Models",
      route: "/decision-models",
    },
    {
      icon: <img src={savings} />,
      name: "Savings",
      route: "/savings",
    },
    {
      icon: <img src={loanRequests} />,
      name: "Loan Requests",
      route: "/loan-requests",
    },
    {
      icon: <BsPersonCheckFill color="#213F7D" />,
      name: "Whitelist",
      route: "/whitelists",
    },
    {
      icon: <BsPersonXFill color="#213F7D" />,
      name: "Karma",
      route: "/karma",
    },
  ];

  const businessSidebarItems = [
    {
      icon: <img src={briefcase} />,
      name: "Organization",
      route: "/organization",
    },
    {
      icon: <img src={loanRequests} />,
      name: "Loan Products",
      route: "/loan-products",
    },
    {
      icon: <img src={savingsProducts} />,
      name: "Savings Products",
      route: "/savings-products",
    },
    {
      icon: <img src={feesAndCharges} />,
      name: "Fees and Charges",
      route: "/fees-and-charges",
    },
    {
      icon: <img src={transactions} />,
      name: "Transactions",
      route: "/transactions",
    },
    {
      icon: <img src={services} />,
      name: "Services",
      route: "/services",
    },
    {
      icon: <img src={serviceAccount} />,
      name: "Service Account",
      route: "/service-account",
    },
    {
      icon: <img src={settlements} />,
      name: "Settlements",
      route: "/settlements",
    },
    {
      icon: <img src={reports} />,
      name: "Reports",
      route: "/reports",
    },
  ];

  const settingsSidebarItems = [
    {
      icon: <img src={preference} />,
      name: "Preferences",
      route: "/preferences",
    },
    {
      icon: <img src={feeAndPricing} />,
      name: "Fees and Pricing",
      route: "/fees-and-pricing",
    },
    {
      icon: <img src={aufitLogs} />,
      name: "Audit Logs",
      route: "/audit-logs",
    },
    {
      icon: <img src={systemsMessages} />,
      name: "Systems Messages",
      route: "/systems-messages",
    },
  ];

  return (
    <div className="sidebar_wrapper">
      {/* Switch Organization */}
      <div className="sidebar_item" style={{ paddingTop: "20px" }}>
        <img src={briefcase} />
        <p>Switch Organization</p>
        <BsChevronDown />
      </div>

      {/* Dashboard */}
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "sidebar_item sidebar_item_active"
            : "sidebar_item sidebar_item_inactive"
        }
      >
        <img src={home} />
        <p>Dashboard</p>
      </NavLink>

      {/* CUSTOMERS */}
      <div className="sidebar_category_container">
        <p className="sidebar_item_header">CUSTOMERS</p>

        <div>
          {customersSidebarItems.map((item, index) => (
            <NavLink
              to={item.route}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "sidebar_item sidebar_item_active"
                  : "sidebar_item sidebar_item_inactive"
              }
            >
              {item.icon}
              <p>{item.name}</p>
            </NavLink>
          ))}
        </div>
      </div>

      {/* BUSINESSES */}
      <div className="sidebar_category_container">
        <p className="sidebar_item_header">BUSINESSES</p>

        <div>
          {businessSidebarItems.map((item, index) => (
            <NavLink
              to={item.route}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "sidebar_item sidebar_item_active"
                  : "sidebar_item sidebar_item_inactive"
              }
            >
              {item.icon}
              <p>{item.name}</p>
            </NavLink>
          ))}
        </div>
      </div>

      {/* SETTINGS */}
      <div className="sidebar_category_container">
        <p className="sidebar_item_header">SETTINGS</p>

        <div>
          {settingsSidebarItems.map((item, index) => (
            <NavLink
              to={item.route}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "sidebar_item sidebar_item_active"
                  : "sidebar_item sidebar_item_inactive"
              }
            >
              {item.icon}
              <p>{item.name}</p>
            </NavLink>
          ))}
        </div>
      </div>

      {/* logout Organization */}
      <div className="sidebar_logout_container  sidebar_item">
        <img src={logOut} />
        <p>Logout</p>
      </div>

      {/* v1.2.0 */}
      <div className="sidebar_item" style={{ fontSize: "12px" }}>
        <p>v1.2.0</p>
      </div>
    </div>
  );
};

export default Sidebar;
