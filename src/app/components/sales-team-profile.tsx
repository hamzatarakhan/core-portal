import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Phone, Mail, Upload, FileText, ArrowRight, Check, CircleDot, Plus, Pencil, Trash2, FileSpreadsheet, X, Save, AlertCircle, Eye, EyeOff, Paperclip, FileImage, File as FileIcon, Edit2, MapPin, Network, ListTree, ChevronsDown, Briefcase, Package, Ticket, CalendarCheck, Laptop } from 'lucide-react';
import MainContainer from '../../imports/MainContainer-222-488';

// ── Status Segmented Control ──
// Only the member's current status is shown (not the full workflow).
const statusStyles: Record<string, string> = {
  'Pending Approval': 'bg-[#fff7e6] text-[#b76e00] border-[#ffd591]',
  'Pending Sales Support Approval': 'bg-[#fff7e6] text-[#b76e00] border-[#ffd591]',
  'Active': 'bg-[#e8f8ef] text-[#0f9d58] border-[#b7ebd0]',
  'Rejected': 'bg-[#fdecea] text-[#d93025] border-[#f5c2be]',
  'Resubmitted': 'bg-[#e6f4ff] text-[#0072ce] border-[#b3d9f7]',
  'Suspended': 'bg-[#fff1e6] text-[#d4600a] border-[#ffd0a8]',
  'Terminated': 'bg-[#f1f1f1] text-[#5f6368] border-[#d9d9d9]',
  'Resigned': 'bg-[#f1f1f1] text-[#5f6368] border-[#d9d9d9]',
};

function StatusBar({ status = 'Pending Approval' }: { status?: string }) {
  return (
    <div className="ml-auto flex items-center gap-2">
      <span className={`h-8 px-4 rounded-[4px] border flex items-center text-[14px] font-medium ${statusStyles[status]}`}>
        {status}
      </span>
    </div>
  );
}

// ── Credit Limit Control ──
interface BankGuarantee {
  id: number;
  issuingBank: string;
  guaranteeAmount: string;
  effectiveDate: string;
  expiryDate: string;
  bankFile: string;
  bankFileName?: string;
  bankFileData?: string;
  bankFileType?: string;
}

interface OverrideAttachment {
  id: number;
  title: string;
  effectiveDate: string;
  description: string;
  bankFileName?: string;
  bankFileData?: string;
  bankFileType?: string;
}

const overrideReasonOptions = [
  'Customer Priority',
  'Management Approval',
  'Seasonal Exception',
  'One-Time Override',
  'Payment Pending Verification',
];

const overrideAttachmentColumns = ['Title', 'Effective Date', 'Description', 'Bank File'];

const defaultSmartButtons = [
  { label: 'Order', badge: 16 },
  { label: 'Receipts', badge: 16 },
  { label: 'Invoices', badge: 16 },
];

const metricCards = [
  { label: 'Available Credit Limit', value: '1000', bg: 'bg-[#f6fef9]', border: 'border-[#d3f8df]' },
  { label: 'Total Amount Due', value: '500', bg: 'bg-[#fff8f7]', border: 'border-[#ffccc7]/50' },
  { label: 'Remaining Balance', value: '500', bg: 'bg-[#f5faff]', border: 'border-[#d1e9ff]' },
  { label: 'Pending Order Amount', value: '600', bg: 'bg-[#fefaf5]', border: 'border-[#fdead7]' },
];

const bankGuaranteeColumns = ['Issuing Bank', 'Guarantee Amount', 'Effective Date', 'Expiry Date', 'Bank File'];

function CreditLimitControl() {
  const [overrideToggle, setOverrideToggle] = useState(false);
  const [activeSmartBtn, setActiveSmartBtn] = useState<number | null>(null);
  const [guarantees, setGuarantees] = useState<BankGuarantee[]>([]);
  const [creditLimitSet, setCreditLimitSet] = useState(false);
  const [creditLimitAmount, setCreditLimitAmount] = useState('1000');
  const [isSettingLimit, setIsSettingLimit] = useState(false);
  const [newLimitValue, setNewLimitValue] = useState('');
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupDate, setPopupDate] = useState('');
  const [popupDescription, setPopupDescription] = useState('');
  const [nextGuaranteeId, setNextGuaranteeId] = useState(1);
  const [showBankTable, setShowBankTable] = useState(false);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [showValidation, setShowValidation] = useState(false);
  const [guaranteesSnapshot, setGuaranteesSnapshot] = useState<BankGuarantee[]>([]);
  const [showChangeLimitPopup, setShowChangeLimitPopup] = useState(false);
  const [popupLimitValue, setPopupLimitValue] = useState('');
  const [popupGuarantees, setPopupGuarantees] = useState<BankGuarantee[]>([]);
  const [popupValidation, setPopupValidation] = useState(false);
  const [filePreviewOpen, setFilePreviewOpen] = useState(false);
  const [filePreviewData, setFilePreviewData] = useState('');
  const [filePreviewName, setFilePreviewName] = useState('');
  const [filePreviewType, setFilePreviewType] = useState('');
  const [fileUploadTarget, setFileUploadTarget] = useState<{ id: number; context: 'inline' | 'set' | 'popup' | 'override' } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Override Late Dues popup state
  const [showOverridePopup, setShowOverridePopup] = useState(false);
  const [overrideReason, setOverrideReason] = useState('');
  const [overrideReasonOpen, setOverrideReasonOpen] = useState(false);
  const [overrideAttachments, setOverrideAttachments] = useState<OverrideAttachment[]>([]);
  const [nextOverrideAttachmentId, setNextOverrideAttachmentId] = useState(1);
  const [overrideAttachmentPage, setOverrideAttachmentPage] = useState(1);
  const overrideItemsPerPage = 5;

  const handleFileUpload = (guaranteeId: number, context: 'inline' | 'set' | 'popup' | 'override') => {
    setFileUploadTarget({ id: guaranteeId, context });
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !fileUploadTarget) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      const update = { bankFileName: file.name, bankFileData: dataUrl, bankFileType: file.type };
      if (fileUploadTarget.context === 'override') {
        setOverrideAttachments(prev => prev.map(a => a.id === fileUploadTarget.id ? { ...a, ...update } : a));
      } else if (fileUploadTarget.context === 'popup') {
        setPopupGuarantees(prev => prev.map(g => g.id === fileUploadTarget.id ? { ...g, ...update } : g));
      } else {
        setGuarantees(prev => prev.map(g => g.id === fileUploadTarget.id ? { ...g, ...update } : g));
      }
      setFileUploadTarget(null);
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const openFilePreview = (g: BankGuarantee) => {
    if (g.bankFileData && g.bankFileName) {
      setFilePreviewData(g.bankFileData);
      setFilePreviewName(g.bankFileName);
      setFilePreviewType(g.bankFileType || '');
      setFilePreviewOpen(true);
    }
  };

  const handleAddGuarantee = () => {
    const newId = nextGuaranteeId;
    setNextGuaranteeId(newId + 1);
    setGuarantees([...guarantees, {
      id: newId,
      issuingBank: '',
      guaranteeAmount: '',
      effectiveDate: '',
      expiryDate: '',
      bankFile: '',
    }]);
  };

  const handleDeleteGuarantee = (id: number) => {
    setGuarantees(guarantees.filter(g => g.id !== id));
  };

  const updateGuarantee = (id: number, field: keyof BankGuarantee, value: string) => {
    setGuarantees(guarantees.map(g => g.id === id ? { ...g, [field]: value } : g));
  };

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const handleOpenChangeLimitPopup = () => {
    setPopupLimitValue('');
    setPopupGuarantees(guarantees.map(g => ({ ...g })));
    setPopupValidation(false);
    setShowChangeLimitPopup(true);
  };

  const handlePopupAddGuarantee = () => {
    const newId = nextGuaranteeId;
    setNextGuaranteeId(newId + 1);
    setPopupGuarantees([...popupGuarantees, {
      id: newId,
      issuingBank: '',
      guaranteeAmount: '',
      effectiveDate: '',
      expiryDate: '',
      bankFile: '',
    }]);
  };

  const handlePopupDeleteGuarantee = (id: number) => {
    setPopupGuarantees(popupGuarantees.filter(g => g.id !== id));
  };

  const updatePopupGuarantee = (id: number, field: keyof BankGuarantee, value: string) => {
    setPopupGuarantees(popupGuarantees.map(g => g.id === id ? { ...g, [field]: value } : g));
  };

  const handlePopupSave = () => {
    if (popupGuarantees.length === 0) {
      setPopupValidation(true);
      return;
    }
    if (!popupLimitValue.trim()) return;
    setCreditLimitAmount(popupLimitValue.trim());
    setGuarantees(popupGuarantees);
    setCreditLimitSet(true);
    setShowChangeLimitPopup(false);
    setPopupValidation(false);
  };

  const handlePopupDiscard = () => {
    setShowChangeLimitPopup(false);
    setPopupValidation(false);
  };

  // Override popup handlers
  const handleOverrideToggleClick = () => {
    if (overrideToggle) {
      setOverrideToggle(false);
    } else {
      setOverrideReason('');
      setOverrideReasonOpen(false);
      setOverrideAttachments([]);
      setOverrideAttachmentPage(1);
      setShowOverridePopup(true);
    }
  };

  const handleOverrideSubmit = () => {
    setOverrideToggle(true);
    setShowOverridePopup(false);
  };

  const handleOverrideCancel = () => {
    setShowOverridePopup(false);
  };

  const handleOverrideAddAttachment = () => {
    const newId = nextOverrideAttachmentId;
    setNextOverrideAttachmentId(newId + 1);
    setOverrideAttachments([...overrideAttachments, {
      id: newId,
      title: '',
      effectiveDate: '',
      description: '',
    }]);
  };

  const handleOverrideDeleteAttachment = (id: number) => {
    setOverrideAttachments(overrideAttachments.filter(a => a.id !== id));
  };

  const updateOverrideAttachment = (id: number, field: keyof OverrideAttachment, value: string) => {
    setOverrideAttachments(overrideAttachments.map(a => a.id === id ? { ...a, [field]: value } : a));
  };

  const openOverrideFilePreview = (a: OverrideAttachment) => {
    if (a.bankFileData && a.bankFileName) {
      setFilePreviewData(a.bankFileData);
      setFilePreviewName(a.bankFileName);
      setFilePreviewType(a.bankFileType || '');
      setFilePreviewOpen(true);
    }
  };

  return (
    <div className="flex flex-col">
      {/* ═══ Smart Buttons Header ═══ */}
      <div className="bg-[#f3f9fd] rounded-t-[4px] relative -mb-px">
        <div aria-hidden="true" className="absolute inset-0 border border-[#e2e8f0] border-b-0 rounded-t-[4px] pointer-events-none" />
        <div className="flex gap-2 px-4 py-3 relative">
          {defaultSmartButtons.map((btn, i) => (
            <button
              key={i}
              onClick={() => setActiveSmartBtn(activeSmartBtn === i ? null : i)}
              className={`h-[30px] rounded-full flex items-center gap-1.5 px-3 relative active:scale-95 transition-all text-[10.5px] ${
                activeSmartBtn === i
                  ? 'bg-[#0072ce] text-white'
                  : 'bg-white text-[rgba(0,11,37,0.57)]'
              }`}
            >
              <div aria-hidden="true" className={`absolute inset-0 border border-solid border-[#e2e8f0] rounded-[4px] pointer-events-none ${activeSmartBtn === i ? 'border-transparent' : ''}`} />
              <CircleDot size={10.5} className={activeSmartBtn === i ? 'text-white' : 'text-[rgba(0,11,37,0.57)]'} />
              <span className="font-medium w-[108px] truncate text-left">{btn.label}</span>
              <span className="absolute -top-1.5 left-[3px] bg-[#0072ce] text-white text-[7.5px] min-w-[14px] px-[3px] py-[1.5px] rounded-full flex items-center justify-center font-medium">
                {btn.badge}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ═══ Body ═══ */}
      <div className="bg-white rounded-b-[4px] relative">
        <div aria-hidden="true" className="absolute inset-0 border border-[#e2e8f0] rounded-b-[4px] pointer-events-none" />
        <div className="flex flex-col gap-4 p-4 relative">

          {/* ── Metric Cards ── */}
          <div className="flex gap-2">
            {metricCards.map((card, i) => {
              const computedValue = !creditLimitSet
                ? '0'
                : i === 0 ? creditLimitAmount
                : i === 1 ? String(Math.round(Number(creditLimitAmount) * 0.5))
                : i === 2 ? String(Math.round(Number(creditLimitAmount) * 0.5))
                : String(Math.round(Number(creditLimitAmount) * 0.6));
              
              // Special layout for first card (Credit Limit) when credit is set
              if (i === 0 && creditLimitSet) {
                return (
                  <div key={i} className={`flex-1 ${card.bg} rounded-[4px] relative h-[78px]`}>
                    <div aria-hidden="true" className={`absolute inset-0 border border-solid ${card.border} rounded-[4px] pointer-events-none`} />
                    <div className="flex items-center justify-between px-3 h-full relative">
                      <div className="flex flex-col gap-2 justify-center">
                        <span className="text-[14px] text-[#000b25]">Credit Limit</span>
                        <div className="flex items-end gap-1">
                          <span className="text-[19px] text-[#000b25] font-medium leading-[1.2]">{Number(computedValue).toLocaleString()}</span>
                          <span className="text-[12px] text-[rgba(0,11,37,0.64)] pb-px leading-[1.2]">OMR</span>
                        </div>
                      </div>
                      <button 
                        onClick={handleOpenChangeLimitPopup}
                        className="h-[30px] px-3 bg-[#e8f7ff] hover:bg-[#d0ebfa] active:bg-[#b8e3f5] rounded-[4px] flex items-center gap-1.5 active:scale-95 transition-all relative"
                      >
                        <div aria-hidden="true" className="absolute inset-0 border border-solid border-[#d0ebfa] rounded-[4px] pointer-events-none" />
                        <Pencil size={12} className="text-[#0072ce]" />
                        <span className="text-[11px] font-medium text-[#0072ce]">Change</span>
                      </button>
                    </div>
                  </div>
                );
              }
              
              return (
                <div key={i} className={`flex-1 ${card.bg} rounded-[4px] relative h-[78px]`}>
                  <div aria-hidden="true" className={`absolute inset-0 border border-solid ${card.border} rounded-[4px] pointer-events-none`} />
                  <div className="flex items-center justify-center p-3 h-full">
                    <div className="flex-1 flex flex-col gap-2 justify-center">
                      <span className="text-[14px] text-[#000b25]">{card.label}</span>
                      <div className="flex items-end gap-1">
                        <span className="text-[19px] text-[#000b25] font-medium leading-[1.2]">{Number(computedValue).toLocaleString()}</span>
                        <span className="text-[12px] text-[rgba(0,11,37,0.64)] pb-px leading-[1.2]">OMR</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Credit Limit: Empty State ── */}
          {!creditLimitSet && !isSettingLimit && (
            <div className="bg-[#f3f9fd] rounded-[4px] relative">
              <div aria-hidden="true" className="absolute inset-0 border border-dashed border-[#dbedf8] rounded-[4px] pointer-events-none" />
              <div className="flex items-center justify-between px-[17px] py-[13px]">
                <div className="h-9 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[rgba(0,114,206,0.08)] flex items-center justify-center shrink-0">
                    <Plus size={14} className="text-[#0072ce]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[12px] text-[rgba(0,11,37,0.64)] leading-[1.2]">No credit limit configured</span>
                    <span className="text-[12px] text-[rgba(0,11,37,0.4)] leading-[1.2]">Set a limit to control credit exposure</span>
                  </div>
                </div>
                <button
                  onClick={() => { setPopupLimitValue(''); setPopupGuarantees([]); setPopupValidation(false); setShowChangeLimitPopup(true); }}
                  className="h-9 bg-[#0072ce] rounded-[4px] relative px-4 flex items-center gap-2 text-[12px] text-white font-medium active:scale-95 transition-transform"
                >
                  <div aria-hidden="true" className="absolute inset-0 border border-[#0072ce] rounded-[4px] pointer-events-none" />
                  <Plus size={12} />
                  Set Credit Limit
                </button>
              </div>
            </div>
          )}

          {/* ── Credit Limit: Editing State ── */}
          {!creditLimitSet && isSettingLimit && (
            <div className="bg-[#f3f9fd] rounded-[4px] relative">
              <div aria-hidden="true" className="absolute inset-0 border border-dashed border-[#dbedf8] rounded-[4px] pointer-events-none" />
              <div className="flex flex-col gap-4 px-[17px] py-[13px]">
                {/* Amount Row */}
                <div className="flex items-end justify-between">
                  <div className="flex flex-col gap-2">
                    <span className="text-[14px] text-[rgba(0,11,37,0.57)]">Amount</span>
                    <div className="bg-white rounded-[4px] relative">
                      <div aria-hidden="true" className="absolute inset-0 border border-[#e5e7eb] rounded-[4px] pointer-events-none" />
                      <div className="flex items-center gap-3 pl-3 overflow-hidden rounded-[4px]">
                        <input
                          type="text"
                          value={newLimitValue}
                          onChange={(e) => { setNewLimitValue(e.target.value); setShowValidation(false); }}
                          onKeyDown={(e) => {
                            if (e.key === 'Escape') {
                              setIsSettingLimit(false);
                              setNewLimitValue('');
                              setGuarantees(guaranteesSnapshot);
                              setShowValidation(false);
                            }
                          }}
                          autoFocus
                          placeholder="Enter credit limit amount"
                          className="text-[12px] text-[rgba(0,11,37,0.57)] bg-transparent outline-none py-[4px] flex-1 min-w-0"
                        />
                        <div className="bg-[#f8fafc] rounded-[4px] h-[27px] px-2 flex items-center shrink-0">
                          <span className="text-[8px] text-[rgba(0,11,37,0.6)]">OMR</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        if (!newLimitValue.trim()) return;
                        if (guarantees.length === 0) {
                          setShowValidation(true);
                          return;
                        }
                        setCreditLimitAmount(newLimitValue.trim());
                        setCreditLimitSet(true);
                        setIsSettingLimit(false);
                        setNewLimitValue('');
                        setShowValidation(false);
                        setShowBankTable(true);
                      }}
                      className="h-9 bg-[#0072ce] rounded-[4px] px-4 flex items-center gap-2 text-[12px] text-white font-medium active:scale-95 transition-transform relative"
                    >
                      <div aria-hidden="true" className="absolute inset-0 border border-[#0072ce] rounded-[4px] pointer-events-none" />
                      <Save size={12} /> Save
                    </button>
                    <button
                      onClick={() => {
                        setIsSettingLimit(false);
                        setNewLimitValue('');
                        setGuarantees(guaranteesSnapshot);
                        setShowValidation(false);
                      }}
                      className="h-9 rounded-[4px] px-4 flex items-center gap-2 text-[12px] text-[#0072ce] font-medium active:scale-95 transition-transform relative"
                    >
                      <div aria-hidden="true" className="absolute inset-0 border border-[#e2e8f0] rounded-[4px] pointer-events-none" />
                      <X size={12} /> Cancel
                    </button>
                  </div>
                </div>

                {/* Inline Bank Guarantees Table */}
                <div className="rounded-[4px] relative">
                  <div aria-hidden="true" className="absolute inset-0 border border-[#e2e8f0] rounded-[5px] pointer-events-none" />
                  <div className="flex">
                    {bankGuaranteeColumns.map((col, ci) => (
                      <div key={col} className="flex-1 flex flex-col">
                        <div
                          onClick={() => handleSort(col)}
                          className={`bg-[#f8fafc] h-12 flex items-center px-4 cursor-pointer border-b border-[#e2e8f0] ${ci === 0 ? 'rounded-tl-[4px]' : ''} ${ci === bankGuaranteeColumns.length - 1 ? 'rounded-tr-[4px]' : ''}`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-[12px] text-[#000b25] font-medium">{col}</span>
                            <div className="flex flex-col items-center w-[9px] h-3">
                              <ChevronUp size={9} className={`text-[rgba(0,11,37,0.57)] ${sortColumn === col && sortDirection === 'asc' ? 'text-[#0072ce]' : ''}`} />
                              <ChevronDown size={9} className={`-mt-1 text-[rgba(0,11,37,0.57)] ${sortColumn === col && sortDirection === 'desc' ? 'text-[#0072ce]' : ''}`} />
                            </div>
                          </div>
                        </div>
                        {guarantees.map((g) => (
                          <div key={g.id} className="bg-white h-12 flex items-center px-4 border-b border-[#e2e8f0]">
                            {ci === 0 && <input type="text" value={g.issuingBank} onChange={(e) => updateGuarantee(g.id, 'issuingBank', e.target.value)} className="text-[14px] text-[rgba(0,11,37,0.64)] bg-transparent outline-none w-full" placeholder="Issue Value" />}
                            {ci === 1 && <input type="text" value={g.guaranteeAmount} onChange={(e) => updateGuarantee(g.id, 'guaranteeAmount', e.target.value)} className="text-[14px] text-[rgba(0,11,37,0.64)] bg-transparent outline-none w-full" placeholder="Amount" />}
                            {ci === 2 && (
                              <div className="relative w-full">
                                <input type="date" value={g.effectiveDate} onChange={(e) => updateGuarantee(g.id, 'effectiveDate', e.target.value)} className="text-[14px] text-[rgba(0,11,37,0.64)] bg-transparent outline-none w-full cursor-pointer hover:text-[#0072ce] transition-colors" />
                              </div>
                            )}
                            {ci === 3 && (
                              <div className="relative w-full">
                                <input type="date" value={g.expiryDate} onChange={(e) => updateGuarantee(g.id, 'expiryDate', e.target.value)} min={g.effectiveDate || undefined} className="text-[14px] text-[rgba(0,11,37,0.64)] bg-transparent outline-none w-full cursor-pointer hover:text-[#0072ce] transition-colors" />
                              </div>
                            )}
                            {ci === 4 && (
                              <div className="flex items-center justify-between w-full">
                                {g.bankFileName ? (
                                  <button onClick={() => openFilePreview(g)} className="text-[14px] text-[#0072ce] flex items-center gap-1.5 hover:underline active:scale-95 transition-all max-w-[140px]" title={g.bankFileName}>
                                    <Eye size={12} className="shrink-0" />
                                    <span className="truncate">{g.bankFileName}</span>
                                  </button>
                                ) : (
                                  <button onClick={() => handleFileUpload(g.id, 'inline')} className="text-[14px] text-[#0072ce] flex items-center gap-1.5 hover:underline active:scale-95 transition-all">
                                    <Upload size={12} /> Upload File
                                  </button>
                                )}
                                <button onClick={() => handleDeleteGuarantee(g.id)} className="w-6 h-6 rounded-full hover:bg-[#f02b02]/10 flex items-center justify-center active:scale-95 transition-all shrink-0"><Trash2 size={11} className="text-[#f02b02]" /></button>
                              </div>
                            )}
                          </div>
                        ))}
                        <div className={`bg-white h-12 flex items-center px-4 ${ci === 0 ? 'rounded-bl-[4px]' : ''} ${ci === bankGuaranteeColumns.length - 1 ? 'rounded-br-[4px]' : ''}`}>
                          {ci === 0 && (
                            <button onClick={() => { handleAddGuarantee(); setShowValidation(false); }} className="flex items-center gap-2 text-[12px] text-[#0072ce] font-medium active:scale-95 transition-transform">
                              <Plus size={12} className="text-[#0072ce]" />
                              Add Bank Guarantee
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Validation Message */}
                {showValidation && (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-[4px] bg-[rgba(240,43,2,0.15)] flex items-center justify-center shrink-0">
                      <AlertCircle size={12} className="text-[#f02b02]" />
                    </div>
                    <span className="text-[14px] text-[#f02b02]">At least one bank guarantee is required before saving.</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── Credit Limit: Set State ── */}
          {creditLimitSet && (
            <>
              {/* Credit Limit Display + Override Late Dues - Same Row */}
              <div className="flex gap-2">
                {/* Credit Limit Display */}
                <div className="flex-1 bg-[#f3f9fd] rounded-[4px] relative hidden">
                  <div aria-hidden="true" className="absolute inset-0 border border-[#dbedf8] rounded-[4px] pointer-events-none hidden" />
                  <div className="flex items-center justify-between px-[17px] py-[13px] hidden">
                    <div className="flex items-end gap-1">
                      <span className="text-[19px] text-[#0072ce] font-medium leading-[1.2]">{Number(creditLimitAmount).toLocaleString()}</span>
                      <span className="text-[12px] text-[rgba(0,11,37,0.57)] pb-[2px] leading-[1.2]">OMR</span>
                    </div>
                    <button
                      onClick={handleOpenChangeLimitPopup}
                      className="h-9 bg-[#dbedf8] rounded-[4px] relative px-4 flex items-center gap-2 text-[12px] text-[#0072ce] font-medium active:scale-95 transition-transform"
                    >
                      <div aria-hidden="true" className="absolute inset-0 border border-[#dbedf8] rounded-[4px] pointer-events-none" />
                      <Pencil size={12} className="text-[#0072ce]" />
                      Change Credit Limit
                    </button>
                  </div>
                </div>

                {/* Override Late Dues Invoices - REMOVED FROM HERE */}
              </div>

              {/* Bank Guarantees Section */}
              <div className="rounded-[4px] relative">
                <div aria-hidden="true" className="absolute -inset-px border border-[#e2e8f0] rounded-[5px] pointer-events-none" />
                <div className={`bg-[#f8fafc] ${showBankTable ? 'rounded-t-[4px]' : 'rounded-[4px]'} flex items-center justify-between px-4 h-12 ${showBankTable ? 'border-b border-[#e2e8f0]' : ''}`}>
                  <div className="flex items-center gap-2">
                    <FileSpreadsheet size={14} className="text-[#0072ce]" />
                    <span className="text-[14px] text-[#000b25]">Bank Guarantees</span>
                    {guarantees.length > 0 && (
                      <span className="bg-[#0072ce] text-white text-[9px] min-w-[16px] px-[4px] py-[1px] rounded-full flex items-center justify-center font-medium">
                        {guarantees.length}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowBankTable(!showBankTable)}
                      className="h-[27px] bg-white border border-[#e2e8f0] rounded-[4px] px-2 py-1 flex items-center gap-1 text-[12px] text-[rgba(0,11,37,0.6)] active:scale-95 transition-transform"
                    >
                      <Eye size={9} className="text-[#0072ce]" />
                      {showBankTable ? 'Hide' : 'Show'}
                      <ChevronDown size={9} className={`text-[rgba(0,11,37,0.6)] transition-transform ${showBankTable ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
                {showBankTable && (
                  <div className="flex">
                    {bankGuaranteeColumns.map((col, ci) => (
                      <div key={col} className="flex-1 flex flex-col">
                        <div onClick={() => handleSort(col)} className="bg-[#f8fafc] h-12 flex items-center px-4 cursor-pointer border-b border-[#e2e8f0]">
                          <div className="flex items-center gap-2">
                            <span className="text-[12px] text-[#000b25] font-medium">{col}</span>
                            <div className="flex flex-col items-center w-[9px] h-3">
                              <ChevronUp size={9} className={`text-[rgba(0,11,37,0.57)] ${sortColumn === col && sortDirection === 'asc' ? 'text-[#0072ce]' : ''}`} />
                              <ChevronDown size={9} className={`-mt-1 text-[rgba(0,11,37,0.57)] ${sortColumn === col && sortDirection === 'desc' ? 'text-[#0072ce]' : ''}`} />
                            </div>
                          </div>
                        </div>
                        {guarantees.map((g) => (
                          <div key={g.id} className="bg-white h-12 flex items-center px-4 border-b border-[#e2e8f0]">
                            {ci === 0 && <span className="text-[14px] text-[rgba(0,11,37,0.64)] truncate w-full">{g.issuingBank || '—'}</span>}
                            {ci === 1 && <span className="text-[14px] text-[rgba(0,11,37,0.64)] truncate w-full">{g.guaranteeAmount || '—'}</span>}
                            {ci === 2 && <span className="text-[14px] text-[rgba(0,11,37,0.64)] truncate w-full">{g.effectiveDate ? new Date(g.effectiveDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '—'}</span>}
                            {ci === 3 && <span className="text-[14px] text-[rgba(0,11,37,0.64)] truncate w-full">{g.expiryDate ? new Date(g.expiryDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '—'}</span>}
                            {ci === 4 && (
                              <div className="flex items-center w-full">
                                {g.bankFileName ? (
                                  <button onClick={() => openFilePreview(g)} className="text-[14px] text-[#0072ce] flex items-center gap-1.5 hover:underline active:scale-95 transition-all max-w-[160px]" title={g.bankFileName}>
                                    <Eye size={12} className="shrink-0" />
                                    <span className="truncate">{g.bankFileName}</span>
                                  </button>
                                ) : (
                                  <span className="text-[14px] text-[rgba(0,11,37,0.4)]">No file</span>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Override Late Dues Invoices */}
              <div className={`rounded-[4px] relative ${overrideToggle ? 'bg-[#fefaf5]' : 'bg-[#f8fafc]'}`}>
                <div aria-hidden="true" className={`absolute inset-0 border ${overrideToggle ? 'border-[#fdead7]' : 'border-[#e2e8f0]'} rounded-[4px] pointer-events-none`} />
                <div className="flex items-center gap-2 px-[17px] py-[13px]">
                  <div className="flex-1 flex flex-col gap-0.5 min-w-0">
                    <span className="text-[12px] text-[#000b25] font-medium">Override Late Dues Invoices</span>
                    <span className="text-[11px] text-[rgba(0,11,37,0.64)] leading-[1.3]">Allow late dues to bypass credit limits</span>
                  </div>
                  <button
                    onClick={handleOverrideToggleClick}
                    className={`w-10 h-6 rounded-full relative transition-colors active:scale-95 shrink-0 flex items-center ${overrideToggle ? 'bg-[#b93815] justify-end' : 'bg-[#bebebe] justify-start'} px-1 py-0.5`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </button>
                </div>
              </div>
            </>
          )}



        </div>
      </div>

      {/* ═══ Edit Credit Limit Popup ═══ */}
      {showEditPopup && (
        <div className="fixed inset-0 bg-[rgba(0,11,37,0.57)] flex items-center justify-center z-50" onClick={() => setShowEditPopup(false)}>
          <div className="bg-[#f8fafc] w-[800px] max-w-[90vw] rounded-[8px] border-[1.5px] border-[#e2e8f0] p-4 flex flex-col gap-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <span className="text-[19px] text-[#000b25] font-medium">Add Attachment</span>
              <button onClick={() => setShowEditPopup(false)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#e2e8f0] active:scale-95 transition-all">
                <X size={20} className="text-[rgba(0,11,37,0.57)]" />
              </button>
            </div>
            <div className="bg-white rounded-[4px] border border-[#e2e8f0] p-4">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] text-[rgba(0,11,37,0.57)]">Title</label>
                    <input type="text" value={popupTitle} onChange={(e) => setPopupTitle(e.target.value)} placeholder="Title" className="bg-white h-[38px] rounded-[4px] border border-[#e2e8f0] px-3 text-[16px] text-[#000b25] font-medium outline-none focus:border-[#0072ce] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] text-[rgba(0,11,37,0.57)]">Effective Date</label>
                    <input type="date" value={popupDate} onChange={(e) => setPopupDate(e.target.value)} className="bg-white h-[38px] rounded-[4px] border border-[#e2e8f0] px-3 text-[16px] text-[#000b25] font-medium outline-none focus:border-[#0072ce] transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] text-[rgba(0,11,37,0.57)]">Description</label>
                  <textarea value={popupDescription} onChange={(e) => setPopupDescription(e.target.value)} placeholder="Description text" rows={3} className="bg-white rounded-[4px] border border-[#e2e8f0] p-3 text-[16px] text-[#000b25] font-medium outline-none resize-y focus:border-[#0072ce] transition-colors min-h-[80px]" />
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[14px] text-[#000b25] font-medium">Upload Bank Guarantee</span>
                  <button className="bg-[#0072ce] h-10 rounded-[4px] px-4 flex items-center gap-2 text-[14px] text-white font-medium w-fit active:scale-95 transition-transform hover:bg-[#005ba1]">
                    <Upload size={14} /> Upload file
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-2">
              <button onClick={() => setShowEditPopup(false)} className="h-10 rounded-[4px] border border-[#0072ce] px-4 text-[14px] text-[#0072ce] font-medium active:scale-95 transition-transform">Discard</button>
              <button onClick={() => { setPopupTitle(''); setPopupDate(''); setPopupDescription(''); }} className="h-10 rounded-[4px] border border-[#0072ce] px-4 text-[14px] text-[#0072ce] font-medium active:scale-95 transition-transform">Save & New</button>
              <button onClick={() => setShowEditPopup(false)} className="h-10 rounded-[4px] bg-[#0072ce] border border-[#0072ce] px-4 text-[14px] text-white font-medium active:scale-95 transition-transform hover:bg-[#005ba1]">Save & Close</button>
            </div>
          </div>
        </div>
      )}

      {/* ═══ Change Credit Limit Popup ═══ */}
      {showChangeLimitPopup && (
        <div className="fixed inset-0 bg-[rgba(0,11,37,0.57)] flex items-center justify-center z-50" onClick={handlePopupDiscard}>
          <div className="bg-[#f8fafc] w-[800px] max-w-[90vw] rounded-[8px] border-[1.5px] border-[#e2e8f0] p-4 flex flex-col gap-4" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex items-center justify-between">
              <span className="text-[19px] text-[#000b25] font-medium">{creditLimitSet ? 'Change Credit Limit' : 'Set Credit Limit'}</span>
              <button onClick={handlePopupDiscard} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#e2e8f0] active:scale-95 transition-all">
                <X size={20} className="text-[rgba(0,11,37,0.57)]" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="bg-white rounded-[4px] border border-[#e2e8f0] p-4">
              <div className="flex flex-col gap-6">
                {/* Credit Limit Fields */}
                {creditLimitSet ? (
                  <div className="flex gap-4">
                    {/* Current Credit Limit - Disabled */}
                    <div className="flex-1 flex flex-col gap-2">
                      <span className="text-[14px] text-[rgba(0,11,37,0.57)]">Current Credit Limit</span>
                      <div className="bg-[#f5f5f5] h-[38px] rounded-[4px] relative">
                        <div aria-hidden="true" className="absolute inset-0 border border-[#e1e1e1] rounded-[4px] pointer-events-none" />
                        <input
                          type="text"
                          value={creditLimitAmount}
                          disabled
                          className="w-full h-full px-3 text-[16px] text-[rgba(0,11,37,0.57)] font-medium bg-transparent outline-none rounded-[4px] cursor-not-allowed"
                        />
                      </div>
                    </div>
                    {/* New Credit Limit Amount */}
                    <div className="flex-1 flex flex-col gap-2">
                      <span className="text-[14px] text-[rgba(0,11,37,0.57)]">New Credit Limit Amount</span>
                      <div className="bg-white h-[38px] rounded-[4px] relative">
                        <div aria-hidden="true" className="absolute inset-0 border border-[#e2e8f0] rounded-[4px] pointer-events-none" />
                        <input
                          type="text"
                          value={popupLimitValue}
                          onChange={(e) => { setPopupLimitValue(e.target.value); setPopupValidation(false); }}
                          autoFocus
                          placeholder="Enter new credit limit"
                          className="w-full h-full px-3 text-[16px] text-[#000b25] font-medium bg-transparent outline-none rounded-[4px]"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <span className="text-[14px] text-[rgba(0,11,37,0.57)]">Credit Limit Amount</span>
                    <div className="bg-white h-[38px] rounded-[4px] relative">
                      <div aria-hidden="true" className="absolute inset-0 border border-[#e2e8f0] rounded-[4px] pointer-events-none" />
                      <input
                        type="text"
                        value={popupLimitValue}
                        onChange={(e) => { setPopupLimitValue(e.target.value); setPopupValidation(false); }}
                        autoFocus
                        placeholder="Enter credit limit"
                        className="w-full h-full px-3 text-[16px] text-[#000b25] font-medium bg-transparent outline-none rounded-[4px]"
                      />
                    </div>
                  </div>
                )}

                {/* Bank Guarantees Table */}
                <div className="rounded-[4px] relative">
                  <div aria-hidden="true" className="absolute -inset-px border border-[#e2e8f0] rounded-[5px] pointer-events-none" />
                  <div className="flex">
                    {bankGuaranteeColumns.map((col, ci) => (
                      <div key={col} className="flex-1 flex flex-col">
                        {/* Header */}
                        <div
                          onClick={() => handleSort(col)}
                          className={`bg-[#f8fafc] h-12 flex items-center px-4 cursor-pointer border-b border-[#e2e8f0] ${ci === 0 ? 'rounded-tl-[4px]' : ''} ${ci === bankGuaranteeColumns.length - 1 ? 'rounded-tr-[4px]' : ''}`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-[12px] text-[#000b25] font-medium">{col}</span>
                            <div className="flex flex-col items-center w-[9px] h-3">
                              <ChevronUp size={9} className={`text-[rgba(0,11,37,0.57)] ${sortColumn === col && sortDirection === 'asc' ? 'text-[#0072ce]' : ''}`} />
                              <ChevronDown size={9} className={`-mt-1 text-[rgba(0,11,37,0.57)] ${sortColumn === col && sortDirection === 'desc' ? 'text-[#0072ce]' : ''}`} />
                            </div>
                          </div>
                        </div>
                        {/* Data Rows */}
                        {popupGuarantees.map((g, rowIdx) => (
                          <div key={g.id} className={`${rowIdx % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'} h-12 flex items-center px-4 border-b border-[#e2e8f0]`}>
                            {ci === 0 && <input type="text" value={g.issuingBank} onChange={(e) => updatePopupGuarantee(g.id, 'issuingBank', e.target.value)} className="text-[12px] text-[rgba(0,11,37,0.64)] bg-transparent outline-none w-full" placeholder="Issue Value" />}
                            {ci === 1 && <input type="text" value={g.guaranteeAmount} onChange={(e) => updatePopupGuarantee(g.id, 'guaranteeAmount', e.target.value)} className="text-[12px] text-[rgba(0,11,37,0.64)] bg-transparent outline-none w-full" placeholder="Amount" />}
                            {ci === 2 && (
                              <div className="relative w-full">
                                <input
                                  type="date"
                                  value={g.effectiveDate}
                                  onChange={(e) => updatePopupGuarantee(g.id, 'effectiveDate', e.target.value)}
                                  className="text-[12px] text-[rgba(0,11,37,0.64)] bg-transparent outline-none w-full cursor-pointer hover:text-[#0072ce] transition-colors relative [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                                />
                              </div>
                            )}
                            {ci === 3 && (
                              <div className="relative w-full">
                                <input
                                  type="date"
                                  value={g.expiryDate}
                                  onChange={(e) => updatePopupGuarantee(g.id, 'expiryDate', e.target.value)}
                                  min={g.effectiveDate || undefined}
                                  className="text-[12px] text-[rgba(0,11,37,0.64)] bg-transparent outline-none w-full cursor-pointer hover:text-[#0072ce] transition-colors relative [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                                />
                              </div>
                            )}
                            {ci === 4 && (
                              <div className="flex items-center justify-between w-full">
                                {g.bankFileName ? (
                                  <button onClick={() => openFilePreview(g)} className="text-[12px] text-[#0072ce] flex items-center gap-1.5 font-medium hover:underline active:scale-95 transition-all max-w-[120px]" title={g.bankFileName}>
                                    <Eye size={12} className="shrink-0" />
                                    <span className="truncate">{g.bankFileName}</span>
                                  </button>
                                ) : (
                                  <button onClick={() => handleFileUpload(g.id, 'popup')} className="text-[12px] text-[#0072ce] flex items-center gap-1.5 font-medium hover:underline active:scale-95 transition-all">
                                    <Upload size={12} /> Upload File
                                  </button>
                                )}
                                <button onClick={() => handlePopupDeleteGuarantee(g.id)} className="w-6 h-6 rounded-full hover:bg-[#f02b02]/10 flex items-center justify-center active:scale-95 transition-all shrink-0"><Trash2 size={11} className="text-[#f02b02]" /></button>
                              </div>
                            )}
                          </div>
                        ))}
                        {/* Add Row */}
                        <div className={`bg-white h-12 flex items-center px-4 ${ci === 0 ? 'rounded-bl-[4px]' : ''} ${ci === bankGuaranteeColumns.length - 1 ? 'rounded-br-[4px]' : ''}`}>
                          {ci === 0 && (
                            <button onClick={() => { handlePopupAddGuarantee(); setPopupValidation(false); }} className="flex items-center gap-2 text-[12px] text-[#0072ce] font-medium active:scale-95 transition-transform">
                              <Plus size={12} className="text-[#0072ce]" />
                              Add Bank Guarantee
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Validation Message */}
                {popupValidation && (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-[4px] bg-[rgba(240,43,2,0.15)] flex items-center justify-center shrink-0">
                      <AlertCircle size={12} className="text-[#f02b02]" />
                    </div>
                    <span className="text-[14px] text-[#f02b02]">At least one bank guarantee is required before saving.</span>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-2">
              <button onClick={handlePopupDiscard} className="h-10 rounded-[4px] border border-[#0072ce] px-4 text-[14px] text-[#0072ce] font-medium active:scale-95 transition-transform">
                Discard
              </button>
              <button onClick={handlePopupSave} className="h-10 rounded-[4px] bg-[#0072ce] border border-[#0072ce] px-4 text-[14px] text-white font-medium active:scale-95 transition-transform">
                {creditLimitSet ? 'Save Changes' : 'Set Credit Limit'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══ Override Late Dues Popup ═══ */}
      {showOverridePopup && (() => {
        const totalPages = Math.max(1, Math.ceil(overrideAttachments.length / overrideItemsPerPage));
        const currentPage = Math.min(overrideAttachmentPage, totalPages);
        const startIdx = (currentPage - 1) * overrideItemsPerPage;
        const pagedAttachments = overrideAttachments.slice(startIdx, startIdx + overrideItemsPerPage);
        return (
          <div className="fixed inset-0 bg-[rgba(0,11,37,0.57)] flex items-center justify-center z-50" onClick={handleOverrideCancel}>
            <div className="bg-[#f8fafc] w-[1100px] max-w-[90vw] rounded-[8px] border-[1.5px] border-[#e2e8f0] p-4 flex flex-col gap-4" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="flex items-center justify-between">
                <span className="text-[19px] text-[#000b25] font-medium">Override Late Dues</span>
                <button onClick={handleOverrideCancel} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#e2e8f0] active:scale-95 transition-all">
                  <X size={20} className="text-[rgba(0,11,37,0.57)]" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="bg-white rounded-[4px] border border-[#e2e8f0] p-4">
                <div className="flex flex-col gap-6">
                  {/* Confirmation Text */}
                  <div className="flex items-center gap-3 p-4 bg-[#fff7ed] border border-[#fed7aa] rounded-[6px]">
                    <div className="w-8 h-8 rounded-full bg-[#ffedd5] flex items-center justify-center shrink-0">
                      <AlertCircle size={18} className="text-[#ea580c]" />
                    </div>
                    <span className="text-[15px] font-medium text-[#9a3412]">
                      Are you sure you want to <span className="font-bold">override</span> this Distributor?
                    </span>
                  </div>

                  {/* Override Reason Dropdown */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[14px] text-[rgba(0,11,37,0.57)]">Override Reason</span>
                    <div className="relative">
                      <button
                        onClick={() => setOverrideReasonOpen(!overrideReasonOpen)}
                        className="bg-white h-[38px] rounded-[4px] relative w-full flex items-center justify-between px-3"
                      >
                        <div aria-hidden="true" className="absolute inset-0 border border-[#e2e8f0] rounded-[4px] pointer-events-none" />
                        <span className={`text-[16px] font-medium ${overrideReason ? 'text-[#000b25]' : 'text-[rgba(0,11,37,0.4)]'}`}>
                          {overrideReason || 'Select Override Reason'}
                        </span>
                        <ChevronDown size={17} className="text-[#000b25] shrink-0" />
                      </button>
                      {overrideReasonOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-[4px] border border-[#e2e8f0] z-10 overflow-hidden">
                          {overrideReasonOptions.map((reason) => (
                            <button
                              key={reason}
                              onClick={() => { setOverrideReason(reason); setOverrideReasonOpen(false); }}
                              className={`w-full text-left px-3 py-2 text-[14px] hover:bg-[#f3f9fd] transition-colors active:scale-[0.99] ${overrideReason === reason ? 'text-[#0072ce] bg-[#f3f9fd] font-medium' : 'text-[#000b25]'}`}
                            >
                              {reason}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Other Attachments Section */}
                  <div className="flex flex-col gap-4">
                    {/* Section Title with Pagination */}
                    <div className="flex items-center justify-between">
                      <span className="text-[17px] text-[#000b25] font-medium">Other Attachments</span>
                      <div className="flex items-center gap-2">
                        {/* Page Number */}
                        <div className="h-10 rounded-[4px] border border-[#d2d2d2] flex items-center">
                          <span className="px-2 text-[16px] text-[#0072ce]">{currentPage}</span>
                          <span className="text-[14px] text-[rgba(0,11,37,0.57)]">/</span>
                          <span className="px-2 text-[16px] text-[rgba(0,11,37,0.64)]">{totalPages}</span>
                        </div>
                        {/* Prev/Next */}
                        <button
                          onClick={() => setOverrideAttachmentPage(Math.max(1, currentPage - 1))}
                          disabled={currentPage <= 1}
                          className="w-10 h-10 rounded-[4px] border border-[#cbd5e1] flex items-center justify-center active:scale-95 transition-all disabled:opacity-40"
                        >
                          <ChevronLeft size={14} className="text-[rgba(0,11,37,0.64)]" />
                        </button>
                        <button
                          onClick={() => setOverrideAttachmentPage(Math.min(totalPages, currentPage + 1))}
                          disabled={currentPage >= totalPages}
                          className="w-10 h-10 rounded-[4px] border border-[#cbd5e1] flex items-center justify-center active:scale-95 transition-all disabled:opacity-40"
                        >
                          <ChevronRight size={14} className="text-[rgba(0,11,37,0.64)]" />
                        </button>
                      </div>
                    </div>

                    {/* Attachments Table */}
                    <div className="rounded-[4px] relative">
                      <div aria-hidden="true" className="absolute -inset-px border border-[#e2e8f0] rounded-[5px] pointer-events-none" />
                      <div className="flex">
                        {overrideAttachmentColumns.map((col, ci) => (
                          <div key={col} className={`flex-1 flex flex-col ${ci === overrideAttachmentColumns.length - 1 ? '' : ''}`}>
                            {/* Header */}
                            <div className={`bg-[#f3f9fd] h-12 flex items-center px-4 border-b border-[#e2e8f0] ${ci === 0 ? 'rounded-tl-[4px]' : ''} ${ci === overrideAttachmentColumns.length - 1 ? '' : ''}`}>
                              <div className="flex items-center gap-2">
                                <span className="text-[12px] text-[#000b25] font-medium">{col}</span>
                                <div className="flex flex-col items-center w-[9px] h-3">
                                  <ChevronUp size={9} className="text-[rgba(0,11,37,0.57)]" />
                                  <ChevronDown size={9} className="-mt-1 text-[rgba(0,11,37,0.57)]" />
                                </div>
                              </div>
                            </div>
                            {/* Data Rows */}
                            {pagedAttachments.map((a, rowIdx) => (
                              <div key={a.id} className={`${rowIdx % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'} h-12 flex items-center px-4 border-b border-[#e2e8f0]`}>
                                {ci === 0 && <input type="text" value={a.title} onChange={(e) => updateOverrideAttachment(a.id, 'title', e.target.value)} className="text-[14px] text-[rgba(0,11,37,0.64)] bg-transparent outline-none w-full" placeholder="Title" />}
                                {ci === 1 && (
                                  <input type="date" value={a.effectiveDate} onChange={(e) => updateOverrideAttachment(a.id, 'effectiveDate', e.target.value)} className="text-[14px] text-[rgba(0,11,37,0.64)] bg-transparent outline-none w-full cursor-pointer hover:text-[#0072ce] transition-colors" />
                                )}
                                {ci === 2 && <input type="text" value={a.description} onChange={(e) => updateOverrideAttachment(a.id, 'description', e.target.value)} className="text-[14px] text-[rgba(0,11,37,0.64)] bg-transparent outline-none w-full" placeholder="Description" />}
                                {ci === 3 && (
                                  <div className="flex items-center justify-between w-full">
                                    {a.bankFileName ? (
                                      <button onClick={() => openOverrideFilePreview(a)} className="text-[14px] text-[#0072ce] flex items-center gap-1.5 font-medium hover:underline active:scale-95 transition-all max-w-[120px]" title={a.bankFileName}>
                                        <Eye size={12} className="shrink-0" />
                                        <span className="truncate">{a.bankFileName}</span>
                                      </button>
                                    ) : (
                                      <button onClick={() => handleFileUpload(a.id, 'override')} className="text-[14px] text-[#0072ce] flex items-center gap-1.5 font-medium hover:underline active:scale-95 transition-all">
                                        <Upload size={12} /> Upload File
                                      </button>
                                    )}
                                  </div>
                                )}
                              </div>
                            ))}
                            {/* Add Row */}
                            <div className={`bg-white h-11 flex items-center px-4 ${ci === 0 ? 'rounded-bl-[4px]' : ''} ${ci === overrideAttachmentColumns.length - 1 ? 'rounded-br-[4px]' : ''}`}>
                              {ci === 0 && (
                                <button onClick={handleOverrideAddAttachment} className="flex items-center gap-2 text-[14px] text-[#4297dd] font-medium active:scale-95 transition-transform">
                                  <Plus size={12} className="text-[#4297dd]" />
                                  Add Attachments
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                        {/* Delete Column */}
                        <div className="w-[80px] shrink-0 flex flex-col">
                          <div className="bg-[#f3f9fd] h-12 rounded-tr-[4px] border-b border-[#e2e8f0]" />
                          {pagedAttachments.map((a, rowIdx) => (
                            <div key={a.id} className={`${rowIdx % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'} h-12 flex items-center justify-center border-b border-[#e2e8f0]`}>
                              <button onClick={() => handleOverrideDeleteAttachment(a.id)} className="w-6 h-6 rounded-full hover:bg-[#f02b02]/10 flex items-center justify-center active:scale-95 transition-all">
                                <Trash2 size={13} className="text-[#f02b02]" />
                              </button>
                            </div>
                          ))}
                          <div className="bg-white h-11 rounded-br-[4px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-end gap-2">
                <button onClick={handleOverrideCancel} className="h-10 rounded-[4px] border border-[#0072ce] px-4 text-[14px] text-[#0072ce] font-medium active:scale-95 transition-transform">
                  Cancel
                </button>
                <button onClick={handleOverrideSubmit} className="h-10 rounded-[4px] bg-[#0072ce] border border-[#0072ce] px-4 text-[14px] text-white font-medium active:scale-95 transition-transform">
                  Submit
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.png,.jpg,.jpeg,.gif,.webp,.doc,.docx,.xls,.xlsx"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* ═══ File Preview Popup ═══ */}
      {filePreviewOpen && (
        <div className="fixed inset-0 bg-[rgba(0,11,37,0.57)] flex items-center justify-center z-[60]" onClick={() => setFilePreviewOpen(false)}>
          <div className="bg-[#f8fafc] w-[700px] max-w-[90vw] max-h-[85vh] rounded-[8px] border-[1.5px] border-[#e2e8f0] flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Preview Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#e2e8f0]">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-[4px] bg-[rgba(0,114,206,0.08)] flex items-center justify-center shrink-0">
                  {filePreviewType.startsWith('image/') ? (
                    <FileImage size={16} className="text-[#0072ce]" />
                  ) : filePreviewType === 'application/pdf' ? (
                    <FileText size={16} className="text-[#0072ce]" />
                  ) : (
                    <FileIcon size={16} className="text-[#0072ce]" />
                  )}
                </div>
                <span className="text-[16px] text-[#000b25] font-medium truncate">{filePreviewName}</span>
              </div>
              <button onClick={() => setFilePreviewOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#e2e8f0] active:scale-95 transition-all shrink-0">
                <X size={20} className="text-[rgba(0,11,37,0.57)]" />
              </button>
            </div>
            {/* Preview Body */}
            <div className="flex-1 overflow-auto p-4 flex items-center justify-center min-h-[300px]">
              {filePreviewType.startsWith('image/') ? (
                <img src={filePreviewData} alt={filePreviewName} className="max-w-full max-h-[60vh] rounded-[4px] object-contain" />
              ) : filePreviewType === 'application/pdf' ? (
                <iframe src={filePreviewData} title={filePreviewName} className="w-full h-[60vh] rounded-[4px] border border-[#e2e8f0]" />
              ) : (
                <div className="flex flex-col items-center gap-4 text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[rgba(0,114,206,0.08)] flex items-center justify-center">
                    <FileIcon size={28} className="text-[#0072ce]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[16px] text-[#000b25] font-medium">{filePreviewName}</span>
                    <span className="text-[14px] text-[rgba(0,11,37,0.57)]">Preview not available for this file type</span>
                  </div>
                  <a
                    href={filePreviewData}
                    download={filePreviewName}
                    className="h-9 bg-[#0072ce] rounded-[4px] px-4 flex items-center gap-2 text-[12px] text-white font-medium active:scale-95 transition-transform"
                  >
                    <ArrowRight size={12} /> Download File
                  </a>
                </div>
              )}
            </div>
            {/* Preview Footer */}
            <div className="flex items-center justify-end gap-2 p-4 border-t border-[#e2e8f0]">
              <a
                href={filePreviewData}
                download={filePreviewName}
                className="h-9 rounded-[4px] border border-[#0072ce] px-4 flex items-center gap-2 text-[12px] text-[#0072ce] font-medium active:scale-95 transition-transform"
              >
                <ArrowRight size={12} /> Download
              </a>
              <button onClick={() => setFilePreviewOpen(false)} className="h-9 rounded-[4px] bg-[#0072ce] border border-[#0072ce] px-4 flex items-center gap-2 text-[12px] text-white font-medium active:scale-95 transition-transform">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Smart Buttons Row ──
const smartButtons = [
  { name: 'Contracts', icon: Briefcase, count: 0 },
  { name: 'Products', icon: Package, count: 2 },
  { name: 'Invoices', icon: FileText },
  { name: 'Tickets', icon: Ticket, count: 0 },
  { name: 'Attendance Shifts', icon: CalendarCheck },
  { name: 'Linked Device', icon: Laptop, count: 0 },
];

function SmartButtonsRow() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? smartButtons : smartButtons.slice(0, 5);
  return (
    <div className="bg-white rounded-[4px] border border-[#e2e8f0] flex">
      <div className="flex-1 grid grid-cols-5 gap-4 p-4">
        {visible.map(({ name, icon: Icon, count }) => (
          <button
            key={name}
            className="h-10 rounded-[4px] border border-[#e2e8f0] flex items-center gap-2 px-4 relative hover:bg-[#eef5fd] hover:border-[#90c2f0] active:scale-95 transition-all"
          >
            <Icon size={14} className="text-[rgba(0,11,37,0.57)]" />
            <span className="text-[14px] text-[rgba(0,11,37,0.57)] truncate">{name}</span>
            {count !== undefined && (
              <span className="absolute -top-2 left-1 bg-[#0072ce] text-white text-[10px] px-1 py-[1px] rounded-full">{count}</span>
            )}
          </button>
        ))}
      </div>
      <button onClick={() => setExpanded(e => !e)} className="border-l border-[#e2e8f0] w-12 flex items-center justify-center">
        {expanded
          ? <ChevronUp size={16} className="text-[rgba(0,11,37,0.64)]" />
          : <ChevronDown size={16} className="text-[rgba(0,11,37,0.64)]" />}
      </button>
    </div>
  );
}

// ── Field Component ──
function InfoField({ label, value, className = '' }: { label: string; value: string; className?: string }) {
  return (
    <div className={`bg-[#f5f5f5] rounded-[4px] flex-1 p-3 flex flex-col gap-2 ${className}`}>
      <span className="text-[14px] text-[rgba(0,11,37,0.64)]">{label}</span>
      <span className="text-[14px] text-[#000b25] font-medium">{value}</span>
    </div>
  );
}

// ── Channel Member Header ──
function ChannelMemberHeader() {
  return (
    <div className="bg-white rounded-[4px] border border-[#e2e8f0] p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-[17px] text-[#000b25] font-medium">Channel Member Name</span>
        <span className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[4px] px-2 py-1 text-[12px] text-[#4297dd] font-medium">Operator</span>
      </div>
      <div className="flex gap-2">
        <InfoField label="Code" value="5456589" />
        <InfoField label="Reporting to" value="Omer Khaled" />
        <InfoField label="Phone Number" value="07789565" />
        <InfoField label="Email" value="654165444" />
      </div>
    </div>
  );
}

// ── Area Manager / Dealer Support Cards ──
function DealerCard({ title, dealerName }: { title: string; dealerName: string }) {
  return (
    <div className="bg-white rounded-[4px] border border-[#e2e8f0] p-4 flex flex-col gap-4">
      <span className="text-[17px] text-[#000b25] font-medium">{title}</span>
      <div className="bg-[#f5f5f5] rounded-[4px] p-4 flex flex-col gap-3">
        <span className="text-[14px] text-[rgba(0,11,37,0.64)]">{dealerName}</span>
        <div className="flex gap-2">
          <div className="flex-1 flex items-center gap-2">
            <Phone size={12} className="text-[rgba(0,11,37,0.57)]" />
            <span className="text-[14px] text-[#000b25] font-medium">5456589</span>
          </div>
          <div className="flex-1 flex items-center gap-2">
            <Mail size={12} className="text-[rgba(0,11,37,0.57)]" />
            <span className="text-[14px] text-[#000b25] font-medium">5456589</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── E-Wallet Wallet Card ──
function WalletCard({ label }: { label: string }) {
  return (
    <div className="bg-[#f3f9fd] rounded-[4px] flex-1 p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[14px] text-[#000b25] font-bold">{label}</span>
        <span className="border border-[#0072ce] rounded-full px-2 py-[1px] text-[12px] text-[#0072ce] font-medium">Label</span>
      </div>
      <div className="flex items-center gap-1 mb-1">
        <span className="bg-[#e6f7f7] border border-[#ededed] rounded-[2px] px-1 py-[1px] text-[12px] text-[#00b0b2]">+</span>
        <span className="text-[12px] text-[#000b25] font-medium">123.333 OMR</span>
      </div>
      <p className="text-[12px] text-[rgba(0,11,37,0.64)]">Ooredoo</p>
      <p className="text-[12px] text-[rgba(0,11,37,0.64)]">Manager name</p>
    </div>
  );
}

function EWalletSection() {
  return (
    <div className="bg-white rounded-[4px] border border-[#e2e8f0] p-4 flex flex-col gap-4 flex-1">
      <div className="flex items-center justify-between">
        <span className="text-[17px] text-[#000b25] font-medium">E - Wallet Account</span>
        <button className="text-[14px] text-[#0072ce] font-medium active:scale-95 transition-transform">View all</button>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <WalletCard label="Wallet" />
          <WalletCard label="Wallet" />
        </div>
        <div className="flex gap-2">
          <WalletCard label="Wallet" />
          <WalletCard label="Wallet" />
        </div>
      </div>
    </div>
  );
}

// ── Latest Commission Details ──
function LatestCommissionDetails() {
  const [activePlan, setActivePlan] = useState('Plan 1');
  return (
    <div className="bg-white rounded-[4px] border border-[#e2e8f0] p-4 flex flex-col gap-4 flex-1">
      <div className="flex items-center justify-between">
        <span className="text-[17px] text-[#000b25] font-medium">Latest Commission Details</span>
        <button className="text-[14px] text-[#0072ce] font-medium active:scale-95 transition-transform">History</button>
      </div>
      {/* Unpaid Commission Card */}
      <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[4px] p-3 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-[14px] text-[#000b25]">Unpaid Commission</span>
          <div className="flex items-end gap-1">
            <span className="text-[19px] text-[#b93815] font-medium">658.56</span>
            <span className="text-[14px] text-[#b93815] font-medium pb-[1px]">OMR</span>
          </div>
        </div>
        {/* Wallet icon placeholder */}
        <div className="w-9 h-4 opacity-60">
          <svg viewBox="0 0 36 15" fill="none" className="w-full h-full">
            <rect width="36" height="15" rx="3" fill="#FABA97" opacity="0.4" />
          </svg>
        </div>
      </div>
      {/* Plan Tabs */}
      <div className="bg-[#f1f5f9] rounded-[4px] flex gap-[2px] p-1">
        {['Plan 1', 'Plan 2', 'Plan 3'].map(plan => (
          <button
            key={plan}
            onClick={() => setActivePlan(plan)}
            className={`flex-1 py-2 rounded-[4px] text-[14px] text-center transition-all active:scale-95 ${
              activePlan === plan
                ? 'bg-white border border-[#0072ce] text-[#0072ce] font-medium'
                : 'text-[rgba(0,11,37,0.64)]'
            }`}
          >
            {plan}
          </button>
        ))}
      </div>
      {/* Metrics */}
      <div className="flex gap-2">
        <div className="flex-1 bg-[#fafaff] border border-[#ebe9fe] rounded-[4px] flex flex-col items-center justify-center py-3 gap-2">
          <span className="text-[14px] text-[rgba(0,11,37,0.64)]">Target</span>
          <span className="text-[14px] text-[#7a5af8] font-medium">536 OMR</span>
        </div>
        <div className="flex-1 bg-[#edfcf2] border border-[#d3f8df] rounded-[4px] flex flex-col items-center justify-center py-3 gap-2">
          <span className="text-[14px] text-[rgba(0,11,37,0.64)]">Achieved %</span>
          <span className="text-[14px] text-[#087443] font-medium">65%</span>
        </div>
        <div className="flex-1 bg-[#f3f9fd] border border-[#dbedf8] rounded-[4px] flex flex-col items-center justify-center py-3 gap-2">
          <span className="text-[14px] text-[rgba(0,11,37,0.64)]">Commission</span>
          <span className="text-[14px] text-[#0072ce] font-medium">Edit OMR</span>
        </div>
      </div>
    </div>
  );
}

// ── Channel Member Details ──
const inputCls = 'w-full h-10 px-3 rounded-[4px] border border-[#e2e8f0] bg-white text-[14px] text-[#000b25] outline-none focus:border-[#0072ce]';

function FormField({ label, children, help }: { label: string; children: React.ReactNode; help?: boolean }) {
  return (
    <label className="flex flex-col gap-1 min-w-0">
      <span className="text-[12px] text-[rgba(0,11,37,0.64)]">{label}{help && <sup className="ml-0.5">?</sup>}</span>
      {children}
    </label>
  );
}

function FormSection({ title }: { title: string }) {
  return (
    <div className="bg-[#f8fafc] border-l-[3px] border-[#90c2f0] px-3 py-2 text-[14px] text-[#000b25] font-medium">{title}</div>
  );
}

function ChannelMemberDetails({ onOpenHierarchySettings, showHierarchyView = true }: { onOpenHierarchySettings?: () => void; showHierarchyView?: boolean }) {
  const [showParents, setShowParents] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-[17px] text-[#000b25] font-medium">Channel Member Details</span>
        <div className="flex items-center gap-2">
          {showHierarchyView && (
            <div className="relative group">
              <button
                onClick={() => setShowParents(true)}
                aria-describedby="hierarchy-view-tip"
                className="h-9 px-3 rounded-[4px] bg-[#eef5fd] text-[14px] text-[#0072ce] font-medium flex items-center gap-2 hover:bg-[#dbeafb] active:scale-95 transition-all"
              >
                <ListTree size={16} /> Hierarchy View
                <span className="bg-[#0072ce] text-white text-[11px] px-1.5 rounded-full">{parents.length - 1}</span>
              </button>
              <div
                id="hierarchy-view-tip"
                role="tooltip"
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 z-40 whitespace-nowrap rounded-[4px] bg-[#000b25] px-3 py-1.5 text-[12px] text-white shadow-lg opacity-0 transition-opacity duration-150 group-hover:opacity-100"
              >
                It will show this member's position in the hierarchy
              </div>
            </div>
          )}
          <div className="relative group">
            <button
              aria-disabled="true"
              aria-describedby="hierarchy-settings-tip"
              className="h-9 px-3 rounded-[4px] bg-[#eef5fd] text-[14px] text-[#0072ce] font-medium flex items-center gap-2 cursor-default"
            >
              <Network size={16} /> Hierarchy Settings
            </button>
            <div
              id="hierarchy-settings-tip"
              role="tooltip"
              className="pointer-events-none absolute right-0 top-full mt-2 z-40 whitespace-nowrap rounded-[4px] bg-[#000b25] px-3 py-1.5 text-[12px] text-white shadow-lg opacity-0 translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0"
            >
              It will open the hierarchy type page
            </div>
          </div>
        </div>
      </div>
      <ChannelMemberParentsDrawer isOpen={showParents} onClose={() => setShowParents(false)} />
      <div className="bg-white rounded-[4px] border border-[#e2e8f0] p-4 flex flex-col gap-4">
        <FormSection title="Account Management" />
        <div className="grid grid-cols-3 gap-x-4 gap-y-3">
          <SelectField label="Account Manager" value="Omer Khaled" disabled />
          <SelectField label="Regional Account Manager" value="Yousef Qat" disabled />
          <SelectField label="Outlet Type" value="Kiosk" disabled />
        </div>

        <FormSection title="Member Information" />
        <div className="grid grid-cols-3 gap-x-4 gap-y-3">
          <ReadonlyField label="Member Code" value="5456589" />
          <TextField label="Name" value="aaaz" />
          <TextField label="Phone" value="966554444443" />
        </div>

        <FormSection title="Organization Details" />
        <div className="grid grid-cols-3 gap-x-4 gap-y-3">
          <SelectField label="Store Name" value="tet" options={['Store A', 'Store B']} />
          <TextField label="Organization ID" value="21323" />
          <TextField label="Commercial Registration (CR)" value="tes" />
          <TextField label="CR Expiry Date" type="date" value="2026-10-13" />
          <TextField label="Municipality License Expiry Date" type="date" value="2026-10-15" />
          <TextField label="Bank IBAN Proof" value="SA0380000000608010167519" />
          <TextField label="Owner Name" value="Khaled Al Harbi" />
          <TextField label="Owner Civil ID" value="21321" />
          <TextField label="Email" value="ss@gmail.com" />
        </div>
        <FormField label="National Address">
          <textarea className={`${inputCls} h-[72px] py-2 font-normal resize-none`} defaultValue="Makkah, Al Aziziyah, Prince Sultan Street, Building 8218" />
        </FormField>
      </div>
    </div>
  );
}

function TextField({ label, value = '', type = 'text' }: { label: string; value?: string; type?: string }) {
  return (
    <FormField label={label}>
      <input type={type} className={inputCls} defaultValue={value} />
    </FormField>
  );
}

// ── Profile Settings ──
function SelectField({ label, value = '', options = [], disabled, help }: { label: string; value?: string; options?: string[]; disabled?: boolean; help?: boolean }) {
  return (
    <FormField label={label} help={help}>
      <div className="relative">
        <select disabled={disabled} className={`${inputCls} appearance-none pr-8 disabled:bg-[#f5f5f5] disabled:text-[rgba(0,11,37,0.4)] disabled:cursor-not-allowed`} defaultValue={value}>
          <option value="" />
          {[...new Set([value, ...options].filter(Boolean))].map(o => <option key={o}>{o}</option>)}
        </select>
        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[rgba(0,11,37,0.64)]" />
      </div>
    </FormField>
  );
}

function ReadonlyField({ label, value = '' }: { label: string; value?: string }) {
  return (
    <FormField label={label}>
      <input readOnly className={`${inputCls} !bg-[#f5f5f5] cursor-default`} defaultValue={value} />
    </FormField>
  );
}

function ProfileSettings() {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <span className="text-[17px] text-[#000b25] font-medium">Profile Settings</span>
      <div className="bg-white rounded-[4px] border border-[#e2e8f0] p-4 flex flex-col gap-4">
        <FormSection title="Hierarchy & Organization" />
        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
          <SelectField label="Hierarchy Type" value="Point of Sales Store" />
          <ReadonlyField label="Related User" />
        </div>
      </div>
    </div>
  );
}

// ── Channel Member Parents ──
const parents = [
  { letter: 'O', name: 'Operator', role: 'BeyondOne Sales Channels', color: '#0072ce' },
  { letter: 'A', name: 'Abdel Lateef Azzuni', role: 'Sales Support / Channels Directors', color: '#1d9a9a' },
  { letter: 'A', name: 'Ayoub', role: 'Indirect Sales Channels Mobile Shops', color: '#0072ce' },
  { letter: 'Z', name: 'Zakaria Mohammad Hassan AlMulla', role: 'Regional Manager(Indirect Sales)', color: '#0072ce' },
  { letter: 'Y', name: 'Yousef qat', role: 'Account Manager / Supervisor', color: '#2a8f8f' },
  { letter: 'A', name: 'Ahmad Raed', role: 'Distributors', color: '#16b364' },
  { letter: 'S', name: 'Sales Rep1', role: 'Sales Rep', color: '#5b4b9a' },
  { letter: 'A', name: 'aaaz', role: 'Point of Sales Store', color: '#1d9a9a', active: true },
];

function HierarchyTree() {
  return (
    <div className="relative flex flex-col gap-4">
      {/* Vertical connector through the avatars */}
      <div className="absolute left-[28px] top-6 bottom-[88px] w-px bg-[#c7d2e0]" />
      {parents.map((p, i) => (
        <div
          key={i}
          className={`relative flex items-center gap-3 rounded-[4px] px-3 py-2 ${
            p.active ? 'ml-8 bg-[#eef5fd] border border-[#90c2f0]' : 'bg-[#f5f5f5]'
          }`}
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[12px] shrink-0" style={{ backgroundColor: p.color }}>
            {p.letter}
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[13px] text-[#000b25] font-medium truncate">{p.name}</span>
            <span className="text-[11px] text-[rgba(0,11,37,0.57)] truncate">{p.role}</span>
          </div>
          {p.active && <ChevronsDown size={16} className="ml-auto text-[rgba(0,11,37,0.64)]" />}
        </div>
      ))}
    </div>
  );
}

function ChannelMemberParentsDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end bg-black/40 transition-opacity duration-300 ease-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        className={`w-[420px] max-w-full h-full bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="px-5 py-4 border-b border-[#e2e8f0] flex items-center justify-between">
          <div>
            <h2 className="text-[17px] text-[#000b25] font-medium">Hierarchy View</h2>
            <p className="text-[12px] text-[rgba(0,11,37,0.64)] mt-0.5">{parents.length - 1} levels above this member</p>
          </div>
          <button onClick={onClose} aria-label="Close" className="text-[rgba(0,11,37,0.64)] hover:text-[#000b25] active:scale-95 transition-all">
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          <HierarchyTree />
        </div>
      </div>
    </div>
  );
}

// ── Upload Document ──
function UploadDocument() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-[17px] text-[#000b25] font-medium">Upload Document</span>
        <button className="flex items-center gap-2 text-[14px] text-[#0072ce] font-medium active:scale-95 transition-transform">
          View All <ArrowRight size={14} />
        </button>
      </div>
      <div className="bg-white rounded-[4px] border border-[#e2e8f0] p-4 flex flex-col gap-4">
        {/* Upload controls */}
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <div className="bg-white border border-[#e5e7eb] rounded-[4px] h-[38px] flex items-center px-3 justify-between">
              <span className="text-[16px] text-[rgba(0,11,37,0.57)]">Select document type</span>
              <ChevronDown size={16} className="text-[#000b25]" />
            </div>
          </div>
          <button className="bg-[#f3f4f6] border border-[#e1e1e1] rounded-[4px] h-10 px-4 flex items-center gap-2 text-[14px] text-[rgba(0,11,37,0.57)] font-medium active:scale-95 transition-transform">
            <Upload size={14} />
            upload
            <ChevronDown size={14} />
          </button>
        </div>
        {/* Empty upload zone */}
        <div className="border border-dashed border-[#8dc1ec] bg-[#f8fafc] rounded-[4px] h-[182px] flex flex-col items-center justify-center gap-4">
          <div className="bg-[#f5f5f5] w-[60px] h-[60px] rounded-[12px] flex items-center justify-center">
            <FileText size={30} className="text-[#9e9e9e]" />
          </div>
          <span className="text-[14px] text-[rgba(0,11,37,0.64)] font-medium">No Document found</span>
          <span className="text-[12px] text-[rgba(0,11,37,0.64)] text-center">
            Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Locality Settings ──
function LocalitySettings() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline gap-3">
        <span className="text-[17px] text-[#000b25] font-medium">Locality Settings</span>
        <span className="text-[12px] text-[rgba(0,11,37,0.57)]">Read-only, inherited from parent store</span>
      </div>
      <div className="bg-white rounded-[4px] border border-[#e2e8f0] p-4 grid grid-cols-3 gap-x-4 gap-y-3">
        <SelectField label="Region" value="Western Region" disabled />
        <SelectField label="Governorate" value="Makkah" disabled />
        <SelectField label="City" value="Makkah" disabled />
        <SelectField label="District" value="Al Aziziyah" disabled />
        <ReadonlyField label="Landmark" value="Near Central Market" />
      </div>
    </div>
  );
}

// ── Configuration Settings ──
const configTabs = ['User Management', 'Location and Address', 'Financial And Sales', 'Settings And Miscellaneous', 'KPI Configuration', 'Commission Criteria'];
const nestedTabs = ['Sales App Rights Group', 'Additional Users', 'Widgets'];

function ConfigurationSettings() {
  const [activeConfigTab, setActiveConfigTab] = useState('User Management');
  const [activeNestedTab, setActiveNestedTab] = useState('Sales App Rights Group');

  return (
    <div className="flex flex-col gap-4">
      <span className="text-[17px] text-[#000b25] font-medium">Configuration Settings</span>
      <div className="bg-white rounded-[4px] border border-[#e2e8f0] p-4 flex flex-col gap-6">
        {/* Top Tabs */}
        <div className="bg-[#f1f5f9] rounded-[4px] flex items-center gap-2 px-2 py-1">
          <button className="bg-[#dbedf8] border border-[#dbedf8] w-8 h-8 rounded-full flex items-center justify-center active:scale-95 transition-transform">
            <ChevronLeft size={14} className="text-[#0072ce]" />
          </button>
          <div className="flex-1 flex gap-[2px]">
            {configTabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveConfigTab(tab)}
                className={`flex-1 py-2 px-4 rounded-[4px] text-[14px] text-center transition-all active:scale-95 whitespace-nowrap ${
                  activeConfigTab === tab
                    ? 'bg-white border border-[#0072ce] text-[#0072ce] font-medium'
                    : 'text-[rgba(0,11,37,0.64)]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button className="bg-[#dbedf8] border border-[#dbedf8] w-8 h-8 rounded-full flex items-center justify-center active:scale-95 transition-transform">
            <ChevronRight size={14} className="text-[#0072ce]" />
          </button>
        </div>

        {/* User Management Content */}
        <div className="bg-[#f8fafc] rounded-[4px] border border-[#e2e8f0] px-3 py-4 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-[16px] text-[#000b25] font-medium">User Management</span>
            <span className="text-[14px] text-[rgba(0,11,37,0.64)]">Configure user roles, permissions, and access controls</span>
          </div>
          {/* Nested Tabs */}
          <div className="bg-white border border-[#e2e8f0] rounded-[4px] flex gap-[2px] p-1">
            {nestedTabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveNestedTab(tab)}
                className={`flex-1 py-2 rounded-[4px] text-[14px] text-center transition-all active:scale-95 ${
                  activeNestedTab === tab
                    ? 'bg-[#0072ce] text-white font-medium'
                    : 'text-[rgba(0,11,37,0.64)]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Table */}
          <div className="bg-white border border-[#e2e8f0] rounded-[4px] overflow-hidden">
            <div className="bg-[#f3f9fd] px-4 py-3 border-b border-[#e2e8f0]">
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-[#000b25] font-medium">Name</span>
                <ChevronDown size={10} className="text-[#000b25]" />
              </div>
            </div>
            <div className="px-4 py-3">
              <button className="text-[14px] text-[#4297dd] font-medium active:scale-95 transition-transform">Add a line</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Profile Component ──
export function SalesTeamProfile({ onOpenHierarchySettings, variant = 1 }: { onOpenHierarchySettings?: () => void; variant?: 1 | 2 } = {}) {
  return (
    <div className="h-full overflow-y-auto custom-scrollbar-profile">
      <div className="min-w-[1040px] bg-[#f5f6fa] p-6 flex flex-col gap-6">
        {/* Action Bar + Status */}
        <div className="bg-white rounded-[4px] border border-[#e2e8f0] p-4 shadow-[0_3px_10px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-4">
            <div className="flex gap-2 shrink-0">
              <button className="h-10 px-4 rounded-[4px] bg-[#e8f8ef] text-[14px] text-[#0f9d58] font-medium hover:bg-[#c9eedb] active:scale-95 transition-all">
                Approve
              </button>
              <button className="h-10 px-4 rounded-[4px] bg-[#fdecea] text-[14px] text-[#d93025] font-medium hover:bg-[#f9cfca] active:scale-95 transition-all">
                Reject
              </button>
            </div>
            <StatusBar />
          </div>
        </div>

        {/* Smart Buttons */}
        <div className="shadow-[0_3px_10px_rgba(0,0,0,0.05)]">
          <SmartButtonsRow />
        </div>

        {/* Channel Member Details */}
        {variant === 2 ? (
          <div className="grid grid-cols-[2fr_1fr] items-start gap-4">
            <ChannelMemberDetails onOpenHierarchySettings={onOpenHierarchySettings} showHierarchyView={false} />
            <div className="flex flex-col gap-2">
              <div className="flex items-center h-9">
                <span className="text-[17px] text-[#000b25] font-medium">Hierarchy</span>
              </div>
              <div className="bg-white rounded-[4px] border border-[#e2e8f0] p-4">
                <HierarchyTree />
              </div>
            </div>
          </div>
        ) : (
          <ChannelMemberDetails onOpenHierarchySettings={onOpenHierarchySettings} />
        )}

        {/* Upload Document */}
        <UploadDocument />

        {/* Configuration Settings */}
        <ConfigurationSettings />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar-profile::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar-profile::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar-profile::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar-profile::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}} />
    </div>
  );
}
