export default function Tag({
  label,
  isActive,
  clickHandler
}: {
  label: string;
  isActive: boolean;
  clickHandler: (label:string) => void;
}) {
  return (
    <div
      className={`my-2 w-fit px-2 py-1 rounded-xl mx-2 text-nowrap ${isActive ? "bg-[#495E57]" : "bg-[#C9D8CE]"}`}
      onClick={() => clickHandler(label)}
    >
      {label}
    </div>
  );
}
