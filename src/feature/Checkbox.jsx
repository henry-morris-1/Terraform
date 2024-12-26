/**
 * Sliding checkbox input
 * @param {function} action Function to trigger when toggled
 */
export default function Checkbox({ action }) {
    return(
        <>
            <input type="checkbox" onChange={(e) => {action(e.target.checked)}} class="sr-only peer" />
            <span class="relative w-11 h-6 shrink-0 bg-neutral-300 rounded-full hover:cursor-pointer peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-neutral-500 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-300 peer-checked:after:bg-blue-500"></span>
        </>
    );
}