import Feature from "../feature/Feature";

/**
 * Form with toggles to add/remove different CSS selectors from the filters list.
 * @param {array} filters Array of currently selected CSS filters
 * @param {function} setFilters Function to set a new value for filters
 */
export default function Reddit({ filters, setFilters }) {
    return(
        <>
            <section className="mt-3 border-b border-black">
                <h3 className="text-2xl leading-6 font-semibold text-center">Authentication</h3>
                <Feature title="Login popups" description="Removes login modal popups" id={0} filters={filters} setFilters={setFilters} selectors={['auth-flow-modal']} />
                <Feature title="Login buttons" description="Removes login buttons" id={1} filters={filters} setFilters={setFilters} selectors={['[href="https://www.reddit.com/login/"]']} />
                <Feature title="Get app button" description="Removes button to get the reddit app" id={2} filters={filters} setFilters={setFilters} selectors={['[id="get-app"]']} />
            </section>

            <section className="mt-3 border-b border-black">
                <h3 className="text-2xl leading-6 font-semibold text-center">Sidebars</h3>
                <Feature title="Popular" description="Removes the reddit popular page" id={3} filters={filters} setFilters={setFilters} selectors={['[href="/r/popular/"]']} />
                <Feature title="Answers" description="Removes the reddit answers feature" id={4} filters={filters} setFilters={setFilters} selectors={['[href="/answers/"]']} />
                <Feature title="Recent subreddits" description="Removes the recent subreddits section" id={5} filters={filters} setFilters={setFilters} selectors={['reddit-recent-pages']} />
                <Feature title="Topics" description="Removes the topics section" id={6} filters={filters} setFilters={setFilters} selectors={['[aria-controls="TOPICS"]:upward(1)']} />
                <Feature title="Resources" description="Removes the resources section" id={7} filters={filters} setFilters={setFilters} selectors={['[aria-label="Reddit resources"]']} />
                <Feature title="Right sidebar" description="Removes the right sidebar on subreddits and user profiles" id={8} filters={filters} setFilters={setFilters} selectors={['#right-sidebar-container']} />
            </section>

            <section className="mt-3 border-b border-black">
                <h3 className="text-2xl leading-6 font-semibold text-center">Subreddits</h3>
                <Feature title="Community highlights" description="Removes the community highlights carousel" id={9} filters={filters} setFilters={setFilters} selectors={['community-highlight-carousel']} />
                <Feature title="Join buttons" description="Remove buttons to join a community" id={10} filters={filters} setFilters={setFilters} selectors={['[data-post-click-location="join"]']} />
            </section>

            <section className="mt-3 border-b border-black">
                <h3 className="text-2xl leading-6 font-semibold text-center">Posts</h3>
                <Feature title="Create post" description="Remove posting abilities" id={11} filters={filters} setFilters={setFilters} selectors={['[data-testid="create-post"]']} />                
                <Feature title="Avatars" description="Remove user avatars in posts" id={12} filters={filters} setFilters={setFilters} selectors={['.avatar']} />
                <Feature title="Reddit gold" description="Removes reddit gold" id={13} filters={filters} setFilters={setFilters} selectors={['[aria-label="Give award"]']} />
                <Feature title="Share" description="Removes post sharing" id={14} filters={filters} setFilters={setFilters} selectors={['.share-dropdown-menu']} />
                <Feature title="Upvote/Downvote" description="Removes the upvote and downvote buttons, but keeps the score. Affects comments as well" id={15} filters={filters} setFilters={setFilters} selectors={['[upvote]', '[downvote]']} />
            </section>

            <section className="mt-3 border-b border-black">
                <h3 className="text-2xl leading-6 font-semibold text-center">Comment Section</h3>
                <Feature title="Avatars" description="Remove user avatars in comments and user profiles" id={16} filters={filters} setFilters={setFilters} selectors={['[data-testid="profile-icon"]', '[slot="commentAvatar"]']} />
                <Feature title="Community achievements" description="Removes achievement flairs" id={17} filters={filters} setFilters={setFilters} selectors={['community-achievements-flair']} />
                <Feature title="Related posts" description="Removes related posts at the bottom of the comment section" id={18} filters={filters} setFilters={setFilters} selectors={['[aria-label="Related Posts Section"]']} />
                <Feature title="Reddit gold" description="Removes reddit gold" id={19} filters={filters} setFilters={setFilters} selectors={['[aria-label^="Give award"]']} />
                <Feature title="Share" description="Removes comment sharing" id={20} filters={filters} setFilters={setFilters} selectors={['[slot="comment-share"]']} />
                <Feature title="Reply" description="Removes the reply button" id={21} filters={filters} setFilters={setFilters} selectors={['[slot="comment-reply"]']} />
                <Feature title="Upvote/Downvote" description="Removes the upvote and downvote buttons, but keeps the score. Affects posts as well." id={22} filters={filters} setFilters={setFilters} selectors={['[upvote]', '[downvote]']} />
            </section>

            <section className="mt-3 border-b border-black">
                <h3 className="text-2xl leading-6 font-semibold text-center">Search</h3>
                <Feature title="Search bar" description="Remove all search functionality" id={23} filters={filters} setFilters={setFilters} selectors={['.reddit-search-bar']} />
                <Feature title="Dropdown results" description="Remove dropdown results when searching" id={24} filters={filters} setFilters={setFilters} selectors={['[data-testid="search-dropdown-results-container"]']} />
            </section>

            <section className="mt-3 border-b border-black">
                <h3 className="text-2xl leading-6 font-semibold text-center">Popular and Home</h3>
                <Feature title="Subreddit highlights" description="Removes the subreddit highlight carousel" id={25} filters={filters} setFilters={setFilters} selectors={['shreddit-gallery-carousel']} />
                <Feature title="Subreddit icons" description="Removes subreddit icons from posts" id={26} filters={filters} setFilters={setFilters} selectors={['.shreddit-subreddit-icon__icon', 'community-status']} />
            </section>
        </>
    );
}