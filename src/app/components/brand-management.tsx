import React, { useState, useEffect } from 'react';
import { Users, Trash2, Edit2, Eye } from 'lucide-react';
import { UsersHierarchyModal } from './users-hierarchy-modal';

interface Process {
  id: string;
  type: string;
  moduleName: string;
  isChecked: boolean;
}

interface BrandDetailsProps {
  brandId: string | null;
  onBack: () => void;
}

export function BrandDetails({ brandId, onBack }: BrandDetailsProps) {
  const [brandName, setBrandName] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#0072CE');
  const [secondaryColor, setSecondaryColor] = useState('#0072CE');
  const [isActive, setIsActive] = useState(true);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [showUsersModal, setShowUsersModal] = useState(false);
  const [processes, setProcesses] = useState<Process[]>([
    { id: '1', type: 'Prepaid', moduleName: 'Module Name', isChecked: false },
    { id: '2', type: 'Postpaid', moduleName: 'Module Name', isChecked: true },
    { id: '3', type: 'Inventory', moduleName: 'Module Name', isChecked: false },
    { id: '4', type: 'SIM Replacement', moduleName: 'Module Name', isChecked: false },
    { id: '5', type: 'Purchase Order', moduleName: 'Module Name', isChecked: false },
    { id: '6', type: 'Sales Order', moduleName: 'Module Name', isChecked: false },
    { id: '7', type: 'Visit Management', moduleName: 'Module Name', isChecked: false },
  ]);

  // Load brand data when brandId changes
  useEffect(() => {
    if (brandId && brandId !== 'new') {
      // Load existing brand data (replace with actual API call)
      // For now, just set some default data based on brandId
      setBrandName(brandId === '1' ? 'Leading Point' : `Brand ${brandId}`);
    } else if (brandId === 'new') {
      // Reset form for new brand
      setBrandName('');
      setPrimaryColor('#0072CE');
      setSecondaryColor('#0072CE');
      setIsActive(true);
      setLogoFile(null);
    }
  }, [brandId]);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
    }
  };

  const toggleProcess = (id: string) => {
    setProcesses(processes.map(p => 
      p.id === id ? { ...p, isChecked: !p.isChecked } : p
    ));
  };

  const deleteProcess = (id: string) => {
    setProcesses(processes.filter(p => p.id !== id));
  };

  return (
    <div className="flex flex-col h-full bg-[#f8fafc] overflow-hidden">
      {/* Users Hierarchy Modal */}
      <UsersHierarchyModal
        isOpen={showUsersModal}
        onClose={() => setShowUsersModal(false)}
        brandName={brandName || 'Brand'}
      />

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-auto custom-scrollbar">
        <div className="p-6 space-y-6">
          {/* Users Linked Section */}
          <div className="bg-white content-stretch flex items-start relative rounded-[4px] shadow-[0px_3px_20px_0px_rgba(0,0,0,0.05)] w-full" data-name="Smart Buttons Section">
            <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
              <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
                <button 
                  onClick={() => setShowUsersModal(true)}
                  className="content-stretch flex gap-[8px] h-[40px] items-center px-[16px] relative rounded-[4px] shrink-0 w-[204px] cursor-pointer hover:bg-[#f8fafc] transition-colors active:scale-95" 
                  data-name="Smart button"
                >
                  <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[14px]" data-name="Circle">
                    <Users className="w-[14px] h-[14px] text-[rgba(0,11,37,0.57)]" />
                  </div>
                  <div className="flex flex-[1_0_0] flex-col font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[14px] text-[rgba(0,11,37,0.57)] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.2] overflow-hidden text-ellipsis">Users Linked</p>
                  </div>
                  <div className="absolute bg-[#0072ce] content-stretch flex items-center justify-center left-[4px] overflow-clip px-[4px] py-[2px] rounded-[160px] top-[-8px]" data-name="Badge">
                    <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.2]">16</p>
                    </div>
                  </div>
                </button>
                <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[16px] rounded-[4px] shrink-0 w-[204px]" data-name="Smart button" />
                <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[16px] rounded-[4px] shrink-0 w-[204px]" data-name="Smart button" />
                <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[16px] rounded-[4px] shrink-0 w-[204px]" data-name="Smart button" />
                <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[16px] rounded-[4px] shrink-0 w-[204px]" data-name="Smart button" />
              </div>
            </div>
          </div>

          {/* Brand Specifications Section */}
          <div className="space-y-4">
            <h2 className="font-medium text-[17px] text-[#000b25]">Brand Specifications</h2>
            
            <div className="bg-white relative rounded-[4px]">
              <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
                
                {/* Brand Name */}
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                    <p className="font-normal text-[14px] text-[rgba(0,11,37,0.57)]">Brand Name</p>
                    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full">
                      <input
                        type="text"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        placeholder="Enter brand name"
                        className="flex items-center overflow-clip rounded-[inherit] size-full px-[12px] text-[16px] text-[rgba(0,11,37,0.57)] focus:outline-none"
                      />
                      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[63px] items-start min-h-px min-w-px" />
                </div>

                {/* Color Row */}
                <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full">
                  {/* Primary Color */}
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                    <p className="font-normal text-[14px] text-[rgba(0,11,37,0.57)]">Primary Color</p>
                    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                      <div className="bg-white relative rounded-[4px] shrink-0 size-[38px]">
                        <input
                          type="color"
                          value={primaryColor}
                          onChange={(e) => setPrimaryColor(e.target.value)}
                          className="content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[inherit] size-full cursor-pointer"
                        />
                        <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                      <div className="bg-white flex-[1_0_0] h-[38px] min-h-px min-w-px relative rounded-[4px]">
                        <input
                          type="text"
                          value={primaryColor}
                          onChange={(e) => setPrimaryColor(e.target.value)}
                          className="flex items-center overflow-clip rounded-[inherit] size-full px-[12px] font-medium text-[#000b25] text-[16px] focus:outline-none"
                        />
                        <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                    </div>
                  </div>

                  {/* Secondary Color */}
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                    <p className="font-normal text-[14px] text-[rgba(0,11,37,0.57)]">Secondary Color (Optional)</p>
                    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                      <div className="bg-white relative rounded-[4px] shrink-0 size-[38px]">
                        <input
                          type="color"
                          value={secondaryColor}
                          onChange={(e) => setSecondaryColor(e.target.value)}
                          className="content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[inherit] size-full cursor-pointer"
                        />
                        <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-dashed inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                      <div className="bg-white flex-[1_0_0] h-[38px] min-h-px min-w-px relative rounded-[4px]">
                        <input
                          type="text"
                          value={secondaryColor}
                          onChange={(e) => setSecondaryColor(e.target.value)}
                          className="flex items-center overflow-clip rounded-[inherit] size-full px-[12px] font-medium text-[#000b25] text-[16px] focus:outline-none"
                        />
                        <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                    </div>
                    <p className="font-normal text-[14px] text-[rgba(0,11,37,0.64)]">
                      Brand will use primary color as fallback
                    </p>
                  </div>
                </div>

                {/* Brand Status */}
                <div className="bg-[#f8fafc] h-[63px] relative rounded-[4px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[10px] relative size-full">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
                        <p className="font-medium text-[#000b25] text-[14px]">Brand Status</p>
                        <p className="font-normal text-[14px] text-[rgba(0,11,37,0.64)]">
                          This brand is currently active and visible in the system
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                        <button
                          onClick={() => setIsActive(!isActive)}
                          className={`content-stretch cursor-pointer flex h-[24px] items-center ${isActive ? 'justify-end' : 'justify-start'} px-[4px] py-[2px] relative rounded-[160px] w-[40px] transition-colors ${isActive ? 'bg-[#0072ce]' : 'bg-[#bebebe]'}`}
                        >
                          <div className="bg-white rounded-[160px] shrink-0 size-[16px]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brand Logo */}
                <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full">
                  <div className="bg-[#f8fafc] h-[33px] relative shrink-0 w-full flex items-center">
                    <div className="content-stretch flex gap-[8px] items-center pr-[8px] relative w-full">
                      <div className="h-[2px] w-[21px] bg-[#8DC1EC] rounded-full" />
                      <p className="font-medium text-[#000b25] text-[14px]">Brand Logo</p>
                    </div>
                  </div>
                  
                  <div className="bg-[#f8fafc] relative rounded-[4px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center p-[12px] relative w-full">
                        <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
                          <div className="h-[38px] w-[42px] overflow-clip relative shrink-0 flex items-center justify-center bg-white rounded-[4px]">
                            {logoFile ? (
                              <img src={URL.createObjectURL(logoFile)} alt="Logo" className="max-w-full max-h-full object-contain" />
                            ) : (
                              <div className="w-[24px] h-[24px] bg-[#0072ce] rounded-[2px]" />
                            )}
                          </div>
                          <div className="flex flex-[1_0_0] flex-col gap-[4px]">
                            <p className="font-medium text-[14px] text-[#000b25]">
                              {logoFile ? logoFile.name : 'File name.pdf'}
                            </p>
                            <p className="font-normal text-[12px] text-[rgba(0,11,37,0.64)]">File Description</p>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                            <button className="bg-[#fff1f0] content-stretch flex flex-col items-center justify-center relative rounded-[39px] shrink-0 size-[26px] border-[0.5px] border-[#feeae6] hover:bg-[#ffe7e4] transition-colors active:scale-95">
                              <Trash2 className="w-[9.1px] h-[9.1px] text-[#f5222d]" />
                            </button>
                            <label className="bg-[#eff8ff] content-stretch flex flex-col items-center justify-center relative rounded-[39px] shrink-0 size-[26px] border-[0.5px] border-[#d1e9ff] hover:bg-[#e0f2fe] transition-colors active:scale-95 cursor-pointer">
                              <input
                                type="file"
                                accept="image/*,.pdf"
                                onChange={handleLogoUpload}
                                className="hidden"
                              />
                              <Edit2 className="w-[9.1px] h-[9.1px] text-[#2e90fa]" />
                            </label>
                            <button className="bg-[#f0fdf9] content-stretch flex flex-col items-center justify-center relative rounded-[39px] shrink-0 size-[26px] border-[0.5px] border-[#ccfbef] hover:bg-[#d1fae5] transition-colors active:scale-95">
                              <Eye className="w-[9.1px] h-[9.1px] text-[#15b79e]" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* List of Applicable Processes Section */}
          <div className="space-y-4">
            <h2 className="font-medium text-[17px] text-[#000b25]">List of Applicable Processes</h2>
            
            <div className="bg-white relative rounded-[4px]">
              <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
              
              {/* Table */}
              <div className="content-stretch flex items-center relative rounded-[4px] shrink-0 w-full">
                {/* Checkbox Column */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[52px]">
                  {/* Header Cell */}
                  <div className="bg-[#dbedf8] content-stretch flex h-[48px] items-center py-[10px] relative rounded-tl-[4px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px]" />
                    <div className="flex-[1_0_0] min-h-px min-w-px relative">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[7px] items-center px-[16px] relative w-full">
                          <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[20px] active:scale-95 transition-transform">
                            <div className="relative shrink-0 size-[16px]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <rect width="14" height="14" x="1" y="1" stroke="#0072CE" strokeWidth="1.5" rx="2" />
                              </svg>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Data Cells */}
                  {processes.map((process, index) => {
                    const isLastRow = index === processes.length - 1;
                    const rowBg = index >= 2 && index % 2 === 0 ? 'bg-[#f8fafc]' : 'bg-white';
                    return (
                      <div key={process.id} className={`${rowBg} content-stretch flex ${isLastRow ? 'h-[48px] rounded-bl-[4px]' : 'flex-col justify-center'} items-start relative shrink-0 w-full`}>
                        <div className={`${isLastRow ? 'flex-[1_0_0] min-h-px min-w-px' : ''} h-[48px] relative shrink-0 w-full`}>
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[7px] items-center px-[16px] relative size-full">
                              <button 
                                onClick={() => toggleProcess(process.id)}
                                className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[20px] active:scale-95 transition-transform"
                              >
                                <div className="relative shrink-0 size-[16px]">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                    <rect width="14" height="14" x="1" y="1" stroke="#0072CE" strokeWidth="1.5" rx="2" fill={process.isChecked ? '#0072CE' : 'none'} />
                                    {process.isChecked && (
                                      <path d="M4 8l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    )}
                                  </svg>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                        {!isLastRow && (
                          <div className="h-0 relative shrink-0 w-full">
                            <div className="absolute inset-[-1px_0_0_0]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 1">
                                <line stroke="#E2E8F0" x2="52" y1="0.5" y2="0.5" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Process Type Column */}
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                  {/* Header Cell */}
                  <div className="bg-[#dbedf8] content-stretch flex h-[48px] items-center py-[10px] relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
                    <div className="flex-[1_0_0] min-h-px min-w-px relative">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center px-[16px] relative w-full">
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]">
                            <p className="font-medium text-[#000b25]">Process Type</p>
                            <div className="content-stretch flex flex-col h-[12px] items-center justify-center pb-[6px] relative shrink-0 w-[9px]">
                              <svg className="w-[9px] h-[12px]" viewBox="0 0 9 12" fill="none">
                                <path d="M4.5 3L7 0.5H2L4.5 3Z" fill="rgba(0,11,37,0.57)" />
                                <path d="M4.5 9L2 11.5H7L4.5 9Z" fill="rgba(0,11,37,0.57)" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Data Cells */}
                  {processes.map((process, index) => {
                    const isLastRow = index === processes.length - 1;
                    const rowBg = (index >= 2 && index % 2 === 0) ? 'bg-[#f8fafc]' : 'bg-white';
                    return (
                      <div key={process.id} className={`${rowBg} content-stretch flex ${isLastRow ? '' : 'flex-col justify-center'} items-start relative shrink-0 w-full`}>
                        {isLastRow ? (
                          <div className="h-[48px] relative shrink-0 w-full">
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex items-center px-[16px] relative size-full">
                                <p className="font-normal text-[12px] text-[rgba(0,11,37,0.64)]">{process.type}</p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0">
                              <p className="font-normal text-[12px] text-[rgba(0,11,37,0.64)]">{process.type}</p>
                            </div>
                            <div className="h-0 relative shrink-0 w-full">
                              <div className="absolute inset-[-1px_0_0_0]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 491.5 1">
                                  <line stroke="#E2E8F0" x2="491.5" y1="0.5" y2="0.5" />
                                </svg>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Module Name Column */}
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                  {/* Header Cell */}
                  <div className="bg-[#dbedf8] content-stretch flex h-[48px] items-center py-[10px] relative shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
                    <div className="flex-[1_0_0] min-h-px min-w-px relative">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center px-[16px] relative w-full">
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]">
                            <p className="font-medium text-[#000b25]">Module Name</p>
                            <div className="content-stretch flex flex-col h-[12px] items-center justify-center pb-[6px] relative shrink-0 w-[9px]">
                              <svg className="w-[9px] h-[12px]" viewBox="0 0 9 12" fill="none">
                                <path d="M4.5 3L7 0.5H2L4.5 3Z" fill="rgba(0,11,37,0.57)" />
                                <path d="M4.5 9L2 11.5H7L4.5 9Z" fill="rgba(0,11,37,0.57)" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Data Cells */}
                  {processes.map((process, index) => {
                    const isLastRow = index === processes.length - 1;
                    const rowBg = (index >= 2 && index % 2 === 0) ? 'bg-[#f8fafc]' : 'bg-white';
                    return (
                      <div key={process.id} className={`${rowBg} content-stretch flex ${isLastRow ? '' : 'flex-col justify-center'} items-start relative shrink-0 w-full`}>
                        {isLastRow ? (
                          <div className="h-[48px] relative shrink-0 w-full">
                            <div className="flex flex-row items-center size-full">
                              <div className="content-stretch flex items-center px-[16px] relative size-full">
                                <p className="font-normal text-[12px] text-[rgba(0,11,37,0.64)]">{process.moduleName}</p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="h-[48px] relative shrink-0 w-full">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center px-[16px] relative size-full">
                                  <p className="font-normal text-[12px] text-[rgba(0,11,37,0.64)]">{process.moduleName}</p>
                                </div>
                              </div>
                            </div>
                            <div className="h-0 relative shrink-0 w-full">
                              <div className="absolute inset-[-1px_0_0_0]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 491.5 1">
                                  <line stroke="#E2E8F0" x2="491.5" y1="0.5" y2="0.5" />
                                </svg>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Actions Column */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[118px]">
                  {/* Header Cell */}
                  <div className="bg-[#dbedf8] content-stretch flex h-[48px] items-center py-[10px] relative rounded-tr-[4px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none rounded-tr-[4px]" />
                    <div className="flex-[1_0_0] min-h-px min-w-px relative">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center px-[16px] relative w-full">
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                            <p className="font-medium text-[#000b25] text-[12px]">Actions</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Data Cells */}
                  {processes.map((process, index) => {
                    const isLastRow = index === processes.length - 1;
                    const rowBg = (index >= 2 && index % 2 === 0) ? 'bg-[#f8fafc]' : 'bg-white';
                    return (
                      <div key={process.id} className={`${rowBg} content-stretch flex ${isLastRow ? 'h-[48px] rounded-br-[4px]' : 'flex-col justify-center'} items-start relative shrink-0 w-full`}>
                        <div className={`${isLastRow ? 'flex-[1_0_0] min-h-px min-w-px' : ''} h-[48px] relative shrink-0 w-full`}>
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex items-center px-[16px] relative size-full">
                              <button
                                onClick={() => deleteProcess(process.id)}
                                className="relative size-[24px] flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
                              >
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                  <circle cx="12" cy="12" fill="#F02B02" fillOpacity="0.05" r="12" />
                                </svg>
                                <Trash2 className="w-[12px] h-[12px] text-[#f02b02] relative z-10" />
                              </button>
                            </div>
                          </div>
                        </div>
                        {!isLastRow && (
                          <div className="h-0 relative shrink-0 w-full">
                            <div className="absolute inset-[-1px_0_0_0]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118 1">
                                <line stroke="#E2E8F0" x2="118" y1="0.5" y2="0.5" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}