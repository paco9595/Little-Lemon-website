export default function Error({ type }: { type: string }) {
  return (
    <>
      <div>
        {type === "required" ? (
          <span className="text-red-500">Required Field</span>
        ) : null}
      </div>
      <div>
        {type === "pattern" ? (
          <span className="text-red-500">Use a correct email </span>
        ) : null}
      </div>
    </>
  );
}
