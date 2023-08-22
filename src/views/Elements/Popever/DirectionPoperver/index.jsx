import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

export default () => {
  return (
    <div className="transaction_card p-5">
      <div className="text-md font-bold text-left ">Direction Popever</div>
      <div className="flex items-center gap-2 flex-wrap mt-3">
        <div>
          <Popover placement="top">
            <PopoverHandler>
              <button className=" py-[6px] px-3 rounded-lg bg-[var(--primary-color)] text-white transition-all hover:bg-[var(--light-red-color)] text-sm">
                Popever on top
              </button>
            </PopoverHandler>
            <PopoverContent>Popever title</PopoverContent>
          </Popover>
        </div>
        <div>
          <Popover placement="right">
            <PopoverHandler>
              <button className=" py-[6px] px-3 rounded-lg bg-[var(--primary-color)] text-white transition-all hover:bg-[var(--light-red-color)] text-sm">
                Popever on right
              </button>
            </PopoverHandler>
            <PopoverContent>Popever title</PopoverContent>
          </Popover>
        </div>
        <div>
          <Popover placement="bottom">
            <PopoverHandler>
              <button className=" py-[6px] px-3 rounded-lg bg-[var(--primary-color)] text-white transition-all hover:bg-[var(--light-red-color)] text-sm">
                Popever on bottom
              </button>
            </PopoverHandler>
            <PopoverContent>Popever title</PopoverContent>
          </Popover>
        </div>
        <div>
          <Popover placement="left">
            <PopoverHandler>
              <button className=" py-[6px] px-3 rounded-lg bg-[var(--primary-color)] text-white transition-all hover:bg-[var(--light-red-color)] text-sm">
                Popever on left
              </button>
            </PopoverHandler>
            <PopoverContent>Popever title</PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};
