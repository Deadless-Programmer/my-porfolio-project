import React from 'react';
import img from '../../assets/PROFILE/dan-cornilov-ehUYU820lcA-unsplash.jpg'
const About = () => {
    return (
        <div>
            <div className="p-5 mx-auto sm:p-10 md:p-8 bg-gray-800 dark:text-gray-100">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" className=" h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-6 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
			<div className="space-y-2">
				<p   className="inline-block text-2xl font-semibold sm:text-3xl text-white">Get to Know Me</p>
				<p className="text-xs  text-white">As a React.js Developer
					
				</p>
			</div>
			<div className=" text-white">
				<p>Welcome to my portfolio website! My name is Tuhin, and I am a passionate and dedicated web developer with a focus on the MERN (MongoDB, Express.js, React.js, and Node.js) stack. With a strong background in front-end development and an eye for design, I strive to create immersive and user-friendly web experiences that leave a lasting impression. I have honed my skills in crafting pixel-perfect interfaces, implementing efficient and scalable back-end solutions, and optimizing web applications for optimal performance. With a keen interest in the latest trends and technologies, I continuously expand my knowledge to stay at the forefront of the ever-evolving web development landscape. Whether it's building responsive websites, developing dynamic web applications, or troubleshooting complex coding challenges, I am driven by the desire to deliver exceptional results. Join me on this exciting journey as we transform ideas into tangible digital experiences that inspire and engage users.</p>
			</div>
		</div>
	</div>
</div>
        </div>
    );
};

export default About;