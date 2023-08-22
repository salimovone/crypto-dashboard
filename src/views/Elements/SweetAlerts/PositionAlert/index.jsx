import React from "react";
import TopLEft from "./TopLEft";
import TopRight from "./TopRight";
import BottomLeft from "./BottomLeft";
import BottomRight from "./BottomRight";

export default () => {
  return (
    <div>
      <div className="transaction_card p-5 mt-5">
        <div className="text-left text-lg font-bold text-[var(--main-color)]">
          Position
        </div>
        <p className="mt-4 text-left">
          You can specify position of your alert with position :
          {
            "{(top - start) | (top - end) | (bottom - start) | (bottom - end)} in"
          }
          js.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <div>
            <TopLEft />
          </div>
          <div>
            <TopRight />
          </div>
          <div>
            <BottomLeft />
          </div>
          <div>
            <BottomRight />
          </div>
        </div>
      </div>
    </div>
  );
};
