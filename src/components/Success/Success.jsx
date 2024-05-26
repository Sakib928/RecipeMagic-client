import CountUp from "react-countup";
const Success = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center font-extrabold">Success Stories</h1>{" "}
        <p className="max-w-[900px] mt-6 text-center">
          Our website started as a way to share my love of cooking with friends
          and family. But to our surprise, it quickly gained popularity! People
          from all over the world started visiting our site for delicious
          recipes and easy-to-follow instructions.
        </p>
      </div>
      <div className="stats stats-vertical md:stats-horizontal shadow w-full text-center mt-10">
        <div className="stat">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-value">
            <div className="flex text-4xl font-medium justify-center py-10">
              <CountUp className="" end={250} enableScrollSpy />
              <h1>+</h1>
            </div>
          </div>
          <div className="stat-desc text-center text-black text-lg">
            Different Recipes
          </div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-value">
            <div className="flex text-4xl font-medium justify-center py-10">
              <CountUp className="" end={2} enableScrollSpy />
              <h1>M+</h1>
            </div>
          </div>
          <div className="stat-desc text-center text-black text-lg">
            Monthly Visitors
          </div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-value">
            <div className="flex text-4xl font-medium justify-center py-10">
              <CountUp className="" end={55} enableScrollSpy />
            </div>
          </div>
          <div className="stat-desc text-center text-black text-lg">
            Different Countries
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
