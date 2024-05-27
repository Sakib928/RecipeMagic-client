import devPhoto from "../../assets/images/my_photo.jpeg";
const AboutDev = () => {
  return (
    <div>
      <section className="bg-white mt-8">
        <div className="relative flex">
          <div className="min-h-screen lg:w-1/3"></div>
          <div className="hidden w-3/4 min-h-screen bg-gray-100 lg:block"></div>

          <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
              About the <br />
              <span className="text-blue-500">Developer</span>
            </h1>

            <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
              <img
                className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96"
                src={devPhoto}
                alt=""
              />

              <div className="mt-8 lg:px-10 lg:mt-0">
                <h1 className="text-2xl font-semibold text-gray-800 lg:w-72">
                  Hi, I am Sakibul Hasan
                </h1>
                <p className="max-w-lg mt-6 text-gray-500 ">
                  I am a self taught web developer based on Madaripur, Dhaka,
                  Bangladesh.I am passionate about designing and developing fast
                  and responsive websites with smooth user experience.My
                  expertise includes technologies like react.js, express js,
                  node js, mongodb, html, css, javascript.I am currently
                  studying Electrical Engineering at Hajee Mohammad Danesh
                  Science and Technology University, Dinajpur.
                </p>
                <br />
                <p className="text-gray-600 ">
                  Technologies used for this project : react, node, mongodb,
                  jwt, html, tailwindcss, javascript
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutDev;
