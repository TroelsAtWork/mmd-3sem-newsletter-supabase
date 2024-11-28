"use client";
const Button = ({ props }) => {
  console.log(props);
  return (
    <button
      onClick={() => props.deleteSubscriber()}
      className="bg-red-500 rounded-xl p-2 text-white"
    >
      Delete
    </button>
  );
};

export default Button;
