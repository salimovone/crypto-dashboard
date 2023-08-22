import { Rating } from "@material-tailwind/react";

export default ({ title, text, value }) => {
  return (
    <div className="transaction_card p-5 w-full ">
      <div className="text-left font-bold text-base">{title}</div>
      <p className="text-sm mt-2 text-left">{text}</p>
      <div className="mt-2 flex justify-start">
        <Rating value={value} />
      </div>
    </div>
  );
};
