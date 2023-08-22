import { Rating } from "@material-tailwind/react";

export default ({ title, text }) => {
  return (
    <div className="transaction_card p-5 w-full">
      <div className="text-left font-bold text-base">{title}</div>
      <p className="text-left text-sm mt-2">{text}</p>
      <div className="flex justify-start">
        <Rating value={4} readonly />
      </div>
    </div>
  );
};
