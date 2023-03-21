
type PropsText = {
	title: string;
	description?: string;
}

export default function Text(props : PropsText) {
	return (
		<p>
			<strong>{props.title}:</strong> {props.description}
		</p>
	)
}