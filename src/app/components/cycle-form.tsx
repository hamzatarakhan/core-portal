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
  Link as LinkIcon
} from 'lucide-react';
import { DomainFilter } from './domain-filter';

interface CycleFormProps {
  plan?: any;
  onBack: () => void;
  onSave: (data: any) => void;
}

export function CycleForm({ plan, onBack, onSave }: CycleFormProps) {
  const [formData, setFormData] = useState({
    name: plan?.name || '',
    isActive: plan?.isActive || false,
    externalCalculation: false,
    description: 'Summary text , Summary text , Summary text',
    type: plan?.type || 'Scheduled',
    frequency: plan?.frequency || '',
    day: plan?.day || '',
    publishDate: plan?.publishDate || '',
    actionId: ''
  });

  const [actions, setActions] = useState([
    { id: '1', name: 'Standard Calculation' },
    { id: '2', name: 'CRM Sync' }
  ]);

  const [isActionModalOpen, setIsActionModalOpen] = useState(false);
  const [newActionData, setNewActionData] = useState({
    name: '',
    model: '',
    domain: ''
  });

  const [linkedPlans, setLinkedPlans] = useState<any[]>([]);
  const [selectedRowActions, setSelectedRowActions] = useState<Record<string, string[]>>({});

  const handleEditAction = (actionId: string) => {
    const action = actions.find(a => a.id === actionId);
    if (action) {
      setNewActionData({
        name: action.name,
        model: 'Commission',
        domain: ''
      });
      setIsActionModalOpen(true);
    }
  };

  const handleAddActionToRow = (rowId: string, actionId: string) => {
    if (!actionId) return;
    setSelectedRowActions(prev => {
      const current = prev[rowId] || [];
      if (current.includes(actionId)) return prev;
      return { ...prev, [rowId]: [...current, actionId] };
    });
  };

  const handleRemoveActionFromRow = (rowId: string, actionId: string) => {
    setSelectedRowActions(prev => ({
      ...prev,
      [rowId]: (prev[rowId] || []).filter(id => id !== actionId)
    }));
  };

  const handleToggle = (field: string) => {
    setFormData(prev => ({ ...prev, [field]: !prev[field as keyof typeof prev] }));
  };

  return (
    <div className="flex flex-col h-full bg-[#f8faff] dark:bg-slate-950 overflow-hidden">
      {/* Top Header - Breadcrumbs & Actions */}
      <div className="flex flex-col shrink-0">
        {/* Top Header */}
        <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 relative shrink-0 w-full min-h-[72px] flex items-center">
          <div className="flex flex-row items-center justify-between px-[24px] w-full">
            {/* Breadcrumb */}
            <div className="flex items-center gap-[4px] h-[41px]">
              <div className="flex items-center gap-[4px]">
                <span className="text-[14px] font-medium text-[#000b25]/64 dark:text-blue-100/60 font-['Roboto']">Commission Management</span>
                <ChevronRight size={12} className="text-[#000b25]/57" />
              </div>
              <div className="flex items-center gap-[4px]">
                <span className="text-[14px] font-medium text-[#000b25]/64 dark:text-blue-100/60 font-['Roboto']">Cycle Plans</span>
                <ChevronRight size={12} className="text-[#000b25]/57" />
              </div>
              <span className="text-[14px] font-medium text-[#000b25] dark:text-blue-100 font-['Roboto']">
                {plan ? 'Edit Cycle' : 'Create Cycle'}
              </span>
            </div>

            {/* User card / Icons */}
            <div className="flex items-center gap-[8px]">
              <div className="flex items-center gap-[4px]">
                <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 text-[#000b25]/57 transition-colors cursor-pointer active:scale-90">
                  <MessageSquare size={17} />
                </button>
                <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 text-[#000b25]/57 transition-colors cursor-pointer active:scale-90">
                  <Clock size={17} />
                </button>
              </div>
              
              <div className="flex items-center gap-[4px] pl-[8px]">
                <div className="p-[8px]">
                  <div className="w-[24px] h-[24px] rounded-full overflow-hidden bg-slate-100">
                    <img 
                      src="https://images.unsplash.com/photo-1659100941255-cb1bb7f9422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBoZWFkc2hvdCUyMGF2YXRhcnxlbnwxfHx8fDE3Njg3NDU0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                      alt="Mitchell Admin" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-[14px] font-normal text-[#000b25] dark:text-blue-100 font-['Roboto'] min-w-[94px]">Mitchell Admin</span>
                <div className="p-[4px]">
                  <ChevronDown size={14} className="text-[#000b25] opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 relative shrink-0 w-full h-[64px] flex items-center">
          <div className="flex items-center justify-end px-[24px] w-full">
            <div className="flex items-center gap-[8px]">
              <button 
                onClick={onBack}
                className="h-[40px] px-[16px] border border-[#0071cd] text-[#0071cd] rounded-[4px] text-[14px] font-medium hover:bg-blue-50 transition-colors active:scale-[0.98] cursor-pointer"
              >
                Discard
              </button>
              <button 
                onClick={() => onSave(formData)}
                className="h-[40px] px-[16px] bg-[#0071cd] text-white rounded-[4px] text-[14px] font-medium hover:bg-[#005fa3] transition-all shadow-sm active:scale-[0.98] flex items-center gap-[8px] cursor-pointer"
              >
                <div className="flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                </div>
                <span>Save</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
        {/* Cycle Information Section */}
        <div className="flex flex-col gap-[16px] w-full" data-name="Content-section">
          {/* Section Title */}
          <div className="flex items-center h-[32px]">
            <h2 className="text-[17px] font-medium text-[#000b25] dark:text-blue-100 font-['Roboto']">
              Cycle Information
            </h2>
          </div>

          {/* Section Body */}
          <div className="bg-white dark:bg-slate-900 border border-[#e1e1e1] dark:border-slate-800 rounded-[4px] p-[16px] space-y-[24px]">
            {/* Cycle Name Field */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] font-normal text-[rgba(0,11,37,0.57)] dark:text-slate-400 font-['Roboto']">
                <span>Cycle Name </span>
                <span className="text-[#ef4444]">*</span>
              </label>
              <div className="relative h-[38px] w-full">
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Cycle Name"
                  className="w-full h-full px-[12px] border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[16px] font-medium text-[#000b25] dark:text-white focus:border-[#0071cd] outline-none transition-all dark:bg-slate-800 font-['Roboto']"
                />
              </div>
            </div>

            {/* Toggles Row */}
            <div className="flex flex-col md:flex-row gap-[16px]">
              {/* Active Cycle Toggle */}
              <div className="bg-[#f8fafc] dark:bg-slate-800/50 flex-[1_0_0] h-[63px] border border-[#e2e8f0] dark:border-slate-700 rounded-[4px] flex items-center p-[12px] gap-[8px]">
                <div className="flex-1 flex flex-col gap-[8px]">
                  <span className="text-[14px] font-medium text-[#000b25] dark:text-white font-['Roboto']">Active Cycle</span>
                  <p className="text-[14px] font-normal text-[rgba(0,0,0,0.64)] dark:text-slate-400 font-['Roboto'] leading-[1.2] truncate">
                    Turn on to make this cycle the active one for commissions
                  </p>
                </div>
                <button 
                  onClick={() => handleToggle('isActive')}
                  className={`relative inline-flex h-[24px] w-[40px] items-center rounded-[160px] transition-colors focus:outline-none cursor-pointer ${formData.isActive ? 'bg-[#0071cd]' : 'bg-[#bebebe]'}`}
                >
                  <span className={`inline-block h-[16px] w-[16px] transform rounded-full bg-white transition-transform ${formData.isActive ? 'translate-x-[20px]' : 'translate-x-[4px]'}`} />
                </button>
              </div>

              {/* External Calculation Toggle */}
              <div className="bg-[#f8fafc] dark:bg-slate-800/50 flex-[1_0_0] h-[63px] border border-[#e2e8f0] dark:border-slate-700 rounded-[4px] flex items-center p-[12px] gap-[8px]">
                <div className="flex-1 flex flex-col gap-[8px]">
                  <span className="text-[14px] font-medium text-[#000b25] dark:text-white font-['Roboto']">External Calculation</span>
                  <p className="text-[14px] font-normal text-[rgba(0,0,0,0.64)] dark:text-slate-400 font-['Roboto'] leading-[1.2] truncate">
                    Commission for this cycle will be calculated using external Airflow.
                  </p>
                </div>
                <button 
                  onClick={() => handleToggle('externalCalculation')}
                  className={`relative inline-flex h-[24px] w-[40px] items-center rounded-[160px] transition-colors focus:outline-none cursor-pointer ${formData.externalCalculation ? 'bg-[#0071cd]' : 'bg-[#bebebe]'}`}
                >
                  <span className={`inline-block h-[16px] w-[16px] transform rounded-full bg-white transition-transform ${formData.externalCalculation ? 'translate-x-[20px]' : 'translate-x-[4px]'}`} />
                </button>
              </div>
            </div>

            {/* Description Field */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] font-normal text-[rgba(0,11,37,0.57)] dark:text-slate-400 font-['Roboto']">
                Description
              </label>
              <div className="relative h-[80px] w-full">
                <textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full h-full p-[12px] border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[16px] font-medium text-[#000b25] dark:text-white focus:border-[#0071cd] outline-none transition-all dark:bg-slate-800 resize-none font-['Roboto']"
                />
                {/* Resize handle icon mock */}
                <div className="absolute bottom-[2px] right-[2px] pointer-events-none opacity-40">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1">
                    <line x1="10" y1="0" x2="0" y2="10" />
                    <line x1="10" y1="5" x2="5" y2="10" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cycle Schedule */}
        <div className="flex flex-col gap-[16px] w-full" data-name="Cycle-Schedule">
          <div className="flex items-center h-[32px]">
            <h2 className="text-[17px] font-medium text-[#000b25] dark:text-blue-100 font-['Roboto']">
              Cycle Schedule
            </h2>
          </div>
          
          <div className="bg-white dark:bg-slate-900 border border-[#e1e1e1] dark:border-slate-800 rounded-[4px] p-[24px] space-y-[32px]">
            {/* Schedule Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[24px] gap-y-[24px] w-full">
              {/* Cycle Type Field */}
              <div className="flex flex-col gap-[12px] md:col-span-2">
                <p className="text-[14px] font-normal text-[rgba(0,11,37,0.57)] dark:text-slate-400 font-['Roboto']">
                  <span className="leading-[1.2]">Cycle Type </span>
                  <span className="leading-[1.2] text-[#ef4444]">*</span>
                </p>
                
                <div className="flex flex-col md:flex-row gap-[16px] w-full">
                  {/* Scheduled Card */}
                  <div 
                    onClick={() => setFormData({...formData, type: 'Scheduled'})}
                    className={`flex-1 relative rounded-[4px] cursor-pointer transition-all duration-200 border ${
                      (formData.type === 'Scheduled' || !formData.type || formData.type.includes('Scheduled')) 
                        ? 'bg-[#f3f9fd] dark:bg-blue-900/10 border-[#8dc1ec] dark:border-blue-500/50' 
                        : 'bg-white dark:bg-slate-900 border-[#e1e1e1] dark:border-slate-800 hover:border-[#8dc1ec] dark:hover:border-blue-500/30'
                    }`}
                  >
                    <div className="p-[16px] flex items-start gap-[12px]">
                      <div className="mt-[2px] text-[#4b79a1] dark:text-blue-300">
                        <Calendar size={18} strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 flex flex-col gap-[4px]">
                        <p className="text-[14px] font-medium text-[#000b25] dark:text-white font-['Roboto']">
                          Scheduled
                        </p>
                        <p className="text-[13px] text-[rgba(0,11,37,0.64)] dark:text-slate-400 font-['Roboto'] leading-[1.3]">
                          Set up recurring cycles for automated commission runs at fixed intervals.
                        </p>
                      </div>
                      <div className="shrink-0 flex items-center justify-center size-[20px]">
                        <div className={`size-[16px] rounded-full border-2 transition-all flex items-center justify-center ${
                          (formData.type === 'Scheduled' || !formData.type || formData.type.includes('Scheduled')) ? 'border-[#0071cd]' : 'border-[#e1e1e1] dark:border-slate-700'
                        }`}>
                          {(formData.type === 'Scheduled' || !formData.type || formData.type.includes('Scheduled')) && (
                            <div className="size-[8px] bg-[#0071cd] rounded-full" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* On Demand Card */}
                  <div 
                    onClick={() => setFormData({...formData, type: 'On Demand'})}
                    className={`flex-1 relative rounded-[4px] cursor-pointer transition-all duration-200 border ${
                      formData.type === 'On Demand' 
                        ? 'bg-[#f3f9fd] dark:bg-blue-900/10 border-[#8dc1ec] dark:border-blue-500/50' 
                        : 'bg-white dark:bg-slate-900 border-[#e1e1e1] dark:border-slate-800 hover:border-[#8dc1ec] dark:hover:border-blue-500/30'
                    }`}
                  >
                    <div className="p-[16px] flex items-start gap-[12px]">
                      <div className="mt-[2px] text-[#4b79a1] dark:text-blue-300">
                        <Zap size={18} strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 flex flex-col gap-[4px]">
                        <p className="text-[14px] font-medium text-[#000b25] dark:text-white font-['Roboto']">
                          On Demand
                        </p>
                        <p className="text-[13px] text-[rgba(0,11,37,0.64)] dark:text-slate-400 font-['Roboto'] leading-[1.4]">
                          This cycle will be executed based on the demand actions defined in the linked plans.
                        </p>
                      </div>
                      <div className="shrink-0 flex items-center justify-center size-[20px]">
                        <div className={`size-[16px] rounded-full border-2 transition-all flex items-center justify-center ${
                          formData.type === 'On Demand' ? 'border-[#0071cd]' : 'border-[#e1e1e1] dark:border-slate-700'
                        }`}>
                          {formData.type === 'On Demand' && (
                            <div className="size-[8px] bg-[#0071cd] rounded-full" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {formData.type !== 'On Demand' && (
                <div className="md:col-span-2 flex flex-col gap-[20px]">
                  <div className="bg-[#f3f9fd] dark:bg-blue-900/10 border-l-[3px] border-[#8dc1ec] flex items-center h-[36px] px-[12px] -mx-[24px]">
                    <h3 className="text-[14px] font-medium text-[#000b25] dark:text-blue-100 font-['Roboto'] opacity-70">
                      Schedule Configuration
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                    {/* Frequency Field */}
                    <div className="flex flex-col gap-[8px]">
                      <p className="text-[14px] font-normal text-[rgba(0,11,37,0.57)] dark:text-slate-400 font-['Roboto']">
                        <span className="leading-[1.2]">Frequency </span>
                        <span className="leading-[1.2] text-[#ef4444]">*</span>
                      </p>
                      <div className="relative h-[38px] w-full">
                        <select 
                          value={formData.frequency}
                          onChange={(e) => setFormData({...formData, frequency: e.target.value})}
                          className="w-full h-full px-[12px] border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[16px] font-medium text-[#000b25] dark:text-white focus:border-[#0071cd] outline-none appearance-none bg-white dark:bg-slate-800 font-['Roboto'] cursor-pointer"
                        >
                          <option value="">Select Frequency</option>
                          <option>Monthly</option>
                          <option>Quarterly</option>
                          <option>Yearly</option>
                        </select>
                        <ChevronDown size={18} className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#000b25] dark:text-white pointer-events-none" />
                      </div>
                    </div>

                    {/* Cycle Day Field */}
                    <div className="flex flex-col gap-[8px]">
                      <p className="text-[14px] font-normal text-[rgba(0,11,37,0.57)] dark:text-slate-400 font-['Roboto']">
                        <span className="leading-[1.2]">Cycle Day </span>
                        <span className="leading-[1.2] text-[#ef4444]">*</span>
                      </p>
                      <div className="relative h-[38px] w-full">
                        <input 
                          type="number" 
                          value={formData.day}
                          onChange={(e) => setFormData({...formData, day: e.target.value})}
                          placeholder="Enter the cycle day"
                          className="w-full h-full px-[12px] border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[16px] font-medium text-[#000b25] dark:text-white focus:border-[#0071cd] outline-none transition-all dark:bg-slate-800 font-['Roboto']"
                        />
                      </div>
                    </div>

                    {/* Publish Date Field */}
                    <div className="flex flex-col gap-[8px]">
                      <p className="text-[14px] font-normal text-[rgba(0,11,37,0.57)] dark:text-slate-400 font-['Roboto']">
                        <span className="leading-[1.2]">Publish Date </span>
                        <span className="leading-[1.2] text-[#ef4444]">*</span>
                      </p>
                      <div className="relative h-[38px] w-full">
                        <input 
                          type="text" 
                          value={formData.publishDate}
                          onChange={(e) => setFormData({...formData, publishDate: e.target.value})}
                          placeholder="2024/11/15"
                          className="w-full h-full px-[12px] border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[16px] font-medium text-[#000b25] dark:text-white focus:border-[#0071cd] outline-none transition-all dark:bg-slate-800 font-['Roboto']"
                        />
                        <Calendar size={18} className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#000b25] dark:text-white pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sub-section: Action Configuration */}
            {(formData.type === 'On Demand' && !formData.type?.includes('Scheduled')) && (
              <div className="flex flex-col gap-[20px]">
                <div className="bg-[#f3f9fd] dark:bg-blue-900/10 border-l-[3px] border-[#8dc1ec] p-[16px] flex items-start gap-[12px] animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="mt-[2px] text-[#0071cd] dark:text-blue-400">
                    <Info size={16} strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <p className="text-[14px] font-medium text-[#000b25] dark:text-blue-100 font-['Roboto']">
                      On-Demand Configuration
                    </p>
                    <p className="text-[13px] text-[#000b25] dark:text-slate-400 font-['Roboto'] leading-[1.4] opacity-80">
                      Define the trigger actions for each linked plan below to enable manual execution for this cycle.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>


        {/* Linked Plans Section */}
        <div className="flex flex-col gap-[16px] w-full pb-12 p-[0px]" data-name="Linked Plans Section">
          {/* Section Header */}
          <div className="flex items-center justify-between h-[40px]">
            <h2 className="text-[17px] font-medium text-[#000b25] dark:text-blue-100 font-['Roboto']">
              Linked Plans
            </h2>
            <button className="bg-[#0071cd] flex gap-[8px] h-[40px] items-center justify-center px-[16px] rounded-[4px] text-[14px] text-white font-medium hover:bg-[#005fa3] transition-all cursor-pointer active:scale-[0.98]">
              <Plus size={16} strokeWidth={3} />
              <span>Add Plans</span>
            </button>
          </div>



          {/* Section Body */}
          <div className="bg-white dark:bg-slate-900 border border-[#e1e1e1] dark:border-slate-800 rounded-[4px] p-[16px]">
            {/* Table Container */}
            <div className="w-full overflow-x-auto custom-scrollbar border border-[#e1e1e1] dark:border-slate-800 rounded-[4px]">
              <table className="w-full border-collapse text-[12px] font-['Roboto'] min-w-[1000px]">
                <thead>
                  <tr className="bg-[#e6f4ff] dark:bg-blue-900/20 text-left border-b border-[#e1e1e1] dark:border-slate-800">
                    <th className="w-[40px] px-[8px]"></th>
                    <th className="px-[12px] py-[10px] font-medium text-[#000b25] dark:text-blue-100 min-w-[140px]">Name</th>
                    <th className="px-[12px] py-[10px] font-medium text-[#000b25] dark:text-blue-100 min-w-[180px]">Master Commission Plan</th>
                    <th className="px-[12px] py-[10px] font-medium text-[#000b25] dark:text-blue-100 whitespace-nowrap">Valid From</th>
                    <th className="px-[12px] py-[10px] font-medium text-[#000b25] dark:text-blue-100 whitespace-nowrap">Valid To</th>
                    <th className="px-[12px] py-[10px] font-medium text-[#000b25] dark:text-blue-100 text-right">Weightage</th>
                    <th className="px-[12px] py-[10px] font-medium text-[#000b25] dark:text-blue-100 whitespace-nowrap">Staged Pay...</th>
                    <th className="px-[12px] py-[10px] font-medium text-[#000b25] dark:text-blue-100 text-right whitespace-nowrap">Versio...</th>
                    {formData.type === 'On Demand' && (
                      <th className="px-[12px] py-[10px] font-medium text-[#000b25] dark:text-blue-100 min-w-[200px]">Trigger Action</th>
                    )}
                    <th className="px-[12px] py-[10px] font-medium text-[#000b25] dark:text-blue-100">Active</th>
                    <th className="px-[12px] py-[10px] w-[120px]"></th>
                    <th className="px-[12px] py-[10px] w-[40px]"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e1e1e1] dark:divide-slate-800">
                  {/* Row 1 */}
                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group h-[44px]">
                    <td className="px-[8px] text-center">
                      <div className="flex flex-col gap-[2px] items-center text-[#000b25] opacity-20 group-hover:opacity-40 cursor-grab">
                        <div className="flex gap-[2px]"><div className="size-[2px] rounded-full bg-current"></div><div className="size-[2px] rounded-full bg-current"></div></div>
                        <div className="flex gap-[2px]"><div className="size-[2px] rounded-full bg-current"></div><div className="size-[2px] rounded-full bg-current"></div></div>
                        <div className="flex gap-[2px]"><div className="size-[2px] rounded-full bg-current"></div><div className="size-[2px] rounded-full bg-current"></div></div>
                      </div>
                    </td>
                    <td className="px-[12px] py-[8px] text-[#000b25] dark:text-blue-100 font-medium">KAM SP</td>
                    <td className="px-[12px] py-[8px] text-[#000b25]/70 dark:text-slate-400">KAM SP</td>
                    <td className="px-[12px] py-[8px] text-[#000b25]/70 dark:text-slate-400 whitespace-nowrap text-center">01/01/2025</td>
                    <td className="px-[12px] py-[8px] text-[#000b25]/70 dark:text-slate-400 whitespace-nowrap text-center">01/01/2040</td>
                    <td className="px-[12px] py-[8px] text-[#000b25] dark:text-blue-100 text-right font-medium">30.00</td>
                    <td className="px-[12px] py-[8px] text-center">
                      <div className="size-[14px] border border-[#d2d2d2] dark:border-slate-700 rounded-[2px] mx-auto"></div>
                    </td>
                    <td className="px-[12px] py-[8px] text-[#000b25]/70 dark:text-slate-400 text-right">10</td>
                    {formData.type === 'On Demand' && (
                      <td className="px-[12px] py-[8px]">
                        <div className="flex flex-col gap-[6px]">
                          <div className="flex items-center gap-[4px]">
                            <div className="relative h-[24px] flex-1">
                              <select 
                                className="w-full h-full pl-[8px] pr-[20px] border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[10px] font-medium text-[#000b25] dark:text-white focus:border-[#0071cd] outline-none appearance-none bg-white dark:bg-slate-800 font-['Roboto'] cursor-pointer"
                                value={selectedRowActions['row1']?.[0] || ''}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  setSelectedRowActions(prev => ({ ...prev, 'row1': val ? [val] : [] }));
                                }}
                              >
                                <option value="">Select Action</option>
                                {actions.map(a => (
                                  <option key={a.id} value={a.id}>{a.name}</option>
                                ))}
                              </select>
                              <ChevronDown size={12} className="absolute right-[4px] top-1/2 -translate-y-1/2 text-[#000b25] dark:text-white pointer-events-none opacity-50" />
                            </div>
                            
                            {selectedRowActions['row1']?.[0] && (
                              <button 
                                onClick={() => handleEditAction(selectedRowActions['row1'][0])}
                                className="size-[24px] flex items-center justify-center border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[#0071cd] hover:bg-blue-50 transition-all shrink-0 cursor-pointer active:scale-90"
                                title="Edit action"
                              >
                                <Edit2 size={10} />
                              </button>
                            )}

                            <button 
                              onClick={() => {
                                setNewActionData({ name: '', model: '', domain: '' });
                                setIsActionModalOpen(true);
                              }}
                              className="size-[24px] flex items-center justify-center bg-[#0071cd] text-white rounded-[4px] hover:bg-[#005fa3] transition-all shrink-0 cursor-pointer active:scale-90"
                              title="Create new action"
                            >
                              <Plus size={12} strokeWidth={3} />
                            </button>
                          </div>
                        </div>
                      </td>
                    )}
                    <td className="px-[12px] py-[8px]">
                      <div className="relative inline-flex h-[18px] w-[32px] items-center rounded-full bg-[#0071cd] cursor-pointer">
                        <span className="inline-block h-[12px] w-[12px] transform rounded-full bg-white translate-x-[17px] transition-transform"></span>
                      </div>
                    </td>
                    <td className="px-[12px] py-[8px]">
                      <button className="flex items-center gap-[6px] px-[8px] h-[28px] border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[#0071cd] dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all cursor-pointer">
                        <div className="size-[14px] flex items-center justify-center">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-full"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </div>
                        <span className="text-[11px] font-medium whitespace-nowrap">Open Record</span>
                      </button>
                    </td>
                    <td className="px-[12px] py-[8px]">
                      <button className="text-[#ef4444] opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                        <X size={16} strokeWidth={2.5} />
                      </button>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group h-[44px]">
                    <td className="px-[8px] text-center">
                      <div className="flex flex-col gap-[2px] items-center text-[#000b25] opacity-20 group-hover:opacity-40 cursor-grab">
                        <div className="flex gap-[2px]"><div className="size-[2px] rounded-full bg-current"></div><div className="size-[2px] rounded-full bg-current"></div></div>
                        <div className="flex gap-[2px]"><div className="size-[2px] rounded-full bg-current"></div><div className="size-[2px] rounded-full bg-current"></div></div>
                        <div className="flex gap-[2px]"><div className="size-[2px] rounded-full bg-current"></div><div className="size-[2px] rounded-full bg-current"></div></div>
                      </div>
                    </td>
                    <td className="px-[12px] py-[8px] text-[#000b25] dark:text-blue-100 font-medium">KAM Revenue - test</td>
                    <td className="px-[12px] py-[8px] text-[#000b25]/70 dark:text-slate-400">KAM CS - test</td>
                    <td className="px-[12px] py-[8px] text-[#000b25]/70 dark:text-slate-400 whitespace-nowrap text-center"></td>
                    <td className="px-[12px] py-[8px] text-[#000b25]/70 dark:text-slate-400 whitespace-nowrap text-center"></td>
                    <td className="px-[12px] py-[8px] text-[#000b25] dark:text-blue-100 text-right font-medium">50.00</td>
                    <td className="px-[12px] py-[8px] text-center">
                      <div className="size-[14px] border border-[#d2d2d2] dark:border-slate-700 rounded-[2px] mx-auto"></div>
                    </td>
                    <td className="px-[12px] py-[8px] text-[#000b25]/70 dark:text-slate-400 text-right">1</td>
                    {formData.type === 'On Demand' && (
                      <td className="px-[12px] py-[8px]">
                        <div className="flex flex-col gap-[6px]">
                          <div className="flex items-center gap-[4px]">
                            <div className="relative h-[24px] flex-1">
                              <select 
                                className="w-full h-full pl-[8px] pr-[20px] border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[10px] font-medium text-[#000b25] dark:text-white focus:border-[#0071cd] outline-none appearance-none bg-white dark:bg-slate-800 font-['Roboto'] cursor-pointer"
                                value={selectedRowActions['row2']?.[0] || ''}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  setSelectedRowActions(prev => ({ ...prev, 'row2': val ? [val] : [] }));
                                }}
                              >
                                <option value="">Select Action</option>
                                {actions.map(a => (
                                  <option key={a.id} value={a.id}>{a.name}</option>
                                ))}
                              </select>
                              <ChevronDown size={12} className="absolute right-[4px] top-1/2 -translate-y-1/2 text-[#000b25] dark:text-white pointer-events-none opacity-50" />
                            </div>
                            
                            {selectedRowActions['row2']?.[0] && (
                              <button 
                                onClick={() => handleEditAction(selectedRowActions['row2'][0])}
                                className="size-[24px] flex items-center justify-center border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[#0071cd] hover:bg-blue-50 transition-all shrink-0 cursor-pointer active:scale-90"
                                title="Edit action"
                              >
                                <Edit2 size={10} />
                              </button>
                            )}

                            <button 
                              onClick={() => {
                                setNewActionData({ name: '', model: '', domain: '' });
                                setIsActionModalOpen(true);
                              }}
                              className="size-[24px] flex items-center justify-center bg-[#0071cd] text-white rounded-[4px] hover:bg-[#005fa3] transition-all shrink-0 cursor-pointer active:scale-90"
                              title="Create new action"
                            >
                              <Plus size={12} strokeWidth={3} />
                            </button>
                          </div>
                        </div>
                      </td>
                    )}
                    <td className="px-[12px] py-[8px]">
                      <div className="relative inline-flex h-[18px] w-[32px] items-center rounded-full bg-[#0071cd] cursor-pointer">
                        <span className="inline-block h-[12px] w-[12px] transform rounded-full bg-white translate-x-[17px] transition-transform"></span>
                      </div>
                    </td>
                    <td className="px-[12px] py-[8px]">
                      <button className="flex items-center gap-[6px] px-[8px] h-[28px] border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[#0071cd] dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all cursor-pointer">
                        <div className="size-[14px] flex items-center justify-center">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-full"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </div>
                        <span className="text-[11px] font-medium whitespace-nowrap">Open Record</span>
                      </button>
                    </td>
                    <td className="px-[12px] py-[8px]">
                      <button className="text-[#ef4444] opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                        <X size={16} strokeWidth={2.5} />
                      </button>
                    </td>
                  </tr>

                  {/* Add line action */}
                  <tr className="bg-white dark:bg-slate-900">
                    <td colSpan={formData.type === 'On Demand' ? 12 : 11} className="px-[12px] py-[10px]">
                      <button className="text-[#0071cd] dark:text-blue-400 text-[12px] font-medium hover:underline cursor-pointer flex items-center gap-[4px]">
                        <span>Add a line</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Create New Action Modal */}
      {isActionModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
          <div className="bg-white dark:bg-slate-900 w-[95%] max-w-[900px] rounded-[8px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="px-[24px] py-[16px] border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h3 className="text-[18px] font-semibold text-[#000b25] dark:text-white font-['Roboto']">
                {newActionData.name ? 'Edit Action' : 'Create New Action'}
              </h3>
              <button 
                onClick={() => setIsActionModalOpen(false)}
                className="text-[#000b25]/40 hover:text-[#000b25] dark:text-white/40 dark:hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-[24px] space-y-[24px] max-h-[80vh] overflow-y-auto custom-scrollbar">
              {/* Horizontal Field Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
                {/* Action Name */}
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] font-medium text-[#000b25]/60 dark:text-slate-400 font-['Roboto']">
                    Action Name <span className="text-[#ef4444]">*</span>
                  </label>
                  <input 
                    type="text" 
                    value={newActionData.name}
                    onChange={(e) => setNewActionData({...newActionData, name: e.target.value})}
                    placeholder="Enter action name"
                    className="w-full h-[40px] px-[12px] border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[15px] focus:border-[#0071cd] outline-none dark:bg-slate-800 dark:text-white font-['Roboto']"
                  />
                </div>

                {/* Model Dropdown */}
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] font-medium text-[#000b25]/60 dark:text-slate-400 font-['Roboto']">
                    Model <span className="text-[#ef4444]">*</span>
                  </label>
                  <div className="relative h-[40px] w-full">
                    <select 
                      value={newActionData.model}
                      onChange={(e) => setNewActionData({...newActionData, model: e.target.value})}
                      className="w-full h-full px-[12px] border border-[#d2d2d2] dark:border-slate-700 rounded-[4px] text-[15px] focus:border-[#0071cd] outline-none appearance-none bg-white dark:bg-slate-800 dark:text-white font-['Roboto'] cursor-pointer"
                    >
                      <option value="">Select a model</option>
                      <option value="Commission">Commission</option>
                      <option value="Bonus">Bonus</option>
                      <option value="Quota">Quota</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#000b25]/40 pointer-events-none" />
                  </div>
                </div>

                {/* Trigger (Disabled) */}
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[14px] font-medium text-[#000b25]/60 dark:text-slate-400 font-['Roboto']">
                    Trigger
                  </label>
                  <div className="h-[40px] px-[12px] border border-[#e2e8f0] dark:border-slate-800 bg-[#f8fafc] dark:bg-slate-800/50 rounded-[4px] flex items-center text-[#000b25]/30 dark:text-white/30 text-[15px] font-['Roboto'] cursor-not-allowed">
                    Automatic Trigger
                  </div>
                </div>
              </div>

              {/* Action Status Toggle */}
              <div className="bg-[#f8fafc] dark:bg-slate-800/50 border border-[#e2e8f0] dark:border-slate-700 rounded-[4px] p-[12px] flex items-center justify-between gap-[16px] animate-in fade-in slide-in-from-top-1 duration-200">
                <div className="flex-1 flex flex-col gap-[4px]">
                  <span className="text-[14px] font-medium text-[#000b25] dark:text-white font-['Roboto']">Active Status</span>
                  <p className="text-[13px] font-normal text-[rgba(0,0,0,0.64)] dark:text-slate-400 font-['Roboto'] leading-[1.4]">
                    This action will be active/inactive based on the linked plan status. You can manually override the execution state here.
                  </p>
                </div>
                <button 
                  onClick={() => setNewActionData({...newActionData, isActive: !(newActionData as any).isActive})}
                  className={`relative inline-flex h-[24px] w-[40px] items-center rounded-full transition-colors shrink-0 cursor-pointer ${(newActionData as any).isActive ? 'bg-[#0071cd]' : 'bg-[#bebebe]'}`}
                >
                  <span className={`inline-block h-[16px] w-[16px] transform rounded-full bg-white transition-transform ${(newActionData as any).isActive ? 'translate-x-[20px]' : 'translate-x-[4px]'}`} />
                </button>
              </div>

              {/* Linked Plans Section */}
              <div className="flex flex-col gap-[12px] animate-in fade-in slide-in-from-top-1 duration-300">
                <div className="flex items-center gap-[8px]">
                  <LinkIcon size={16} className="text-[#0071cd]" />
                  <span className="text-[14px] font-medium text-[#000b25] dark:text-white font-['Roboto']">Active on Plans</span>
                </div>
                <div className="flex flex-wrap gap-[8px]">
                  {['Hunting - Base', 'VM CS - Enhanced', 'KAM CS'].map((plan) => (
                    <div 
                      key={plan}
                      className="h-[28px] px-[12px] bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-[4px] flex items-center gap-[6px] group hover:border-[#0071cd] transition-colors cursor-default"
                    >
                      <span className="text-[12px] font-medium text-[#0071cd] dark:text-blue-300 font-['Roboto']">{plan}</span>
                      <button className="text-[#0071cd] opacity-0 group-hover:opacity-100 hover:text-[#005fa3] transition-all cursor-pointer">
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                  {/* Link Plan button removed */}
                </div>
              </div>

              {/* Rules & Filters Builder */}
              <div className="pt-[16px] border-t border-slate-100 dark:border-slate-800">
                <DomainFilter />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-[24px] py-[16px] bg-[#f8fafc] dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-[12px]">
              <button 
                onClick={() => setIsActionModalOpen(false)}
                className="px-[20px] h-[40px] text-[#000b25]/60 dark:text-slate-400 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 rounded-[4px] transition-colors cursor-pointer"
              >
                Discard
              </button>
              <button 
                onClick={() => {
                  if (newActionData.name) {
                    const existingActionIndex = actions.findIndex(a => a.name === newActionData.name);
                    if (existingActionIndex > -1) {
                      const updatedActions = [...actions];
                      updatedActions[existingActionIndex] = { ...updatedActions[existingActionIndex], name: newActionData.name };
                      setActions(updatedActions);
                    } else {
                      const newId = (actions.length + 1).toString();
                      const newAction = { id: newId, name: newActionData.name };
                      setActions([...actions, newAction]);
                    }
                    setIsActionModalOpen(false);
                    setNewActionData({ name: '', model: '', domain: '' });
                  }
                }}
                className="px-[24px] h-[40px] bg-[#0071cd] text-white font-medium rounded-[4px] hover:bg-[#005fa3] transition-all active:scale-[0.98] cursor-pointer"
              >
                {newActionData.name ? 'Save Changes' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
