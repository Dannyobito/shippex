import NoResults from "../assets/no-results.svg";
const NoDetails = () => {
  return (
    <div className="w-full h-full flex justify-center items-center max-h-full">
      <div className="flex flex-col gap-10 items-center">
        <img src={NoResults} />
        <p className="text-[.9375rem] text-basicGray font-medium">
          Enter a valid AWB ID to display details
        </p>
      </div>
    </div>
  );
};

export { NoDetails };
