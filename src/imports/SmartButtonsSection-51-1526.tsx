type SegmentedTextProps = {
  text: string;
};

function SegmentedText({ text }: SegmentedTextProps) {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center justify-center px-[24px] py-[8px] relative rounded-[4px] shrink-0">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

export default function SmartButtonsSection() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[4px] shadow-[0px_3px_20px_0px_rgba(0,0,0,0.05)] size-full" data-name="Smart Buttons Section">
      <div className="relative rounded-[4px] shrink-0 w-full" data-name="Group">
        <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="CTA">
              <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="CTA">
                <div className="content-stretch flex items-start relative shrink-0" data-name="Buttons">
                  <div className="bg-[rgba(240,43,2,0.05)] content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[4px] shrink-0" data-name="Button">
                    <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f02b02] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.2]">Reject</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f0fdf4] content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[4px] shrink-0" data-name="Button">
                  <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#22c55e] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.2]" dir="auto">
                      Approve
                    </p>
                  </div>
                </div>
                <div className="flex h-[39px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
                  <div className="flex-none rotate-[90deg]">
                    <div className="h-0 relative w-[39px]">
                      <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(226, 232, 240, 1)" } as React.CSSProperties}>
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 1">
                          <line id="Line 7" stroke="var(--stroke-0, #E2E8F0)" strokeLinecap="round" x1="0.5" x2="38.5" y1="0.5" y2="0.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#fff7ed] content-stretch flex gap-[8px] h-[40px] items-center justify-center leading-[0] px-[16px] py-0 relative rounded-[4px] shrink-0 text-[#f97316] text-[14px] text-nowrap" data-name="Button">
                  <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0 text-center">
                    <p className="leading-[normal] text-nowrap"></p>
                  </div>
                  <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.2] text-nowrap">Rerun</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#e1e1e1] content-stretch flex gap-[2px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Segmented control">
              <div className="bg-white content-stretch flex flex-col h-[33px] items-start relative shrink-0 w-[113px]">
                <div className="absolute content-stretch flex gap-[4px] h-[33px] items-center justify-center left-0 px-[24px] py-[8px] rounded-[4px] top-0" data-name="Segmented">
                  <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#0071cd] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Pending
                  </p>
                </div>
                <div className="absolute left-[97px] size-[16px] top-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d="M0 0H16V16L7.5 7.5L0 0Z" fill="var(--fill-0, #E1E1E1)" id="Rectangle 20" />
                  </svg>
                </div>
                <div className="absolute flex h-[17px] items-center justify-center left-[97px] top-[16px] w-[16px]">
                  <div className="flex-none scale-y-[-100%]">
                    <div className="h-[17px] relative w-[16px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17">
                        <path d="M0 0H16V17L7.5 7.96875L0 0Z" fill="var(--fill-0, #E1E1E1)" id="Rectangle 21" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <SegmentedText text="Running" />
              </div>
              <div className="flex flex-row items-center self-stretch">
                <SegmentedText text="Approved" />
              </div>
              <div className="flex flex-row items-center self-stretch">
                <SegmentedText text="Rejected" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}