import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ChevronRight, 
  Zap, 
  Clock, 
  Save, 
  Trash2, 
  Link as LinkIcon,
  Info,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Plus,
  MoreHorizontal,
  HelpCircle
} from 'lucide-react';

interface Action {
  id: string;
  name: string;
  model: string;
  trigger: string;
  status: 'Active' | 'Inactive';
  linkedPlans: string[];
  description: string;
  lastModified: string;
}

interface ActionDetailProps {
  action: Action;
  onBack: () => void;
  onSave: (action: Action) => void;
}

export function ActionDetail({ action, onBack, onSave }: ActionDetailProps) {
  const [formData, setFormData] = useState<Action>({ ...action });
  const [isPlansExpanded, setIsPlansExpanded] = useState(true);

  const handleToggleStatus = () => {
    setFormData({
      ...formData,
      status: formData.status === 'Active' ? 'Inactive' : 'Active'
    });
  };

  const handleSave = () => {
    onSave(formData);
  };

  const tableData = [
    { name: 'B2C - 5G P...', validFrom: '17/2/2020', validTo: '17/2/2025', weightage: '40%', users: '45', type: 'Calculation Type', cycle: 'Cycle Plan Name' },
    { name: 'B2C - 5G P...', validFrom: '17/5/2020', validTo: '17/8/2020', weightage: '30%', users: '45', type: 'Calculation Type', cycle: 'Cycle Plan Name' },
    { name: 'B2C - 5G P...', validFrom: '17/5/2020', validTo: '17/8/2020', weightage: '30%', users: '45', type: 'Calculation Type', cycle: 'Cycle Plan Name' },
  ];

  const SortIcon = () => (
    <div className="flex flex-col -space-y-1 opacity-40">
      <ChevronUp size={10} />
      <ChevronDown size={10} />
    </div>
  );

  return (
    <div className="flex flex-col h-full bg-[#f3f9fd] dark:bg-slate-950 font-['Roboto']">
      {/* Detail Header */}
      <div className="h-[64px] px-6 bg-white dark:bg-slate-900 border-b border-[#e1e1e1] dark:border-slate-800 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 -ml-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors active:scale-90"
          >
            <ArrowLeft size={20} className="text-slate-600 dark:text-slate-400" />
          </button>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-[12px] text-slate-400 font-medium uppercase tracking-wider">
              <span>Actions</span>
              <ChevronRight size={12} />
              <span className="text-[#0071cd]">{formData.id}</span>
            </div>
            <h1 className="text-[18px] font-bold text-[#000b25] dark:text-blue-100">{formData.name || 'New Action'}</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="h-[36px] px-4 text-[13px] font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-[4px] transition-all active:scale-95">
            Discard Changes
          </button>
          <button 
            onClick={handleSave}
            className="h-[36px] px-4 bg-[#0071cd] hover:bg-[#005da8] text-white text-[13px] font-bold rounded-[4px] flex items-center gap-2 transition-all shadow-sm active:scale-95"
          >
            <Save size={16} />
            Save Changes
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
        <div className="w-full space-y-8">
          
          {/* Action Details Section */}
          <section className="space-y-4">
            <h2 className="text-[17px] font-medium text-[#000b25] dark:text-blue-100">Action Details</h2>
            <div className="bg-white dark:bg-slate-900 border border-[#e1e1e1] dark:border-slate-800 rounded-[4px] p-4 space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] text-slate-500/60 dark:text-slate-400">Action Name</label>
                  <div className="relative">
                    <select className="w-full h-[38px] pl-3 pr-10 border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[16px] text-slate-400 appearance-none bg-white dark:bg-slate-800 outline-none focus:border-[#0071cd]">
                      <option>Enter action name</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] text-slate-500/60 dark:text-slate-400">Model</label>
                  <div className="relative">
                    <select className="w-full h-[38px] pl-3 pr-10 border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[16px] text-slate-400 appearance-none bg-white dark:bg-slate-800 outline-none focus:border-[#0071cd]">
                      <option>Select a model</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] text-slate-500/60 dark:text-slate-400">Trigger (after creation)</label>
                  <div className="h-[38px] px-3 bg-[#f5f5f5] dark:bg-slate-800 border border-[#e1e1e1] dark:border-slate-700 rounded-[4px] flex items-center text-[16px] font-bold text-slate-400/60">
                    After creation
                  </div>
                </div>
              </div>

              {/* Active Status Block */}
              <div className="bg-[#f8fafc] dark:bg-slate-900/50 border border-[#e2e8f0] dark:border-slate-800 rounded-[4px] p-3 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] font-medium text-[#000b25] dark:text-slate-200">Active Status</span>
                  <span className="text-[14px] text-slate-500/60 dark:text-slate-400 leading-tight max-w-[600px]">
                    This action will be active/inactive based on the linked plan status. You can manually override the execution state here.
                  </span>
                </div>
                <button 
                  onClick={handleToggleStatus}
                  className={`relative inline-flex h-[24px] w-[40px] items-center rounded-full transition-colors cursor-pointer active:scale-90 ${formData.status === 'Active' ? 'bg-[#0071cd]' : 'bg-[#bebebe] dark:bg-slate-700'}`}
                >
                  <span className={`inline-block h-[16px] w-[16px] transform rounded-full bg-white transition-transform ${formData.status === 'Active' ? 'translate-x-[20px]' : 'translate-x-[4px]'}`} />
                </button>
              </div>

              {/* Active on Plans Accordion */}
              <div className="pt-2">
                <button 
                  onClick={() => setIsPlansExpanded(!isPlansExpanded)}
                  className="w-full flex items-center justify-between py-2 border-t border-[#b0d3f0]/30"
                >
                  <span className="text-[14px] font-medium text-[#000b25] dark:text-slate-200">Active on Plans</span>
                  <div className={`transition-transform duration-200 ${isPlansExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} className="text-slate-400" />
                  </div>
                </button>
                {isPlansExpanded && (
                  <div className="flex flex-wrap gap-2 pt-3 pb-2">
                    {['Hunting - Base', 'VM CS - Enhanced', 'KAM CS'].map((plan) => (
                      <div 
                        key={plan}
                        className="px-3 py-1.5 bg-[#f3f9fd] dark:bg-blue-900/10 border border-[#dbedf8] dark:border-blue-800 rounded-[4px] text-[12px] font-medium text-[#0072ce]"
                      >
                        {plan}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Domain Filters Section */}
          <section className="space-y-4">
            <h2 className="text-[17px] font-medium text-[#000b25] dark:text-blue-100">Domain Filters</h2>
            <div className="bg-white dark:bg-slate-900 border border-[#e1e1e1] dark:border-slate-800 rounded-[4px] p-4">
              <div className="bg-[#f8fafc] dark:bg-slate-900/50 border border-[#e2e8f0] border-dashed dark:border-slate-800 rounded-[4px] p-8 flex flex-col items-center justify-center gap-4 min-h-[240px]">
                <div className="size-[50px] bg-[#e2e8f0] dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-500/60">
                  <Plus size={24} />
                </div>
                <p className="text-[14px] font-medium text-slate-500/60 dark:text-slate-400">No rules defined</p>
                <button className="bg-[#0071cd] hover:bg-[#005da8] text-white px-4 h-[35px] rounded-[4px] flex items-center gap-2 text-[12px] font-medium transition-all active:scale-95 shadow-sm">
                  Add Rule <Plus size={14} />
                </button>
              </div>
            </div>
          </section>

          {/* Liked Plans Section */}
          <section className="space-y-4 pb-12">
            <h2 className="text-[17px] font-medium text-[#000b25] dark:text-blue-100">Liked Plans</h2>
            <div className="bg-white dark:bg-slate-900 border border-[#e1e1e1] dark:border-slate-800 rounded-[4px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-[12px]">
                  <thead>
                    <tr className="h-[48px] bg-[#e6f4ff] dark:bg-blue-950/40 text-left border-b border-slate-100 dark:border-slate-800">
                      <th className="px-4 w-[52px]">
                        <div className="w-4 h-4 border border-[#0071cd] rounded bg-white flex items-center justify-center cursor-pointer">
                          <div className="w-2 h-0.5 bg-[#0071cd] rounded-full" />
                        </div>
                      </th>
                      {[
                        'Name', 'Valid From', 'Valid To', 'Weightage', 
                        'Assigned Users', 'Calculation Type', 'Cycle Plan'
                      ].map((header) => (
                        <th key={header} className="px-4 py-3 font-medium text-[#000b25] dark:text-slate-300">
                          <div className="flex items-center gap-2 cursor-pointer hover:text-[#0071cd] transition-colors whitespace-nowrap">
                            {header}
                            <SortIcon />
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {tableData.map((row, idx) => (
                      <tr key={idx} className="h-[48px] hover:bg-[#f8fafc] dark:hover:bg-slate-800/50 transition-colors group">
                        <td className="px-4">
                          <div className="w-4 h-4 border border-[#0071cd]/30 group-hover:border-[#0071cd] rounded bg-white dark:bg-slate-800 transition-colors" />
                        </td>
                        <td className="px-4 font-medium text-slate-700 dark:text-slate-300">{row.name}</td>
                        <td className="px-4 text-slate-500 dark:text-slate-400 tabular-nums">{row.validFrom}</td>
                        <td className="px-4 text-slate-500 dark:text-slate-400 tabular-nums">{row.validTo}</td>
                        <td className="px-4">
                          <span className="inline-flex items-center px-2 py-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-[10px] font-bold text-slate-600 dark:text-slate-300">
                            {row.weightage}
                          </span>
                        </td>
                        <td className="px-4">
                          <span className="inline-flex items-center px-2 py-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-[10px] font-bold text-slate-600 dark:text-slate-300 min-w-[32px] justify-center">
                            {row.users}
                          </span>
                        </td>
                        <td className="px-4 text-slate-500 dark:text-slate-400">{row.type}</td>
                        <td className="px-4 text-slate-500 dark:text-slate-400">{row.cycle}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                <button className="flex items-center gap-2 text-[#0071cd] text-[12px] font-bold hover:underline active:scale-95 transition-all">
                  Add a line <Plus size={14} />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
