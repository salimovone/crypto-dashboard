import { Slider } from "@material-tailwind/react";

export default () => {
  return (
    <div className="transaction_card h-[165px] p-5">
      <h1 className="text-base font-bold text-left">Default Slider</h1>
      <div className="w-96">
        <Slider defaultValue={50} />
      </div>
    </div>
  );
};
