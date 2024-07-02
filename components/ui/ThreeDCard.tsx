'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from './CardContainer';
import Link from 'next/link';
import { FaLocationArrow } from 'react-icons/fa6';
import { AnimatedTooltip } from './AnimatedTooltip';

export function ThreeDCard({
	title,
	description,
	img,
	iconLists,
	link,
	sourceLink,
}: {
	title?: string;
	description?: string;
	img?: string | any;
	iconLists?: any;
	link?: string | any;
	sourceLink?: string | any;
}) {
	return (
		<CardContainer className="inter-var">
			<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black-100 dark:border-white/[0.1] border-black/[0.1] w-auto sm:w-[38rem] h-auto rounded-3xl p-6 border">
				<CardItem translateZ="100" className="w-full">
					<div
						className="relative w-full h-full overflow-hidden rounded-3xl p-4"
						style={{ backgroundColor: '#13162D' }}
					>
						<Image
							src={img}
							height="1000"
							width="1000"
							className="h-60 w-full object-cover object-top rounded-3xl group-hover/card:shadow-xl"
							alt="thumbnail"
						/>
					</div>
				</CardItem>
				<CardItem
					translateZ="50"
					className="text-xl font-bold text-neutral-600 dark:text-white mt-10"
				>
					{title}
				</CardItem>
				<CardItem
					as="p"
					translateZ="60"
					className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
				>
					{description}
				</CardItem>

				<CardItem className="flex flex-row items-center justify-start mt-5 mb-12 w-full">
					<AnimatedTooltip items={iconLists} />
				</CardItem>
				<div className="flex justify-between items-center mt-12 flex-col md:flex-row gap-y-4">
					<CardItem
						translateZ={20}
						target="__blank"
						className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
					>
						<Link
							href={sourceLink}
							className="flex justify-center items-center gap-2 text-sm font-semibold"
							target="_blank"
						>
							Source Code <FaLocationArrow />
						</Link>
					</CardItem>
					<CardItem
						translateZ={20}
						as="button"
						className="px-8 py-2 rounded-lg bg-gradient-to-b from-black-200 to-violet-950 text-white hover:ring-2 hover:from-ring-black-200 hover:to-ring-violet-800 hover:shadow-xl transition duration-300 text-sm font-semibold"
					>
						<Link href={link} target="_blank">
							Live Project
						</Link>
					</CardItem>
				</div>
			</CardBody>
		</CardContainer>
	);
}
