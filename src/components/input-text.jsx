export default function InputText({Label, ...props}){
    return(
        <div className="flex flex-col gap-1">
            <label htmlFor="">{Label}</label>
            <input type="text" {...props} className="bg-sky-800 px-2 py-1 rounded" />
        </div>
    )
}