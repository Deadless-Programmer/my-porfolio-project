import React from 'react';
import { Link } from 'react-router-dom';
import f1 from "../../assets/felaver/Screenshot_1.png";
import f2 from "../../assets/felaver/Screenshot_2.png";
import f3 from "../../assets/felaver/Screenshot_4.png";
const FelevR = () => {
    return (
        <div>
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
        </div>
    );
};

export default FelevR;