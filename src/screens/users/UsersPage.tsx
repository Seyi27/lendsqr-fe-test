import { useEffect, useState } from "react";
import statActiveUsers from "../../assets/icons/stat-active-users.svg";
import statUsersWithLoans from "../../assets/icons/stat-user-loans.svg";
import statUsersWithSavings from "../../assets/icons/stat-user-savings.svg";
import statUsers from "../../assets/icons/stat-users.svg";
import StatCardSection from "../../components/stat-card-section/StatCardSection";
import "./UsersPage.scss";
import UsersTable from "../../components/users-table/UsersTable";
import type { UsersData } from "../../types/appTypes";

const UsersPage = () => {
  const [userData, setData] = useState<UsersData>();
  const [userDataLoader, setUserDataLoader] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    setUserDataLoader(true);
    try {
      const response = await fetch(
        "https://6979a959cc9c576a8e174be9.mockapi.io/api/users",
      );
      const data = await response.json();
      setData(data[0]);
    } catch (error: any) {
      console.log("error", error);
    } finally {
      setUserDataLoader(false);
    }
  };

  const userStats = [
    {
      label: "USERS",
      value: userData?.stats?.users ?? "0",
      icon: statUsers,
    },
    {
      label: "ACTIVE USERS",
      value: userData?.stats?.active_users ?? "0",
      icon: statActiveUsers,
    },
    {
      label: "USERS WITH LOANS",
      value: userData?.stats?.users_with_loans ?? "0",
      icon: statUsersWithLoans,
    },
    {
      label: "USERS WITH SAVINGS",
      value: userData?.stats?.users_with_savings ?? "0",
      icon: statUsersWithSavings,
    },
  ];

  return (
    <div>
      <p className="dashboard_header_title">Users</p>

      <div>
        <StatCardSection data={userStats} loader={userDataLoader} />

        <div style={{ padding: "15px" }} />

        <UsersTable data={userData} loader={userDataLoader} />
      </div>
    </div>
  );
};

export default UsersPage;
