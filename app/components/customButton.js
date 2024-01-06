"use client";

export default function CustomButton() {
  return (
    <button
      onClick={() => console.log("I have clicked here!")}
      className="bg-green-500 px-5 py-1 rounded-sm mt-5"
    >
      Click Here
    </button>
  );
}
