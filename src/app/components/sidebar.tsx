import React, { useState } from 'react';
import {
  IdCard,
  SquarePlus,
  MapPin,
  RefreshCw,
  MessageCircle,
  Settings,
  ShoppingCart,
  CalendarPlus,
  Wrench,
  Users,
  Tag,
  Send,
  FileText,
  Ticket,
  CalendarClock,
  TrendingUp,
  ClipboardList,
  Link2,
  ChevronDown,
  AlignRight,
} from 'lucide-react';
import logo from 'figma:asset/7a47870d2a1694273f16e4200d2c98592ab1c763.png';

const navItems: { icon: React.ElementType; label: string; subItems?: string[] }[] = [
  { icon: IdCard, label: 'Sales Team', subItems: ['Profile'] },
  { icon: SquarePlus, label: 'POS Devices' },
  { icon: MapPin, label: 'Tracking' },
  { icon: RefreshCw, label: 'E-Reload' },
  { icon: MessageCircle, label: 'Notification' },
  { icon: Settings, label: 'Dynamic Elements' },
  { icon: ShoppingCart, label: 'Orders Management' },
  { icon: CalendarPlus, label: 'Visit Management' },
  { icon: Wrench, label: 'KPI Builder' },
  { icon: Users, label: 'Users' },
  { icon: Tag, label: 'Brand Management' },
  { icon: Send, label: 'Broadcast' },
  { icon: ShoppingCart, label: 'Endpoints Management' },
  { icon: FileText, label: 'Reporting' },
  { icon: Ticket, label: 'Tickets' },
  { icon: CalendarClock, label: 'Shift Planning' },
  { icon: TrendingUp, label: 'Stock Management' },
  { icon: ClipboardList, label: 'Form Builder' },
  { icon: Link2, label: 'Integration Endpoints' },
];

interface SidebarProps {
  activeSubItem: string;
  onSubItemClick: (subItem: string) => void;
}

export function Sidebar({ activeSubItem, onSubItemClick }: SidebarProps) {
  const [activeItem, setActiveItem] = useState('Sales Team');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>(['Sales Team']);

  const handleItemClick = (item: (typeof navItems)[number]) => {
    setActiveItem(item.label);
    if (item.subItems) {
      setOpenMenus(prev => (prev.includes(item.label) ? prev.filter(m => m !== item.label) : [...prev, item.label]));
    } else {
      onSubItemClick(item.label);
    }
  };

  return (
    <div className={`${isCollapsed ? 'w-[64px]' : 'w-[240px]'} border-r border-slate-200 dark:border-slate-800 h-screen bg-white dark:bg-slate-950 flex flex-col shrink-0 transition-all duration-300 ease-in-out`}>
      {/* Header */}
      <div className={`h-[60px] flex items-center ${isCollapsed ? 'justify-center' : 'justify-between px-4'} border-b border-slate-100 dark:border-slate-900`}>
        {!isCollapsed && (
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 bg-blue-50 dark:bg-blue-900/30 rounded-md p-1">
              <img src={logo} alt="Leading Point" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-slate-900 dark:text-white leading-none">Leading Point</span>
              <span className="text-[9px] text-slate-400 font-medium mt-0.5 tracking-tight">Enterprise Suite</span>
            </div>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label="Toggle menu"
          className="w-9 h-9 rounded-[4px] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-blue-600 transition-colors"
        >
          <AlignRight size={16} />
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden py-3 px-2 custom-scrollbar">
        <nav className="space-y-0.5">
          {navItems.map(item => {
            const isActive = activeItem === item.label;
            return (
              <div key={item.label}>
                <button
                  onClick={() => handleItemClick(item)}
                  className={`w-full flex items-center justify-between h-[42px] px-3 rounded-md text-[13px] text-left transition-colors ${
                    isActive
                      ? 'text-blue-600 bg-blue-50/60 dark:bg-blue-950/40 font-medium'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <item.icon size={16} className={`shrink-0 ${isActive ? 'text-blue-600' : 'text-slate-500'}`} fill="currentColor" fillOpacity={0.12} />
                    {!isCollapsed && <span className="truncate">{item.label}</span>}
                  </div>
                  {!isCollapsed && (
                    <ChevronDown
                      size={14}
                      className={`shrink-0 text-slate-400 transition-transform duration-200 ${openMenus.includes(item.label) ? 'rotate-180' : ''}`}
                    />
                  )}
                </button>

                {/* Sub Items */}
                {!isCollapsed && item.subItems && openMenus.includes(item.label) && (
                  <div className="ml-7 border-l border-slate-100 dark:border-slate-800 my-0.5">
                    {item.subItems.map(sub => (
                      <button
                        key={sub}
                        onClick={() => onSubItemClick(sub)}
                        className={`w-full flex items-center h-[32px] px-3.5 text-[12px] transition-colors active:scale-[0.96] ${
                          activeSubItem === sub
                            ? 'text-blue-600 font-medium bg-blue-50/50 dark:bg-blue-900/10'
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                        }`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      {!isCollapsed && (
        <div className="py-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 border-t border-slate-100 dark:border-slate-900">
          Powered by
          <img src={logo} alt="Leading Point" className="h-4 object-contain" />        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; }
      `}} />
    </div>
  );
}
