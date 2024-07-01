import Hero from '@/components/Hero';
import RecentProjects from '@/components/RecentProjects';
// import Testimonials from '@/components/Testimonials';
import Experience from '@/components/Experience';
// import Approach from '@/components/Approach';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import About from '@/components/About';

export default function Home() {
	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
			<div className="max-w-7xl w-full">
				<Navbar />
				<Hero />
				<About />
				<RecentProjects />
				{/* <Testimonials /> */}
				<Experience />
				{/* <Approach /> */}
				<Footer />
			</div>
		</main>
	);
}
