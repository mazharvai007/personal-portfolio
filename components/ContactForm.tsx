'use client';

import { Suspense, useRef, useState } from 'react';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import TextInput from './TextInput';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import TextArea from './TextArea';
import useAlert from '@/hooks/useAlert';
import emailjs from '@emailjs/browser';
import Loader from './Loader';
import Alert from './Alert';

const ContactForm = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);
	const { alert, showAlert, hideAlert } = useAlert();

	const handleChange = ({
		target: { name, value },
	}: {
		target: {
			name: string;
			value: string;
		};
	}) => {
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		if (
			process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
			process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
			process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
			form
		) {
			emailjs
				.send(
					process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
					process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
					{
						from_name: form.name,
						to_name: 'Mazharul Islam',
						from_email: form.email,
						email_subject: form.subject,
						to_email: 'mazharvai007@gmail.com',
						message: form.message,
					},
					process.env.NEXT_PUBLIC_EMAILJS_USER_ID
				)
				.then(() => {
					setLoading(false);

					showAlert({
						show: true,
						text: 'Thank you for your message 😃',
						type: 'success',
					});

					setTimeout(() => {
						hideAlert();
						setForm({
							name: '',
							email: '',
							subject: '',
							message: '',
						});
					}, 3000);
				})
				.catch((error) => {
					setLoading(false);
					console.error(error);

					showAlert({
						show: true,
						text: 'I did not receive your message 😭',
						type: 'danger',
					});
				});
		}
	};

	return (
		<section className="flex lg:flex-row flex-col h-full py-20 z-10 w-full relative">
			{alert.show && <Alert {...alert} />}
			<div className="flex-1 flex flex-col max-w-2xl mx-auto">
				<TextGenerateEffect
					words="Get In Touch"
					className="text-5xl text-center mb-8"
				/>
				<form
					ref={formRef.current}
					onSubmit={handleSubmit}
					className="flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-black-200 to-black-100 p-10 rounded-3xl relative overflow-hidden"
				>
					<Suspense fallback={<Loader />}>
						<TextInput
							label="Name"
							type="text"
							name="name"
							className=""
							value={form.name}
							placeholder="Mazharul Islam"
							onChange={handleChange}
							required
						/>
						<TextInput
							label="Email"
							type="email"
							name="email"
							className=""
							value={form.email}
							placeholder="mazharvai007@gmail.com"
							onChange={handleChange}
							required
						/>
						<TextInput
							label="Subject"
							type="text"
							name="subject"
							className=""
							value={form.subject}
							placeholder="Enter Your Subject"
							onChange={handleChange}
							required
						/>
						<TextArea
							label="Your Message"
							name="message"
							className=""
							rows="4"
							value={form.message}
							placeholder="Write your thoughts here..."
							onChange={handleChange}
							required
						/>
						<MagicButton
							title="Send Message"
							loadingTitle="Sending..."
							icon={<FaLocationArrow />}
							position="right"
							type="submit"
							otherClasses="gap-2"
							loading={loading}
						/>
					</Suspense>
				</form>
			</div>
		</section>
	);
};

export default ContactForm;
