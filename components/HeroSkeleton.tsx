import { ComponentPropsWithRef } from "react";
import type { NextPage } from "next";
import SkeletonRectangle from "./skeleton/SkeletonRectangle";
// React 18 example
// Use the div element props
type DivProps = ComponentPropsWithRef<"div">;

// Define the component. this is basically a div wrapper with a pulse animation for the skeleton loading
export const SkeletonLoader: React.FC<DivProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={["animate-pulse", className].join(" ")} {...props}>
      {children}
    </div>
  );
};

const HeroSkeleton: NextPage = () => {
  return (
    <div className="container mx-auto">
      <SkeletonLoader className="flex flex-col w-full h-full gap-2 my-2">
        <SkeletonRectangle height={100} className="bg-gray-200 rounded-md" />
      </SkeletonLoader>
    </div>
  );
};

export default HeroSkeleton;