import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  Plus, 
  Zap, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Link as LinkIcon,
  ChevronRight,
  ArrowLeft,
  Trash2
} from 'lucide-react';
import { ActionDetail } from './action-detail';

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

const mockActions: Action[] = [
  {
    id: 'ACT-001',
    name: 'Calculate Base Commission',
    model: 'Commission',
    trigger: 'Automatic',
    status: 'Active',
    linkedPlans: ['Hunting - Base', 'KAM CS'],
    description: 'Calculate the total commission based on predefined rules and achievement metrics.',
    lastModified: '2026-01-20'
  },
  {
    id: 'ACT-002',
    name: 'Quarterly Bonus Multiplier',
    model: 'Bonus',
    trigger: 'Automatic',
    status: 'Active',
    linkedPlans: ['VM CS - Enhanced'],
    description: 'Calculate bonus multipliers for high-performing sales representatives.',
    lastModified: '2026-01-19'
  },
  {
    id: 'ACT-003',
    name: 'Quota Achievement Check',
    model: 'Quota',
    trigger: 'Automatic',
    status: 'Inactive',
    linkedPlans: ['Hunting - Base'],
    description: 'Verify if the sales representative has met their quarterly quota.',
    lastModified: '2026-01-15'
  },
  {
    id: 'ACT-004',
    name: 'Retention Incentive',
    model: 'Commission',
    trigger: 'Automatic',
    status: 'Active',
    linkedPlans: ['KAM CS', 'Retention Plan'],
    description: 'Incentive logic for customer retention and contract renewals.',
    lastModified: '2026-01-18'
  },
  {
    id: 'ACT-005',
    name: 'Over-achievement Accelerator',
    model: 'Bonus',
    trigger: 'Automatic',
    status: 'Active',
    linkedPlans: ['High Performer Plan'],
    description: 'Accelerated payout rules for exceeding sales targets by more than 120%.',
    lastModified: '2026-01-21'
  }
];

export function ActionsList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAction, setSelectedAction] = useState<Action | null>(null);
  const [actions, setActions] = useState<Action[]>(mockActions);

  const toggleStatus = (id: string) => {
    setActions(prev => prev.map(a => 
      a.id === id ? { ...a, status: a.status === 'Active' ? 'Inactive' : 'Active' } : a
    ));
  };

  const deleteAction = (id: string) => {
    setActions(prev => prev.filter(a => a.id !== id));
  };

  const filteredActions = actions.filter(action => 
    action.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    action.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-950 animate-in fade-in duration-500">
      {selectedAction ? (
        <ActionDetail 
          action={selectedAction} 
          onBack={() => setSelectedAction(null)} 
          onSave={(data) => {
            console.log('Saving action:', data);
            setSelectedAction(null);
          }}
        />
      ) : (
        <>
          {/* Search & Actions Bar */}
          <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-4 flex-1 max-w-md">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search actions by name or model..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-9 pl-10 pr-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                />
              </div>
              <button className="flex items-center gap-2 px-3 h-9 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                <Filter size={14} />
                Filters
              </button>
            </div>
            <button className="flex items-center gap-2 px-4 h-9 bg-[#000000] hover:bg-[#262626] text-white rounded-lg text-sm font-semibold transition-all active:scale-95 shadow-sm">
              <Plus size={16} />
              Create Action
            </button>
          </div>

          {/* Table Content */}
          <div className="flex-1 overflow-auto custom-scrollbar bg-white dark:bg-slate-950">
            <table className="w-full border-collapse min-w-[1000px] text-[11px] font-['Roboto']">
              <thead className="sticky top-0 bg-[#f4f4f5] dark:bg-zinc-900/40 z-10 shadow-[0_1px_0_0_rgba(0,0,0,0.05)]">
                <tr className="text-left h-[48px]">
                  <th className="px-[16px] w-[52px]">
                    <div className="w-4 h-4 border border-zinc-500 rounded bg-white flex items-center justify-center cursor-pointer">
                      <div className="w-2 h-0.5 bg-black rounded-full opacity-0" />
                    </div>
                  </th>
                  <th className="px-[16px] py-[12px] font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">Action Name</th>
                  <th className="px-[16px] py-[12px] font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">Model</th>
                  <th className="px-[16px] py-[12px] font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">Trigger</th>
                  <th className="px-[16px] py-[12px] font-semibold text-slate-500 uppercase tracking-wider text-center whitespace-nowrap">Status</th>
                  <th className="px-[16px] py-[12px] font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">Active on Plans</th>
                  <th className="px-[16px] py-[12px] font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">Last Modified</th>
                  <th className="px-[16px] py-[12px] font-semibold text-slate-500 uppercase tracking-wider text-center whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                {filteredActions.map((action) => (
                  <tr 
                    key={action.id} 
                    onClick={() => setSelectedAction(action)}
                    className="transition-all group h-[48px] hover:bg-zinc-100/30 dark:hover:bg-zinc-900/5 cursor-pointer active:scale-[0.998]"
                  >
                    <td className="px-[16px]" onClick={(e) => e.stopPropagation()}>
                      <div className="w-4 h-4 border border-zinc-300 dark:border-zinc-800 group-hover:border-zinc-500 bg-white rounded transition-colors" />
                    </td>
                    <td className="px-[16px] py-[12px]">
                      <div className="flex flex-col">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{action.name}</span>
                        <span className="text-[10px] text-slate-400 tabular-nums uppercase">{action.id}</span>
                      </div>
                    </td>
                    <td className="px-[16px] py-[12px]">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {action.model}
                      </span>
                    </td>
                    <td className="px-[16px] py-[12px] text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Clock size={12} className="text-slate-400" />
                        <span>{action.trigger}</span>
                      </div>
                    </td>
                    <td className="px-[16px] py-[12px]" onClick={(e) => e.stopPropagation()}>
                      <div className="flex justify-center">
                        <button 
                          onClick={() => toggleStatus(action.id)}
                          className={`relative inline-flex h-[18px] w-[32px] items-center rounded-full transition-colors cursor-pointer active:scale-90 ${action.status === 'Active' ? 'bg-[#000000]' : 'bg-slate-200 dark:bg-slate-700'}`}
                        >
                          <span className={`inline-block h-[12px] w-[12px] transform rounded-full bg-white transition-transform ${action.status === 'Active' ? 'translate-x-[17px]' : 'translate-x-[3px]'}`} />
                        </button>
                      </div>
                    </td>
                    <td className="px-[16px] py-[12px]">
                      <div className="flex flex-wrap gap-1">
                        {action.linkedPlans.map((plan, i) => (
                          <div 
                            key={i}
                            className="flex items-center gap-1 px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-900/10 border border-zinc-100 dark:border-zinc-800 rounded text-[9px] font-bold text-[#000000]"
                          >
                            <LinkIcon size={9} />
                            {plan}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-[16px] py-[12px] text-slate-500 dark:text-slate-400 tabular-nums">
                      {action.lastModified}
                    </td>
                    <td className="px-[16px] py-[12px]" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-center gap-2">
                        <button 
                          onClick={() => deleteAction(action.id)}
                          className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-all active:scale-90"
                          title="Delete Action"
                        >
                          <Trash2 size={14} />
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded transition-all">
                          <MoreHorizontal size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {filteredActions.length === 0 && (
              <div className="py-20 flex flex-col items-center justify-center text-slate-400">
                <Zap size={48} className="mb-4 opacity-20" />
                <p className="text-[12px] font-medium">No actions found matching your search.</p>
              </div>
            )}
          </div>

          {/* Footer Info */}
          <div className="px-6 py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/30 flex items-center justify-between">
            <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
              Total Actions: {mockActions.length}
            </span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Active: 4</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-400" />
                <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Inactive: 1</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
