import React, { useState } from 'react';
import { User, Wallet, ChevronDown } from 'lucide-react';
import clsx from "clsx";

function Textfield({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white dark:bg-slate-900 h-[38px] relative rounded-[4px] shrink-0 w-full border border-[#d2d2d2] dark:border-slate-700 transition-colors">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="flex gap-[12px] items-center px-[12px] py-0 relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Field({ children, active }: React.PropsWithChildren<{ active?: boolean }>) {
  return (
    <div className={clsx(
      "basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0 border transition-all duration-200",
      active 
        ? "bg-blue-50 dark:bg-blue-900/10 border-blue-500 ring-1 ring-blue-500/10" 
        : "bg-[#f8fafc] dark:bg-slate-900/40 border-[#e2e8f0] dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600"
    )}>
      <div className="flex flex-row items-center size-full">
        <div className="flex items-center p-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Card({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={clsx("basis-0 grow min-h-px relative rounded-[4px] shrink-0 flex items-center gap-4 transition-all", className)}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="flex gap-[16px] items-center p-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

export function DownloadVouchers() {
  const [manipulation, setManipulation] = useState<'increment' | 'deduct'>('increment');

  return (
    <div className="h-full flex flex-col bg-slate-50/30 dark:bg-slate-950/20 animate-in fade-in duration-500">
      <div className="flex-1 overflow-y-auto p-[24px]">
        <div className="w-full space-y-[16px]">
          <div className="flex items-center justify-between">
            <h1 className="text-[17px] font-medium text-slate-900 dark:text-white flex items-center gap-2">
              Download Vouchers
            </h1>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-[#e1e1e1] dark:border-slate-800 rounded-[4px] p-[16px] md:p-[24px] space-y-[20px] md:space-y-[16px]">
            {/* Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] md:gap-[16px]">
              <Card className="bg-[#f5f6fa] dark:bg-slate-800/50">
                <div className="bg-white dark:bg-slate-700 flex items-center justify-center rounded-[4px] shrink-0 size-[42px] border border-slate-100 dark:border-slate-600">
                  <User className="text-[#4297dd]" size={20} />
                </div>
                <div className="flex flex-col gap-1 justify-center min-w-0">
                  <span className="text-[13px] md:text-[14px] text-slate-900 dark:text-slate-400 font-normal truncate">Channel member name</span>
                  <span className="text-[15px] md:text-[17px] font-medium text-slate-900 dark:text-white truncate">Cannel member code</span>
                </div>
              </Card>

              <Card className="bg-[#f5f6fa] dark:bg-slate-800/50">
                <div className="bg-white dark:bg-slate-700 flex items-center justify-center rounded-[4px] shrink-0 size-[42px] border border-slate-100 dark:border-slate-600">
                  <Wallet className="text-[#4297dd]" size={20} />
                </div>
                <div className="flex flex-col gap-1 justify-center min-w-0">
                  <span className="text-[13px] md:text-[14px] text-slate-900 dark:text-slate-400 font-normal truncate">Wallet Balance (wallet name)</span>
                  <span className="text-[15px] md:text-[17px] font-medium text-slate-900 dark:text-white truncate">511.00</span>
                </div>
              </Card>
            </div>

            {/* Manipulation Section */}
            <div className="flex flex-col gap-[16px]">
              <label className="text-[14px] text-slate-900 dark:text-slate-200 font-normal">Balance Manipulation</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] md:gap-[16px]">
                <button onClick={() => setManipulation('increment')} className="text-left w-full focus:outline-none group">
                  <Field active={manipulation === 'increment'}>
                    <div className="flex items-center gap-3">
                      <div className={clsx(
                        "size-[20px] rounded-full border-2 flex items-center justify-center transition-all duration-300",
                        manipulation === 'increment' 
                          ? "border-[#0072ce] bg-white" 
                          : "border-slate-300 dark:border-slate-600 group-hover:border-slate-400"
                      )}>
                        {manipulation === 'increment' && <div className="size-[10px] bg-[#0072ce] rounded-full animate-in zoom-in duration-300" />}
                      </div>
                      <span className={clsx(
                        "text-[14px] font-normal transition-colors",
                        manipulation === 'increment' ? "text-[#000b25] dark:text-blue-300" : "text-[#000b25] dark:text-slate-300"
                      )}>Increment</span>
                    </div>
                  </Field>
                </button>
                <button onClick={() => setManipulation('deduct')} className="text-left w-full focus:outline-none group">
                  <Field active={manipulation === 'deduct'}>
                    <div className="flex items-center gap-3">
                      <div className={clsx(
                        "size-[20px] rounded-full border-2 flex items-center justify-center transition-all duration-300",
                        manipulation === 'deduct' 
                          ? "border-[#0072ce] bg-white" 
                          : "border-slate-300 dark:border-slate-600 group-hover:border-slate-400"
                      )}>
                        {manipulation === 'deduct' && <div className="size-[10px] bg-[#0072ce] rounded-full animate-in zoom-in duration-300" />}
                      </div>
                      <span className={clsx(
                        "text-[14px] font-normal transition-colors",
                        manipulation === 'deduct' ? "text-[#000b25] dark:text-blue-300" : "text-[#000b25] dark:text-slate-300"
                      )}>Deduct</span>
                    </div>
                  </Field>
                </button>
              </div>
            </div>

            {/* Inputs Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[16px]">
              <div className="space-y-2">
                <label className="text-[14px] text-[rgba(0,11,37,0.57)] dark:text-slate-400 font-normal">Denominations</label>
                <Textfield>
                  <span className="flex-1 text-[15px] md:text-[16px] text-[rgba(0,11,37,0.57)] truncate">Select denominations</span>
                  <ChevronDown size={17} className="text-[#000b25]" />
                </Textfield>
              </div>
              <div className="space-y-2">
                <label className="text-[14px] text-[rgba(0,11,37,0.57)] dark:text-slate-400 font-normal">Number of voucher</label>
                <Textfield>
                  <input 
                    type="text" 
                    placeholder="Enter number of voucher" 
                    className="w-full bg-transparent outline-none text-[15px] md:text-[16px] text-slate-900 dark:text-white placeholder:text-[rgba(0,11,37,0.57)]"
                  />
                </Textfield>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              <Card className="bg-[#f3f9fd] dark:bg-blue-900/10">
                <div className="bg-white dark:bg-slate-700 flex items-center justify-center rounded-[4px] shrink-0 size-[42px] border border-slate-100 dark:border-slate-800">
                  <Wallet className="text-[#4297dd]" size={20} />
                </div>
                <div className="flex flex-col gap-1 justify-center min-w-0">
                  <span className="text-[13px] md:text-[14px] text-slate-900 dark:text-slate-400 font-normal truncate">Wallet Balance (OMR)</span>
                  <span className="text-[15px] md:text-[17px] font-medium text-slate-900 dark:text-white">511.00</span>
                </div>
              </Card>
            </div>

            {/* Action Bar */}
            <div className="flex justify-end pt-4 md:pt-6">
              <button className="w-full md:w-auto bg-[#0072ce] hover:bg-[#005fa3] active:scale-[0.98] text-white px-10 h-[44px] md:h-[40px] rounded-[4px] font-medium text-[14px] transition-all">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}