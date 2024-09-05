import "./style.css";

const Shimmer = () => {
  return (
    <div>
      <div className="card pulse">
        <div className="shimmerBG media"></div>
        <div className="p-32">
          <div className="shimmerBG title-line"></div>
          <div className="shimmerBG title-line end"></div>

          <div className="shimmerBG content-line m-t-24"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line"></div>
          <div className="shimmerBG content-line end"></div>
        </div>
      </div>
    </div>
  );
};

const ShimmerMain = () => {
  return (
    <div className="  w-full mb-3">
      <h1 className="text-white flex justify-center font-bold text-2xl mt-10">
        LOADING Please Wait...
      </h1>
      <div className="  sm:flex  justify-between sm:space-x-8">
        {Array.from({ length: 3 }, () => (
          <div className="card-body  ">
            <Shimmer />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerMain;
