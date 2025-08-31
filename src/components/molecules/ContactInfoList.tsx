import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sergioruiz456@gmail.com',
    href: 'sergioruiz456@gmail.com'
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Bogotá, Colombia',
    href: '#'
  }
];

const ContactInfoList: React.FC = () => (
  <div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
      Información de Contacto
    </h3>
    <div className="space-y-6">
      {contactInfo.map((info, index) => (
        <a
          key={index}
          href={info.href}
          className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <info.icon className="w-6 h-6 text-white" />
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              {info.label}
            </p>
            <p className="text-lg text-gray-900 dark:text-white font-semibold">
              {info.value}
            </p>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default ContactInfoList;
