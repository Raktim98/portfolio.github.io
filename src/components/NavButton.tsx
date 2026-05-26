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
    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 border ${isActive
      ? 'bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white border-transparent shadow-lg shadow-fuchsia-500/20'
      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
      }`}
  >
    <Icon size={18} />
    <span className="text-sm font-medium">{label}</span>
  </button>
);

export default NavButton;
