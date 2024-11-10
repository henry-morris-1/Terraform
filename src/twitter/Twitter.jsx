/**
 * Form with toggles to add/remove different CSS selectors from the filters list.
 * @param {array} filters Array of currently selected CSS filters
 * @param {function} setFilters Function to set a new value for filters
 */
export default function Twitter({ filters, setFilters }) {
    return(
        <>
            <section className="mt-3 border-b border-black">
                <h3 className="text-2xl leading-6 font-semibold text-center">Ads and Premium Features</h3>
                <Feature title="Promoted tweets" description="Removes all tweets with the promoted tag" filters={filters} setFilters={setFilters} selectors={['[data-testid="tweet"]:has-text(Promoted)', '[data-testid="UserCell"]:has-text(Promoted)']} />
                <Feature title="Premium features" description="Removes all premium features (analytics, grok, monetization, etc.) and solicitations" filters={filters} setFilters={setFilters} selectors={['[aria-label="Subscribe to Premium"]', '[aria-label="Premium"]', '[aria-label="Grok"]', '[aria-label="Verified Orgs"]', '[aria-label="Business"]', '[href="/settings/monetization"]', '[href="/i/premium_sign_up"]', '[href*="https://ads.x.com"]', '[href*="https://ads.twitter.com"]', '[href="/i/monetization"]', '[href="/i/account_analytics"]', '[href="/i/verified-orgs-signup"]', '[aria-label="Subscribe to Premium"]']} />
            </section>

            <section className="mt-3 border-b border-black">
                <h3 className="text-2xl leading-6 font-semibold text-center">Explore and Trending</h3>
                <Feature title="Search bar" description="Removes the search feature" filters={filters} setFilters={setFilters} selectors={['[aria-label="Search"]']} />
                <Feature title="Explore" description="Remove access to the explore page" filters={filters} setFilters={setFilters} selectors={['[aria-label="Search and explore"]']} />
                <Feature title="What's happening" description="Removes the trending section in the left sidebar (desktop)" filters={filters} setFilters={setFilters} selectors={['[aria-label="Timeline: Trending now"]']} />
                <Feature title="Who to follow" description="Removes profile recommendations in the left sidebar (desktop)" filters={filters} setFilters={setFilters} selectors={['aria-label="Who to follow"']} />
                <Feature title="Videos" description="Removes video carousels from the trending page" filters={filters} setFilters={setFilters} selectors={['[aria-label="Timeline: Carousel"]', 'div > div > div > div > h2 > div > span:has-text(Videos for you):upward(div):upward(h2):upward(div):upward(div):upward(div):upward(div)']} />
                <Feature title="Events" description="Removes events from the trending page" filters={filters} setFilters={setFilters} selectors={['[href^="/i/events/"]']} />
                <Feature title="Sports, news, and entertainment" description="Removes all explore sections besides &quot;for you&quot; and &quot;trending&quot;" filters={filters} setFilters={setFilters} selectors={['[aria-label="Timeline: Explore"] > div > div > div > div > :not([data-testid="trend"])']} />
            </section>

            <section className="mt-3 border-b border-black">
                <h3 className="text-2xl leading-6 font-semibold text-center">General Features</h3>
                <Feature title="Home timeline" description="Removes the home timeline" filters={filters} setFilters={setFilters} selectors={['[aria-label="Timeline: Your Home Timeline"]', '[data-testid="emptyState"]', '[aria-label^="New posts are available."]']} />
                <Feature title="Bookmarks" description="Removes the ability to make and view bookmarks" filters={filters} setFilters={setFilters} selectors={['[aria-label="Bookmark"]', '[data-testid="bookmark"]', '[href="/i/bookmarks"]', '[aria-label="Bookmarks"]']} />
                <Feature title="Communities" description="Hides the communities page" filters={filters} setFilters={setFilters} selectors={['[aria-label="Communities"]']} />
                <Feature title="Jobs" description="Hides the jobs page" filters={filters} setFilters={setFilters} selectors={['[href="/jobs"]']} />
                <Feature title="Messages" description="Hides the messages page" filters={filters} setFilters={setFilters} selectors={['[aria-label="Direct Messages"]']} />
                <Feature title="Notifications" description="Hides the notifications page" filters={filters} setFilters={setFilters} selectors={['[aria-label="Notifications"]']} />
                <Feature title="Spaces" description="Removes spaces" filters={filters} setFilters={setFilters} selectors={['href="/i/spaces/start"']} />
            </section>

            <section className="mt-3 border-b border-black">
                <h3 className="text-2xl leading-6 font-semibold text-center">Lists</h3>
                <Feature title="Lists" description="Hide the lists page" filters={filters} setFilters={setFilters} selectors={['[aria-label="Lists"]']} />
                <Feature title="Recommended lists" description="Hides recommended lists on the lists page" filters={filters} setFilters={setFilters} selectors={['[aria-label="Timeline: Your Lists"] > div > div:nth-child(n):nth-child(-n+8)']} />
            </section>

            <section className="mt-3 border-b border-black">
                <h3 className="text-2xl leading-6 font-semibold text-center">User Abilities</h3>
                <Feature title="Posting" description="Removes the ability to create new posts" filters={filters} setFilters={setFilters} selectors={['href="/compose/post"]', '[data-testid="tweetButtonInline"]', '[data-testid="tweetTextarea_0_label"]', '[data-testid="toolBar"]:upward(div)', '[aria-label="Everyone can reply"]', '[data-testid="UserAvatar-Container-F345J6fklgj4"]:upward(div)', '[data-testid="postButton"]', '[data-testid="SideNav_NewPost_Button"]']} />
                <Feature title="Following" description="Removes the ability to follow users" filters={filters} setFilters={setFilters} selectors={['[aria-label^="Follow "]']} />
            </section>

            <section className="mt-3">
                <h3 className="text-2xl leading-6 font-semibold text-center">Post Details</h3>
                <Feature title="Post analytics" description="Hides number of comments, likes, retweets, and views" filters={filters} setFilters={setFilters} selectors={['[aria-label*="View post analytics"]', '[aria-label*=". Reply"]', '[aria-label*=". Repost"]', '[aria-label*=". Like"]', '[aria-label="Share post"]', 'div > span > span > span:has-text(/Views/i):upward(span):upward(span):upward(div)']} />
                <Feature title="Replies" description="Hides all replies to a tweet except those which are part of a thread by the original author" filters={filters} setFilters={setFilters} selectors={['[aria-label="Timeline: Conversation"] [data-testid="cellInnerDiv"] article[tabindex="0"]:not(:has(div[class^="css-175oi2r r-1bnu78o r-f8sm7e r-m5arl1"]))', '[aria-label="Timeline: Conversation"] [data-testid="cellInnerDiv"]:has(span:has-text(/Show probable spam/))']} />
            </section>
        </>
    );
}

/**
 * Feature to select for removal
 * @param {string} title Feature title
 * @param {string} description Feature description
 * @param {array} selectors Array of CSS selectors associated with each feature
 * @param {array} filters Current array of selected filters
 * @param {function} setFilters Function to update filters
 */
function Feature({ title, description, selectors, filters, setFilters }) {
    // Toggles this feature's selectors into/out of the filters array
    function toggle (checked) {
        if (checked) {
            // Push the selectors into the filters
            const newFilters = [...filters];
            newFilters.push(selectors);
            setFilters(newFilters);

        } else {
            // Splice out the selectors from the current filters
            const newFilters = filters.toSpliced(filters.indexOf(selectors), 1);
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

/**
 * Sliding checkbox input
 * @param {function} action Function to trigger when toggled
 */
function Checkbox({ action }) {
    return(
        <>
            <input type="checkbox" onChange={(e) => {action(e.target.checked)}} class="sr-only peer" />
            <span class="relative w-11 h-6 shrink-0 bg-neutral-300 rounded-full hover:cursor-pointer peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-neutral-500 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-300 peer-checked:after:bg-blue-500"></span>
        </>
    );
}