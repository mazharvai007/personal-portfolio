'use client';

import { useState } from 'react';
import { HoveredLink, Menu, MenuItem } from './ui/NavbarMenu';
import { cn } from '@/utils/cn';
import { navItems } from '@/data';
import Link from 'next/link';
import Image from 'next/image';
import MagicButton from './ui/MagicButton';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const Navbar = ({ className }: { className?: string }) => {
	const [active, setActive] = useState<string | null>(null);
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div
			className={cn(
				'top-10 sticky z-20 flex items-center justify-between',
				className
			)}
		>
			<Menu setActive={setActive}>
				<Link
					href="/"
					className="flex items-center justify-center gap-2"
				>
					<Image
						src="/mazharul-islam.png"
						alt="Mazharul Islam"
						width={30}
						height={30}
						className="rounded-full"
					/>
					<span className="font-semibold text-lg hidden md:flex">
						Mazharul Islam
					</span>
				</Link>
				<div className="md:flex md:gap-6 hidden">
					{navItems.map((item) => (
						<HoveredLink key={item.id} href={item.link}>
							{item.name}
						</HoveredLink>
					))}
				</div>

				<div className="flex md:hidden">
					<GiHamburgerMenu onClick={() => setToggleMenu(true)} />

					{toggleMenu && (
						<div className="flex items-center justify-center absolute -top-12 -left-5 z-10 bg-black-100 w-[100vw] h-[100vh] scale-100 duration-200 transform-gpu">
							<IoMdClose
								onClick={() => setToggleMenu(false)}
								className="absolute top-3 right-2"
								fontSize={20}
							/>

							<div className="flex flex-col items-center font-normal text-xl gap-6">
								{navItems.map((item) => (
									<Link
										key={item.id}
										href={item.link}
										className="hover:!text-violet-500 transition duration-200"
									>
										{item.name}
									</Link>
								))}
							</div>
						</div>
					)}
				</div>
			</Menu>

			<Link
				href="/contact"
				className="px-8 py-2 rounded-lg bg-gradient-to-b from-violet-800 to-blue-900 text-white hover:ring-2 hover:from-ring-black-200 hover:to-ring-violet-800 hover:shadow-xl transition duration-300 md:text-lg text-sm font-semibold"
			>
				Hire Me
			</Link>
		</div>
	);
};

export default Navbar;
