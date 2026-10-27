import React, { useState } from 'react';
import { 
  ChevronRight, 
  Plus, 
  Calendar, 
  Info, 
  MessageSquare, 
  Clock, 
  Globe, 
  ArrowLeft, 
  Trash2, 
  X, 
  Zap, 
  ChevronDown,
  Edit2,
  FileText,
  Target,
  BarChart3
} from 'lucide-react';
import { DomainFilter } from './domain-filter';

interface CommissionPlanFormProps {
  plan?: any;
  onBack: () => void;
  onSave: (data: any) => void;
}

export function CommissionPlanForm({ plan, onBack, onSave }: CommissionPlanFormProps) {
  const [formData, setFormData] = useState({
    name: plan?.name || '',
    code: plan?.code || 'CP-2025-001',
    masterPlan: plan?.masterPlan || 'Indirect',
    validFrom: plan?.validFrom || '01/01/2025',
    validTo: plan?.validTo || '',
    weightage: plan?.weightage || '100.00',
    stagedPayout: plan?.stagedPayout || false,
    isActive: plan?.active !== undefined ? plan.active : true,
    version: plan?.version || '1',
    description: 'Enterprise commission plan for strategic sales channels.',
    cycleId: '',
    triggerActionId: '',
    includeTax: true,
    detailedCalculation: true
  });

  const [cycles] = useState([
    { id: '1', name: 'Monthly Standard', type: 'Scheduled' },
    { id: '2', name: 'Quarterly Strategic', type: 'Scheduled' },
    { id: '3', name: 'Ad-hoc Tactical', type: 'On Demand' },
    { id: '4', name: 'Yearly Alignment', type: 'Scheduled' }
  ]);

  const [actions] = useState([
    { id: 'a1', name: 'CRM Status Change' },
    { id: 'a2', name: 'Manual Approval' },
    { id: 'a3', name: 'External API Trigger' }
  ]);

  const selectedCycle = cycles.find(c => c.id === formData.cycleId);
  const isOnDemand = selectedCycle?.type === 'On Demand';

  const handleToggle = (field: string) => {
    setFormData(prev => ({ ...prev, [field]: !prev[field as keyof typeof prev] }));
  };

  return (
    <div className="flex flex-col h-full bg-[#f4f4f5] dark:bg-slate-950 overflow-hidden">
      {/* Top Header - Breadcrumbs & Actions */}
      <div className="flex flex-col shrink-0">
        <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 relative shrink-0 w-full min-h-[72px] flex items-center">
          <div className="flex flex-row items-center justify-between px-[24px] w-full">
            <div className="flex items-center gap-[4px] h-[41px]">
              <div className="flex items-center gap-[4px]">
                <span className="text-[14px] font-medium text-[#000b25]/64 dark:text-zinc-100/60 font-['Roboto']">Commission Management</span>
                <ChevronRight size={12} className="text-[#000b25]/57" />
              </div>
              <div className="flex items-center gap-[4px]">
                <span className="text-[14px] font-medium text-[#000b25]/64 dark:text-zinc-100/60 font-['Roboto']">Commission Plans</span>
                <ChevronRight size={12} className="text-[#000b25]/57" />
              </div>
              <span className="text-[14px] font-medium text-[#000b25] dark:text-zinc-100 font-['Roboto'] truncate max-w-[200px]">
                {plan?.name || 'New Commission Plan'}
              </span>
            </div>

            <div className="flex items-center gap-[8px]">
              <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 text-[#000b25]/57 transition-colors cursor-pointer active:scale-90">
                <MessageSquare size={17} />
              </button>
              <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 text-[#000b25]/57 transition-colors cursor-pointer active:scale-90">
                <Clock size={17} />
              </button>
              <div className="flex items-center gap-[4px] pl-[8px]">
                <div className="p-[8px]">
                  <div className="w-[24px] h-[24px] rounded-full overflow-hidden bg-slate-100">
                    <img src="https://images.unsplash.com/photo-1659100941255-cb1bb7f9422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBoZWFkc2hvdCUyMGF2YXRhcnxlbnwxfHx8fDE3Njg3NDU0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                </div>
                <span className="text-[14px] font-normal text-[#000b25] dark:text-zinc-100 font-['Roboto']">Mitchell Admin</span>
                <ChevronDown size={14} className="text-[#000b25] opacity-60 ml-1" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 relative shrink-0 w-full h-[64px] flex items-center">
          <div className="flex items-center justify-end px-[24px] w-full gap-3">
             <div className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900/20 rounded-[4px] border border-zinc-100 dark:border-zinc-800 mr-auto">
               <span className="text-[12px] font-medium text-[#000000]">Draft Mode</span>
               <div className="size-1.5 bg-[#000000] rounded-full animate-pulse" />
             </div>
            <button 
              onClick={onBack}
              className="h-[40px] px-[16px] border border-[#000000] text-[#000000] rounded-[4px] text-[14px] font-medium hover:bg-zinc-100 transition-colors active:scale-[0.98] cursor-pointer"
            >
              Discard
            </button>
            <button 
              onClick={() => onSave(formData)}
              className="h-[40px] px-[16px] bg-[#000000] text-white rounded-[4px] text-[14px] font-medium hover:bg-[#262626] transition-all shadow-sm active:scale-[0.98] flex items-center gap-[8px] cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
        {/* General Information Section */}
        <div className="flex flex-col gap-[16px] w-full" data-name="Content-section">
          <div className="flex items-center h-[32px]">
            <h2 className="text-[17px] font-medium text-[#000b25] dark:text-zinc-100 font-['Roboto']">
              Plan Details
            </h2>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-[#e1e1e1] dark:border-slate-800 rounded-[4px] p-[16px] space-y-[16px]">
            {/* Row 1: Plan Name & Weight */}
            <div className="flex flex-col md:flex-row gap-[16px]">
              <div className="flex-1 flex flex-col gap-[8px]">
                <label className="text-[14px] font-normal text-[rgba(0,11,37,0.57)] dark:text-slate-400 font-['Roboto']">
                  Plan Name
                </label>
                <div className="relative h-[38px] w-full">
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter the plan name"
                    className="w-full h-full px-[12px] border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[16px] font-normal text-[#000b25] dark:text-white focus:border-[#000000] outline-none transition-all dark:bg-slate-800 font-['Roboto']"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-[8px]">
                <label className="text-[14px] font-normal text-[rgba(0,11,37,0.57)] dark:text-slate-400 font-['Roboto']">
                  Weight (%)
                </label>
                <div className="relative h-[38px] w-full">
                  <input 
                    type="text" 
                    value={formData.weightage}
                    onChange={(e) => setFormData({...formData, weightage: e.target.value})}
                    placeholder="Enter weight"
                    className="w-full h-full px-[12px] border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[16px] font-normal text-[#000b25] dark:text-white focus:border-[#000000] outline-none transition-all dark:bg-slate-800 font-['Roboto']"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Validity */}
            <div className="flex flex-col md:flex-row gap-[16px]">
              <div className="flex-1 flex flex-col gap-[8px]">
                <label className="text-[14px] font-normal text-[rgba(0,11,37,0.57)] dark:text-slate-400 font-['Roboto']">
                  Valid From
                </label>
                <div className="relative h-[38px] w-full">
                  <input 
                    type="text" 
                    value={formData.validFrom}
                    onChange={(e) => setFormData({...formData, validFrom: e.target.value})}
                    placeholder="Pick a date"
                    className="w-full h-full px-[12px] border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[16px] font-normal text-[#000b25] dark:text-white focus:border-[#000000] outline-none transition-all dark:bg-slate-800 font-['Roboto']"
                  />
                  <Calendar size={18} className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#000b25] dark:text-white pointer-events-none opacity-60" />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-[8px]">
                <label className="text-[14px] font-normal text-[rgba(0,11,37,0.57)] dark:text-slate-400 font-['Roboto']">
                  Valid To
                </label>
                <div className="relative h-[38px] w-full">
                  <input 
                    type="text" 
                    value={formData.validTo}
                    onChange={(e) => setFormData({...formData, validTo: e.target.value})}
                    placeholder="Pick a date"
                    className="w-full h-full px-[12px] border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[16px] font-normal text-[#000b25] dark:text-white focus:border-[#000000] outline-none transition-all dark:bg-slate-800 font-['Roboto']"
                  />
                  <Calendar size={18} className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#000b25] dark:text-white pointer-events-none opacity-60" />
                </div>
              </div>
            </div>

            {/* Row 3: Cycle Plan */}
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col md:flex-row gap-[16px]">
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label className="text-[14px] font-normal text-[rgba(0,11,37,0.57)] dark:text-slate-400 font-['Roboto']">
                    Cycle Plan
                  </label>
                  <div className="relative h-[38px] w-full">
                    <select 
                      value={formData.cycleId}
                      onChange={(e) => setFormData({...formData, cycleId: e.target.value})}
                      className="w-full h-full px-[12px] border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[16px] font-normal text-[#000b25] dark:text-white focus:border-[#000000] outline-none appearance-none bg-white dark:bg-slate-800 font-['Roboto'] cursor-pointer"
                    >
                      <option value="">Select cycle plans</option>
                      {cycles.map(cycle => (
                        <option key={cycle.id} value={cycle.id}>{cycle.name}</option>
                      ))}
                    </select>
                    <ChevronDown size={18} className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#000b25] dark:text-white pointer-events-none opacity-60" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-[8px]">
                  {isOnDemand && (
                    <div className="animate-in fade-in slide-in-from-top-1 duration-200">
                      <label className="text-[14px] font-normal text-[rgba(0,11,37,0.57)] dark:text-slate-400 font-['Roboto']">
                        Trigger Action
                      </label>
                      <div className="flex gap-[8px]">
                        <div className="relative h-[38px] flex-1">
                          <select 
                            value={formData.triggerActionId}
                            onChange={(e) => setFormData({...formData, triggerActionId: e.target.value})}
                            className="w-full h-full px-[12px] border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[16px] font-normal text-[#000b25] dark:text-white focus:border-[#000000] outline-none appearance-none bg-white dark:bg-slate-800 font-['Roboto'] cursor-pointer"
                          >
                            <option value="">Select action</option>
                            {actions.map(action => (
                              <option key={action.id} value={action.id}>{action.name}</option>
                            ))}
                          </select>
                          <ChevronDown size={18} className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#000b25] dark:text-white pointer-events-none opacity-60" />
                        </div>
                        <button className="h-[38px] w-[38px] flex items-center justify-center border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[#000000] hover:bg-zinc-100 transition-colors active:scale-90">
                          <Plus size={18} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* On Demand Hint Message */}
              {isOnDemand && (
                <div className="bg-[#f4f4f5] dark:bg-zinc-900/10 border-l-[3px] border-[#d4d4d8] p-[12px] flex items-start gap-[12px] animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="mt-[2px] text-[#000000] dark:text-zinc-500">
                    <Info size={16} strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="text-[14px] font-medium text-[#000b25] dark:text-zinc-100 font-['Roboto']">
                      On-Demand Cycle Detected
                    </p>
                    <p className="text-[13px] text-[#000b25] dark:text-slate-400 font-['Roboto'] leading-[1.4] opacity-80">
                      This cycle executes manually based on demand. Please select or create a trigger action to define when this commission plan should be processed.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Toggle Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              {/* Include Tax */}
              <div className="bg-[#f8fafc] dark:bg-slate-800/50 border border-[#e2e8f0] dark:border-slate-700 rounded-[4px] p-[12px] flex items-center justify-between gap-[8px]">
                <div className="flex-1 flex flex-col gap-[4px]">
                  <span className="text-[14px] font-medium text-[#000b25] dark:text-white font-['Roboto']">Include Tax</span>
                  <p className="text-[14px] font-normal text-[rgba(0,0,0,0.64)] dark:text-slate-400 font-['Roboto'] leading-[1.2]">
                    Commission in this plan will include 16% VAT.
                  </p>
                </div>
                <button className="relative inline-flex h-[24px] w-[40px] items-center rounded-full transition-colors bg-[#000000] shrink-0">
                  <span className="inline-block h-[16px] w-[16px] translate-x-[20px] transform rounded-full bg-white transition-transform" />
                </button>
              </div>

              {/* Activate Plan */}
              <div className="bg-[#f8fafc] dark:bg-slate-800/50 border border-[#e2e8f0] dark:border-slate-700 rounded-[4px] p-[12px] flex items-center justify-between gap-[8px]">
                <div className="flex-1 flex flex-col gap-[4px]">
                  <span className="text-[14px] font-medium text-[#000b25] dark:text-white font-['Roboto']">Activate Plan</span>
                  <p className="text-[14px] font-normal text-[rgba(0,0,0,0.64)] dark:text-slate-400 font-['Roboto'] leading-[1.2]">
                    Turn on to include this plan in commission calculations.
                  </p>
                </div>
                <button 
                  onClick={() => handleToggle('isActive')}
                  className={`relative inline-flex h-[24px] w-[40px] items-center rounded-full transition-colors shrink-0 ${formData.isActive ? 'bg-[#000000]' : 'bg-[#bebebe]'}`}
                >
                  <span className={`inline-block h-[16px] w-[16px] transform rounded-full bg-white transition-transform ${formData.isActive ? 'translate-x-[20px]' : 'translate-x-[4px]'}`} />
                </button>
              </div>

              {/* Staged Payouts */}
              <div className="bg-[#f8fafc] dark:bg-slate-800/50 border border-[#e2e8f0] dark:border-slate-700 rounded-[4px] p-[12px] flex items-center justify-between gap-[8px]">
                <div className="flex-1 flex flex-col gap-[4px]">
                  <span className="text-[14px] font-medium text-[#000b25] dark:text-white font-['Roboto']">Staged Payouts</span>
                  <p className="text-[14px] font-normal text-[rgba(0,0,0,0.64)] dark:text-slate-400 font-['Roboto'] leading-[1.2]">
                    Spread commission payouts across multiple stages
                  </p>
                </div>
                <button 
                  onClick={() => handleToggle('stagedPayout')}
                  className={`relative inline-flex h-[24px] w-[40px] items-center rounded-full transition-colors shrink-0 ${formData.stagedPayout ? 'bg-[#000000]' : 'bg-[#bebebe]'}`}
                >
                  <span className={`inline-block h-[16px] w-[16px] transform rounded-full bg-white transition-transform ${formData.stagedPayout ? 'translate-x-[20px]' : 'translate-x-[4px]'}`} />
                </button>
              </div>

              {/* Detailed Calculation */}
              <div className="bg-[#f8fafc] dark:bg-slate-800/50 border border-[#e2e8f0] dark:border-slate-700 rounded-[4px] p-[12px] flex items-center justify-between gap-[8px]">
                <div className="flex-1 flex flex-col gap-[4px]">
                  <span className="text-[14px] font-medium text-[#000b25] dark:text-white font-['Roboto']">Detailed Calculation</span>
                  <p className="text-[14px] font-normal text-[rgba(0,0,0,0.64)] dark:text-slate-400 font-['Roboto'] leading-[1.2]">
                    Commission will be calculated per row, in addition to the total.
                  </p>
                </div>
                <button className="relative inline-flex h-[24px] w-[40px] items-center rounded-full transition-colors bg-[#000000] shrink-0">
                  <span className="inline-block h-[16px] w-[16px] translate-x-[20px] transform rounded-full bg-white transition-transform" />
                </button>
              </div>
            </div>

            {/* Summary */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] font-normal text-[rgba(0,11,37,0.57)] dark:text-slate-400 font-['Roboto']">
                Summary
              </label>
              <div className="relative h-[80px] w-full">
                <textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Enter plan summary and description....."
                  className="w-full h-full p-[12px] border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[16px] font-normal text-[#000b25] dark:text-white focus:border-[#000000] outline-none transition-all dark:bg-slate-800 resize-none font-['Roboto']"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Linked Cycles Section */}
        <div className="flex flex-col gap-[16px] w-full pb-12">
          <div className="flex items-center justify-between h-[40px]">
            <h2 className="text-[17px] font-medium text-[#000b25] dark:text-zinc-100 font-['Roboto']">
              Linked Cycles
            </h2>
            <button className="bg-[#000000] flex gap-[8px] h-[40px] items-center justify-center px-[16px] rounded-[4px] text-[14px] text-white font-medium hover:bg-[#262626] transition-all cursor-pointer active:scale-[0.98]">
              <Plus size={16} strokeWidth={3} />
              <span>Add Cycles</span>
            </button>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-[#e1e1e1] dark:border-slate-800 rounded-[4px] overflow-hidden">
            <table className="w-full border-collapse text-[12px] font-['Roboto']">
              <thead>
                <tr className="bg-[#f4f4f5] dark:bg-zinc-900/20 text-left border-b border-[#e1e1e1] dark:border-slate-800">
                  <th className="px-[16px] py-[12px] font-medium text-[#000b25] dark:text-zinc-100">Name</th>
                  <th className="px-[16px] py-[12px] font-medium text-[#000b25] dark:text-zinc-100">Frequency</th>
                  <th className="px-[16px] py-[12px] font-medium text-[#000b25] dark:text-zinc-100">Day</th>
                  <th className="px-[16px] py-[12px] font-medium text-[#000b25] dark:text-zinc-100 text-center">Active</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e1e1e1] dark:divide-slate-800">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-[16px] py-[12px] text-[#000b25] dark:text-zinc-100 font-medium">Monthly Cycle</td>
                  <td className="px-[16px] py-[12px] text-[#000b25]/70 dark:text-slate-400">Monthly</td>
                  <td className="px-[16px] py-[12px] text-[#000b25]/70 dark:text-slate-400">1</td>
                  <td className="px-[16px] py-[12px]">
                    <div className="flex justify-center">
                      <div className="relative inline-flex h-[18px] w-[32px] items-center rounded-full bg-[#000000]">
                        <span className="inline-block h-[12px] w-[12px] translate-x-[17px] transform rounded-full bg-white transition-transform" />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
