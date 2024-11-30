import noResults from "../assets/no-results.svg";

interface NoResultsProps {
  onSubmit: () => void;
}
const NoResults = ({ onSubmit }: NoResultsProps) => {
  return (
    <div className="w-full h-full flex justify-center items-center max-h-full">
      <div className="flex flex-col gap-10 items-center">
        <img src={noResults} />
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl font-bold text-[#111111]">
              No results found
            </h1>
            <p className="text-sm text-basicGray leading-5">
              No results found. Please try again.
            </p>
          </div>
          <button
            onClick={() => onSubmit()}
            className="mt-[2.375rem] text-primary font-semibold text-[0.9375rem]"
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export { NoResults };
