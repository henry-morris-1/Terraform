export default function Selector({ name, icon, value, setValue }) {
    function toggle() {
        if (name === value) {
            setValue(null);
        } else {
            setValue(name);
        }
    }

    return(
        <div onClick={toggle} className={"h-20 w-20 p-2 m-1 rounded-2xl flex algin-center justify-center hover:cursor-pointer " + ((name === value) ? "bg-blue-500" : "bg-neutral-200")}>
            <img src={icon} alt={name} className={"self-center select-none " + ((name === value) ? "invert" : "")} />
        </div>
    )
}