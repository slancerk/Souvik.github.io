export default function About() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center">
            
            {/* About Section */}
            <section className="w-full flex flex-col items-center justify-center py-20 px-10">
                <h1 className="text-6xl font-extrabold mb-4 text-center text-white">About Me</h1>
                <p className="text-xl text-gray-300 max-w-3xl text-center">
                    Passionate about DevOps, Cloud, and Product Management. Continuously learning and growing.
                </p>
            </section>

            {/* University Section */}
            <section className="w-full bg-gray-800 py-20 px-10 flex flex-col items-center">
                <h2 className="text-4xl font-bold text-blue-400 mb-6">Education</h2>
                <div className="max-w-4xl bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full">
                    <h3 className="text-2xl font-semibold text-white">
 Techno India University</h3>
                    <p className="text-lg text-gray-400 mt-2">Degree: <span className="text-white">B-tech</span></p>
                    <p className="text-lg text-gray-400">Major: <span className="text-white">Computer Science Engineering</span></p>
                    <p className="text-lg text-gray-400">CGPA: <span className="text-white">8.0</span></p>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="w-full bg-gray-900 py-20 px-10 flex flex-col items-center">
                <h2 className="text-4xl font-bold text-blue-400 mb-6">Certifications</h2>
                <div className="w-full max-w-6xl flex flex-row justify-between items-center gap-10">
                    
                    {/* Terraform Certification */}
                    <div className="flex flex-col items-center w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg">
                        <img src="https://images.credly.com/size/220x220/images/99289602-861e-4929-8277-773e63a2fa6f/image.png" 
                             alt="Terraform Certification" className="w-32 h-32 object-contain mb-4" />
                        <p className="text-lg font-semibold text-white">Terraform Certified</p>
                    </div>

                    {/* AWS Certification */}
                    <div className="flex flex-col items-center w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg">
                        <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Fr_KLvOIFIXioOFGQNmglQ.png" 
                             alt="AWS Certification" className="w-32 h-32 object-contain mb-4" />
                        <p className="text-lg font-semibold text-white">AWS Solution Architect</p>
                    </div>
                </div>
            </section>

            {/* Courses Followed Section with Logos */}
            <section className="w-full bg-gray-800 py-20 px-10 flex flex-col items-center">
                <h2 className="text-4xl font-bold text-blue-400 mb-6">Courses Followed & Learned</h2>
                <div className="max-w-4xl bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full">
                    <div className="flex flex-col gap-6">

                        {/* Course 1 - Nexleap */}
                        <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-md">
                            {/* <img src="https://media.licdn.com/dms/image/C560BAQG6BbWDmHHiyQ/company-logo_200_200/0/1631349027762?e=2147483647&v=beta&t=HIx-LUzO4IfDIOX-1LsZd6iQ-5zbmHpDKwevw6KYptk
" 
                                 alt="Nexleap Logo" className="w-12 h-12 object-contain" /> */}
                            <p className="text-lg text-white font-medium">Product Management by Nexleap</p>
                        </div>

                        {/* Course 2 - Udemy */}
                        <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-md">
                            {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-aarug&psig=AOvVaw1IRCm2EWL5EuMSJl8nF9jl&ust=1742614602218000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPDc47afmowDFQAAAAAdAAAAABA"  */}
                                 {/* alt="Udemy Logo" className="w-12 h-12 object-contain" /> */}
                            <p className="text-lg text-white font-medium">DevOps Mastery on Udemy</p>
                        </div>

                        {/* Course 3 - Coursera */}
                        <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-md">
                            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Coursera-Logo_600x600.svg" 
                                 alt="Coursera Logo" className="w-12 h-12 object-contain" /> */}
                            <p className="text-lg text-white font-medium">Kubernetes Advanced on Coursera</p>
                        </div>

                        {/* Course 4 - YouTube */}
                        <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-md">
                            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
                                 alt="YouTube Logo" className="w-12 h-12 object-contain" /> */}
                            <p className="text-lg text-white font-medium">System Design by CodeKarle (YouTube)</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Back to Home */}
            <div className="w-full py-10 flex justify-center">
                <a href="/" className="text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                    ← Back to Home
                </a>
            </div>
        </div>
    );
}
