import { type StatCardSectionProp } from "../../types/appTypes";
import StatCardSkeleton from "../stat-card-skeleton/StatCardSkeleton";
import StatCard from "../stat-card/StatCard";
import "./StatCardSection.scss";

const StatCardSection = ({ data, loader }: StatCardSectionProp) => {
  if (loader) {
    return (
      <div className={`stat_cards_section4`}>
        <StatCardSkeleton cards={data.length} />
      </div>
    );
  }

  return (
    <div className={`stat_cards_section4`}>
      {data.map((item) => (
        <StatCard data={item} />
      ))}
    </div>
  );
};

export default StatCardSection;
