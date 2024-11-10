/** React imports */
import { useState } from "react";

/** Component imports */
import Carousel from "../carousel/Carousel";
import Setup from "../setup/Setup";
import Twitter from "../twitter/Twitter";
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
    const [platform, setPlatform] = useState(null); // twitter
    const osOptions = ["ios", "android", "macos", "windows", "linux"];
    const browserOptions = ["safari", "chrome", "firefox", "other"];
    const platformOptions = ["twitter"];

    /** Keep an array of CSS selectors for the filters */
    const [filters, setFilters] = useState([]);

    return(
        <>
            <header className="w-full py-3 border-b border-black flex align-center justify-center">
                <h1 className="text-5xl font-black">TERAFORM</h1>
            </header>

            <main className="flex justify-center">
                <div className="container max-w-4xl px-2 pb-4">
                    <Carousel currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}>
                        <Setup value={os} setValue={setOs} title="Select your operating system" options={osOptions} />
                        <Setup value={browser} setValue={setBrowser} title="Select your browser" options={browserOptions} />
                        <Setup value={platform} setValue={setPlatform} title="Select a platform to teraform" options={platformOptions} />

                        <Twitter filters={filters} setFilters={setFilters} />

                        <Results os={os} browser={browser} platform={platform} filters={filters} />
                    </Carousel>
                </div>
            </main>
        </>
    );
}