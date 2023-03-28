type PropsText = {
  title: string;
  description?: string;
};

export default function Text(props: PropsText) {
  return (
    <p className="text-center">
      <span>
        <strong>{props.title}: </strong>
      </span>

      {/* <br /> */}

      <span className="text-center">{props.description}</span>
    </p>
  );
}
