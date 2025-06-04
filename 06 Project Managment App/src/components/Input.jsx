export default function Input({ title, type }) {
    return (
        <div className="flex flex-col w-2/3">
            <label className="font-semibold pt-5">{title}</label>
            {type == "textarea" ? <textarea className="bg-stone-300 h-20"></textarea> : <input className="bg-stone-300 h-10" type={type}></input>}
        </div>
    )
}