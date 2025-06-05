export default function Input({ title, type, ref }) {
    return (
        <div className="flex flex-col w-2/3">
            <label className="font-semibold pt-5">{title}</label>
            {type == "textarea" ? <textarea ref={ref} className="bg-stone-300 h-20"></textarea> : <input ref={ref} className="bg-stone-300 h-10" type={type}></input>}
        </div>
    )
}