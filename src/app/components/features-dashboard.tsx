import React from 'react';
import {
  Zap,
  Calendar,
  Filter,
  Map,
  Ticket,
  BarChart3,
  ShieldCheck,
  Globe,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Zap,
    title: 'Commission Engine',
    description: 'Enterprise-grade processing engine for high-volume commission calculations with precise accuracy.',
    color: 'bg-blue-50 text-blue-600',
    tag: 'Core'
  },
  {
    icon: Calendar,
    title: 'Cycle Planning',
    description: 'Schedule recurring calculation runs or execute manual on-demand cycles for any period.',
    color: 'bg-indigo-50 text-indigo-600',
    tag: 'Automation'
  },
  {
    icon: Filter,
    title: 'Dynamic Rules Builder',
    description: 'Advanced domain builder with nested logic and real-time record count previews.',
    color: 'bg-purple-50 text-purple-600',
    tag: 'Advanced'
  },
  {
    icon: Map,
    title: 'Territory Hierarchy',
    description: 'Visualize and manage sales territories and reporting structures in a tree-based interface.',
    color: 'bg-emerald-50 text-emerald-600',
    tag: 'Visual'
  },
  {
    icon: Ticket,
    title: 'E-Voucher System',
    description: 'Integrated digital voucher management, batch downloading, and distribution tracking.',
    color: 'bg-amber-50 text-amber-600',
    tag: 'Integrations'
  },
  {
    icon: BarChart3,
    title: 'KPI Reporting',
    description: 'Real-time performance metrics and historical calculation summaries with deep-dive analysis.',
    color: 'bg-rose-50 text-rose-600',
    tag: 'Insights'
  }
];

export function FeaturesDashboard() {
  return (
    <div className="flex-1 overflow-y-auto bg-[#f8faff] dark:bg-slate-950 p-[24px]">
      <div className="max-w-[1200px] mx-auto space-y-[32px]">

        {/* Welcome Section */}
        <div className="space-y-[8px]">
          <h1 className="text-[28px] font-bold text-[#000b25] dark:text-white font-['Roboto'] leading-tight">
            Welcome to Leading Point
          </h1>
          <p className="text-[16px] text-[#000b25]/60 dark:text-slate-400 max-w-[700px]">
            Your comprehensive enterprise commission management suite. Explore our core features below to get started with your commission planning and reporting.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 border border-[#e1e1e1] dark:border-slate-800 p-[24px] rounded-[12px] group hover:border-[#0071cd] dark:hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="flex flex-col h-full gap-[16px]">
                <div className="flex items-center justify-between">
                  <div className={`p-[10px] rounded-[8px] ${feature.color}`}>
                    <feature.icon size={24} strokeWidth={2.5} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {feature.tag}
                  </span>
                </div>
                <div className="space-y-[8px]">
                  <h3 className="text-[18px] font-bold text-[#000b25] dark:text-white group-hover:text-[#0071cd] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[14px] text-[#000b25]/60 dark:text-slate-400 leading-[1.5]">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-auto pt-[16px] flex items-center gap-[6px] text-[#0071cd] dark:text-blue-400 font-medium text-[14px] cursor-pointer active:scale-95 transition-transform origin-left">
                  <span>Explore Module</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions / Getting Started */}
        <div className="bg-[#0071cd] rounded-[16px] p-[32px] text-white overflow-hidden relative group">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-[24px]">
            <div className="space-y-[12px]">
              <h2 className="text-[24px] font-bold">Ready to process your first cycle?</h2>
              <p className="text-blue-100 max-w-[500px]">
                Start by creating a new cycle plan or check the existing runs for real-time status updates on your commissions.
              </p>
              <div className="flex flex-wrap gap-[12px] pt-[8px]">
                <button className="h-[44px] px-[24px] bg-white text-[#0071cd] rounded-[8px] font-bold text-[15px] hover:bg-blue-50 transition-colors active:scale-95 shadow-lg shadow-black/10">
                  Create Cycle Plan
                </button>
                <button className="h-[44px] px-[24px] bg-blue-600/30 border border-blue-400/30 text-white rounded-[8px] font-bold text-[15px] hover:bg-blue-600/50 transition-colors active:scale-95">
                  View Latest Reports
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative shrink-0">
              <div className="size-[160px] bg-white/10 rounded-full blur-[40px] absolute inset-0 -translate-x-1/2 -translate-y-1/2" />
              <BarChart3 size={120} className="text-white/20 -rotate-12 group-hover:rotate-0 transition-transform duration-700" strokeWidth={1} />
            </div>
          </div>
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-black/10 rounded-full blur-[60px]" />
        </div>

        {/* System Status */}
        <div className="flex flex-wrap gap-[24px] justify-between items-center py-[16px] border-t border-[#e1e1e1] dark:border-slate-800">
          <div className="flex items-center gap-[12px]">
            <div className="size-[8px] bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[13px] font-medium text-[#000b25]/60 dark:text-slate-400">
              System Status: <span className="text-emerald-500">All services operational</span>
            </span>
          </div>
          <div className="flex items-center gap-[24px]">
            <div className="flex items-center gap-[8px] text-[13px] text-[#000b25]/40 dark:text-slate-500">
              <Globe size={14} />
              <span>Version 2.4.0 (Stable)</span>
            </div>
            <div className="flex items-center gap-[8px] text-[13px] text-[#000b25]/40 dark:text-slate-500">
              <ShieldCheck size={14} />
              <span>Enterprise Secure</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
