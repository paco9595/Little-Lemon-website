import { useState } from "react";

export default function Subscribe({
  submit,
}: {
  submit: (state: string) => void;
}) {
  const [state, setState] = useState("");
  return (
    <div className="text-xs mt-5">
      <input
        type="text"
        className="py-2 pl-2 mr-2 rounded-[6px] "
        placeholder="email"
        onChange={(e) => setState(e.target.value)}
        aria-label="subscribe-input"
      />
      <button
        name="subscribe-btn"
        className="bg-[#495E57] rounded-[6px] px-4 py-2"
        onClick={() => submit(state)}
        aria-label="subscribe-btn"
      >
        Subscribe
      </button>
    </div>
  );
}
