import React from "react";
import Navbar from "../../../components/Navbar";
import BasicRating from "../../../components/RatingComponent/BasicRating";
import RatingWithText from "../../../components/RatingComponent/WithText";
import ReadOnly from "../../../components/RatingComponent/ReadOnly";
import CustomRating from "../../../components/RatingComponent/CustomRating";

const Rating = () => {
  return (
    <div>
      <Navbar />
      <div className="px-5 mt-5">
        <h1 className="mt-5 text-xl font-bold text-[var(--main-color)]">
          Rating
        </h1>
        <div className="w-full mt-5 grid gap-5 grid-cols-1 md:grid-cols-2">
          <BasicRating
            title={"Default Rating"}
            text={"This is the most basic example of ratings."}
          />
          <RatingWithText
            title={"With Text"}
            text={"Stars with a saved rating."}
          />
          <BasicRating
            title={"Max Number"}
            text={"Change the max numbers of stars."}
            value={5}
          />
          <ReadOnly title={"Read Only"} text={"Prevent users from voting"} />
          <BasicRating
            title={"Half Rating"}
            text={"You can represent a float score as a half star icon."}
            value={3}
          />
          <CustomRating title={"Custom Icon"} text={"Use any icon you want"} />
        </div>
      </div>
    </div>
  );
};

export default Rating;
