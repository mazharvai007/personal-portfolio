import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '@/data';

const About = () => {
	return (
		<section id="about" className="md:pb-20">
			<BentoGrid>
				{gridItems.map((item, i) => (
					<BentoGridItem
						key={i}
						id={item.id}
						title={item.title}
						description={item.description}
						className={item.className}
						img={item.img}
						imgClassName={item.imgClassName}
						titleClassName={item.titleClassName}
						spareImg={item.spareImg}
					/>
				))}
			</BentoGrid>
		</section>
	);
};

export default About;
