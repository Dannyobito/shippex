import { formatDate } from "../utils/formatDate";
import divider from "../assets/divider.svg";
import boxAdd from "../assets/box-add.svg";
import boxCheck from "../assets/box-check.svg";
import boxSearch from "../assets/box-search.svg";
import shipment from "../assets/shipment.svg";
import avatar from "../assets/avatar.svg";

const scanIcons: Record<number, string> = {
  0: boxAdd,
  1: boxCheck,
  2: boxSearch,
  3: shipment,
};

const Scan = ({ scan, i }: { scan: any; i: number }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-start">
      <div className="flex flex-col font-medium text-sm leading-5 w-[6.3125rem] text-basicGray">
        <p>{formatDate(scan?.creation).time}</p>
        <p>{formatDate(scan?.creation).date}</p>
      </div>
      <div className="flex gap-2 sm:gap-0">
        <div className="flex flex-col items-center">
          <img src={scanIcons[i % 4]} className="min-h-fit min-w-fit" />
          <img src={divider} className="min-w-fit pb-2" />
        </div>
        <div className="flex flex-col gap-1 px-3">
          <p className="text-base leading-6 font-semibold">{scan?.scan}</p>
          <p className="text-base leading-6 font-medium text-basicGray">
            {scan?.scan_comment}
          </p>
          <div className="flex gap-2 py-[0.625rem]">
            <img src={avatar} />
            <p className="text-base leading-6 font-semibold">{scan?.owner}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Scan };
