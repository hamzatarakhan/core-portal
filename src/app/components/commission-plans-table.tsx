import React, { useState } from 'react';
import { Search, ChevronDown, ChevronLeft, ChevronRight, Filter, Plus, ArrowUpDown } from 'lucide-react';

const MOCK_DATA = [
  {
    id: 1,
    name: 'Cycle 1',
    type: 'Scheduled..',
    frequency: 'Monthly',
    day: '12',
    publishDate: '2024/11/15',
    linkedPlans: 3,
    executionTime: '07/10/2025 11:00 PM',
    totalRuns: 3,
    isActive: false
  },
  {
    id: 2,
    name: 'Cycle 1',
    type: 'Triggered Cycle',
    frequency: '-------',
    day: '12',
    publishDate: '2024/11/15',
    linkedPlans: 3,
    executionTime: '07/10/2025 11:00 PM',
    totalRuns: 3,
    isActive: false
  },
  {
    id: 3,
    name: 'Cycle 1',
    type: 'Scheduled..',
    frequency: 'Monthly',
    day: '12',
    publishDate: '2024/11/15',
    linkedPlans: 3,
    executionTime: '07/10/2025 11:00 PM',
    totalRuns: 3,
    isActive: false
  }
];

interface CommissionPlansTableProps {
  onRowClick?: (plan: any) => void;
  title?: string;
}

export function CommissionPlansTable({ onRowClick, title = 'Commission Plans' }: CommissionPlansTableProps) {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [data, setData] = useState(MOCK_DATA);

  const toggleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map(item => item.id));
    }
  };

  const toggleSelectRow = (id: number) => {
    setSelectedRows(prev => 
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    );
  };

  const toggleActive = (id: number) => {
    setData(prev => prev.map(item => 
      item.id === id ? { ...item, isActive: !item.isActive } : item
    ));
  };

  return (
    <div className="flex flex-col h-full bg-background overflow-hidden">
      {/* Action Toolbar - Same as CycleTable */}
      <div className="sticky top-0 z-20 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 h-[48px] flex items-center px-[24px] justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center h-[32px] border border-slate-200 dark:border-slate-700 rounded-[4px] bg-white dark:bg-slate-900 group focus-within:border-zinc-500 transition-colors">
            <div className="pl-3 pr-2 text-slate-400">
              <Search size={14} />
            </div>
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent outline-none text-[13px] w-[280px] placeholder:text-slate-400 text-slate-900 dark:text-white"
            />
            <div className="h-full w-px bg-slate-200 dark:bg-slate-700 mx-0"></div>
            <button className="px-2 hover:bg-slate-50 dark:hover:bg-slate-800 h-full rounded-r-[4px] transition-colors cursor-pointer">
              <ChevronDown size={14} className="text-slate-500" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 h-[32px] border border-black rounded-[4px] text-black dark:text-zinc-500 text-[13px] font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900/20 transition-all cursor-pointer active:scale-[0.98]">
            Operations <ChevronDown size={14} />
          </button>
          
          <button 
            onClick={() => onRowClick?.(null)}
            className="px-4 h-[32px] bg-[#000000] hover:bg-[#262626] text-white rounded-[4px] text-[13px] font-semibold transition-all shadow-sm active:scale-[0.98] cursor-pointer"
          >
            Create
          </button>

          <div className="flex items-center gap-4 ml-2 border-l border-slate-200 dark:border-slate-800 pl-4 h-[24px]">
            <span className="text-[12px] text-slate-500 dark:text-slate-400 tabular-nums">1-3 / 3</span>
            <div className="flex items-center gap-1">
              <button className="w-[28px] h-[28px] flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-[4px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer active:scale-[0.95]">
                <ChevronLeft size={16} />
              </button>
              <button className="w-[28px] h-[28px] flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-[4px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer active:scale-[0.95]">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {title !== 'Cycle Plans' ? (
        <div className="flex-1 overflow-auto custom-scrollbar">
          <table className="w-full border-collapse min-w-[1200px] text-[11px] font-['Roboto']">
            <thead className="sticky top-0 bg-[#f4f4f5] dark:bg-zinc-900/40 z-10 shadow-[0_1px_0_0_rgba(0,0,0,0.05)]">
              <tr className="text-left h-[48px]">
                <th className="px-[16px] w-[52px]">
                  <div className="w-4 h-4 border border-zinc-500 rounded bg-white flex items-center justify-center cursor-pointer">
                    <div className="w-2 h-0.5 bg-black rounded-full opacity-0" />
                  </div>
                </th>
                <th className="px-[16px] py-[12px] font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">Name</th>
                <th className="px-[16px] py-[12px] font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">Master Commission Plan</th>
                <th className="px-[16px] py-[12px] font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">Valid Fr...</th>
                <th className="px-[16px] py-[12px] font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">Valid To</th>
                <th className="px-[16px] py-[12px] font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">Weightage</th>
                <th className="px-[16px] py-[12px] font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap text-center">Staged Payout</th>
                <th className="px-[16px] py-[12px] font-semibold text-slate-500 uppercase tracking-wider text-right whitespace-nowrap">Versio...</th>
                <th className="px-[16px] py-[12px] font-semibold text-slate-500 uppercase tracking-wider text-center">Active</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
              {[
                { id: '1', name: 'Hunting - Base', masterPlan: 'Indirect', validFrom: '', validTo: '', weightage: '100.00', stagedPayout: true, version: '55', active: true },
                { id: '2', name: 'VM CS - Enhanced', masterPlan: 'VM CS - Enhanced', validFrom: '', validTo: '', weightage: '20.00', stagedPayout: true, version: '42', active: true },
                { id: '3', name: 'KAM CS', masterPlan: 'KAM CS', validFrom: '09/01/2025', validTo: '09/01/2040', weightage: '20.00', stagedPayout: false, version: '30', active: true },
                { id: '4', name: 'KAM Achievement', masterPlan: 'KAM Achievement', validFrom: '09/01/2025', validTo: '09/01/2040', weightage: '50.00', stagedPayout: false, version: '22', active: true },
                { id: '5', name: 'Sr. Manager EBU Total', masterPlan: 'Sr. Manager EBU Total', validFrom: '', validTo: '', weightage: '10.00', stagedPayout: false, version: '21', active: true },
                { id: '6', name: 'VM CS', masterPlan: 'VM CS', validFrom: '01/01/2025', validTo: '', weightage: '20.00', stagedPayout: false, version: '21', active: true },
                { id: '7', name: 'VM SP - Enhanced', masterPlan: 'VM SP - Enhanced', validFrom: '', validTo: '', weightage: '30.00', stagedPayout: false, version: '14', active: true },
                { id: '8', name: 'Upgrade - Base', masterPlan: 'Base Upgrade', validFrom: '', validTo: '', weightage: '100.00', stagedPayout: false, version: '14', active: true },
                { id: '9', name: 'KAM SP', masterPlan: 'KAM SP', validFrom: '01/01/2025', validTo: '01/01/2040', weightage: '30.00', stagedPayout: false, version: '10', active: true },
                { id: '10', name: 'VM Achievement', masterPlan: 'VM Achievement', validFrom: '01/01/2025', validTo: '', weightage: '50.00', stagedPayout: false, version: '9', active: true },
                { id: '11', name: 'KAM SP - Enhanced', masterPlan: 'KAM SP - Enhanced', validFrom: '', validTo: '', weightage: '30.00', stagedPayout: false, version: '9', active: true },
                { id: '12', name: 'QA testing 14', masterPlan: 'QA testing 1', validFrom: '11/05/2025', validTo: '11/02/2025', weightage: '80.00', stagedPayout: false, version: '8', active: true },
                { id: '13', name: 'B2B - Sales Account Manager', masterPlan: 'B2B - Sales Account Manager', validFrom: '09/28/2025', validTo: '', weightage: '1.00', stagedPayout: false, version: '6', active: true },
                { id: '14', name: 'QA testing 14', masterPlan: 'QA testing 1', validFrom: '11/05/2025', validTo: '11/02/2025', weightage: '0.00', stagedPayout: false, version: '5', active: true },
                { id: '15', name: 'QA Test', masterPlan: 'QA Test', validFrom: '11/01/2025', validTo: '12/31/2025', weightage: '10.00', stagedPayout: false, version: '4', active: true },
                { id: '16', name: 'Dealers Activation', masterPlan: 'Dealers Activation', validFrom: '', validTo: '', weightage: '100.00', stagedPayout: false, version: '4', active: true },
                { id: '17', name: 'Upgrade - Other Segment', masterPlan: 'Upgrade - Other Segment', validFrom: '', validTo: '', weightage: '100.00', stagedPayout: false, version: '3', active: true },
                { id: '18', name: 'Hunting - Other Segment', masterPlan: 'Hunting - Other Segment', validFrom: '', validTo: '', weightage: '100.00', stagedPayout: false, version: '3', active: true }
              ].map((row) => (
                <tr 
                  key={row.id} 
                  onClick={() => onRowClick?.(row)}
                  className="transition-all group h-[48px] hover:bg-zinc-100/30 dark:hover:bg-zinc-900/5 cursor-pointer active:scale-[0.998]"
                >
                  <td className="px-[16px]" onClick={(e) => e.stopPropagation()}>
                    <div className="w-4 h-4 border border-zinc-300 dark:border-zinc-800 group-hover:border-zinc-500 bg-white rounded transition-colors" />
                  </td>
                  <td className="px-[16px] py-[12px]">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{row.name}</span>
                  </td>
                  <td className="px-[16px] py-[12px] text-slate-500 dark:text-slate-400">{row.masterPlan}</td>
                  <td className="px-[16px] py-[12px] text-slate-500 dark:text-slate-400 tabular-nums">{row.validFrom}</td>
                  <td className="px-[16px] py-[12px] text-slate-500 dark:text-slate-400 tabular-nums">{row.validTo}</td>
                  <td className="px-[16px] py-[12px] text-slate-700 dark:text-slate-200 font-medium tabular-nums">{row.weightage}</td>
                  <td className="px-[16px] py-[12px]">
                    <div className="flex justify-center">
                      <div className={`relative inline-flex h-[18px] w-[32px] items-center rounded-full transition-colors ${row.stagedPayout ? 'bg-[#000000]' : 'bg-slate-200 dark:bg-slate-700'}`}>
                        <span className={`inline-block h-[12px] w-[12px] transform rounded-full bg-white transition-transform ${row.stagedPayout ? 'translate-x-[17px]' : 'translate-x-[3px]'}`} />
                      </div>
                    </div>
                  </td>
                  <td className="px-[16px] py-[12px] text-slate-500 dark:text-slate-400 text-right tabular-nums">{row.version}</td>
                  <td className="px-[16px] py-[12px]">
                    <div className="flex justify-center">
                      <div className={`relative inline-flex h-[18px] w-[32px] items-center rounded-full transition-colors ${row.active ? 'bg-[#000000]' : 'bg-slate-200 dark:bg-slate-700'}`}>
                        <span className={`inline-block h-[12px] w-[12px] transform rounded-full bg-white transition-transform ${row.active ? 'translate-x-[17px]' : 'translate-x-[3px]'}`} />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex-1 overflow-auto custom-scrollbar">
          <table className="w-full border-collapse min-w-[1200px] text-[11px]">
            <thead className="sticky top-0 bg-[#f4f4f5] dark:bg-zinc-900/40 z-10 shadow-[0_1px_0_0_rgba(0,0,0,0.05)]">
              <tr className="text-left h-[48px]">
                <th className="px-[16px] w-[52px]">
                  <div 
                    onClick={toggleSelectAll}
                    className={`w-4 h-4 border rounded flex items-center justify-center cursor-pointer transition-colors ${
                      selectedRows.length === data.length && data.length > 0
                      ? 'bg-black border-black' 
                      : 'bg-white border-zinc-500 hover:bg-zinc-100'
                    }`}
                  >
                    {selectedRows.length === data.length && data.length > 0 && (
                      <div className="w-2 h-0.5 bg-white rounded-full"></div>
                    )}
                    {selectedRows.length > 0 && selectedRows.length < data.length && (
                      <div className="w-2 h-0.5 bg-black rounded-full"></div>
                    )}
                  </div>
                </th>
                <th className="px-[16px] py-[12px] font-semibold text-muted-foreground whitespace-nowrap">Cycle Plan Name</th>
                <th className="px-[16px] py-[12px] font-semibold text-muted-foreground whitespace-nowrap">Cycle Type</th>
                <th className="px-[16px] py-[12px] font-semibold text-muted-foreground whitespace-nowrap">Frequency</th>
                <th className="px-[16px] py-[12px] font-semibold text-muted-foreground whitespace-nowrap">Cycle Day</th>
                <th className="px-[16px] py-[12px] font-semibold text-muted-foreground whitespace-nowrap">Publish Date</th>
                <th className="px-[16px] py-[12px] font-semibold text-muted-foreground whitespace-nowrap">Commission Plans</th>
                <th className="px-[16px] py-[12px] font-semibold text-muted-foreground whitespace-nowrap">Last Execution</th>
                <th className="px-[16px] py-[12px] font-semibold text-muted-foreground whitespace-nowrap">Total Runs</th>
                <th className="px-[16px] py-[12px] font-semibold text-muted-foreground text-center">Active</th>
                <th className="px-[16px] py-[12px] font-semibold text-muted-foreground text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {data.map((row, i) => (
                <tr 
                  key={row.id} 
                  onClick={() => onRowClick?.(row)}
                  className={`transition-colors group h-[48px] ${selectedRows.includes(row.id) ? 'bg-zinc-100/50 dark:bg-zinc-900/10' : 'hover:bg-zinc-100/20 dark:hover:bg-zinc-900/5'} ${onRowClick ? 'cursor-pointer' : ''}`}
                >
                  <td className="px-[16px]" onClick={(e) => e.stopPropagation()}>
                    <div 
                      onClick={() => toggleSelectRow(row.id)}
                      className={`w-4 h-4 border rounded cursor-pointer transition-all ${
                        selectedRows.includes(row.id) 
                        ? 'bg-black border-black scale-110' 
                        : 'border-zinc-300 dark:border-zinc-900 group-hover:border-zinc-500 bg-white'
                      }`}
                    >
                      {selectedRows.includes(row.id) && (
                        <svg className="w-full h-full text-white p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </td>
                  <td className="px-[16px] py-[12px]">
                    <span className="text-slate-700 dark:text-slate-300 font-medium truncate max-w-[200px]" title={row.name}>
                      {row.name}
                    </span>
                  </td>
                  <td className="px-[16px] py-[12px] text-muted-foreground">
                    {i % 3 === 0 ? 'On Cycle' : 'On Demand'}
                  </td>
                  <td className="px-[16px] py-[12px] text-muted-foreground">
                    {row.frequency || 'Monthly'}
                  </td>
                  <td className="px-[16px] py-[12px] text-muted-foreground tabular-nums">
                    {row.day || (i % 5 === 0 ? '28' : '1')}
                  </td>
                  <td className="px-[16px] py-[12px] text-muted-foreground tabular-nums whitespace-nowrap">
                    {row.publishDate || '02/28/2025'}
                  </td>
                  <td className="px-[16px] py-[12px]">
                    <span className="text-muted-foreground">
                      {row.linkedPlans > 0 ? `${row.linkedPlans} records` : 'No records'}
                    </span>
                  </td>
                  <td className="px-[16px] py-[12px] text-muted-foreground tabular-nums">
                    {i % 4 === 0 ? '2' : i % 3 === 0 ? '88' : '0'}
                  </td>
                  <td className="px-[16px] py-[12px] text-muted-foreground tabular-nums">
                    {row.totalRuns || 0}
                  </td>
                  <td className="px-[16px] py-[12px]">
                    <div className="flex justify-center">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleActive(row.id);
                        }}
                        className={`relative inline-flex h-[18px] w-[30px] items-center rounded-full transition-colors focus:outline-none cursor-pointer active:scale-[0.9] ${row.isActive ? 'bg-black' : 'bg-slate-300 dark:bg-slate-700'}`}
                      >
                        <span
                          className={`inline-block h-[12px] w-[12px] transform rounded-full bg-white transition-transform ${row.isActive ? 'translate-x-[15px]' : 'translate-x-[3px]'}`}
                        />
                      </button>
                    </div>
                  </td>
                  <td className="px-[16px] py-[12px]">
                    <div className="flex justify-center">
                      <button 
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 px-3 h-[24px] bg-[#000000] hover:bg-[#262626] text-white rounded-[2px] text-[10px] font-bold transition-all active:scale-[0.98] cursor-pointer"
                      >
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        Run Now
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
