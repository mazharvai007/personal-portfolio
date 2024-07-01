import { cn } from '@/utils/cn';

const LabelInputContainer = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn('flex flex-col space-y-2 w-full mb-4', className)}>
			{children}
		</div>
	);
};

export default LabelInputContainer;
