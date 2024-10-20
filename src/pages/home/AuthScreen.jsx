import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Features from "./smallComponent/Features";
import Accordion from "./smallComponent/Accordion";
import ImgSlider from "./smallComponent/ImgSlider";
import Footer from "./smallComponent/Footer";

const AuthScreen = () => {
	const [selectedLanguage, setSelectedLanguage] = useState('English');
	const [email, setEmail] = useState("");
	const navigate = useNavigate();
	const handleFormSubmit = (e) => {
		e.preventDefault();
		navigate("/signup?email=" + email);
	};
	return (
		<div className='hero-bg relative'>
			{/* Navbar */}
			<header className='max-w-6xl mx-auto flex items-center justify-between p-4 pb-10'>
				<img src='/netflix-logo.png' alt='Netflix Logo' className='w-32 md:w-52' />
				<div className="dropdown-button flex flex-row ">
					<select name="select" id="select" className="p-2 rounded flex-1 bg-black/80 border border-gray-700 text-white m-2 px-1">
						<option value="English" defaultValue={selectedLanguage}>English</option>
						<option value="Hindi">Hindi</option>
					</select>
					<Link to={"/login"} className="text-white bg-red-600 py-1 px-2 rounded m-2">
						Sign In
					</Link>
				</div>
			</header>

			{/* hero section */}
			<div className='flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto'>
				<h1 className='text-4xl md:text-6xl font-bold mb-4'>Unlimited movies, TV <br /> shows and more</h1>
				<p className='my-4 font-bold text-xl'>Starts at ₹149. Cancel at any time.</p>
				<p className='my-4'>Ready to watch? Enter your email to create or restart your membership.</p>

				<form className='flex flex-col md:flex-row gap-4 w-1/2' onSubmit={handleFormSubmit}>
					<input
						type='email'
						placeholder='Email address'
						className='p-2 rounded flex-1 bg-black/40 border border-gray-700'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<button className='bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center'>
						Get Started
						<ChevronRight className='size-8 md:size-10' />
					</button>
				</form>

			</div>

			{/* separator */}
			{/* <div className="default-ltr-cache-dulgtd">
                <div className="curve-container">
                    <div className="default-ltr-cache-1f97ztc">Hello</div>
                </div>
                <div className="default-ltr-cache-jtcpfi">

                </div>
            </div> */}


			<div className='h-2 w-full hero-bg default-ltr-cache-dulgtd' aria-hidden='true' >
				<div className="curve-container">
					<div className="default-ltr-cache-1f97ztc w-full">
					</div>
				</div>
				<div className="default-ltr-cache-dulgtd"></div>
			</div>

			<div className="bg-black py-2 px-4">
				<ImgSlider />
			</div>

			{/* 1st section */}
			<div className='py-5 bg-black text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
					{/* left side */}
					<div className='flex-1 text-center md:text-left'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Enjoy on your TV</h2>
						<p className='text-lg md:text-xl'>
							Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
						</p>
					</div>
					{/* right side */}
					<div className='flex-1 relative'>
						<img src='/tv.png' alt='Tv image' className='mt-4 z-10 relative' />
						<video
							className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10'
							playsInline
							autoPlay={true}
							muted
							loop
						>
							<source src='/hero-vid.m4v' type='video/mp4' />
						</video>
					</div>
				</div>
			</div>

			{/* separator */}
			{/* <div className='h-2 w-full bg-[#232323]' aria-hidden='true' /> */}
			<Features />
			<div className="bg-black py-10 px-4">
				<Accordion />
			</div>
			{/* separator */}
			{/* <div className='h-2 w-full bg-[#232323]' aria-hidden='true' /> */}
			<div className="signup-container bg-black w-full flex flex-col items-center justify-center 	text-center pb-20 text-white mx-auto">
				<p className='my-4'>Ready to watch? Enter your email to create or restart your membership.</p>
				<form className='flex flex-col md:flex-row gap-4 w-1/2' onSubmit={handleFormSubmit}>
					<input
						mandatory="true"
						type='email'
						placeholder='Email address'
						className='p-2 rounded flex-1 bg-black/40 border border-gray-700'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<button className='bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center'>
						Get Started
						<ChevronRight className='size-8 md:size-10' />
					</button>
				</form>
			</div>
			<div className="bg-black w-full text-white">
				<Footer />
			</div>
		</div>
	);
};
export default AuthScreen;




