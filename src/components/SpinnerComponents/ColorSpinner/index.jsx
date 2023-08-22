import { Spinner } from "@material-tailwind/react";

export default () => {
  return (
    <div className="flex gap-8">
      <Spinner color="blue" />
      <Spinner color="red" />
      <Spinner color="green" />
      <Spinner color="amber" />
      <Spinner color="teal" />
      <Spinner color="indigo" />
      <Spinner color="purple" />
      <Spinner color="pink" />
    </div>
  );
};
