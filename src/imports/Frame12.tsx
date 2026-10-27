function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] opacity-70 relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Action Configuration
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px px-0 py-[8px] relative">
      <Frame2 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex gap-[8px] items-center relative size-full">
      <div className="flex flex-row items-center self-stretch">
        <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="flex-none h-full rotate-[90deg]">
            <div className="h-full relative w-[33px]">
              <div className="absolute inset-[-1px_-3.03%]" style={{ "--stroke-0": "rgba(141, 193, 236, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 2">
                  <path d="M1 1H34" id="Line 1" stroke="var(--stroke-0, #8DC1EC)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame />
      </div>
    </div>
  );
}