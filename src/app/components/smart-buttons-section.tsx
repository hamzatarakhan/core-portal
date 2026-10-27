import React, { useState } from 'react';
import { toast } from 'sonner';

type SegmentedTextProps = {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
};

function SegmentedText({ text, isActive, onClick }: SegmentedTextProps) {
  return (
    <div 
      onClick={onClick}
      className={`content-stretch flex gap-[4px] h-full items-center justify-center px-[24px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer transition-all duration-200 ${
        isActive 
          ? 'pointer-events-none' 
          : 'hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}
    >
      <p className={`font-medium leading-[1.2] relative shrink-0 text-[14px] text-nowrap transition-colors ${
        isActive 
          ? 'text-[#000000] dark:text-zinc-500 opacity-0' 
          : 'text-[rgba(0,11,37,0.64)] dark:text-gray-400'
      }`}>
        {text}
      </p>
    </div>
  );
}

interface RejectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (reason: string) => void;
}

function RejectModal({ isOpen, onClose, onConfirm }: RejectModalProps) {
  const [selectedType, setSelectedType] = useState('');
  const [description, setDescription] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const rejectionTypes = [
    "Achievement Inconsistency",
    "Data Threshold Exceeded",
    "Missing Member Documentation",
    "Calculation Error",
    "Manual Override",
    "Budget Cap Reached"
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-gray-900 w-full max-w-md rounded-lg shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Reject Cycle</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Select a reason and provide details for the rejection.</p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 mt-1 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4">
            {/* Rejection Type Dropdown */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Rejection Reason Type</label>
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between px-3 h-[42px] bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-sm text-gray-900 dark:text-gray-100 hover:border-zinc-500 transition-all text-left"
                >
                  <span className={selectedType ? "text-gray-900 dark:text-gray-100" : "text-gray-400"}>
                    {selectedType || "Select a reason type"}
                  </span>
                  <svg className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-[110] py-1 max-h-48 overflow-y-auto custom-scrollbar animate-in slide-in-from-top-2 duration-200">
                    {rejectionTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => {
                          setSelectedType(type);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-zinc-100 dark:hover:bg-zinc-900/40 transition-colors flex items-center justify-between"
                      >
                        {type}
                        {selectedType === type && <div className="size-1.5 bg-black rounded-full" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Description Textarea */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Additional Description</label>
              <textarea
                className="w-full h-28 p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-sm outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all resize-none text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
                placeholder="Provide specific details about the issue..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={onClose}
              className="flex-1 h-[42px] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 font-medium rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                if (!selectedType) {
                  toast.error("Please select a reason type");
                  return;
                }
                if (!description.trim()) {
                  toast.error("Please provide a description");
                  return;
                }
                onConfirm(`${selectedType}: ${description}`);
                setSelectedType('');
                setDescription('');
              }}
              className="flex-1 h-[42px] bg-red-600 text-white font-medium rounded hover:bg-red-700 active:scale-[0.98] transition-all shadow-sm shadow-red-100 dark:shadow-none"
            >
              Confirm Rejection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SmartButtonsSection() {
  const [activeSegment, setActiveSegment] = useState('Pending');
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);

  const handleApprove = () => {
    toast.success("Cycle approved successfully", {
      description: "The cycle has been moved to the approved stage.",
      duration: 3000
    });
    setActiveSegment('Approved');
  };

  const handleReject = (reason: string) => {
    toast.error("Cycle rejected", {
      description: `Reason: ${reason}`,
      duration: 4000
    });
    setIsRejectModalOpen(false);
    setActiveSegment('Rejected');
  };

  const handleRerun = () => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1500)),
      {
        loading: 'Rerunning cycle calculations...',
        success: 'Cycle rerun completed successfully',
        error: 'Rerun failed',
      }
    );
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-900 content-stretch flex flex-col items-start relative rounded-[4px] border border-[#e1e1e1] dark:border-gray-800 w-full" data-name="Smart Buttons Section">
        <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="CTA">
              <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="CTA">
                {activeSegment !== 'Rejected' && (
                  <>
                    <div className="content-stretch flex items-start relative shrink-0" data-name="Buttons">
                      <button 
                        onClick={() => setIsRejectModalOpen(true)}
                        className="bg-[rgba(240,43,2,0.05)] hover:bg-[rgba(240,43,2,0.1)] active:scale-[0.98] content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[4px] shrink-0 transition-all group" 
                        data-name="Button"
                      >
                        <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#f02b02] text-[14px] text-nowrap">
                          <p className="leading-[1.2]">Reject</p>
                        </div>
                      </button>
                    </div>
                    <button 
                      onClick={handleApprove}
                      className="bg-[#f0fdf4] hover:bg-[#dcfce7] active:scale-[0.98] content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[4px] shrink-0 transition-all" 
                      data-name="Button"
                    >
                      <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[#22c55e] text-[14px] text-nowrap">
                        <p className="leading-[1.2]">Approve</p>
                      </div>
                    </button>
                    <div className="flex h-[39px] items-center justify-center relative shrink-0 w-0">
                      <div className="flex-none rotate-[90deg]">
                        <div className="h-0 relative w-[39px]">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 1">
                              <line id="Line 7" stroke="rgba(226, 232, 240, 1)" strokeLinecap="round" x1="0.5" x2="38.5" y1="0.5" y2="0.5" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                <button 
                  onClick={handleRerun}
                  className="bg-[#fff7ed] hover:bg-[#ffedd5] active:scale-[0.98] content-stretch flex gap-[8px] h-[40px] items-center justify-center leading-[0] px-[16px] py-0 relative rounded-[4px] shrink-0 text-[#f97316] text-[14px] text-nowrap transition-all" 
                  data-name="Button"
                >
                  <div className="flex flex-col justify-center not-italic relative shrink-0 text-center">
                     <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                     </svg>
                  </div>
                  <div className="flex flex-col font-medium justify-center relative shrink-0">
                    <p className="leading-[1.2] text-nowrap ml-2">Rerun</p>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="bg-[#e1e1e1] dark:bg-gray-800 content-stretch flex gap-[2px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Segmented control">
              <div 
                className="absolute bg-white dark:bg-gray-700 h-[33px] rounded-[4px] shadow-sm transition-all duration-300 ease-in-out z-0"
                style={{
                  width: '113px',
                  transform: `translateX(${
                    activeSegment === 'Pending' ? '0px' : 
                    activeSegment === 'Running' ? '115px' : 
                    activeSegment === 'Approved' ? '230px' : '345px'
                  })`
                }}
              >
                <div className="absolute content-stretch flex gap-[4px] h-[33px] items-center justify-center inset-0 px-[24px] py-[8px] rounded-[4px]" data-name="Segmented">
                  <p className="font-medium leading-[1.2] relative shrink-0 text-[#000000] dark:text-zinc-500 text-[14px] text-nowrap">
                    {activeSegment}
                  </p>
                </div>
                <div className="absolute left-[97px] size-[16px] top-0 pointer-events-none">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d="M0 0H16V16L7.5 7.5L0 0Z" fill="currentColor" className="text-[#e1e1e1] dark:text-gray-800" />
                  </svg>
                </div>
                <div className="absolute flex h-[17px] items-center justify-center left-[97px] top-[16px] w-[16px] pointer-events-none">
                  <div className="flex-none scale-y-[-100%]">
                    <div className="h-[17px] relative w-[16px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17">
                        <path d="M0 0H16V17L7.5 7.96875L0 0Z" fill="currentColor" className="text-[#e1e1e1] dark:text-gray-800" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex">
                <SegmentedText text="Pending" isActive={activeSegment === 'Pending'} onClick={() => setActiveSegment('Pending')} />
                <SegmentedText text="Running" isActive={activeSegment === 'Running'} onClick={() => setActiveSegment('Running')} />
                <SegmentedText text="Approved" isActive={activeSegment === 'Approved'} onClick={() => setActiveSegment('Approved')} />
                <SegmentedText text="Rejected" isActive={activeSegment === 'Rejected'} onClick={() => setActiveSegment('Rejected')} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <RejectModal 
        isOpen={isRejectModalOpen} 
        onClose={() => setIsRejectModalOpen(false)}
        onConfirm={handleReject}
      />
    </>
  );
}