import { Slider } from "@material-tailwind/react";

export default () => {
  return (
    <div className="transaction_card p-5 h-[165px]">
      <h1 className="text-base font-bold text-left">Custom Slider</h1>
      <div className="w-96">
        <Slider
          defaultValue={50}
          className="text-[#2ec947]"
          barClassName="rounded-none bg-[#2ec946]"
          thumbClassName="[&::-moz-range-thumb]:rounded-none [&::-webkit-slider-thumb]:rounded-none [&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-[4px]"
          trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent rounded-none !bg-[#2ec946]/10 border border-[#2ec946]/20"
        />
      </div>
    </div>
  );
};
