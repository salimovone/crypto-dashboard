import React from "react";
import TooltipButton from "../TooltipButton";

export default ({ title, one, two, there }) => {
  return (
    <div>
      <div className="mt-5 transaction_card p-5">
        <h1 className="text-md text-left font-bold">{title}</h1>
        <div className="mt-3 flex justify-start gap-1">
          {one ? (
            <TooltipButton
              top={"-40px"}
              left={"-14px"}
              width={"120px"}
              btnTitle="Hover Me"
              hoverTitle="Popever tooltip"
            />
          ) : (
            <></>
          )}
          {two ? (
            <>
              <TooltipButton
                top={"-40px"}
                left={"-8px"}
                width={"120px"}
                btnTitle="Tooltip on top"
                hoverTitle="Tooltip on top"
              />
              <TooltipButton
                top={"-40px"}
                left={"-5px"}
                width={"120px"}
                btnTitle="Tooltip on right"
                hoverTitle="Tooltip on right"
              />
              <TooltipButton
                top={"-40px"}
                left={"5px"}
                width={"120px"}
                btnTitle="Tooltip on bottom"
                hoverTitle="Tooltip on bottom"
              />
              <TooltipButton
                top={"-40px"}
                left={"-8px"}
                width={"120px"}
                btnTitle="Tooltip on left"
                hoverTitle="Tooltip on left"
              />
            </>
          ) : (
            <></>
          )}
          {there ? (
            <>
              <TooltipButton
                top={"-80px"}
                left={"-14px"}
                width={"160px"}
                btnTitle="Tooltip on top"
                hoverTitle={`
                    <em>Tooltip</em> 
                    <u>with</u>
                    <b>HTML</b>
                `}
              />
              <TooltipButton
                top={"-80px"}
                left={"-14px"}
                width={"160px"}
                btnTitle="Click me"
                hoverTitle={`
                <em>Tooltip</em> 
                <u>with</u>
                <b>HTML</b>
            `}
              />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
