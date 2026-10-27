import React, { useState } from 'react';
import { GripVertical, X, Plus, Eye, ChevronDown } from 'lucide-react';

interface Rule {
  id: string;
  field: string;
  operator: string;
  value: string;
}

export function DomainFilter() {
  const [rules, setRules] = useState<Rule[]>([
    { id: '1', field: 'Stage', operator: 'Operator', value: 'Value' }
  ]);
  const [matchType, setMatchType] = useState('All');

  const addRule = () => {
    const newRule: Rule = {
      id: Math.random().toString(36).substr(2, 9),
      field: '',
      operator: '',
      value: ''
    };
    setRules([...rules, newRule]);
  };

  const removeRule = (id: string) => {
    setRules(rules.filter(rule => rule.id !== id));
  };

  return (
    <div className="flex flex-col gap-[16px] w-full animate-in fade-in slide-in-from-top-2 duration-300">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[12px]">
          <h3 className="text-[15px] font-medium text-[#000b25] dark:text-zinc-100 font-['Roboto']">
            Rules & Filters
          </h3>
        </div>
        <div className="flex items-center gap-[8px]">
          <button className="h-[32px] px-[12px] border border-[#d2d2d2] dark:border-slate-700 text-[#000b25]/60 dark:text-slate-400 rounded-[4px] text-[13px] font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer active:scale-95">
            New Group
          </button>
          <button 
            onClick={addRule}
            className="h-[32px] px-[12px] bg-[#000000] text-white rounded-[4px] text-[13px] font-medium hover:bg-[#262626] transition-all cursor-pointer active:scale-95 shadow-sm"
          >
            New Rules
          </button>
        </div>
      </div>

      {/* Logic Selector */}
      <div className="flex items-center gap-[8px]">
        <span className="text-[14px] text-[#000b25]/60 dark:text-slate-400 font-['Roboto']">
          Match of the following rules :
        </span>
        <div className="relative min-w-[80px]">
          <select 
            value={matchType}
            onChange={(e) => setMatchType(e.target.value)}
            className="w-full h-[32px] pl-[12px] pr-[24px] border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[13px] font-medium bg-white dark:bg-slate-900 outline-none appearance-none cursor-pointer focus:border-[#000000]"
          >
            <option value="All">All</option>
            <option value="Any">Any</option>
          </select>
          <ChevronDown size={14} className="absolute right-[8px] top-1/2 -translate-y-1/2 text-[#000b25]/40 dark:text-slate-500 pointer-events-none" />
        </div>
      </div>

      {/* Rules List */}
      <div className="space-y-[8px]">
        {rules.map((rule, index) => (
          <div key={rule.id} className="flex items-center gap-[8px] group">
            <div className="cursor-grab text-slate-300 hover:text-slate-400">
              <GripVertical size={16} />
            </div>
            <div className="text-[13px] font-medium text-slate-400 w-[12px]">
              {index + 1}
            </div>
            
            {/* Field Dropdown */}
            <div className="relative flex-1">
              <select className="w-full h-[38px] pl-[12px] pr-[24px] border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[14px] bg-white dark:bg-slate-900 outline-none appearance-none cursor-pointer focus:border-[#000000]">
                <option>{rule.field || 'Stage'}</option>
              </select>
              <ChevronDown size={14} className="absolute right-[8px] top-1/2 -translate-y-1/2 text-[#000b25]/40 pointer-events-none" />
            </div>

            {/* Operator Dropdown */}
            <div className="relative w-[140px]">
              <select className="w-full h-[38px] pl-[12px] pr-[24px] border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[14px] bg-white dark:bg-slate-900 outline-none appearance-none cursor-pointer focus:border-[#000000]">
                <option>{rule.operator || 'Operator'}</option>
              </select>
              <ChevronDown size={14} className="absolute right-[8px] top-1/2 -translate-y-1/2 text-[#000b25]/40 pointer-events-none" />
            </div>

            {/* Value Input */}
            <div className="flex-[1.5]">
              <input 
                type="text" 
                placeholder="Value"
                className="w-full h-[38px] px-[12px] border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[14px] bg-white dark:bg-slate-900 outline-none focus:border-[#000000]"
              />
            </div>

            <button 
              onClick={() => removeRule(rule.id)}
              className="p-[8px] text-[#ef4444] opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Summary Footer */}

    </div>
  );
}
