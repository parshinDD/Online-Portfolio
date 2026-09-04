import "./DownloadResumeButton.css";
import { HiOutlineDownload } from "react-icons/hi";

const RESUME_FILENAME = "Резюме Паршин Даниил, Backend (ru)";

export function DownloadResumeButton() {
    const handleDownload = () => {
        const previousTitle = document.title;
        document.title = RESUME_FILENAME;

        const restoreTitle = () => {
            document.title = previousTitle;
            window.removeEventListener("afterprint", restoreTitle);
        };
        window.addEventListener("afterprint", restoreTitle);

        setTimeout(() => window.print(), 50);
    };

    return (
        <button
            className="download-resume-btn"
            onClick={handleDownload}
            aria-label="Скачать резюме в формате PDF"
            data-cursor="PDF"
        >
            <HiOutlineDownload size={30} />
            <span>PDF</span>
        </button>
    );
}
