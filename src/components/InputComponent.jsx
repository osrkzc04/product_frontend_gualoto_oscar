export default function InputComponent({
    label,
    name,
}){
    return(
    <div className="mb-5">
        <label  
            className="block mb-2.5 text-sm font-medium text-heading">
            {label}
        </label>
        <input 
            type="text" 
            id={name}
            name={name}
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
        />
    </div>

    )
}