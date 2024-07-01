import { Input } from './ui/Input';
import { Label } from './ui/Label';
import LabelInputContainer from './ui/LabelInputContainer';

const TextInput = ({
	label,
	className,
	type,
	name,
	value,
	placeholder,
	onChange,
	required,
}: {
	label: string;
	className: string;
	type: string;
	name: string;
	value: string;
	placeholder: string;
	onChange?: (() => void) | undefined;
	required: boolean;
}) => {
	return (
		<>
			<LabelInputContainer>
				<Label htmlFor={name}>{label}</Label>
				<Input
					className={className}
					id={name}
					name={name}
					placeholder={placeholder}
					type={type}
					value={value}
					onChange={onChange}
					required
				/>
			</LabelInputContainer>
		</>
	);
};

export default TextInput;
