import React from "react";

export default ({
  paddingTop,
  title,
  top,
  left,
  right,
  background,
  paddingRight,
  paddingLeft,
  RibPadding,
}) => {
  return (
    <div>
      <div
        className="transaction_card relative p-5 w-full"
        style={{
          paddingTop: paddingTop,
          paddingRight: paddingRight,
          paddingLeft: paddingLeft,
        }}
      >
        <div
          className="absolute text-white text-sm "
          style={{
            top: top,
            left: left,
            right: right,
            background: background,
            padding: RibPadding,
          }}
        >
          {title}
        </div>
        <p className="text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  );
};
