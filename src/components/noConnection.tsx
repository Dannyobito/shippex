import noConnection from "../assets/connection-lost.svg";
const NoConnection = () => {
  return (
    <div className="w-full h-full flex justify-center items-center max-h-full">
      <div className="flex flex-col gap-10 items-center">
        <img src={noConnection} />
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl font-bold text-black">Connection Lost</h1>
            <p className="text-sm text-basicGray leading-5">
              Oops! It seems you're currently offline.
            </p>
          </div>
          <button className="mt-[2.375rem] text-primary font-semibold text-[0.9375rem]">
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export { NoConnection };
