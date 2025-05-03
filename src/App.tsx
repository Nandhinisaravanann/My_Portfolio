import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  BarChart2,
  Database,
  LineChart,
  PieChart,
  Brain,
  Code2,
  Download,
  Award,
  GraduationCap,
  Briefcase
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header/Hero Section */}
      <header className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm NANDHINI K S</h1>
        <h2 className="text-xl text-blue-400 mb-6">Data Analytics</h2>
        <p className="max-w-2xl text-gray-300 mb-8">
          I'm a passionate Data Analyst with experience in transforming data into insights and You can view my personal portfolio here or download my resume below
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/Nandhinisaravanann" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="GitHub Profile">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/nandhini-saravanan-716a6a288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn Profile">
            <Linkedin size={24} />
          </a>
          <a href="mailto:nandhiniks2001@gmail.com" className="hover:text-blue-400 transition-colors" aria-label="Email Contact">
            <Mail size={24} />
          </a>
          <a href="tel:+916380842378" className="hover:text-blue-400 transition-colors" aria-label="Phone Contact">
            <Phone size={24} />
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <GraduationCap className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <p className="font-semibold">Master of Computer Applications</p>
                  <p>Kongu Engineering College</p>
                  <p className="text-sm">2023 - 2025</p>
                  <p className="text-sm">CGPA: 7.86</p>
                </li>
                <li>
                  <p className="font-semibold">Bachelor of Computer Applications</p>
                  <p>Nandha Arts and Science College</p>
                  <p className="text-sm">2018 - 2021</p>
                  <p className="text-sm">CGPA: 7.64</p>
                </li>
              </ul>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <Award className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <p className="font-semibold">Power BI Data Analyst Associate</p>
                  <p className="text-sm">Completed 2024</p>
                </li>
                <li>
                  <p className="font-semibold">Data Analytics</p>
                  <p className="text-sm">Completed 2024</p>
                </li>
                <li>
                  <p className="font-semibold">Data Analysis and Visualization with Power BI</p>
                  <p className="text-sm">Completed 2025</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Virtual Internship Section */}
          <div className="bg-gray-700 p-6 rounded-lg mt-8">
            <Briefcase className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Virtual Internship Experience</h3>
            <ul className="space-y-6 text-gray-300">
              <li>
                <p className="font-semibold">DATA ANALYTICS JOB SIMULATION | QUANTIuM </p>
                <p className="text-sm">Jan 30, 2025</p>
                <p className="text-sm">
                  Data preparation and customer analytics, utilizing transaction datasets to
extract valuable insights and deliver data-driven commercial recommendations.
                </p>
              </li>
              <li>
                <p className="font-semibold">POWER BI | PWC</p>
                <p className="text-sm">Feb 3, 2025</p>
                <p className="text-sm">
                  Data visualization and business intelligence using Power BI tools. Interns
support data-driven decision-making by creating insightful dashboards and
reports
                </p>
              </li>
              <li>
                <p className="font-semibold">DATA VISUALISATION: EMPOWERING BUSINESS WITH
EFFECTIVE INSIGHTS | Tata</p>
                <p className="text-sm">April 7, 2025</p>
                <p className="text-sm">
                  Data visualization and business intelligence using Power BI tools. Interns
support data-driven decision-making by creating insightful dashboards and
reports
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-gray-700 p-6 rounded-lg">
            <Briefcase className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
            <div className="text-gray-300 space-y-4">
              <p>
                As an aspiring data analyst with a strong academic foundation, I specialize in transforming raw data into meaningful business insights. I have a passion for uncovering trends, optimizing processes, and making data-backed decisions.
              </p>
              <p>
                I'm proficient in tools like Power BI, Excel, SQL, and Python, and experienced in creating interactive dashboards, data models, and visualizations. My approach combines analytical thinking, attention to detail, and curiosity to solve real-world data challenges.
              </p>
              <p>
                I am eager to contribute to organizations seeking data-driven innovation and excited to grow in a collaborative, tech-forward environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <BarChart2 className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visualization</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Tableau Desktop</li>
                <li>• Power BI</li>
                <li>• Excel</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <Database className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Database</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• SQL</li>
                <li>• MongoDB</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <LineChart className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tools</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Excel</li>
                <li>• Jupyter Notebook</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <Code2 className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Programming</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Python</li>
                <li>• Java</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-700 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
              alt="Dress Fabrics Project"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">E-commerce Platform for Dress Fabrics</h3>
              <p className="text-gray-300 mb-4">
                Developed an e-commerce platform for dress fabrics with features like product catalog, user authentication, cart, and secure checkout. Enabled seamless browsing, filtering, and purchasing for a smooth customer experience.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">HTML, CSS</span>
                  <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">Javascript</span>
                </div>
              </div>
              <a 
                href="https://github.com/Nandhinisaravanann" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2"
              >
                <Github size={16} />
                View Project
              </a>
            </div>
          </div>
          <div className="bg-gray-700 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&h=400&fit=crop"
              alt="Ferns and Petals"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Ferns and Petals Sales Analysis Dashboard</h3>
              <p className="text-gray-300 mb-4">
                This report provides an in-depth analysis of the sales performance for FNP, focusing on revenue generation, customer spending behavior, product performance, and regional sales distribution. Dashboard enables quick, data-driven decision-making by visualizing trends, patterns, and top-performing areas across various sales dimensions.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">Excel</span>
                </div>
              </div>
              <a 
                href="https://github.com/Nandhinisaravanann" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2"
              >
                <Github size={16} />
                View Project
              </a>
            </div>
          </div>
          <div className="bg-gray-700 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=400&fit=crop"
              alt="HR Analytics Dashboard"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">HR Analytics Dashboard</h3>
              <p className="text-gray-300 mb-4">
                This project displays key HR metrics like total employees, attrition rate, average age, and active staff. It highlights attrition by department, gender, age, and education, and shows job satisfaction across roles. It supports data-driven decisions to improve employee retention and engagement.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-600 rounded-full text-sm">Power BI</span>
                </div>
              </div>
              <a 
                href="https://github.com/Nandhinisaravanann" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2"
              >
                <Github size={16} />
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Resume</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Download my detailed resume to learn more about my education, skills,
            projects, in data analytics.
          </p>
          <a
            href="https://drive.google.com/file/d/1G2Dty2L-28z0aQNo2NgvNvDZ4lLuPrrS/view?usp=drive_link"
            download
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <Download size={20} />
            Download Resume (PDF)
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
        <div className="max-w-xl mx-auto text-center text-gray-300">
          <p className="mb-6">
            I'm currently open to data analyst positions and freelance opportunities.
            Feel free to reach out via email or phone.
          </p>
          <div className="flex flex-col gap-4 items-center text-lg">
            <a
              href="mailto:nandhiniks2001@gmail.com"
              className="flex items-center gap-2 text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={20} />
              nandhiniks2001@gmail.com
            </a>
            <a
              href="tel:+916380842378"
              className="flex items-center gap-2 text-blue-400 hover:underline"
            >
              <Phone size={20} />
              +91-6380842378
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Nandhini KS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
