import { Slider } from "@material-tailwind/react";

export default () => {
  return (
    <div className="transaction_card p-5 w-full h-[165px]">
      <div className="text-base font-bold text-left">Slider Colors</div>
      <div className="flex w-96 flex-col gap-8">
        <Slider color="blue" defaultValue={50} />
        <Slider color="red" defaultValue={50} />
        <Slider color="green" defaultValue={50} />
        <Slider color="amber" defaultValue={50} />
      </div>
    </div>
  );
};
