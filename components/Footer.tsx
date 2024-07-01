import Link from 'next/link';
import React from 'react';
import { socialMedia } from '@/data';
import Image from 'next/image';
import CtaContact from './CtaContact';

const Footer = () => {
	return (
		<footer className="w-full pt-20 pb-10">
			<div className="w-full absolute left-0 -bottom-72 min-h-96">
				<img
					src="/footer-grid.svg"
					alt="footer grid"
					className="w-full h-full opacity-50"
				/>
			</div>

			<CtaContact />

			<div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-y-4">
				<p className="md:text-base text-sm md:font-normal font-light">
					Copyright © 2024 Mazharul Islam
				</p>
				<div className="flex items-center md:gap-3 gap-6">
					{socialMedia.map((profile) => (
						<div
							key={profile.id}
							className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
						>
							<Link href={profile.link}>
								<Image
									src={profile.img}
									alt={profile.name}
									width={20}
									height={20}
								/>
							</Link>
						</div>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
