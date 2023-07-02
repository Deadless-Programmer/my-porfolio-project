import React from "react";
import { Link } from "react-router-dom";
import f1 from "../../assets/felaver/Screenshot_1.png";
import f2 from "../../assets/felaver/Screenshot_2.png";
import f3 from "../../assets/felaver/Screenshot_4.png";
import t1 from "../../assets/felaver/toy1.png";
import t2 from "../../assets/felaver/toy2.png";
import t3 from "../../assets/felaver/toy3.png";
import ft1 from "../../assets/felaver/fit1.png";
import ft2 from "../../assets/felaver/fi2.png";
import ft3 from "../../assets/felaver/fit3.png";
const Projects = () => {
  return (
    <>
      <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                <h3 className="text-3xl font-semibold">FelevR</h3>
                <span className="text-sm font-bold tracki uppercase dark:text-gray-400">
                  Recipe landing page
                </span>
                <div>
                  <time className="text-xs tracki uppercase dark:text-gray-400">
                    1 may 2023
                  </time>
                </div>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">
                    User-friendly interface
                  </h3>

                  <p className="mt-3">
                    This recipe website is a user-friendly interface that is
                    easy to navigate. Users can be able to search for recipes,
                    view recipes, and save their favorite recipes quickly and
                    easily. Consider using intuitive UI design principles, such
                    as using clear and concise labels, consistent visual styles,
                    and minimal clutter.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">
                    Fast load times
                  </h3>

                  <p className="mt-3">
                    The website can load quickly to ensure a seamless experience
                    for users. This can be achieved by optimizing image and
                    video sizes, minimizing the use of external libraries and
                    scripts, and using caching techniques to speed up page
                    loads.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">
                    Intuitive recipe layout
                  </h3>

                  <p className="mt-3">
                    The recipe layout is intuitive and easy to follow, with
                    clear instructions, ingredient lists, and preparation steps.
                    Consider using different formatting techniques, such as bold
                    or italicized text, bullet points, and numbered lists to
                    improve the readability of the recipe.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracki">
                    Here is the live site
                  </h3>
                  <button className="mt-3 btn animate-charcter">
                    {" "}
                    <Link to="https://assingment10b7-project.web.app/">
                      FelevR
                    </Link>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <div className="   flex justify-center gap-4 py-6 overflow-x-auto">
          <img
            className="h-56 border-4 w-fit aspect-video rounded-sm object-cover object-center "
            src={f1}
            alt="Image 1"
          />
          <img
            className="h-56 border-4 w-fit aspect-video rounded-sm object-cover object-center "
            src={f2}
            alt="Image 2"
          />
          <img
            className="h-56  border-4 w-fit aspect-video rounded-sm object-cover object-center "
            src={f3}
            alt="Image 3"
          />
        </div>
      </div>
      </div>
      <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                <h3 className="text-3xl font-semibold">Toyztore</h3>
                <span className="text-sm font-bold tracki uppercase dark:text-gray-400">
                Toyztore landing page
                </span>
                <div>
                  <time className="text-xs tracki uppercase dark:text-gray-400">
                    21 may 2023
                  </time>
                </div>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">
                  Premier Destination for Animal-Themed Toys
                  </h3>

                  <p className="mt-3">
                  Toyztore is a premier online destination for animal-themed toys.
                  </p>
                  <p className="mt-3">
                  Our extensive collection features a wide variety of toys inspired by different animals, catering to all age groups.
                  </p>
                  <p className="mt-3">
                  From lifelike animal figurines to interactive plush toys, we offer options that are both educational and entertaining.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">
                  The exceptional client service provided by Toyztore
                  </h3>

                  <p className="mt-3">
                  Personalized Assistance: Our dedicated customer service team is available to provide personalized assistance and guidance, ensuring a seamless shopping experience.
                  </p>
                  <p className="mt-3">
                  Prompt Response: We prioritize timely response to customer inquiries, feedback, and concerns, aiming to address them efficiently and effectively.
                  </p>
                  <p className="mt-3">
                  Hassle-Free Returns: We have a hassle-free returns policy, making it easy for customers to return or exchange products if they are not completely satisfied.
                  </p>
                  <p className="mt-3">
                  Secure Checkout: Our website employs advanced security measures to safeguard customer information during the checkout process, ensuring a secure and trustworthy transaction.
                  </p>
                  <p className="mt-3">
                  Satisfaction Guarantee: We are committed to customer satisfaction and strive to exceed expectations. If any issues arise, we are dedicated to finding a suitable solution to ensure our customers are happy with their purchase.
                  </p>
                </div>
               
                <div>
                  <h3 className="text-xl font-semibold tracki">
                    Here is the live site
                  </h3>
                  <button className="mt-3 btn animate-charcter">
                    {" "}
                    <Link to="https://toyztore-project.web.app">
                    Toyztore
                    </Link>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <div className="   flex justify-center gap-4 py-6 overflow-x-auto">
          <img
            className="h-56 border-4 w-fit aspect-video rounded-sm object-cover object-center "
            src={t1}
            alt="Image 1"
          />
          <img
            className="h-56 border-4 w-fit aspect-video rounded-sm object-cover object-center "
            src={t2}
            alt="Image 2"
          />
          <img
            className="h-56  border-4 w-fit aspect-video rounded-sm object-cover object-center "
            src={t3}
            alt="Image 3"
          />
        </div>
      </div>
      </div>
      <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                <h3 className="text-3xl font-semibold">FitLabLC</h3>
                <span className="text-sm font-bold tracki uppercase dark:text-gray-400">
                FitLabLC landing page
                </span>
                <div>
                  <time className="text-xs tracki uppercase dark:text-gray-400">
                    14 jun 2023
                  </time>
                </div>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">
                  Here are the key features of this website
                  </h3>

                  <p className="mt-3">
                  Interactive Program Schedule: Easily view and select from a variety of fitness activities, workshops, and events with our dynamic program schedule.
                  </p>
                  <p className="mt-3">
                  Online Registration and Payment: Streamline the enrollment process with convenient online registration and secure payment options.
                  </p>
                  <p className="mt-3">
                  Personalized Fitness Profiles: Set goals, track progress, and monitor achievements with personalized fitness profiles for each participant.
                  </p>
                  <p className="mt-3">
                  Fitness Challenges and Rewards: Engage in fun fitness challenges and earn rewards to boost motivation and foster a sense of accomplishment.
                  </p>
                  <p className="mt-3">
                  Expert Resources and Blogs: Access a wealth of fitness-related articles, blogs, and videos from industry experts to enhance knowledge and maintain a healthy lifestyle.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracki">
                  Our FitLab Learning Camp(FitLabLC) website offers a seamless user experience with the following technologies and libraries:
                  </h3>

                  <p className="mt-3">
                  Built with ReactJS and the complete MERN stack (MongoDB, Express, React, Node.js).
                  </p>
                  <p className="mt-3">
                  Utilizes Tailwind CSS for efficient and responsive styling.
                  </p>
                  <p className="mt-3">
                  Integrates React Icons for a wide range of icons.
                  </p>
                  <p className="mt-3">
                  Implements React Query by TanStack for simplified API requests and caching.
                  </p>
                  <p className="mt-3">
                  Utilizes Axios for smooth communication with the server.
                  </p>
                  <p className="mt-3">
                  Uses React Hook Form for efficient form validation and management.
                  </p>
                  <p className="mt-3">
                  Implements JWT for secure user authentication and registration systems.
                  </p>
                  <p className="mt-3">
                  Enhances the user experience with Framer Motion animations.
                  </p>
                </div>
               
                <div>
                  <h3 className="text-xl font-semibold tracki">
                    Here is the live site
                  </h3>
                  <button className="mt-3 btn animate-charcter">
                    {" "}
                    <Link to="https://fitlablc.web.app/">
                    FitLabLC
                    </Link>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <div className="   flex justify-center gap-4 py-6 overflow-x-auto">
          <img
            className="h-56 border-4 w-fit aspect-video rounded-sm object-cover object-center "
            src={ft1}
            alt="Image 1"
          />
          <img
            className="h-56 border-4 w-fit aspect-video rounded-sm object-cover object-center "
            src={ft2}
            alt="Image 2"
          />
          <img
            className="h-56  border-4 w-fit aspect-video rounded-sm object-cover object-center "
            src={ft3}
            alt="Image 3"
          />
        </div>
      </div>
      </div>
    </>
  );
};

export default Projects;
