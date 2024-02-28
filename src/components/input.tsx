import React from 'react';

interface InputProps {
  children?: any;
  variant?: 'rounded';
}

export default function Input({ children, variant, ...props }: InputProps) {
  const classNamesDefault =
    'mr-2 h-12 w-full px-5 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs';

  const classNamesVariant =
    'm-auto w-full px-5 py-1 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs rounded-md';

  // TODO: add a real api here
  return <input placeholder="Entrez votre adresse email" />;
}
