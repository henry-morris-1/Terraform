/** React imports */
import { useEffect, useState } from "react";

/** Component imports */
import Carousel from "../carousel/Carousel";
import Setup from "../setup/Setup";
import Platform from "../platforms/Platform";
import Results from "../results/Results";

/** Data imports */
import reddit from "../data/reddit.json";
import twitter from "../data/twitter.json";
import youtube from "../data/youtube.json";

/**
 * Main layout of the site, contains the carousel and state.
 */
export default function Layout() {
    /** Track the carousel slide */
    const [currentSlide, setCurrentSlide] = useState(0);

    /** Store the user options for os, browser, and platform */
    const [os, setOs] = useState(null); // ios, android, macos, windows, linux
    const [browser, setBrowser] = useState(null); // safari, chrome, firefox, other
    const [platform, setPlatform] = useState(null); // twitter, reddit
    const osOptions = ["ios", "android", "macos", "windows", "linux"];
    const browserOptions = ["safari", "chrome", "firefox", "other"];
    const platformOptions = ["twitter", "reddit", "youtube"];

    /** Keep an array of CSS selectors for the filters */
    const [filters, setFilters] = useState([]);
    useEffect(() => {
        setFilters([]);
    }, [platform]); // Reset the filters whenever the platform changes

    function getPlatform () {
        switch(platform) {
            case "twitter":
                return <Platform data={twitter} filters={filters} setFilters={setFilters} />
            case "reddit":
                return <Platform data={reddit} filters={filters} setFilters={setFilters} />
            case "youtube":
                return <Platform data={youtube} filters={filters} setFilters={setFilters} />
            default:
                return <h3 className="text-2xl leading-6 font-semibold text-center py-3">Please select a platform to terraform.</h3>
        }
    }

    return(
        <>
            <header className="w-full py-3 border-b border-current flex align-center justify-center">
                <div className="flex flex-row items-center">
                    <img src="assets/favicon.svg" className="h-16" />
                    <h1 className="text-6xl font-semibold font-serif "> Terraform</h1>
                </div>
            </header>

            <main className="flex justify-center">
                <div className="container max-w-4xl px-2 pb-4">
                    <Carousel currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}>
                        <Setup value={os} setValue={setOs} title="Select your operating system" options={osOptions} />
                        <Setup value={browser} setValue={setBrowser} title="Select your browser" options={browserOptions} />
                        <Setup value={platform} setValue={setPlatform} title="Select a platform to terraform" options={platformOptions} />

                        {getPlatform()}

                        <Results os={os} browser={browser} platform={platform} filters={filters} />
                    </Carousel>
                </div>
            </main>
        </>
    );
}