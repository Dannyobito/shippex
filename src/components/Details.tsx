import location from "../assets/location.svg";
import sender from "../assets/sender.svg";
import receipt from "../assets/receipt.svg";
import divider from "../assets/divider.svg";
import boxAdd from "../assets/box-add.svg";
import boxCheck from "../assets/box-check.svg";
import boxSearch from "../assets/box-search.svg";
import shipment from "../assets/shipment.svg";
import avatar from "../assets/avatar.svg";
import { formatDate } from "../utils/formatDate";
const scanIcons: Record<number, string> = {
  0: boxAdd,
  1: boxCheck,
  2: boxSearch,
  3: shipment,
};

const Details = ({ itemDetails }: { itemDetails: any }) => {
  return (
    <main className="w-full flex flex-col items-center lg:items-start lg:flex-row lg:gap-[5.25rem] lg:justify-between">
      <section className="p-5 border border-lightGray w-full lg:min-w-[31.25rem] max-w-[31.25rem] h-fit bg-[#F8FAFC] rounded-lg">
        <h2 className="font-bold text-lg">{itemDetails?.barcode}</h2>
        <p className="text-sm leading-5">{`Last updated ${
          formatDate(itemDetails.modified).date
        } ${formatDate(itemDetails.modified).time}`}</p>
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row text-[0.9375rem] font-medium">
            <div className="flex gap-[0.625rem] px-0 sm:px-4 py-[0.875rem] w-[12.8125rem]">
              <div>
                <img src={sender} />
              </div>
              <h3 className="whitespace-nowrap text-basicGray h-fit">Sender</h3>
            </div>
            <p className="t-black px-4 py-0 sm:py-[0.875rem]">
              {itemDetails?.sender_name || itemDetails?.sender}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row text-[0.9375rem] font-medium">
            <div className="flex gap-[0.625rem] px-0 sm:px-4 py-[0.875rem] w-[12.8125rem]">
              <div>
                <img src={sender} />
              </div>
              <h3 className="whitespace-nowrap text-basicGray h-fit">
                Consignee
              </h3>
            </div>
            <p className="t-black px-4 py-0 sm:py-[0.875rem]">
              {itemDetails?.consignee_name || itemDetails?.consignee}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row text-[0.9375rem] font-medium">
            <div className="flex gap-[0.625rem] px-0 sm:px-4 py-[0.875rem] w-[12.8125rem]">
              <div>
                <img src={location} />
              </div>
              <h3 className="whitespace-nowrap text-basicGray h-fit">
                Origin Address
              </h3>
            </div>
            <p className="t-black px-4 py-0 sm:py-[0.875rem]">
              {itemDetails?.sender_name || itemDetails?.sender} <br />
              {itemDetails?.origin_zone
                ? `${itemDetails?.origin_zone},`
                : ``}{" "}
              {itemDetails?.origin_area ? `${itemDetails?.origin_area},` : ``}{" "}
              {itemDetails?.origin_city ? `${itemDetails?.origin_city},` : ``}{" "}
              <br />
              {itemDetails?.origin_state
                ? `${itemDetails?.origin_state},`
                : ``}{" "}
              <br />
              {itemDetails.origin_country
                ? `${itemDetails?.origin_country}`
                : ``}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row text-[0.9375rem] font-medium">
            <div className="flex gap-[0.625rem] px-0 sm:px-4 py-[0.875rem] w-[12.8125rem]">
              <div>
                <img src={location} />
              </div>
              <h3 className="whitespace-nowrap text-basicGray h-fit">
                Destination Address
              </h3>
            </div>
            <p className="t-black px-4 py-0 sm:py-[0.875rem]">
              {itemDetails?.consignee_name || itemDetails?.consignee} <br />
              {itemDetails?.destination_zone
                ? `${itemDetails?.destination_zone},`
                : ``}{" "}
              {itemDetails?.destination_area
                ? `${itemDetails?.destination_area},`
                : ``}{" "}
              {itemDetails?.destination_city
                ? `${itemDetails?.destination_city},`
                : ``}{" "}
              <br />
              {itemDetails?.destination_state
                ? `${itemDetails?.destination_state},`
                : ``}{" "}
              <br />
              {itemDetails.destination_country
                ? `${itemDetails?.destination_country}`
                : ``}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row text-[0.9375rem] font-medium">
            <div className="flex gap-[0.625rem] px-0 sm:px-4 py-[0.875rem] w-[12.8125rem]">
              <div>
                <img src={sender} />
              </div>
              <h3 className="whitespace-nowrap text-basicGray h-fit">
                Service
              </h3>
            </div>
            <p className="t-black px-4 py-0 sm:py-[0.875rem]">
              {itemDetails?.shipping_service}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row text-[0.9375rem] font-medium mt-5 py-[0.625rem]">
            <div className="flex gap-[0.625rem] px-0 sm:px-4 py-[0.875rem] w-[12.8125rem]">
              <div>
                <img src={receipt} />
              </div>
              <h3 className="whitespace-nowrap text-basicGray h-fit">
                Total COD Amount
              </h3>
            </div>
            <p className="t-black px-4 py-0 sm:py-[0.875rem]">
              {itemDetails.total_cod} {itemDetails?.company_currency}
            </p>
          </div>
        </div>
      </section>
      <section className="pt-5 flex flex-col items-center lg:items-start gap-5 w-full max-w-[37.5rem] h-fit">
        <h2 className="font-bold text-lg">TIMELINE</h2>
        <div>
          {itemDetails?.scans?.map((scan: any, i: number) => (
            <div className="flex justify-start">
              <div className="flex flex-col font-medium text-sm leading-5 w-[6.3125rem] text-basicGray">
                <p>{formatDate(scan?.creation).time}</p>
                <p>{formatDate(scan?.creation).date}</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={scanIcons[i % 4]} />
                <img src={divider} className="h-full" />
              </div>
              <div className="flex flex-col gap-1 px-3">
                <p className="text-base leading-6 font-semibold">
                  {scan?.scan}
                </p>
                <p className="text-base leading-6 font-medium text-basicGray">
                  {scan?.scan_comment}
                </p>
                <div className="flex gap-2 py-[0.625rem]">
                  <img src={avatar} />
                  <p className="text-base leading-6 font-semibold">
                    {scan?.owner}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export { Details };
