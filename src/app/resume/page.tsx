import { FaFileDownload } from "react-icons/fa";

export default function Resume() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
            <h1 className="text-5xl font-extrabold mb-4">Resume</h1>
            <a
              href="/Souvikpaul.pdf"
              download="Souvikpaul.pdf"
              className="bg-blue-600 px-6 py-3 rounded-lg flex items-center space-x-2"
            >
              <FaFileDownload />
              <span>Download Resume</span>
            </a>
            <div className="mt-6">
                <a href="/" className="text-blue-400 hover:underline">
                    ← Back to Home
                </a>
            </div>

        </div>
    );
}
