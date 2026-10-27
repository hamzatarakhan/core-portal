import React, { useState } from 'react';
import { 
  ChevronRight, 
  RotateCcw, 
  Check, 
  X, 
  ExternalLink, 
  Calendar, 
  Users, 
  Wallet, 
  Percent, 
  UserCheck, 
  UserMinus, 
  TrendingUp,
  Search,
  Filter,
  MoreVertical,
  ChevronDown,
  ChevronLeft,
  LayoutGrid,
  List,
  ChevronUp,
  LoaderCircle,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  ShieldAlert,
  History
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from "sonner";
import clsx from 'clsx';
import { RerunModal } from './rerun-modal';
import { SmartButtonsSection } from './smart-buttons-section';
import svgPaths from "../../imports/svg-d6fc9scwo9";
import summarySvgPaths from "../../imports/svg-8nwqb1m278";
import figmaSvgPaths from "../../imports/svg-kltuusfhka";

function SpiralBackground() {
  return (
    <div className="absolute right-0 top-0 h-full w-[120px] pointer-events-none opacity-[0.5] dark:opacity-[0.2]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 100">
        <path d="M120 100C100 80 80 60 80 40S100 0 120 0" stroke="black" strokeOpacity="0.05" strokeWidth="0.5" />
        <circle cx="120" cy="50" r="20" stroke="black" strokeOpacity="0.05" strokeWidth="0.5" />
        <circle cx="120" cy="50" r="30" stroke="black" strokeOpacity="0.05" strokeWidth="0.5" />
        <circle cx="120" cy="50" r="40" stroke="black" strokeOpacity="0.05" strokeWidth="0.5" />
        <circle cx="120" cy="50" r="50" stroke="black" strokeOpacity="0.05" strokeWidth="0.5" />
        <circle cx="120" cy="50" r="60" stroke="black" strokeOpacity="0.05" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

function CycleSummaryTag({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="bg-[#f8fafc] dark:bg-gray-800/50 content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] dark:border-gray-700 border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="text-[#64748b] dark:text-gray-400">
        {icon}
      </div>
      <p className="text-[#000b25] dark:text-gray-100 text-[12px] font-normal leading-[1.2]">
        {text}
      </p>
    </div>
  );
}

function CycleRunSummaryCard() {
  return (
    <div className="bg-gradient-to-r from-[#f4f4f5] relative rounded-[8px] w-full to-[rgba(218,215,246,0.51)] via-[#f4f4f5] via-[50.481%] dark:from-zinc-900/20 dark:via-zinc-900/20 dark:to-purple-900/10">
      <div className="flex flex-row items-center w-full">
        <div className="content-stretch flex items-center overflow-clip px-[24px] py-[16px] relative w-full">
          <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
            {/* Icon */}
            <div className="bg-[#000000] content-stretch flex h-[40px] items-center justify-center relative rounded-[32px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] shrink-0 w-[40px]">
              <RotateCcw size={20} className="text-white" />
            </div>

            {/* Details */}
            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <div className="content-stretch flex items-start relative shrink-0">
                    <p className="font-medium leading-[1.2] relative shrink-0 text-[#000b25] dark:text-white text-[17px]">
                      Cycle Name
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="text-[#000000] cursor-pointer hover:opacity-80 transition-opacity">
                      <ExternalLink size={14} />
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-emerald-500/10 content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0 border border-transparent dark:border-emerald-500/20">
                  <p className="font-medium leading-[1.2] relative shrink-0 text-[#ef4444] dark:text-emerald-400 text-[14px]">
                    Failed
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                <CycleSummaryTag icon={<Calendar size={14} />} text="Oct 1, 2024 - Dec 31, 2024" />
                <CycleSummaryTag icon={<Users size={14} />} text="45 members" />
              </div>
            </div>

            {/* Executed Date */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 ml-auto">
              <div className="content-stretch flex items-start relative shrink-0">
                <p className="font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] dark:text-gray-400">
                  Executed Date:
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                <p className="font-medium leading-[1.2] relative shrink-0 text-[#000b25] dark:text-white text-[16px]">
                  Jan 5, 2025 at 2:30 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] dark:border-zinc-800/50 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_3px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function SummaryCard({ title, value, unit, icon, isBlue = false }: { title: string, value: string, unit?: string, icon: React.ReactNode, isBlue?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-[8px] p-[12px] h-[84px] flex flex-col justify-center border transition-all hover:shadow-sm ${
      isBlue 
        ? 'bg-[#f4f4f5] border-[#d4d4d8] dark:bg-zinc-900/30 dark:border-zinc-800' 
        : 'bg-[#f8fafc] border-[#e2e8f0] dark:bg-gray-900 dark:border-gray-800'
    }`}>
      <SpiralBackground />
      <div className="relative z-10 flex flex-col gap-1.5">
        <span className="text-[14px] font-normal text-[#2d2d2d] dark:text-gray-400 leading-tight">{title}</span>
        <div className="flex items-baseline gap-[4px]">
          <span className="text-[19px] font-bold text-[#000b25] dark:text-gray-100 leading-none">{value}</span>
          {unit && <span className="text-[14px] font-medium text-[#2d2d2d] dark:text-gray-400 leading-none">{unit}</span>}
        </div>
      </div>
      <div className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[54px] h-[54px] flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
}

const Icons = {
  TotalAmount: (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="6" y="14" width="12" height="4" rx="2" fill="#F18800" />
        <rect x="6" y="11" width="12" height="4" rx="2" fill="#F4AF00" />
        <rect x="6" y="8" width="12" height="4" rx="2" fill="#F7D23A" />
        <path d="M9 10C9 9.44772 9.44772 9 10 9H14C14.5523 9 15 9.44772 15 10V10.5H9V10Z" fill="#F4AF00" fillOpacity="0.3" />
      </svg>
    </div>
  ),
  TaxAmount: (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg width="40" height="40" viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="17" r="14" fill="#FAA037" />
        <circle cx="17" cy="17" r="11" fill="white" />
        <text x="17" y="21" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#FAA037">%</text>
      </svg>
    </div>
  ),
  RewardedMembers: (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg width="40" height="40" viewBox="0 0 34 34" fill="none">
        <circle cx="10" cy="17" r="5" fill="#3C4252" />
        <circle cx="24" cy="17" r="5" fill="#3C4252" />
        <circle cx="17" cy="15" r="6" fill="#000000" />
        <path d="M17 21C14.5 21 12 23 12 25H22C22 23 19.5 21 17 21Z" fill="#000000" />
      </svg>
    </div>
  ),
  Approved: (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg width="40" height="40" viewBox="0 0 32 37" fill="none">
        <rect x="6" y="6" width="20" height="26" rx="2" fill="#EAECF7" />
        <rect x="10" y="4" width="12" height="4" rx="1" fill="#E28B5A" />
        <circle cx="26" cy="28" r="6" fill="#36DB39" />
        <path d="M23 28L25 30L29 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  ),
  Excluded: (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg width="40" height="40" viewBox="0 0 32 37" fill="none">
        <rect x="6" y="6" width="20" height="26" rx="2" fill="#EAECF7" />
        <rect x="10" y="4" width="12" height="4" rx="1" fill="#E28B5A" />
        <circle cx="26" cy="28" r="6" fill="#FF4D4F" />
        <path d="M23 25L29 31M29 25L23 31" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  ),
  Adjusted: (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="12" y="18" width="16" height="5" rx="2.5" fill="#F18800" />
        <rect x="12" y="14" width="16" height="5" rx="2.5" fill="#F4AF00" />
        <rect x="12" y="10" width="16" height="5" rx="2.5" fill="#F7D23A" />
        <path d="M8 22L10 20L12 22" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 20V28" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 22L30 24L28 22" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 24V16" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
};

function CommissionSummaryView({ member, onBack }: { member: Member, onBack: () => void }) {
  const [activeModelTab, setActiveModelTab] = useState('Model Name');

  const activities = [
    { code: 'Code', ref: 'ACCT-67891', type: 'Type', sub: '6597477', amount: '150 OMR', date: '10/8/2025', comm: '45,000.00' },
    { code: 'Code', ref: 'ACCT-67892', type: 'Type', sub: '6597477', amount: '300 OMR', date: '10/8/2025', comm: '90,000.00' },
    { code: 'Code', ref: 'ACCT-67893', type: 'Type', sub: '6597477', amount: '250 OMR', date: '10/8/2025', comm: '75,000.00' },
    { code: 'Code', ref: 'ACCT-67894', type: 'Type', sub: '6597477', amount: '400 OMR', date: '10/8/2025', comm: '120,000.00' },
  ];

  const revenueData = [
    { staffId: '5873699', revenue: '58,400.00' },
    { staffId: '5873700', revenue: '92,750.00' },
    { staffId: '5873701', revenue: '45,200.00' },
    { staffId: '5873702', revenue: '67,500.00' },
  ];

  const isExcluded = member.status === 'Excluded' || member.status === 'Failed';

  return (
    <div className="flex-1 flex flex-col bg-[#f8fbfe] dark:bg-gray-950 overflow-y-auto p-6 space-y-6 custom-scrollbar animate-in slide-in-from-right duration-300">
      <div className="flex items-center gap-2 text-[11px] text-gray-400 font-medium uppercase tracking-wider">
        <span className="cursor-pointer hover:text-black transition-colors" onClick={onBack}>Cycle Run Details</span>
        <ChevronRight size={12} />
        <span className="text-black dark:text-zinc-500">Commission Summary</span>
      </div>

      <div className="flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#000000] font-medium text-[14px] hover:underline group active:scale-95 transition-all"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Details
        </button>
        <button className="flex items-center gap-2 text-[#000000] font-medium text-[14px] hover:underline active:scale-95 transition-all">
          <History size={16} />
          Adjustments History
        </button>
      </div>

      {/* High-Fidelity Exclusion Audit Workspace */}
      {isExcluded && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative overflow-hidden bg-white dark:bg-red-950/5 border border-red-100 dark:border-red-900/30 rounded-xl shadow-sm"
        >
          <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500" />
          <div className="p-6 flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-xl border border-red-100 dark:border-red-800 shrink-0">
              <ShieldAlert className="text-red-600" size={28} />
            </div>
            <div className="flex-1 space-y-4 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-red-50 dark:border-red-900/20 pb-3">
                <div className="flex items-center gap-3">
                  <h4 className="text-[17px] font-bold text-[#000b25] dark:text-white">Audit Finding: Exclusion Required</h4>
                  <span className="px-2 py-0.5 bg-red-100 dark:bg-red-900/40 text-red-600 text-[10px] font-black rounded uppercase tracking-tighter">High Severity</span>
                </div>
                <div className="flex items-center gap-2 text-[12px] font-bold text-slate-400 uppercase tracking-widest">
                  Audit ID: <span className="text-red-500">EX-40955-REF</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-2">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Exclusion Detail</p>
                  <p className="text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {member.status === 'Failed' 
                      ? "Calculation engine triggered a halt due to 'achievement_threshold_violation'. The reported achievement (90%) deviates significantly from verified hierarchy data. System requires manual override or data correction."
                      : "Manual administrative exclusion recorded. Profile has been flagged for 'Fiscal Reclassification' and is currently blocked from standard payout processing until the audit window closes."
                    }
                  </p>
                </div>
                <div className="space-y-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-100 dark:border-slate-800">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Metadata</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[12px]">
                      <span className="text-slate-400">Initiator</span>
                      <span className="font-bold text-slate-700 dark:text-slate-200">System (Sarah J.)</span>
                    </div>
                    <div className="flex justify-between text-[12px]">
                      <span className="text-slate-400">Timestamp</span>
                      <span className="font-bold text-slate-700 dark:text-slate-200">Feb 8, 2026 09:15</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button className="px-4 py-2 bg-red-600 text-white rounded text-sm font-bold hover:bg-red-700 transition-all active:scale-95 shadow-sm">
                  View Full Audit Log
                </button>
                <button className="px-4 py-2 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 rounded text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95">
                  Request Override
                </button>
                <div className="sm:ml-auto flex items-center gap-2 text-[12px] font-bold text-red-500">
                  <RotateCcw size={12} className="animate-spin-slow" /> Pending Resolution
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <SummaryCard 
          title="Total Amount (Tax included)" 
          value={isExcluded ? "---" : "659.56"} 
          unit={isExcluded ? "" : "OMR"} 
          icon={Icons.TotalAmount} 
          isBlue 
        />
        <SummaryCard 
          title="Tax Amount" 
          value={isExcluded ? "---" : "300.56"} 
          unit={isExcluded ? "" : "OMR"} 
          icon={Icons.TaxAmount} 
          isBlue 
        />
      </div>

      <div className="bg-white dark:bg-gray-900 border border-[#e1e1e1] dark:border-gray-800 rounded-xl p-6 flex flex-col lg:flex-row gap-8 items-center relative overflow-hidden group">
        {isExcluded && <div className="absolute top-0 right-0 p-3 bg-red-50 dark:bg-red-900/20 text-red-500 font-black text-[10px] uppercase tracking-tighter rounded-bl-lg border-l border-b border-red-100 dark:border-red-900/40">Ineligible Profile</div>}
        
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-900/20 text-black dark:text-zinc-500 text-[10px] font-bold rounded border border-zinc-100 dark:border-zinc-800 uppercase tracking-tight">Type</span>
            <span className="px-2 py-0.5 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-[10px] font-bold rounded border border-orange-100 dark:border-orange-800 italic">Caretaker 20%</span>
          </div>
          <div className="space-y-1">
            <h2 className="text-[20px] font-bold text-[#000b25] dark:text-white leading-tight tracking-tight">{member.name}</h2>
            {isExcluded && (
              <div className="flex items-center gap-2 px-2 py-1 bg-red-50 dark:bg-red-950/40 rounded w-fit border border-red-100 dark:border-red-900/20">
                <ShieldAlert size={12} className="text-red-500" />
                <span className="text-[11px] font-bold text-red-600 uppercase">Reason: {member.status === 'Failed' ? 'Achievement Violation' : 'Manual Admin Block'}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Cycle Status</p>
          <div className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded-full border transition-all shadow-sm",
            member.status === 'Included' ? "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20 text-emerald-500" :
            member.status === 'Excluded' ? "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500" :
            "bg-red-50 dark:bg-red-950/20 border-red-100 dark:border-red-900/40 text-red-500"
          )}>
            {member.status === 'Included' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
            <span className="text-[15px] font-bold tracking-tight">{member.status}</span>
          </div>
        </div>

        <div className="h-12 w-px bg-gray-100 dark:bg-gray-800 hidden lg:block"></div>
        
        <div className="grid grid-cols-2 gap-8 min-w-[300px]">
          <div className="flex flex-col gap-1">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Target Value</p>
            <p className="text-[16px] font-bold text-[#000b25] dark:text-white">$100,800.00</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Performance</p>
            <div className={clsx(
              "flex items-center gap-1.5 px-2.5 py-1 rounded-full border w-fit shadow-sm",
              member.achievementColor === 'emerald' ? "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20 text-emerald-500" :
              member.achievementColor === 'orange' ? "bg-orange-50 dark:bg-orange-500/10 border-orange-100 dark:border-orange-500/20 text-orange-500" :
              "bg-red-50 dark:bg-red-500/10 border-red-100 dark:border-red-500/20 text-red-500"
            )}>
              {member.achievementColor === 'emerald' ? <CheckCircle2 size={14} /> : <AlertCircle size={14} />}
              <span className="text-[14px] font-black">{member.achievement}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[17px] font-medium text-[#000b25] dark:text-gray-100">Activities</h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#000000] text-white rounded font-medium text-sm hover:bg-black shadow-sm transition-all active:scale-95">
            <ExternalLink size={16} /> Export
          </button>
        </div>
        <div className="bg-white dark:bg-gray-900 border border-[#e1e1e1] dark:border-gray-800 rounded-xl overflow-hidden relative group">
          {isExcluded && (
            <div className="absolute inset-0 bg-white/70 dark:bg-gray-950/70 backdrop-blur-[3px] z-10 flex items-center justify-center p-6 text-center">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 rounded-2xl shadow-2xl max-w-sm space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto border border-red-100 dark:border-red-800">
                  <ShieldAlert size={28} className="text-red-500" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-[16px] font-bold text-[#000b25] dark:text-white">Detailed Data Restricted</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Access to individual activities is blocked for profiles with <span className="text-red-500 font-bold">{member.status}</span> status.
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Audit Policy</p>
                  <p className="text-[13px] text-[#000b25] dark:text-gray-300 font-medium italic">
                    "{member.status === 'Failed' ? 'Performance Threshold Breach detected' : 'Administrative Manual Override active'}"
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[12px]">
              <thead>
                <tr className="h-[48px] bg-[#f4f4f5] dark:bg-zinc-900/40 text-left border-b border-gray-100 dark:border-gray-800">
                  <th className="px-4 font-bold text-[#000b25] dark:text-gray-200">Member Code</th>
                  <th className="px-4 font-bold text-[#000b25] dark:text-gray-200">Reference Number</th>
                  <th className="px-4 font-bold text-[#000b25] dark:text-gray-200">Activity Type</th>
                  <th className="px-4 font-bold text-[#000b25] dark:text-gray-200">Subscriber Number</th>
                  <th className="px-4 font-bold text-[#000b25] dark:text-gray-200">Activity Amount</th>
                  <th className="px-4 font-bold text-[#000b25] dark:text-gray-200">Date</th>
                  <th className="px-4 font-bold text-[#000b25] dark:text-gray-200 text-right">Commission Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {activities.map((act, i) => (
                  <tr key={i} className="h-[48px] hover:bg-gray-50/50 dark:hover:bg-gray-800/50">
                    <td className="px-4 text-gray-600 dark:text-gray-400">{act.code}</td>
                    <td className="px-4 text-gray-600 dark:text-gray-400">{act.ref}</td>
                    <td className="px-4 text-gray-600 dark:text-gray-400">{act.type}</td>
                    <td className="px-4 text-gray-600 dark:text-gray-400">{act.sub}</td>
                    <td className="px-4 text-gray-600 dark:text-gray-400 font-medium">{act.amount}</td>
                    <td className="px-4 text-gray-600 dark:text-gray-400">{act.date}</td>
                    <td className="px-4 text-right font-bold text-emerald-600 dark:text-emerald-500">{act.comm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="text-[17px] font-medium text-[#000b25] dark:text-gray-100">Revenue Data</h3>
            <p className="text-[12px] text-gray-500">Revenue data used for commission calculation</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-800 rounded font-medium text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
              <RotateCcw size={16} /> Refresh
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#000000] text-white rounded font-medium text-sm hover:bg-black shadow-sm transition-all active:scale-95">
              <ExternalLink size={16} /> Export
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 border border-[#e1e1e1] dark:border-gray-800 rounded-lg overflow-hidden relative group">
          {isExcluded && (
             <div className="absolute inset-0 bg-white/70 dark:bg-gray-950/70 backdrop-blur-[2px] z-10 flex items-center justify-center p-6 text-center">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl shadow-2xl max-w-sm space-y-3 animate-in zoom-in-95 duration-300">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto border border-gray-200 dark:border-gray-700">
                  <AlertCircle size={24} className="text-gray-400" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[15px] font-bold text-[#000b25] dark:text-white">Revenue Data Locked</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Calculation metrics are suppressed for {member.status.toLowerCase()} profiles to maintain audit integrity.
                  </p>
                </div>
                <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">System Flag</p>
                  <p className="text-[13px] text-red-500 font-bold">
                    {member.status === 'Failed' ? 'Inconsistent performance verification' : 'Administrative block active'}
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="p-4 border-b border-gray-100 dark:border-gray-800">
            <div className="bg-gray-100/50 dark:bg-gray-800 p-1 rounded-md flex items-center gap-1 w-fit">
              {['Model Name', 'Model Name ', 'Model Name  '].map((tab, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveModelTab(tab)}
                  className={`px-6 py-1.5 text-sm font-medium rounded transition-all min-w-[120px] ${activeModelTab === tab ? 'bg-white dark:bg-gray-700 text-[#000000] dark:text-zinc-500 shadow-sm' : 'text-gray-500'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[12px]">
              <thead>
                <tr className="h-[40px] bg-[#f4f4f5] dark:bg-zinc-900/40 text-left">
                  <th className="px-4 font-bold text-[#000b25] dark:text-gray-200">Staff ID</th>
                  <th className="px-4 font-bold text-[#000b25] dark:text-gray-200 text-right">Total Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {revenueData.map((row, i) => (
                  <tr key={i} className="h-[40px] hover:bg-gray-50/50 dark:hover:bg-gray-800/50">
                    <td className="px-4 text-gray-600 dark:text-gray-400">{row.staffId}</td>
                    <td className="px-4 text-right font-bold text-emerald-600 dark:text-emerald-500">{row.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function MemberActions({ member, onShowDetails }: { member: Member, onShowDetails: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <button 
        onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
        className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-gray-400 transition-colors"
      >
        <MoreVertical size={16} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl z-50 py-2"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); onShowDetails(); }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-zinc-100 dark:hover:bg-zinc-900/40 transition-colors flex items-center gap-2"
              >
                <LayoutGrid size={14} /> View Details
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); toast.info("Coming soon..."); }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-zinc-100 dark:hover:bg-zinc-900/40 transition-colors flex items-center gap-2"
              >
                <TrendingUp size={14} /> Performance
              </button>
              <div className="border-t border-gray-100 dark:border-gray-800 my-1" />
              <button 
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); toast.error("Action restricted"); }}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/40 transition-colors flex items-center gap-2"
              >
                <X size={14} /> Exclude Member
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export function CycleRunDetails({ onBack }: { onBack?: () => void }) {
  const [view, setView] = useState<'plans' | 'members' | 'summary'>('plans');
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['vm-group']);
  const [expandedPlans, setExpandedPlans] = useState<string[]>(['kam-plan-1']);
  const [isRerunModalOpen, setIsRerunModalOpen] = useState(false);
  const [isOperationsOpen, setIsOperationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    hierarchy: 'All',
    plan: 'All',
    status: 'All'
  });

  const toggleGroup = (id: string) => {
    setExpandedGroups(prev => prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]);
  };

  const togglePlan = (id: string) => {
    setExpandedPlans(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]);
  };

  const handleFilterSelect = (type: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [type]: value }));
    setOpenFilter(null);
    toast.info(`Filter applied: ${value}`);
  };

  const clearFilters = () => {
    setFilters({ hierarchy: 'All', plan: 'All', status: 'All' });
    setSearchQuery('');
    toast.success("Filters cleared");
  };

  const filteredData = React.useMemo(() => {
    return mockHierarchyData.filter(group => {
      const matchesHierarchy = filters.hierarchy === 'All' || group.type === filters.hierarchy;
      if (!matchesHierarchy) return false;

      if (filters.plan === 'All' && filters.status === 'All' && !searchQuery) return true;

      return group.plans.some(plan => {
        const matchesPlanName = filters.plan === 'All' || plan.name === filters.plan;
        const matchesSearch = !searchQuery || 
          plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          plan.members.some(m => m.name.toLowerCase().includes(searchQuery.toLowerCase()));
        
        return matchesPlanName && matchesSearch;
      });
    });
  }, [filters, searchQuery]);

  return (
    <div className="flex-1 flex flex-col bg-[#f8fbfe] dark:bg-gray-950 overflow-hidden">
      {view === 'summary' && selectedMember ? (
        <CommissionSummaryView 
          member={selectedMember} 
          onBack={() => { setView('members'); setSelectedMember(null); }} 
        />
      ) : (
        <div className="flex-1 flex flex-col overflow-y-auto p-6 space-y-6 custom-scrollbar">
          {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-[11px] text-gray-400 font-medium uppercase tracking-wider">
        <span className="cursor-pointer hover:text-black transition-colors" onClick={onBack}>Commission Management</span>
        <ChevronRight size={12} />
        <span className="cursor-pointer hover:text-black transition-colors" onClick={onBack}>Cycles Run</span>
        <ChevronRight size={12} />
        <span className="text-black dark:text-zinc-500">Cycles Run Details</span>
      </nav>

      {/* Rejection Reason Alert - High Fidelity Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 rounded-lg p-3 flex items-center gap-3"
      >
        <div className="bg-white dark:bg-red-900/40 rounded-full p-1.5 border border-red-100 dark:border-red-800 shrink-0">
          <X className="text-red-500" size={16} />
        </div>
        <div className="flex flex-col">
          <h4 className="text-[14px] font-bold text-red-600 dark:text-red-400">Rejected: Achievement Inconsistency</h4>
          <p className="text-[12px] text-gray-600 dark:text-gray-400">The reported achievement for 12 members in the SM hierarchy exceeds the maximum allowed threshold.</p>
        </div>
      </motion.div>

      <SmartButtonsSection />

      {/* Rejection banner hidden by user request */}

      <CycleRunSummaryCard />

      {/* Summary Stats */}
      <div className="space-y-4">
        <h3 className="text-[17px] font-medium text-[#000b25] dark:text-gray-100">Cycle Commission Summary</h3>
        <div className="bg-white dark:bg-gray-900 border border-[#e1e1e1] dark:border-gray-800 rounded-lg p-[16px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[8px]">
            <SummaryCard 
              title="Total Amount (Tax included)" 
              value="659.56" 
              unit="OMR" 
              icon={Icons.TotalAmount} 
              isBlue 
            />
            <SummaryCard 
              title="Tax Amount" 
              value="300.56" 
              unit="OMR" 
              icon={Icons.TaxAmount} 
              isBlue 
            />
            <SummaryCard 
              title="Rewarded Members" 
              value="40" 
              icon={Icons.RewardedMembers} 
              isBlue 
            />
            <SummaryCard 
              title="Approved Amount" 
              value="659.56" 
              unit="OMR" 
              icon={Icons.Approved} 
            />
            <SummaryCard 
              title="Excluded Amount" 
              value="659.56" 
              unit="OMR" 
              icon={Icons.Excluded} 
            />
            <SummaryCard 
              title="Adjusted Amount" 
              value="659.56" 
              unit="OMR" 
              icon={Icons.Adjusted} 
            />
          </div>
        </div>
      </div>

      {/* Plan Results Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[17px] font-medium text-[#000b25] dark:text-gray-100">Plan Results</h3>
        </div>
        
        <div className="space-y-4">
          {/* Header Controls */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="bg-[#edf1f5] dark:bg-gray-800 p-1 rounded-md flex items-center gap-1">
                <button 
                  onClick={() => setView('plans')}
                  className={`px-6 py-1.5 text-sm font-medium rounded transition-all ${view === 'plans' ? 'bg-white dark:bg-gray-700 text-[#000000] dark:text-zinc-500 shadow-sm border border-gray-100 dark:border-gray-600' : 'text-gray-500'}`}
                >
                  Plans
                </button>
                <button 
                  onClick={() => setView('members')}
                  className={`px-6 py-1.5 text-sm font-medium rounded transition-all ${view === 'members' ? 'bg-white dark:bg-gray-700 text-[#000000] dark:text-zinc-500 shadow-sm border border-gray-100 dark:border-gray-600' : 'text-gray-500'}`}
                >
                  Members
                </button>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative">
                  <button 
                    onClick={() => setIsOperationsOpen(!isOperationsOpen)}
                    className="flex items-center gap-2 px-4 py-2 border border-[#000000] text-[#000000] rounded font-medium text-sm hover:bg-zinc-100 transition-colors"
                  >
                    Operations
                    <ChevronDown size={16} className={`transition-transform duration-200 ${isOperationsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOperationsOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl z-50 py-2 overflow-hidden"
                      >
                        <button onClick={() => { setIsOperationsOpen(false); toast.success("Export started..."); }} className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-zinc-100 dark:hover:bg-zinc-900/40 transition-colors flex items-center gap-2">
                          <ExternalLink size={14} /> Export to Excel
                        </button>
                        <button onClick={() => { setIsOperationsOpen(false); toast.success("PDF Generation started..."); }} className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-zinc-100 dark:hover:bg-zinc-900/40 transition-colors flex items-center gap-2">
                          <List size={14} /> Download Summary PDF
                        </button>
                        <div className="border-t border-gray-100 dark:border-gray-800 my-1" />
                        <button onClick={() => { setIsOperationsOpen(false); toast.error("Bulk action failed: Select members first"); }} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/40 transition-colors flex items-center gap-2 font-medium">
                          <RotateCcw size={14} /> Mass Rerun Selected
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-1">
                  <button className="p-1.5 bg-[#000000] text-white rounded">
                    <LayoutGrid size={16} />
                  </button>
                  <button className="p-1.5 text-gray-400">
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Filters Bar */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3 flex items-center justify-between gap-4">
              <div className="flex-1 max-w-sm relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by Plan, Member, or Account #" 
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-sm outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div className="flex items-center gap-2">
                {[
                  { key: 'hierarchy', label: 'Hierarchy Type', options: ['All', 'VM', 'SM', 'KAM'] },
                  { key: 'plan', label: 'Plan', options: ['All', 'KAM Plan', 'Incentive Plan'] },
                  { key: 'status', label: 'Status', options: ['All', 'Included', 'Excluded', 'Failed'] }
                ].map((filter) => (
                  <div key={filter.key} className="relative">
                    <button 
                      onClick={() => setOpenFilter(openFilter === filter.key ? null : filter.key)}
                      className="flex items-center gap-2 border border-gray-200 dark:border-gray-700 rounded px-3 py-2 bg-white dark:bg-gray-800 hover:border-black transition-colors"
                    >
                      <span className="text-sm text-gray-600 dark:text-gray-400">{filter.label}: <span className="text-gray-900 dark:text-gray-100 font-medium">{filters[filter.key as keyof typeof filters]}</span></span>
                      <ChevronDown size={14} className={`text-gray-400 transition-transform ${openFilter === filter.key ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFilter === filter.key && (
                        <motion.div 
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl z-50 py-1"
                        >
                          {filter.options.map((opt) => (
                            <button
                              key={opt}
                              onClick={() => handleFilterSelect(filter.key as keyof typeof filters, opt)}
                              className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-zinc-100 dark:hover:bg-zinc-900/40 flex items-center justify-between"
                            >
                              {opt}
                              {filters[filter.key as keyof typeof filters] === opt && <Check size={14} className="text-black" />}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                <button 
                  onClick={clearFilters}
                  className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 ml-2"
                >
                  Clear
                  <RotateCcw size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Hierarchical Content */}
          <div className="space-y-4">
            {filteredData.map(group => (
              <div key={group.id} className="bg-[#f4f4f5]/30 dark:bg-zinc-900/10 border border-[#d4d4d8]/30 dark:border-zinc-800/20 rounded-lg overflow-hidden transition-all duration-300">
                {/* Group Header Card */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex-1 grid grid-cols-3 gap-8">
                    <div>
                      <p className="text-[12px] text-gray-500 font-normal mb-1">Hierarchy Type</p>
                      <p className="text-[14px] font-bold text-[#000b25] dark:text-gray-100">{group.type}</p>
                    </div>
                    <div>
                      <p className="text-[12px] text-gray-500 font-normal mb-1">Total Amount</p>
                      <p className="text-[14px] font-bold text-[#22c55e]">{group.totalAmount}</p>
                    </div>
                    <div>
                      <p className="text-[12px] text-gray-500 font-normal mb-1">No. Of Members</p>
                      <p className="text-[14px] font-bold text-[#000b25] dark:text-gray-100">{group.memberCount}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleGroup(group.id)}
                    className="p-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-50 transition-colors"
                  >
                    {expandedGroups.includes(group.id) ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                  </button>
                </div>

                {expandedGroups.includes(group.id) && group.plans.length > 0 && (
                  <div className="border-t border-[#d4d4d8]/30 dark:border-zinc-800/20 animate-in slide-in-from-top-2 duration-300 p-4 space-y-4 bg-white/50 dark:bg-gray-900/50">
                    {group.plans.map(plan => (
                      <div key={plan.id} className="bg-white dark:bg-gray-900 rounded-xl border border-zinc-100 dark:border-zinc-900/30 overflow-hidden shadow-sm">
                        {/* Plan Header Card (Inspired by figma screenshot) */}
                        <div className="p-4 flex items-center gap-6 border-b border-gray-50 dark:border-gray-800">
                          <div className="flex items-center gap-3 min-w-[200px]">
                            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-zinc-100 dark:shadow-none shrink-0">
                              {plan.version}
                            </div>
                            <div className="flex flex-col">
                              <div className="flex items-center gap-2">
                                <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100">{plan.name}</h4>
                                <span className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-900/30 text-black dark:text-zinc-500 text-[10px] font-bold rounded-full border border-zinc-100 dark:border-zinc-800">
                                  {plan.percentage}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="h-10 w-px bg-gray-100 dark:bg-gray-800 hidden lg:block"></div>

                          <div className="hidden lg:block">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Total Amount</p>
                            <p className="text-sm font-bold text-emerald-600 dark:text-emerald-500">{plan.totalAmount}</p>
                          </div>

                          <div className="h-10 w-px bg-gray-100 dark:bg-gray-800 hidden lg:block"></div>

                          <div className="hidden lg:block">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Tax Amount</p>
                            <p className="text-sm font-bold text-gray-500 dark:text-gray-400">{plan.taxAmount}</p>
                          </div>

                          <div className="h-10 w-px bg-gray-100 dark:bg-gray-800 hidden lg:block"></div>

                          <div className="flex-1 flex flex-col gap-1.5">
                            <p className="text-[10px] font-bold text-black dark:text-zinc-500 uppercase tracking-wider">Members ({plan.memberCount})</p>
                            <div className="flex items-center gap-1.5">
                              <span className="px-2 py-1 bg-[#f0fdf4] dark:bg-emerald-500/10 text-[#22c55e] dark:text-emerald-400 text-[9px] font-bold rounded flex items-center gap-1 border border-[#22c55e]/10 dark:border-emerald-500/20">
                                <Check size={10} /> {plan.stats.included} Included
                              </span>
                              <span className="px-2 py-1 bg-[#fff7ed] dark:bg-orange-500/10 text-[#f97316] dark:text-orange-400 text-[9px] font-bold rounded flex items-center gap-1 border border-[#f97316]/10 dark:border-orange-500/20">
                                <Users size={10} /> {plan.stats.adjusted} Adjusted
                              </span>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsRerunModalOpen(true);
                                }}
                                className="px-3 py-1.5 bg-[#fef2f2] dark:bg-red-500/10 text-[#ef4444] dark:text-red-400 text-[10px] font-bold rounded flex items-center gap-1 border border-[#ef4444]/10 dark:border-red-500/20 hover:scale-105 active:scale-95 transition-all shadow-sm"
                              >
                                <X size={10} /> {plan.stats.excluded} Excluded
                              </button>
                              <span className="px-2 py-1 bg-[#fff1f2] dark:bg-pink-500/10 text-[#ce0058] dark:text-pink-400 text-[9px] font-bold rounded flex items-center gap-1 border border-[#ce0058]/10 dark:border-pink-500/20">
                                <TrendingUp size={10} className="rotate-180" /> {plan.stats.failed} Failed
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <button className="p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg text-gray-400 transition-colors">
                              <MoreVertical size={18} />
                            </button>
                            <button 
                              onClick={() => togglePlan(plan.id)}
                              className="p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg text-gray-400 transition-colors"
                            >
                              {expandedPlans.includes(plan.id) ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </button>
                          </div>
                        </div>

                        {/* Member Details (Inspired by figma screenshot rows) */}
                        {expandedPlans.includes(plan.id) && (
                          <div className="p-4 bg-gray-50/50 dark:bg-gray-950/50 space-y-1.5 animate-in slide-in-from-top-2 duration-300">
                            {plan.members.map(member => (
                              <div key={member.id} className="bg-white dark:bg-gray-900 rounded border border-gray-100 dark:border-gray-800 py-3 px-4 flex items-center gap-6 hover:bg-gray-50/50 transition-colors group">
                                <div className="flex items-center">
                                  <input type="checkbox" className="size-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer" />
                                </div>
                                
                                <div className="flex flex-col gap-1.5 min-w-[200px]">
                                  <div className="flex items-center gap-1.5">
                                    <span className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-900/20 text-black dark:text-zinc-500 text-[10px] font-bold rounded border border-zinc-100 dark:border-zinc-800 uppercase tracking-tight">Type</span>
                                    <span className="px-2 py-0.5 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-[10px] font-bold rounded border border-gray-200 dark:border-gray-700 uppercase tracking-tight">Code</span>
                                    <span className="px-2 py-0.5 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-[10px] font-bold rounded border border-orange-100 dark:border-orange-800 italic">Caretaker 20%</span>
                                  </div>
                                  <p className="text-[14px] font-bold text-gray-700 dark:text-gray-200">{member.name}</p>
                                </div>

                                <div className="flex items-center">
                                  <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 text-[11px] font-bold rounded-full border border-emerald-100 dark:border-emerald-500/20">
                                    {member.status}
                                  </span>
                                </div>

                                <div className="w-px h-10 bg-gray-100 dark:bg-gray-800"></div>

                                <div className="flex flex-col gap-1 min-w-[140px]">
                                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Total Amount</p>
                                  <div className="flex items-center gap-2">
                                    <span className="text-[12px] text-gray-500">Orig: <span className="line-through">${member.originalAmount}</span></span>
                                    <span className="text-[12px] font-bold text-emerald-500">Adj: ${member.totalAfterAdj}</span>
                                    <div className="relative">
                                      <RotateCcw size={12} className="text-orange-400" />
                                      <span className="absolute -top-1 -right-1 text-[8px] font-bold text-orange-400">2</span>
                                    </div>
                                  </div>
                                </div>

                                <div className="w-px h-10 bg-gray-100 dark:bg-gray-800"></div>

                                <div className="flex flex-col gap-1 min-w-[100px]">
                                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Target</p>
                                  <p className="text-[13px] font-bold text-gray-700 dark:text-gray-300">${member.target}</p>
                                </div>

                                <div className="w-px h-10 bg-gray-100 dark:bg-gray-800"></div>

                                <div className="flex flex-col gap-1 min-w-[120px]">
                                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Achievement</p>
                                  <div className="flex items-center gap-1.5">
                                    {member.achievementColor === 'emerald' ? (
                                      <div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-50 dark:bg-emerald-500/10 rounded-full border border-emerald-100 dark:border-emerald-500/20">
                                        <Check size={12} className="text-emerald-500" />
                                        <span className="text-[12px] font-bold text-emerald-500">{member.achievement}</span>
                                      </div>
                                    ) : (
                                      <div className="flex items-center gap-1 px-2 py-0.5 bg-red-50 dark:bg-red-500/10 rounded-full border border-red-100 dark:border-red-500/20">
                                        <X size={12} className="text-red-500" />
                                        <span className="text-[12px] font-bold text-red-500">{member.achievement}</span>
                                      </div>
                                    )}
                                  </div>
                                </div>

                                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                  <MemberActions 
                                    member={member} 
                                    onShowDetails={() => {
                                      setSelectedMember(member);
                                      setView('summary');
                                    }} 
                                  />
                                </div>
                              </div>
                            ))}
                            
                            {/* Pagination in member list */}
                            <div className="flex items-center justify-end gap-3 pt-4 pr-2">
                              <span className="text-[10px] font-bold text-gray-400 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 px-3 py-1 rounded-md">10 / 55</span>
                              <div className="flex items-center gap-1">
                                <button className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-lg shadow-lg shadow-zinc-100 dark:shadow-none hover:bg-zinc-800 transition-colors">
                                  <ChevronLeft size={16} />
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-lg shadow-lg shadow-zinc-100 dark:shadow-none hover:bg-zinc-800 transition-colors">
                                  <ChevronRight size={16} />
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {isRerunModalOpen && (
        <RerunModal 
          isOpen={isRerunModalOpen} 
          onClose={() => setIsRerunModalOpen(false)} 
        />
      )}
        </div>
      )}
    </div>
  );
}

interface Member {
  id: string;
  name: string;
  type: string;
  target: string;
  achievement: string;
  achievementColor: 'emerald' | 'orange' | 'red';
  originalAmount: string;
  totalAfterAdj: string;
  status: 'Included' | 'Adjusted' | 'Excluded' | 'Failed';
}

interface Plan {
  id: string;
  name: string;
  version: string;
  percentage: string;
  totalAmount: string;
  originalAmount: string;
  adjustedAmount: string;
  taxAmount: string;
  memberCount: number;
  stats: {
    included: number;
    adjusted: number;
    excluded: number;
    failed: number;
  };
  members: Member[];
}

interface HierarchyGroup {
  id: string;
  type: string;
  totalAmount: string;
  memberCount: number;
  plans: Plan[];
}

const mockHierarchyData: HierarchyGroup[] = [
  {
    id: 'vm-group',
    type: 'VM',
    totalAmount: '$100,800.00',
    memberCount: 55,
    plans: [
      {
        id: 'kam-plan-1',
        name: 'KAM Plan',
        version: 'V.1',
        percentage: '40%',
        totalAmount: '$84,600.00',
        originalAmount: '$600,00.00',
        adjustedAmount: '$100,800.00',
        taxAmount: '$100,800.00',
        memberCount: 20,
        stats: { included: 16, adjusted: 2, excluded: 2, failed: 4 },
        members: [
          { id: 'm1', name: 'Hamza Tarakhan', type: 'Distributor', target: '$100,000', achievement: '90%', achievementColor: 'emerald', originalAmount: '$84,600.00', totalAfterAdj: '$60,600.00', status: 'Included' },
          { id: 'm2', name: 'Ethan Perez', type: 'Distributor', target: '$100,000', achievement: '71%', achievementColor: 'orange', originalAmount: '$84,600.00', totalAfterAdj: '$100,600.00', status: 'Included' },
          { id: 'm3', name: 'Ethan Perez', type: 'Distributor', target: '$100,000', achievement: '35%', achievementColor: 'red', originalAmount: '$84,600.00', totalAfterAdj: '$84,600.00', status: 'Included' },
        ]
      }
    ]
  },
  {
    id: 'sm-group',
    type: 'SM',
    totalAmount: '$100,800.00',
    memberCount: 55,
    plans: []
  },
  {
    id: 'kam-group',
    type: 'KAM',
    totalAmount: '$100,800.00',
    memberCount: 55,
    plans: []
  }
];

export function ExcludedMembersView({ onRowClick }: { onRowClick?: (cycle: any) => void }) {
  const [isRerunOpen, setIsRerunOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const cycles = [
    { 
      id: '1', 
      name: 'Sales Cycle Q4 2024', 
      plan: 'KAM Incentive V2',
      executionTime: '02:15:45',
      cycleStart: 'Oct 01, 2024',
      cycleEnd: 'Dec 31, 2024',
      records: '14,250',
      totalAmount: '450,230.00 OMR',
      stage: 'Approved',
      excluded: 12, 
      status: 'Failed' 
    },
    { 
      id: '2', 
      name: 'Direct Sales Monthly', 
      plan: 'Monthly Sales Plan',
      executionTime: '01:45:12',
      cycleStart: 'Nov 01, 2024',
      cycleEnd: 'Nov 30, 2024',
      records: '8,420',
      totalAmount: '125,450.00 OMR',
      stage: 'Rejected',
      excluded: 45, 
      status: 'Partially Failed' 
    },
    { 
      id: '3', 
      name: 'Performance Bonus 2024', 
      plan: 'Bonus Structure A',
      executionTime: '04:20:00',
      cycleStart: 'Jan 01, 2024',
      cycleEnd: 'Dec 31, 2024',
      records: '2,150',
      totalAmount: '890,000.00 OMR',
      stage: 'Approved',
      excluded: 8, 
      status: 'Failed' 
    },
    { 
      id: '4', 
      name: 'Regional Manager Incentive', 
      plan: 'RM High Performance',
      executionTime: '00:55:30',
      cycleStart: 'Oct 01, 2024',
      cycleEnd: 'Dec 31, 2024',
      records: '450',
      totalAmount: '75,000.00 OMR',
      stage: 'Pending',
      excluded: 23, 
      status: 'Failed' 
    },
  ];

  const filteredCycles = cycles.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const getStageStyles = (stage: string) => {
    switch (stage) {
      case 'Approved':
        return 'bg-[#f0fdf4] text-[#22c55e] border-[#dcfce7] dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20';
      case 'Rejected':
        return 'bg-[#fef2f2] text-[#ef4444] border-[#fee2e2] dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20';
      case 'Pending':
        return 'bg-[#fffbeb] text-[#f59e0b] border-[#fef3c7] dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20';
      default:
        return 'bg-gray-50 text-gray-500 border-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700';
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-background overflow-hidden">
      {/* Controls Bar consistent with CycleTable */}
      <div className="p-2 flex items-center justify-between border-b border-border bg-background gap-4">
        <div className="flex items-center gap-2 flex-1">
          <div className="relative w-64 group">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-black transition-colors" />
            <input 
              type="text" 
              placeholder="Search cycle name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-9 py-1.5 border border-border rounded text-xs focus:outline-none focus:ring-1 focus:ring-black bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-xs font-medium text-muted-foreground bg-background border border-border rounded hover:bg-accent flex items-center gap-1 transition-colors">
            <Filter size={14} />
            Filters
          </button>
        </div>
      </div>

      {/* Table consistent with CycleTable design */}
      <div className="flex-1 overflow-auto">
        <table className="w-full border-collapse text-[11px] min-w-[1200px]">
          <thead className="sticky top-0 bg-[#f4f4f5] dark:bg-zinc-900/40 z-10 shadow-[0_1px_0_0_rgba(0,0,0,0.05)]">
            <tr className="text-left text-muted-foreground font-normal">
              <th className="p-3 font-semibold">Cycle Name</th>
              <th className="p-3 font-semibold">Cycle Plan</th>
              <th className="p-3 font-semibold text-center">Cycle Stage</th>
              <th className="p-3 font-semibold">Execution Time</th>
              <th className="p-3 font-semibold">Cycle Start</th>
              <th className="p-3 font-semibold">Cycle End</th>
              <th className="p-3 font-semibold text-right">Total Amount</th>
              <th className="p-3 font-semibold text-center">Excluded Count</th>
              <th className="p-3 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredCycles.map((cycle) => (
              <tr 
                key={cycle.id} 
                className="hover:bg-zinc-100/20 dark:hover:bg-zinc-900/5 transition-colors group cursor-pointer"
                onClick={() => onRowClick?.(cycle)}
              >
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-zinc-100 dark:bg-black/10 flex items-center justify-center text-black dark:text-zinc-500 border border-zinc-100 dark:border-black/20">
                      <Calendar size={16} />
                    </div>
                    <span className="text-black dark:text-zinc-500 font-medium truncate max-w-[200px]" title={cycle.name}>
                      {cycle.name}
                    </span>
                  </div>
                </td>
                <td className="p-3 text-muted-foreground/80 font-medium">{cycle.plan}</td>
                <td className="p-3">
                  <div className="flex justify-center">
                    <span className={clsx(
                      "inline-flex items-center px-6 py-1 text-[11px] font-medium rounded-full border transition-all",
                      getStageStyles(cycle.stage)
                    )}>
                      {cycle.stage}
                    </span>
                  </div>
                </td>
                <td className="p-3 text-muted-foreground/60 font-mono text-[10px]">{cycle.executionTime}</td>
                <td className="p-3 text-muted-foreground/80">{cycle.cycleStart}</td>
                <td className="p-3 text-muted-foreground/80">{cycle.cycleEnd}</td>
                <td className="p-3 text-right">
                  <span className="text-[12px] font-bold text-gray-700 dark:text-gray-200">
                    {cycle.totalAmount}
                  </span>
                </td>
                <td className="p-3 text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-[10px] font-bold rounded-full border border-red-100 dark:border-red-900/30">
                    {cycle.excluded} Members
                  </span>
                </td>
                <td className="p-3 text-right">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsRerunOpen(true);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black hover:bg-zinc-800 text-white text-[10px] font-bold rounded transition-all active:scale-95 shadow-sm whitespace-nowrap"
                  >
                    <RotateCcw size={12} />
                    Rerun Excluded
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isRerunOpen && (
        <RerunModal isOpen={isRerunOpen} onClose={() => setIsRerunOpen(false)} />
      )}
    </div>
  );
}