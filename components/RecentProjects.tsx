import { navItems, projects } from '@/data';
import Link from 'next/link';
import { ThreeDCard } from './ui/ThreeDCard';

const RecentProjects = () => {
	// Descending order
	const order = (a: any, b: any) => {
		return b.id - a.id;
	};

	return (
		<section id="projects" className="py-20">
			<h2 className="heading md:mb-20 mb-48">
				A small selection{' '}
				<span className="text-purple">recent projects</span>
			</h2>

			<div className="flex flex-wrap items-center justify-center p-4 gap-x-64 gap-y-80 lg:gap-y-24 relative">
				{projects.sort(order).map((project) => (
					<div
						key={project.id}
						id={`project${project.id}`}
						className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
					>
						<ThreeDCard
							title={project.title}
							description={project.des}
							img={project.img}
							iconLists={project.iconLists}
							link={project.link}
							sourceLink={project.sourceLink}
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default RecentProjects;
