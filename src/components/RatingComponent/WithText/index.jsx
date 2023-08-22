import React from "react";
import { Rating, Typography } from "@material-tailwind/react";

export default ({ title, text }) => {
  const [rated, setRated] = React.useState(4);

  return (
    <div className="transaction_card p-5 w-full">
      <div className="text-left font-bold text-base">{title}</div>
      <p className="text-left text-sm mt-2">{text}</p>
      <div className="flex mt-2 items-center gap-2">
        <Rating value={4} onChange={(value) => setRated(value)} />
        <Typography color="blue-gray" className="font-medium">
          {rated}.0 Rated
        </Typography>
      </div>
    </div>
  );
};
