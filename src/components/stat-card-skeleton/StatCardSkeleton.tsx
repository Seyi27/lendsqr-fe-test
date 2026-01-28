import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type StatCardSkeletonProp = {
  cards: number;
};

const StatCardSkeleton = ({ cards }: StatCardSkeletonProp) => {
  return (
    <>
      {Array(cards)
        .fill(0)
        .map((_, i) => (
          <Skeleton key={i} height={120} width={`100%`} borderRadius={10} />
        ))}
    </>
  );
};

export default StatCardSkeleton;
