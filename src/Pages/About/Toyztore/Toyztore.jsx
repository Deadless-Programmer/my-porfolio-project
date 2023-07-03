import React from 'react';

import { Link } from 'react-router-dom';
import t1 from "../../../assets/felaver/toy1.png";
import t2 from "../../../assets/felaver/toy2.png";
import t3 from "../../../assets/felaver/toy3.png";
const Toyztore = () => {
    return (
        <div>
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
        </div>
    );
};

export default Toyztore;