import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

export default () => {
  return (
    <div className="transaction_card p-5">
      <div className="text-md font-bold text-left ">Basic Popever</div>
      <div className="flex items-center gap-2 flex-wrap mt-3">
        <div>
          <Popover placement="right">
            <PopoverHandler>
              <button className=" py-[6px] px-3 rounded-lg bg-[var(--primary-color)] text-white transition-all hover:bg-[var(--light-red-color)] text-sm">
                Click to toggle popever
              </button>
            </PopoverHandler>
            <PopoverContent>Popever title</PopoverContent>
          </Popover>
        </div>
        <div>
          <Popover placement="right">
            <PopoverHandler>
              <button className=" py-[6px] px-3 rounded-lg bg-[var(--primary-color)] text-white transition-all hover:bg-[var(--light-red-color)] text-sm">
                Dissmisible popever
              </button>
            </PopoverHandler>
            <PopoverContent>Popever title</PopoverContent>
          </Popover>
        </div>
        <div>
          <Popover placement="right">
            <PopoverHandler>
              <button className=" py-[6px] px-3 rounded-lg bg-[var(--primary-color)] text-white transition-all hover:bg-[var(--light-red-color)] text-sm">
                On hover Tooltip
              </button>
            </PopoverHandler>
            <PopoverContent>Popever title</PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};
