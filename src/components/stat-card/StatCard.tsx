import type { StatCardProp } from "../../types/appTypes";
import "./StatCard.scss";

const StatCard = ({ data }: StatCardProp) => {
  return (
    <div className="stat_card">
      <img src={data.icon} />

      <span>{data.label}</span>
      <p>{data.value}</p>
    </div>
  );
};

export default StatCard;
