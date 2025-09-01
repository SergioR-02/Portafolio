import React from 'react';
import ProfileImage from '../atoms/ProfileImage';
import { Github, Linkedin, FileText } from 'lucide-react';

const ContactSocialLinks: React.FC = () => (
  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 h-auto">
    <div className="mb-6">
      <ProfileImage src="/Profile.svg" alt="Sergio" />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
      Conecta conmigo en redes profesionales
    </h3>
    <div className="flex flex-col gap-4">
      <a
        href="https://github.com/SergioR-02"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white dark:bg-gray-900 shadow hover:shadow-md border border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-400 transition-all duration-200"
      >
        <Github className="w-6 h-6 text-gray-900 dark:text-white" />
        <span className="font-semibold text-gray-900 dark:text-white">GitHub</span>
      </a>
      <a
        href="https://www.linkedin.com/in/sergio-ruiz-75818a28b"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white dark:bg-gray-900 shadow hover:shadow-md border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200"
      >
        <Linkedin className="w-6 h-6 text-blue-700 dark:text-blue-400" />
        <span className="font-semibold text-gray-900 dark:text-white">LinkedIn</span>
      </a>
      <a
        href="https://drive.google.com/file/d/1CHmy46AHCYsGI-5WMDKeoXVzOkF8N2HT/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white dark:bg-gray-900 shadow hover:shadow-md border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-200"
      >
        <FileText className="w-6 h-6 text-purple-700 dark:text-purple-400" />
        <span className="font-semibold text-gray-900 dark:text-white">CV (PDF)</span>
      </a>
    </div>
  </div>
);

export default ContactSocialLinks;
