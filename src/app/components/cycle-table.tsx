import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, Plus, ChevronLeft, ChevronRight, Filter, Download, Trash2, Construction } from 'lucide-react';
import { StatusBadge } from './status-badge';
import { DownloadVouchers } from './download-vouchers';

const INITIAL_DATA = [
  {
    name: 'Senior Manager Cycle-2025-Q2/0499',
    plan: 'Senior Manager Cycle',
    executionTime: '11/17/2025 15:49:29',
    start: '04/01/2025',
    end: '07/01/2025',
    count: 4,
    amount: '10,319.20',
    status: 'Approved'
  },
  {
    name: 'KAM Enhanced-2025-Q2/0498',
    plan: 'KAM Enhanced',
    executionTime: '11/17/2025 15:49:05',
    start: '04/01/2025',
    end: '07/01/2025',
    count: 0,
    amount: '0.00',
    status: ''
  },
  {
    name: 'Senior Manager Cycle-2025-Q2/0466',
    plan: 'Senior Manager Cycle',
    executionTime: '11/10/2025 17:31:09',
    start: '04/01/2025',
    end: '07/01/2025',
    count: 4,
    amount: '17,227.56',
    status: 'Rejected'
  },
  {
    name: 'test-2025-W <built-in method weekday of datetime.date object at 0x7dd... /0397',
    plan: 'test',
    executionTime: '11/02/2025 14:41:39',
    start: '11/01/2025',
    end: '12/01/2025',
    count: 0,
    amount: '0.00',
    status: ''
  },
  {
    name: 'EBU KAM Cycle-2025-Q2/0146',
    plan: 'EBU KAM Cycle',
    executionTime: '10/08/2025 16:19:38',
    start: '04/01/2025',
    end: '07/01/2025',
    count: 3,
    amount: '76,485.10',
    status: 'Approved'
  },
  {
    name: 'EBU KAM Cycle-2025-Q2/0136',
    plan: 'EBU KAM Cycle',
    executionTime: '10/08/2025 13:16:34',
    start: '04/01/2025',
    end: '07/01/2025',
    count: 2,
    amount: '52,785.10',
    status: 'Pending'
  },
  {
    name: 'EBU KAM Cycle-2025-Q3/0009',
    plan: 'EBU KAM Cycle',
    executionTime: '09/29/2025 15:27:21',
    start: '09/30/2025',
    end: '12/01/2025',
    count: 0,
    amount: '0.00',
    status: ''
  },
  {
    name: 'Daily Runs-2025-September/0003',
    plan: 'Daily Runs',
    executionTime: '09/28/2025 21:23:43',
    start: '09/09/2025',
    end: '10/01/2025',
    count: 0,
    amount: '0.00',
    status: ''
  },
  {
    name: 'Daily Runs-2025-September/0001',
    plan: 'Daily Runs',
    executionTime: '09/18/2025 16:49:51',
    start: '09/17/2025',
    end: '09/22/2025',
    count: 1,
    amount: '0.00',
    status: ''
  }
];

interface CycleTableProps {
  onRowClick?: (cycle: any) => void;
  onSelectionChange?: (selectedRows: string[]) => void;
  title?: string;
}

export function CycleTable({
  onRowClick,
  onSelectionChange,
  title
}: CycleTableProps) {
  const [data, setData] = useState(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  // Expand rows with children by default
  const [expandedRows, setExpandedRows] = useState<string[]>(['Senior Manager Cycle-2025-Q2/0499']);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // Mock child data for specific items
  const childData: Record<string, any[]> = {
    'Senior Manager Cycle-2025-Q2/0499': [
      { name: 'Extended Run - Region A', plan: 'Senior Manager Plan', executionTime: '2025-06-15 14:00', start: '2025-04-01', end: '2025-06-30', count: 142, amount: '12,450.00', status: 'Feeding' },
      { name: 'Extended Run - Region B', plan: 'Senior Manager Plan', executionTime: '2025-06-16 09:30', start: '2025-04-01', end: '2025-06-30', count: 89, amount: '8,120.50', status: 'Feeding' },
    ]
  };

  const toggleExpand = (name: string) => {
    setExpandedRows(prev => 
      prev.includes(name) ? prev.filter(r => r !== name) : [...prev, name]
    );
  };

  // Sorting logic
  const sortedData = useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig !== null) {
      sortableItems.sort((a: any, b: any) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  // Filtering logic
  const filteredData = useMemo(() => {
    return sortedData.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.plan.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [sortedData, searchTerm]);

  const requestSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === filteredData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredData.map(item => item.name));
    }
  };

  const toggleSelectRow = (name: string) => {
    setSelectedRows(prev => 
      prev.includes(name) ? prev.filter(r => r !== name) : [...prev, name]
    );
  };

  const handleDelete = () => {
    if (selectedRows.length === 0) return;
    if (confirm(`Are you sure you want to delete ${selectedRows.length} items?`)) {
      setData(prev => prev.filter(item => !selectedRows.includes(item.name)));
      setSelectedRows([]);
    }
  };

  return (
    <div className="flex flex-col h-full bg-background overflow-hidden">
      {/* Toolbar Hidden */}

      <div className="flex-1 overflow-auto custom-scrollbar relative">
        {/* Action Toolbar */}
        <div className="sticky top-0 z-20 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 h-[48px] flex items-center px-[24px] justify-between shrink-0">
          <div className="flex items-center gap-3">
            {/* Search with Filter Dropdown */}
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
            {/* Operations Button */}
            <button className="flex items-center gap-2 px-3 h-[32px] border border-black rounded-[4px] text-black dark:text-zinc-500 text-[13px] font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900/20 transition-all cursor-pointer">
              Operations <ChevronDown size={14} />
            </button>
            
            {/* Create Button */}
            <button className="px-4 h-[32px] bg-[#000000] hover:bg-[#262626] text-white rounded-[4px] text-[13px] font-semibold transition-all shadow-sm active:scale-[0.98] cursor-pointer">
              Create
            </button>

            {/* Pagination Controls */}
            <div className="flex items-center gap-4 ml-2 border-l border-slate-200 dark:border-slate-800 pl-4 h-[24px]">
              <span className="text-[12px] text-slate-500 dark:text-slate-400 tabular-nums">1-14 / 14</span>
              <div className="flex items-center gap-1">
                <button className="w-[28px] h-[28px] flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-[4px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer">
                  <ChevronLeft size={16} />
                </button>
                <button className="w-[28px] h-[28px] flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-[4px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {!onRowClick ? (
          title === 'Download Vouchers' ? (
            <DownloadVouchers />
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-[24px] text-center bg-zinc-100/10">
              <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-900/30 flex items-center justify-center text-black dark:text-zinc-500 mb-4 animate-pulse">
                <Construction size={32} />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{title || 'Module'} - Coming Soon</h3>
              <p className="text-muted-foreground text-[13px] max-w-sm leading-relaxed">
                We're currently engineering the next generation of commission plan management. This feature is under development and will be available in the next release.
              </p>
              <div className="mt-6 flex gap-2">
                <div className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 rounded text-[10px] font-bold text-black dark:text-zinc-500 uppercase tracking-widest border border-zinc-100 dark:border-zinc-900">
                  In Progress
                </div>
                <div className="px-3 py-1 bg-gray-50 dark:bg-gray-900 rounded text-[10px] font-bold text-gray-500 uppercase tracking-widest border border-gray-100 dark:border-gray-800">
                  v2.4.0
                </div>
              </div>
            </div>
          )
        ) : (
          <table className="w-full border-collapse text-[11px] min-w-[1000px]">
            <thead className="sticky top-0 bg-[#f4f4f5] dark:bg-zinc-900/40 z-10 shadow-[0_1px_0_0_rgba(0,0,0,0.05)]">
              <tr className="text-left text-muted-foreground font-normal">
                <th className="p-3 w-10">
                  <div 
                    onClick={toggleSelectAll}
                    className={`w-4 h-4 border rounded flex items-center justify-center cursor-pointer transition-colors ${
                      selectedRows.length === filteredData.length && filteredData.length > 0
                      ? 'bg-black border-black' 
                      : 'bg-background border-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900/20'
                    }`}
                  >
                    {selectedRows.length === filteredData.length && filteredData.length > 0 && (
                      <div className="w-2 h-0.5 bg-white rounded-full"></div>
                    )}
                    {selectedRows.length > 0 && selectedRows.length < filteredData.length && (
                      <div className="w-2 h-0.5 bg-black rounded-full"></div>
                    )}
                  </div>
                </th>
                <th 
                  className="p-3 font-semibold group cursor-pointer hover:text-black transition-colors"
                  onClick={() => requestSort('name')}
                >
                  <div className="flex items-center gap-1">
                    Cycle Name
                    <ChevronDown size={10} className={`transition-transform ${sortConfig?.key === 'name' && sortConfig.direction === 'desc' ? 'rotate-180' : ''} ${sortConfig?.key === 'name' ? 'opacity-100 text-black' : 'opacity-0 group-hover:opacity-50'}`} />
                  </div>
                </th>
                <th 
                  className="p-3 font-semibold group cursor-pointer hover:text-black transition-colors"
                  onClick={() => requestSort('plan')}
                >
                  <div className="flex items-center gap-1">
                    Cycle Plan
                    <ChevronDown size={10} className={`transition-transform ${sortConfig?.key === 'plan' && sortConfig.direction === 'desc' ? 'rotate-180' : ''} ${sortConfig?.key === 'plan' ? 'opacity-100 text-black' : 'opacity-0 group-hover:opacity-50'}`} />
                  </div>
                </th>
                <th className="p-3 font-semibold">Execution Time</th>
                <th className="p-3 font-semibold">Cycle Start</th>
                <th className="p-3 font-semibold">Cycle End</th>
                <th 
                  className="p-3 font-semibold text-right group cursor-pointer hover:text-black"
                  onClick={() => requestSort('count')}
                >
                  <div className="flex items-center justify-end gap-1">
                    Records
                    <ChevronDown size={10} className={`transition-transform ${sortConfig?.key === 'count' && sortConfig.direction === 'desc' ? 'rotate-180' : ''} ${sortConfig?.key === 'count' ? 'opacity-100 text-black' : 'opacity-0 group-hover:opacity-50'}`} />
                  </div>
                </th>
                <th 
                  className="p-3 font-semibold text-right group cursor-pointer hover:text-black"
                  onClick={() => requestSort('amount')}
                >
                  <div className="flex items-center justify-end gap-1">
                    Total Amount
                    <ChevronDown size={10} className={`transition-transform ${sortConfig?.key === 'amount' && sortConfig.direction === 'desc' ? 'rotate-180' : ''} ${sortConfig?.key === 'amount' ? 'opacity-100 text-black' : 'opacity-0 group-hover:opacity-50'}`} />
                  </div>
                </th>
                <th className="p-3 font-semibold text-center">Stage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredData.flatMap((row, i) => {
                const isExpanded = expandedRows.includes(row.name);
                const hasChildren = !!childData[row.name];
                
                const rows = [
                  <tr 
                    key={row.name} 
                    className={`transition-colors group ${selectedRows.includes(row.name) ? 'bg-zinc-100/50 dark:bg-zinc-900/10' : 'hover:bg-zinc-100/20 dark:hover:bg-zinc-900/5'} ${isExpanded ? 'bg-zinc-100/10 dark:bg-zinc-900/5' : ''} ${onRowClick ? 'cursor-pointer' : ''}`}
                    onClick={() => onRowClick?.(row)}
                  >
                    <td className="p-3" onClick={(e) => e.stopPropagation()}>
                       <div 
                        onClick={() => toggleSelectRow(row.name)}
                        className={`w-4 h-4 border rounded cursor-pointer transition-all ${
                          selectedRows.includes(row.name) 
                          ? 'bg-black border-black scale-110' 
                          : 'border-zinc-300 dark:border-zinc-900 group-hover:border-zinc-500 bg-background'
                        }`}
                       >
                         {selectedRows.includes(row.name) && (
                           <svg className="w-full h-full text-white p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                             <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                           </svg>
                         )}
                       </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-start gap-2">
                        {hasChildren && (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleExpand(row.name);
                            }}
                            className="mt-1 p-0.5 hover:bg-zinc-100 dark:hover:bg-zinc-900/40 rounded text-black dark:text-zinc-500 transition-colors"
                          >
                            <ChevronRight size={12} className={`transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
                          </button>
                        )}
                        <div className="flex flex-col">
                          <span className="text-black dark:text-zinc-500 font-medium cursor-pointer hover:underline truncate max-w-[300px]" title={row.name}>
                            {row.name}
                          </span>
                          <span className="text-[9px] text-muted-foreground uppercase tracking-wider font-semibold mt-0.5">ID: {2025000 + i}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-muted-foreground whitespace-nowrap">{row.plan}</td>
                    <td className="p-3 text-muted-foreground/60 font-mono text-[10px]">{row.executionTime}</td>
                    <td className="p-3 text-muted-foreground/80">{row.start}</td>
                    <td className="p-3 text-muted-foreground/80">{row.end}</td>
                    <td className="p-3 text-muted-foreground/80 text-right font-medium tabular-nums">{row.count}</td>
                    <td className="p-3 text-foreground text-right font-semibold tabular-nums">
                      <span className="text-[9px] text-muted-foreground mr-1 font-normal">USD</span>
                      {row.amount}
                    </td>
                    <td className="p-3">
                      <div className="flex justify-center">
                        {row.status ? <StatusBadge status={row.status as any} /> : (
                          <span className="px-3 py-0.5 rounded-full text-[10px] font-medium bg-muted text-muted-foreground border border-border">Draft</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ];

                if (isExpanded && hasChildren) {
                  childData[row.name].forEach((child, childIdx) => {
                    // Logic to increment the serial number from the parent
                    // e.g. "Senior Manager Cycle-2025-Q2/0499" -> ".../0500"
                    const parentNameParts = row.name.split('/');
                    const parentBase = parentNameParts[0];
                    const parentSerial = parseInt(parentNameParts[1] || '0', 10);
                    const childName = `${parentBase}/${(parentSerial + childIdx + 1).toString().padStart(4, '0')}`;

                    rows.push(
                      <tr key={`${row.name}-child-${childIdx}`} className="bg-[#f4f4f5] dark:bg-slate-900/40 h-[55px] border-b border-border animate-in fade-in slide-in-from-top-1 duration-200">
                        <td className="p-0 w-[40px] border-r border-border relative"></td>
                        <td className="p-0">
                          <div className="flex items-center h-full pl-[12.5px]">
                            <div className="relative flex items-center h-[30px] w-full">
                              {/* Vertical Line Connector */}
                              <div className="absolute left-[16px] top-[4px] w-px h-[16px] bg-border"></div>
                              
                              <div className="flex flex-col ml-[25px]">
                                <div className="flex items-center gap-2">
                                  <span className="text-foreground text-[11px] font-normal leading-[16.5px] truncate max-w-[250px]">{childName}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-0 pl-[12px]">
                          <span className="text-muted-foreground text-[11px] italic leading-[16.5px]">{child.plan}</span>
                        </td>
                        <td className="p-0 pl-[12px]">
                          <span className="text-muted-foreground/60 text-[10px] font-mono leading-[15px]">{child.executionTime}</span>
                        </td>
                        <td className="p-0 pl-[12px]">
                          <span className="text-muted-foreground/80 text-[11px] font-normal leading-[16.5px]">{child.start}</span>
                        </td>
                        <td className="p-0 pl-[12px]">
                          <span className="text-muted-foreground/80 text-[11px] font-normal leading-[16.5px]">{child.end}</span>
                        </td>
                        <td className="p-0 text-right pr-[12px]">
                          <span className="text-muted-foreground/80 text-[11px] font-normal leading-[16.5px]">{child.count}</span>
                        </td>
                        <td className="p-0 text-right pr-[11px] relative">
                          <div className="flex items-center justify-end h-full pr-[12px] gap-2">
                            <span className="text-muted-foreground text-[9px] leading-[13.5px] mt-[4px]">USD</span>
                            <span className="text-foreground text-[11px] leading-[16.5px]">{child.amount}</span>
                          </div>
                        </td>
                        <td className="p-0">
                          <div className="flex justify-center opacity-80 pl-[12px] pr-[12px]">
                            <StatusBadge status={child.status as any} />
                          </div>
                        </td>
                      </tr>
                    );
                  });
                }
                
                return rows;
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}