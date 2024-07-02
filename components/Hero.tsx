import HeronContent from './HeroContent';
import HeroImg from './HeroImg';

const Hero = () => {
	return (
		<div className="md:pb-20 md:pt-36 pt-12">
			<div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] flex items-center justify-center absolute top-0 left-0">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
			</div>

			<div className="flex flex-col md:flex-row items-center justify-between md:gap-10">
				<HeronContent />
				<HeroImg />
			</div>
		</div>
	);
};

export default Hero;
