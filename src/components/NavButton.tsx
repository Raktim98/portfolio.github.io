import React from 'react';
import { type LucideIcon } from 'lucide-react';

interface NavButtonProps {
  id: string;
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ icon: Icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${isActive
      ? 'bg-purple-600 text-white shadow-lg transform scale-105'
      : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-gray-800 hover:cursor-pointer'
      }`}
  >
    <Icon size={20} />
    <span className="block">{label}</span>
  </button>
);

export default NavButton;