import Feature from "../feature/Feature";

/**
 * Form with toggles to add/remove different CSS selectors from the filters list.
 * @param {array} filters Array of currently selected CSS filters
 * @param {function} setFilters Function to set a new value for filters
 */
export default function Platform({ data, filters, setFilters }) {
    // Keep a running count to give each filter a unique id
    let count = 0;

    return (
        <>
            {data.map((section) => {
                return <section key={section.name} className="mt-3 border-b border-black">
                    <h3 className="text-2xl leading-6 font-semibold text-center">{section.name}</h3>

                    {section.rules.map(feature => {
                        count++; // Increment the id counter
                        return <Feature key={count} id={count} title={feature.title} description={feature.description} selectors={feature.selectors} filters={filters} setFilters={setFilters} />
                    })}
                </section>
            })}
        </>
    );
}