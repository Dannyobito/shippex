interface SearchbarProps {
  setAwb: React.Dispatch<React.SetStateAction<string>>;
  awb: string;
  isValid: boolean;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: () => void;
  resultsFound: boolean;
  setAwbNotFound: React.Dispatch<React.SetStateAction<boolean>>;
}

const Searchbar = (props: SearchbarProps) => {
  const {
    awb,
    setAwb,
    isValid,
    setIsValid,
    onSubmit,
    resultsFound,
    setAwbNotFound,
  } = props;
  return (
    <header
      className={`w-full flex justify-center items-center py-8 bg-[#F8FAFC] rounded-lg ${
        resultsFound ? "" : "absolute"
      }`}
    >
      <nav className="flex flex-col gap-[.625rem] w-full">
        <div className="flex justify-center gap-6 w-full">
          <div className="flex flex-col w-full max-w-[50rem] bg-white">
            <div
              className={`px-4 py-[0.875rem] rounded-lg ${
                isValid
                  ? "border-lightGray border"
                  : "border-[#EF4444] border-2 ring-4 ring-red-400 ring-opacity-25"
              }`}
            >
              <input
                value={awb}
                onChange={(e) => {
                  setAwb(e.target.value);
                  setIsValid(true);
                  setAwbNotFound(false);
                }}
                type="text"
                className="border-0 outline-0 w-full placeholder-basicGray text-[0.9375rem] font-medium"
                placeholder="Enter AWB ID"
              />
            </div>
            {!isValid ? (
              <p className="font-medium text-[.9375rem] text-[#EF4444]">
                Please enter a valid AWB
              </p>
            ) : null}
          </div>
          <button
            disabled={!awb}
            className="px-[2.46875rem] py-[0.875rem] bg-primary text-[0.9375rem] text-white font-semibold rounded-lg whitespace-nowrap disabled:bg-[#60A5FA] disabled:text-[#EFF6FF] h-fit"
            onClick={() => onSubmit()}
          >
            Track
          </button>
        </div>
      </nav>
    </header>
  );
};

export { Searchbar };
