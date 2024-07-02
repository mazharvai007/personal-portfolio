import ContactForm from '@/components/ContactForm';
import Copyright from '@/components/Copyright';
import Navbar from '@/components/Navbar';
import SpotlightEffect from '@/components/SpotlightEffect';

const Contact = () => {
	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
			<div className="max-w-7xl w-full">
				<SpotlightEffect />
				<Navbar />
				<ContactForm />
				<Copyright />
			</div>
		</main>
	);
};

export default Contact;
