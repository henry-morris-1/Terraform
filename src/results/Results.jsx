/** React imports */
import { useEffect, useState } from "react";

/**
 * Displays instructions for which extension to install and provides the final
 * script to copy and paste into it.
 * @param {string} os Operating system selected
 * @param {string} browser Browser selected
 * @param {string} platform Platform selected
 * @param {array} filters Array of CSS selectors to filter out
 */
export default function Results({ os, browser, platform, filters }) {
    const [extension, setExtension] = useState(null); // Figure out which extension is being used based on os/browser
    const [script, setScript] = useState(""); // Keep the final script in a string

    // Retrieve the script whenever the extension type or filters change
    useEffect(() => {
        if (extension) {
            if (extension === "userscripts") {
                const newScript = generateUserscript(platform, filters);
                setScript(newScript);

            } else if (extension === "ublock") {
                const newScript = generateUblock(platform, filters);
                setScript(newScript);
            }
        }
    }, [extension, filters]);

    return(
        <>
            <Compatability os={os} browser={browser} setExtension={setExtension} />

            {extension && script && <>
                <div className="mt-3 flex justify-end">
                    <button onClick={() => {copy(script)}} className="px-3 py-2 mb-1 bg-violet-500 text-white rounded-lg">Copy script to clipboard</button>
                </div>
                <div className="bg-neutral-700 text-white font-mono whitespace-pre-wrap p-4 rounded-lg text-nowrap overflow-x-scroll">
                    {script}
                </div>
            </>}
        </>
    );
}

/**
 * Evaluates the selections for OS and browser to determine which extension should be 
 * used (and if it is possible at all).
 * @param {string} os Operating system selected
 * @param {string} browser Browser selected
 * @param {function} setExtension Function to set the extension type used
 */
function Compatability({ os, browser, setExtension }) {
    // Use a state variable for the message displayed
    const [message, setMessage] = useState("");

    // Listen for changes in os and browser selection to set the extension and message
    useEffect(() => {
        if (browser === "safari") {
            // Use userscripts
            setExtension("userscripts");
            setMessage(<span>To inject the javascript into Safari, please install the <a href="https://apps.apple.com/us/app/userscripts/id1463298887" className="underline">Userscripts</a> app and add the script below.</span>);

        } else if ((os && os !== "ios" && os !== "android") || (os === "android" && browser && browser !== "chrome")) {
            // Use ublock origin
            setExtension("ublock");
            setMessage(<span>To inject the javascript into your browser, please install the <a href="https://ublockorigin.com/" className="underline">uBlock Origin</a> extension and add the script below to the &quot;my filters&quot; section.</span>);

        } else if (os === "android" && browser === "chrome") {
            // Android chrome doesn't support extensions
            setExtension(null);
            setMessage("Javascript cannot be injected into Chrome for Android because it does not support extensions. Please consider a third-party Android browser, such as Firefox.");

        } else if (os && browser) {
            // Non-safari browsers on ios don't work
            setExtension(null);
            setMessage("Javascript cannot be injected into third-party iOS browsers because, unlike Safari, they do not support extensions.");
        } else {
            // Selections missing
            setExtension(null);
            setMessage("Please select your operating system and browser to complete the setup.");
        }
    }, [os, browser]);

    // Return the formatted message
    return(
        <h3 className="text-2xl leading-6 font-semibold text-center py-3">{message}</h3>
    )
}

/**
 * Generates a Userscript script for the selected filters.
 * @param {string} platform Platform being terraformed
 * @param {array} filters Array of CSS selectors to filter out
 * @returns Script for Userscript in the form of a string
 */
function generateUserscript(platform, filters) {
    let script = "";
    switch(platform) {
        case "twitter":
            script += "// ==UserScript==\n// @name        Twitter\n// @description Removes excess twitter features\n// @match       *://*.twitter.com/*\n// @match       *://*.x.com/*\n// ==/UserScript==\n\nfunction addStyleString(str) {\n    let node = document.createElement('style');\n    node.innerHTML = str;\n    document.body.appendChild(node);\n}\n\n";
            break;
        case "reddit":
            script += "// ==UserScript==\n// @name        Reddit\n// @description Removes excess reddit features\n// ==/UserScript==\n\nfunction addStyleString(str) {\n    let node = document.createElement('style');\n    node.innerHTML = str;\n    document.body.appendChild(node);\n}\n\n";
            break;
    }

    filters.forEach(arr => {
        arr && arr.forEach(selector => {
            script += `addStyleString('${selector}  { display: none !important }');\n`;
        });
    });
    return script;
}

/**
 * Geenrates a uBlock Origin script for the selected filters.
 * @param {string} platform Platform being terraformed
 * @param {array} filters Array of CSS selectors to filter out
 * @returns Script for uBlock Origin in the form of a string
 */
function generateUblock(platform, filters) {
    let script = "";
    let addr = "";
    switch(platform) {
        case "twitter":
            script += "! Twitter\n";
            addr = "twitter.com,x.com";
            break;
        case "reddit":
            script += "! Reddit\n";
            addr = "reddit.com";
            break;
    }

    filters.forEach(arr => {
        arr && arr.forEach(selector => {
            script += `${addr}##${selector}\n`;
        });
    });
    return script;
}

/**
 * Copies the script to the user's clipboard
 * @param {string} script Script to copy to clipboard
 */
function copy(script) {
    navigator.clipboard.writeText(script);
    alert("Copied to clipboard");
}