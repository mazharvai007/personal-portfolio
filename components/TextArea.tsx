import { Label } from './ui/Label';
import LabelInputContainer from './ui/LabelInputContainer';
import { Textarea } from './ui/Textarea';

const TextArea = ({
	label,
	name,
	rows,
	value,
	placeholder,
	onChange,
	required,
	className,
}: {
	label: string | undefined;
	className: string | undefined;
	name: string | undefined;
	rows?: any;
	value: string | undefined;
	placeholder: string | undefined;
	onChange?: any;
	required: boolean;
}) => {
	return (
		<>
			<LabelInputContainer>
				<Label>{label}</Label>
				<Textarea
					className={className}
					name={name}
					rows={rows}
					value={value}
					placeholder={placeholder}
					onChange={onChange}
					required
				/>
			</LabelInputContainer>
		</>
	);
};

export default TextArea;
