'use client';

import { cn } from '@/utils/cn';
import Image from 'next/image';
import { BackgroundGradientAnimation } from './GradientBg';
import { GridGlobe } from './GridGlobe';
import { techStack } from '@/data';
import Lottie from 'react-lottie';
import { useState } from 'react';
import animationData from '@/data/confetti.json';
import MagicButton from './MagicButton';
import { IoCopyOutline } from 'react-icons/io5';
import Link from 'next/link';

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-rows-2 gap-4 lg:gap-8 mx-auto',
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	id,
	title,
	description,
	img,
	imgClassName,
	titleClassName,
	spareImg,
}: {
	className?: string;
	id: number;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImg?: string;
}) => {
	// const [copied, setCopied] = useState(false);

	// const defaultOptions = {
	// 	loop: copied,
	// 	autoplay: copied,
	// 	animationData: animationData,
	// 	rendererSettings: {
	// 		preserveAspectRatio: 'xMidYMid slice',
	// 	},
	// };

	// const handleCopy = () => {
	// 	const text = 'mazharvai007@gmail.com';
	// 	navigator.clipboard.writeText(text);
	// 	setCopied(true);
	// };

	return (
		<div
			id={`grid${id}`}
			className={cn(
				'row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border-white/[0.1] bg-white border justify-between flex flex-col space-y-4',
				className
			)}
			style={{
				background: 'rgb(4,7,29)',
				backgroundColor:
					'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
			}}
		>
			<div className={`${id === 6 && 'flex justify-center '} h-full`}>
				<div className="w-full h-full absolute">
					{img && (
						<img
							src={img}
							alt={img}
							className={cn(
								imgClassName,
								'object-cover object-center'
							)}
						/>
					)}
				</div>
				{/* <div
					className={`absolute right-0 -bottom-5 ${
						id === 5 && 'w-full opacity-80'
					}`}
				>
					{spareImg && (
						<img
							src={spareImg}
							alt={spareImg}
							className="object-cover object-center w-full h-full"
						/>
					)}
				</div> */}

				{id === 6 && (
					<BackgroundGradientAnimation>
						{/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" /> */}
					</BackgroundGradientAnimation>
				)}

				{id === 1 ? (
					<div
						className={cn(
							titleClassName,
							'group-hover/bento:translate-x-2 transition duration-200 relative flex flex-col px-5 p-5 lg:p-10'
						)}
					>
						<div
							className={
								'font-sans text-lg lg:text-3xl font-bold z-10 mb-4'
							}
						>
							{title}
						</div>
						<div
							className={
								'font-sans font-normal md:text-lg lg:text-lg text-lg text-[#c1c2d3] z-10 leading-normal'
							}
						>
							{description}
						</div>
					</div>
				) : (
					<div
						className={cn(
							titleClassName,
							'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
						)}
					>
						<div
							className={
								'font-sans font-normal md:max-w-64 md:text-xs lg:text-base text-sm text-[#828392] z-10'
							}
						>
							{description}
						</div>
						<div
							className={
								'font-sans text-lg lg:text-3xl max-w-96 font-bold z-10'
							}
						>
							{title}
						</div>

						{/* {id === 2 && <GridGlobe />} */}

						{id === 3 && (
							<div className="flex gap-1 lg:gap-5 w-full">
								<div className="flex flex-wrap gap-3 lg:gap-2 mt-8">
									{techStack.map((item) => (
										<span
											key={item.name}
											className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
										>
											{item.name}
										</span>
									))}
								</div>
							</div>
						)}

						{id === 6 && (
							<div className="mt-5 relative ">
								{/* <div className="absolute -bottom-5 right-0">
								<Lottie
									options={defaultOptions}
									height={200}
									width={200}
								/>
							</div> */}

								{/* <MagicButton
								title={
									copied ? 'Email copied' : 'Copy my email'
								}
								icon={<IoCopyOutline />}
								position="left"
								handleClick={handleCopy}
								otherClasses="!bg-[#161a31] gap-2"
							/> */}

								<Link
									href="/contact"
									className="px-4 py-2 rounded-lg border border-white bg-white text-black-100 text-lg font-semibold hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,.2)] transition duration-200"
								>
									Let&apos;s Discuss
								</Link>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
};
