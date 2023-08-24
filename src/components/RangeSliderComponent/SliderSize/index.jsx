import { Slider } from "@material-tailwind/react";

export default () => {
  return (
    <div className="transaction_card h-[165px] p-5">
      <h1 className="text-base font-bold text-left">Slider Size</h1>
      <div className="flex w-96 flex-col gap-8">
        <Slider size="sm" defaultValue={50} />
        <Slider size="md" defaultValue={50} />
        <Slider size="lg" defaultValue={50} />
      </div>
    </div>
  );
};
