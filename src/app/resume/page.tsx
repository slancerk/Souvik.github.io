import Link from "next/link";
// import Image from "next/image";
import { FaFileDownload } from "react-icons/fa";

export default function Resume() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
            <h1 className="text-5xl font-extrabold mb-4">Resume</h1>
            <Link
              href="/Souvikpaul.pdf"
              download="Souvikpaul.pdf"
              className="bg-blue-600 px-6 py-3 rounded-lg flex items-center space-x-2"
            >
              <FaFileDownload />
              <span>Download Resume</span>
            </Link>
            <div className="mt-6">
                <Link href="/" className="text-blue-400 hover:underline">
                    ← Back to Home
                </Link>
            </div>

        </div>
    );
}
