import React, { useState, useMemo, useEffect } from 'react';
import { X, Search, ChevronLeft, ChevronRight, RotateCcw, Check, ChevronsUpDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import clsx from 'clsx';
import { toast } from "sonner";

interface Member {
  id: string;
  name: string;
  code: string;
  reason: string;
}

const MOCK_MEMBERS: Member[] = Array.from({ length: 30 }, (_, i) => ({
  id: `m-${i}`,
  name: ['John Doe', 'Jane Smith', 'Michael Chen', 'Sarah Johnson', 'Robert Wilson', 'Emma Davis', 'Chris Evans', 'Lisa Wang'][i % 8],
  code: `#${54980 + i}`,
  reason: ['Missing achievement data', 'Plan not active', 'Manual exclusion', 'Data sync error', 'Invalid transaction type'][i % 5]
}));

interface RerunModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;
  version?: string;
}

export function RerunModal({ isOpen, onClose, planName = "KAM Plan", version = "V.1" }: RerunModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [isProcessing, setIsProcessing] = useState(false);
  const itemsPerPage = 6;

  // Reset page when searching
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const filteredMembers = useMemo(() => {
    return MOCK_MEMBERS.filter(m => 
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      m.code.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);
  const paginatedMembers = useMemo(() => {
    return filteredMembers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  }, [filteredMembers, currentPage]);

  const toggleMember = (id: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) newSelected.delete(id);
    else newSelected.add(id);
    setSelectedIds(newSelected);
  };

  const toggleSelectAll = () => {
    const allFilteredIds = filteredMembers.map(m => m.id);
    const areAllOnPageSelected = paginatedMembers.every(m => selectedIds.has(m.id));
    
    const newSelected = new Set(selectedIds);
    if (areAllOnPageSelected) {
      // Unselect only those on current page
      paginatedMembers.forEach(m => newSelected.delete(m.id));
    } else {
      // Select those on current page
      paginatedMembers.forEach(m => newSelected.add(m.id));
    }
    setSelectedIds(newSelected);
  };

  const handleRerun = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      toast.success(`Rerun initiated for ${selectedIds.size} members`, {
        description: "The processing engine has queued these members for recalculation.",
        duration: 4000,
      });
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-[#f8fafc] dark:bg-gray-900 rounded-[8px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_10px_10px_-5px_rgba(0,0,0,0.04)] w-full max-w-[800px] overflow-hidden"
      >
        <div className="p-[24px] flex flex-col gap-[16px]">
          {/* Header */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                <RotateCcw size={20} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[19px] font-semibold text-[#000b25] dark:text-white leading-tight">Rerun Excluded Members</h2>
                <p className="text-[12px] text-muted-foreground font-normal">
                  {planName} ({version}) • {filteredMembers.length} Members Found
                </p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
          </div>

          {/* Table Container */}
          <div className="bg-white dark:bg-gray-800 border border-blue-100 dark:border-blue-900/50 rounded-[8px] overflow-hidden shadow-sm">
            {/* Table Header Controls */}
            <div className="p-[16px] flex items-center justify-between gap-[16px] border-b border-blue-50 dark:border-blue-900/30">
              <div className="relative flex-1 max-w-[500px]">
                <Search size={16} className="absolute left-[12px] top-1/2 -translate-y-1/2 text-blue-400" />
                <input 
                  type="text" 
                  placeholder="Search members or codes..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-[38px] pl-[38px] pr-[12px] bg-blue-50/30 dark:bg-gray-900 border border-blue-100 dark:border-blue-800 rounded-[4px] text-[14px] outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-blue-300"
                />
              </div>

              <div className="flex items-center gap-[8px]">
                <div className="flex items-center h-[32px] bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900 rounded-[4px] px-2 gap-2">
                  <span className="text-[12px] font-bold text-blue-600 dark:text-blue-400">{currentPage}</span>
                  <span className="text-[12px] text-blue-300">/</span>
                  <span className="text-[12px] font-medium text-blue-400">{totalPages || 1}</span>
                </div>
                <div className="flex gap-[4px]">
                  <button 
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    className="size-[32px] flex items-center justify-center bg-white dark:bg-gray-800 border border-blue-100 dark:border-blue-900 rounded-[4px] hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors disabled:opacity-30"
                  >
                    <ChevronLeft size={16} className="text-blue-600" />
                  </button>
                  <button 
                    disabled={currentPage === totalPages || totalPages === 0}
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    className="size-[32px] flex items-center justify-center bg-white dark:bg-gray-800 border border-blue-100 dark:border-blue-900 rounded-[4px] hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors disabled:opacity-30"
                  >
                    <ChevronRight size={16} className="text-blue-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Actual Table */}
            <div className="w-full overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#e6f4ff] dark:bg-blue-950/60 border-b border-blue-100 dark:border-blue-900">
                    <th className="p-[12px] px-[16px] w-[52px]">
                      <div 
                        onClick={toggleSelectAll}
                        className={clsx(
                          "size-[18px] rounded-[4px] border flex items-center justify-center cursor-pointer transition-all",
                          paginatedMembers.every(m => selectedIds.has(m.id)) && paginatedMembers.length > 0
                            ? "bg-blue-600 border-blue-600"
                            : "bg-white dark:bg-gray-900 border-blue-300 dark:border-blue-700 hover:border-blue-400"
                        )}
                      >
                        {paginatedMembers.every(m => selectedIds.has(m.id)) && paginatedMembers.length > 0 ? (
                          <Check size={12} className="text-white" strokeWidth={4} />
                        ) : paginatedMembers.some(m => selectedIds.has(m.id)) ? (
                          <div className="w-[10px] h-[2px] bg-blue-600 rounded-full" />
                        ) : null}
                      </div>
                    </th>
                    <th className="p-[12px] px-[16px] text-left">
                      <div className="flex items-center gap-[8px] text-[11px] font-bold text-blue-800 dark:text-blue-200 uppercase tracking-wider">
                        Name <ChevronsUpDown size={12} className="text-blue-400" />
                      </div>
                    </th>
                    <th className="p-[12px] px-[16px] text-left">
                      <div className="flex items-center gap-[8px] text-[11px] font-bold text-blue-800 dark:text-blue-200 uppercase tracking-wider">
                        Code <ChevronsUpDown size={12} className="text-blue-400" />
                      </div>
                    </th>
                    <th className="p-[12px] px-[16px] text-left">
                      <div className="flex items-center gap-[8px] text-[11px] font-bold text-blue-800 dark:text-blue-200 uppercase tracking-wider">
                        Reason for Exclusion <ChevronsUpDown size={12} className="text-blue-400" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-50 dark:divide-blue-900/30">
                  {paginatedMembers.length > 0 ? paginatedMembers.map((member) => (
                    <tr 
                      key={member.id} 
                      className="hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition-colors cursor-pointer group"
                      onClick={() => toggleMember(member.id)}
                    >
                      <td className="p-[12px] px-[16px]" onClick={(e) => e.stopPropagation()}>
                        <div 
                          onClick={() => toggleMember(member.id)}
                          className={clsx(
                            "size-[18px] rounded-[4px] border flex items-center justify-center cursor-pointer transition-all",
                            selectedIds.has(member.id)
                              ? "bg-blue-600 border-blue-600 scale-110"
                              : "bg-white dark:bg-gray-900 border-blue-200 dark:border-blue-800 group-hover:border-blue-400"
                          )}
                        >
                          {selectedIds.has(member.id) && (
                            <Check size={12} className="text-white" strokeWidth={4} />
                          )}
                        </div>
                      </td>
                      <td className="p-[12px] px-[16px]">
                        <span className="text-[13px] font-medium text-gray-700 dark:text-gray-200">
                          {member.name}
                        </span>
                      </td>
                      <td className="p-[12px] px-[16px]">
                        <span className="text-[13px] text-gray-500 font-mono">
                          {member.code}
                        </span>
                      </td>
                      <td className="p-[12px] px-[16px]">
                        <div className="inline-flex items-center px-[8px] py-[2px] bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 text-[11px] font-bold rounded border border-red-100 dark:border-red-500/20">
                          {member.reason}
                        </div>
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={4} className="p-16 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <Search size={32} className="text-blue-100" />
                          <p className="text-sm text-gray-400 italic">No members found matching your criteria</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between w-full mt-[8px]">
            <div className="text-[12px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              {selectedIds.size} Members Selected
            </div>
            <div className="flex items-center gap-[12px]">
              <button 
                onClick={onClose}
                className="h-[40px] px-[24px] text-gray-500 font-medium text-[14px] hover:text-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleRerun}
                disabled={selectedIds.size === 0 || isProcessing}
                className="h-[40px] px-[24px] bg-blue-600 hover:bg-blue-700 text-white rounded-[6px] text-[14px] font-bold flex items-center gap-[10px] transition-all active:scale-95 disabled:opacity-50 disabled:grayscale shadow-lg shadow-blue-200 dark:shadow-none"
              >
                {isProcessing ? (
                   <RotateCcw size={16} className="animate-spin" />
                ) : (
                  <RotateCcw size={16} />
                )}
                {isProcessing ? 'Submitting Rerun...' : 'Rerun Selected Members'}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}