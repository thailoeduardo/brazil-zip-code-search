type PropsMessage = {
  message: string;
};

export default function MessageError(props: PropsMessage) {
  return (
    <div className="text-center border-red-500 bg-red-300 text-white py-2 px-40 my-3 z-50">
      <p>{props.message}</p>
    </div>
  );
}
