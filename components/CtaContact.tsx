import Link from 'next/link';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';

const CtaContact = () => {
	return (
		<div className="flex flex-col items-center">
			<h2 className="heading lg:max-w-[45vw]">
				Ready to take <span className="text-purple"> your</span> digital
				presence to the next level?
			</h2>
			<p className="text-white-200 md:mt-10 my-5 text-center">
				Reach out to me today and let&apos;s discuss how I can help you
				achieve your goals.
			</p>
			<Link href="/contact">
				<MagicButton
					title="Let's get in touch"
					icon={<FaLocationArrow />}
					position="right"
					otherClasses="gap-2"
				/>
			</Link>
		</div>
	);
};

export default CtaContact;
