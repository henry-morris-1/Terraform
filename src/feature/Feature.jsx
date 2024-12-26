import Checkbox from "./Checkbox";

/**
 * Feature to select for removal
 * @param {string} title Feature title
 * @param {string} description Feature description
 * @param {array} selectors Array of CSS selectors associated with each feature
 * @param {number} id Unique id for this feature, corresponds to its index in the filters array
 * @param {array} filters Current array of selected filters
 * @param {function} setFilters Function to update filters
 */
export default function Feature({ title, description, selectors, id, filters, setFilters }) {
    // Toggles this feature's selectors into/out of the filters array
    function toggle (checked) {
        if (checked) {
            // Push the selectors into the filters
            const newFilters = [...filters];
            newFilters[id] = selectors;
            setFilters(newFilters);

        } else {
            // Splice out the selectors from the current filters
            const newFilters = [...filters];
            newFilters[id] = [];
            setFilters(newFilters);
        }
    }

    return(
        <div className="my-3">
            <label className="w-full flex justify-between items-center">
                <div className="me-2 select-none">
                    <h4 className="text-xl leading-5 font-semibold">{title}</h4>
                    <p className="mt-1 text-sm leading-4 text-neutral-600">{description}</p>
                </div>

                <Checkbox action={toggle} />
            </label>
        </div>
    );
}