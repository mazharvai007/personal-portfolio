import { workExperience } from '@/data';
import React from 'react';
import { Button } from './ui/MovingBorder';

const Experience = () => {
	return (
		<section className="md:py-20 pt-24">
			<h2 className="heading md:mb-20 md:mb-32">
				My <span className="text-purple">work experience</span>
			</h2>

			<div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
				{workExperience.map((card) => (
					<Button
						key={card.id}
						borderRadius="1.75rem"
						duration={Math.floor(Math.random() * 10000) + 10000}
						style={{
							background: 'rgb(4,7,29)',
							backgroundColor:
								'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
							borderRadius: `calc(1.75rem* 0.96)`,
						}}
						className="flex-1 text-white border-neutral-200 dark:border-slate-800"
					>
						<div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
							<img
								src={card.thumbnail}
								alt={card.title}
								className="lg:w-32 md:w-20 w-16"
							/>
							<div className="lg:ms-5">
								<h3 className="text-start text-xl md:text-2xl font-bold">
									{card.title}
								</h3>
								<p className="text-left text-white-100 py-1">
									{card.company}
								</p>
								<div className="flex items-center justify-start gap-2 text-white-100">
									<p>{card.startDate}</p>
									<p>-</p>
									<p>{card.endDate}</p>
								</div>
								<p className="text-start text-white-100 mt-3 font-normal">
									{card.desc}
								</p>
							</div>
						</div>
					</Button>
				))}
			</div>
		</section>
	);
};

export default Experience;
