/** Component imports */
import Selector from "../selector/Selector"

/**
 * Setups section providing a set of options.
 * @param {string} value Current value selected
 * @param {function} setValue Sets a new value from the options given
 * @param {string} title Heading for the setup step
 * @param {array} options Array of options to choose from
 */
export default function Setup({ value, setValue, title, options }) {
    return (
        <>
            <h2 className="text-2xl leading-6 font-semibold text-center my-3">{title}</h2>
            <div className="w-full flex flex-wrap justify-around">
                {options && options.map((option, i) => (
                    <Selector name={option} icon={`./assets/${option}.png`} value={value} setValue={setValue} key={i} />
                ))}
            </div>
        </>
    );
}