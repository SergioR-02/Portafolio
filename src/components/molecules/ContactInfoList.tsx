import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin } from 'lucide-react';

const ContactInfoList: React.FC = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'sergioruiz456@gmail.com',
      href: 'mailto:sergioruiz456@gmail.com',
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: t('contact.locationValue'),
      href: '#',
    },
  ];

  return (
    <div>
      <h3 className="text-xl font-extrabold italic uppercase tracking-tight text-gray-900 dark:text-white mb-6">
        {t('contact.infoTitle')}
      </h3>
      <div className="space-y-3">
        {contactInfo.map((info, index) => (
          <a
            key={index}
            href={info.href}
            className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200"
          >
            <div className="flex-shrink-0 w-9 h-9 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center">
              <info.icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 dark:text-gray-500">{info.label}</p>
              <p className="text-sm text-gray-900 dark:text-white font-medium mt-0.5">{info.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfoList;
