/** React imports */
import { useEffect, useState } from "react";

/** Component imports */
import Carousel from "../carousel/Carousel";
import Setup from "../setup/Setup";
import Twitter from "../platforms/Twitter";
import Reddit from "../platforms/Reddit";
import Results from "../results/Results";

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
    const platformOptions = ["twitter", "reddit"];

    /** Keep an array of CSS selectors for the filters */
    const [filters, setFilters] = useState([]);
    useEffect(() => {
        setFilters([]);
    }, [platform]); // Reset the filters whenever the platform changes

    function getPlatform () {
        switch(platform) {
            case "twitter":
                return <Twitter filters={filters} setFilters={setFilters} />
            case "reddit":
                return <Reddit filters={filters} setFilters={setFilters} />
            default:
                return <h3 className="text-2xl leading-6 font-semibold text-center py-3">Please select a platform to terraform.</h3>
        }
    }

    return(
        <>
            <header className="w-full py-3 border-b border-current flex align-center justify-center">
                <div className="flex flex-row items-center">
                    <img src="assets/favicon.svg" className="h-16" />
                    <h1 className="text-5xl font-semibold font-serif "> Terraform</h1>
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