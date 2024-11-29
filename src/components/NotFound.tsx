import notFound from "../assets/404.svg";

const NotFound = () => {
  return (
    <div className="w-full h-full flex justify-center items-center max-h-full">
      <div className="flex flex-col gap-10 items-center">
        <img src={notFound} />
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl font-bold text-black">404</h1>
            <p className="text-sm text-basicGray leading-5">
              Oops! The page you're looking for can't be found.
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

export { NotFound };
