export default function Input({ title, type, ref }) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {title}
      </label>
      {type == "textarea" ? (
        <textarea className={classes} ref={ref}></textarea>
      ) : (
        <input className={classes} ref={ref} type={type}></input>
      )}
    </p>
  );
}
