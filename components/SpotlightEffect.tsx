import React from 'react';
import { Spotlight } from './ui/Spotlight';

const SpotlightEffect = () => {
	return (
		<div>
			<Spotlight
				className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
				fill="white"
			/>
			<Spotlight
				className="h-[80vh] w-[50vw] top-10 left-full"
				fill="purple"
			/>
			<Spotlight
				className=" h-[80vh] w-[50vw] top-28 lef-80"
				fill="blue"
			/>
		</div>
	);
};

export default SpotlightEffect;
