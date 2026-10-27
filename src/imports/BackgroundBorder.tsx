import svgPaths from "./svg-6ne8231agq";

export default function BackgroundBorder() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[11px] py-[9px] relative rounded-[6px] size-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e6e9f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
        <div className="relative shrink-0 size-[18px]" data-name="SVG">
          <div className="absolute left-0 size-[18px] top-0" data-name="Group">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <g id="Group">
                <path d="M15.75 15.75L12.495 12.495" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p334b2b00} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] w-[254.7px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">Search</p>
      </div>
    </div>
  );
}