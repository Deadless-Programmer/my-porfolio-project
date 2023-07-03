import React from 'react';
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <div>
            <section className="bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto flex flex-col text-white p-6">
		<h2 className="py-4 text-3xl font-bold text-center ">Showcasing Innovative Web Solutions</h2>
		<div className="divide-y divide-gray-700">
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center lg:col-span-1 col-span-full">
					<img className='w-60 rounded-md' src="https://i.postimg.cc/rFyjDzmv/felever.png" alt="" />
				</div>
				<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-xs tracki uppercase dark:text-violet-400">RECIPE LANDING PAGE</span>
					<span className="text-xl font-bold md:text-2xl">FelevR</span>
					<span className="mt-4 dark:text-gray-300">Embark on a flavorful journey with our recipe website. Discover a vast collection of tried-and-tested recipes, from appetizers to desserts. Elevate your cooking skills with step-by-step instructions and helpful tips. Whether you're a novice or a seasoned chef, indulge your culinary passion on our site.</span>
                    <Link to='/felver'><button className='mt-5 btn animate-charcter'>For details</button></Link>
				</div>
               
			</div>
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center lg:col-span-1 col-span-full">
					<img className='w-60 rounded-md' src="https://i.postimg.cc/LsGsz5j9/toyz.png" alt="" />
				</div>
				<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-xs tracki uppercase dark:text-violet-400">TOYS FOR KIDS LANDING PAGE</span>
					<span className="text-xl font-bold md:text-2xl">Toyztore</span>
					<span className="mt-4 dark:text-gray-300">Ignite your child's imagination with our captivating toy website. Explore a diverse selection of toys that entertain, educate, and inspire creativity. From classic favorites to innovative new releases, we offer endless possibilities for fun and learning. Discover the perfect toys for endless playtime enjoyment.</span>
                    <Link to='/toyztore'><button className='mt-5 btn animate-charcter'>For details</button></Link>
				</div>
               
			</div>
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center lg:col-span-1 col-span-full">
					<img className='w-60 rounded-md' src="https://i.postimg.cc/gJ4BCX4d/fit.png" alt="" />
				</div>
				<div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
					<span className="text-xs tracki uppercase dark:text-violet-400">FITNESS LANDING PAGE</span>
					<span className="text-xl font-bold md:text-2xl">FitLabLC</span>
					<span className="mt-4 dark:text-gray-300">Achieve your fitness goals with our dynamic website. Discover a range of workouts, personalized training plans, and expert tips to enhance your fitness journey. Whether you're a beginner or a fitness enthusiast, our platform offers the tools and motivation you need to live a healthy, active lifestyle.</span>
                    <Link to='/fitLabLC'><button className='mt-5 btn animate-charcter'>For details</button></Link>
				</div>
               
			</div>
			
			
		</div>
	</div>
</section>
        </div>
    );
};

export default Project;