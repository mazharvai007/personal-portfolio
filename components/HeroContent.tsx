import React from 'react';
import { FlipWords } from './ui/FlipWords';
import { myWords } from '@/data';
import Link from 'next/link';
import MagicButton from './ui/MagicButton';
// import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { FaLocationArrow } from 'react-icons/fa6';

const HeroContent = () => {
	return (
		<div className="flex justify-center relative my-20 z-10">
			<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col md:items-start items-center justify-center">
				<h2 className="uppercase tracking-widest text-lg md:text-left text-center text-blue-100 max-w-80">
					Hi! I am Mazharul Islam
				</h2>
				{/* <TextGenerateEffect
						className="text-left text-[40px] md:text-5xl lg:text-6xl"
						words="Transforming Concepts into Seamless User Experiences"
					/> */}
				<FlipWords
					words={myWords}
					duration={3000}
					className="md:text-left text-center text-[40px] md:text-5xl lg:text-6xl font-bold my-3"
				/>
				<p className="md:text-left text-center md:tracking-wider mb-4 text-lg lg:text-2xl">
					based in Bangladesh. 🇧🇩
				</p>
				<Link href="#projects">
					<MagicButton
						title="See my recent works"
						icon={<FaLocationArrow />}
						position="right"
						otherClasses="gap-2"
					/>
				</Link>
			</div>
		</div>
	);
};

export default HeroContent;
