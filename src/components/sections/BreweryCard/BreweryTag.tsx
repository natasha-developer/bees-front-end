import React from "react";

type Props = {
  tag?: string;
  icon?: React.ReactNode;
};

const BreweryTag = ({ tag, icon }: Props) => {
  return (
    <>
      {tag && (
        <span>
          {icon}
          {tag}
        </span>
      )}
    </>
  );
};

export default BreweryTag;
