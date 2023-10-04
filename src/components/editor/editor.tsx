// "use client";

// GrapesJs Init
import grapesjs from "grapesjs";

// Template GrapesJs
import templateNewslatter from "grapesjs-preset-newsletter";

// Pluguins GrapesJs
import pluginStyleBg from "grapesjs-style-bg";
import pluginStyleGradient from "grapesjs-style-gradient";
import pluginBlocksBasic from "grapesjs-blocks-basic";
import pluginTuiImageEditor from "grapesjs-tui-image-editor";
import oluginGjsForms from "grapesjs-plugin-forms";
import pluginCustomCode from "grapesjs-custom-code";
// import styleFilter from 'grapesjs-style-filter';
// import pluginTabs from 'grapesjs-tabs';
// import plugin from 'grapesjs-typed';
import pluginExport from "grapesjs-plugin-export";
import pluginNavBar from "grapesjs-navbar";
import pluginCountDown from "grapesjs-component-countdown";
import pluginToolTip from "grapesjs-tooltip";
import pluginParserPostCSS from "grapesjs-parser-postcss";
// import grapesjsTouch from 'grapesjs-touch';
// import pluginFileStack from 'grapesjs-plugin-filestack' //pluginFileStack,
import pluginTailwindCSS from "grapesjs-tailwind";

// NextJs Imports
import { useEffect, useRef } from "react";

export default function Editor() {
    
    const editor = useRef<HTMLDivElement>(null);

    const grapesJsConfigs = () => {
        grapesjs.init({
            container: editor.current as HTMLElement,
            plugins: [
                pluginStyleBg,
                pluginStyleGradient,
                pluginBlocksBasic,
                pluginTuiImageEditor,
                oluginGjsForms,
                pluginCustomCode,
                pluginExport,
                pluginNavBar,
                pluginCountDown,
                pluginToolTip,
                pluginParserPostCSS,
                pluginTailwindCSS,
            ],
            pluginsOpts: {},
        });
    };

    useEffect(() => {
        grapesJsConfigs();
    }, []);

    return (
        <main className="h-screen" id="gjs">
            <div className="h-screen" ref={editor} />
        </main>
    );
}
