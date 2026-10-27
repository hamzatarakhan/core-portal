export default function SmartButton() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] relative rounded-[4px] size-full" data-name="Smart button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[14px]" data-name="Circle">
        <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center w-full">
          <p className="leading-[normal]">users</p>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[14px] text-[rgba(0,11,37,0.57)] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] overflow-hidden text-ellipsis">Users Linked</p>
      </div>
      <div className="absolute bg-[#0072ce] content-stretch flex items-center justify-center left-[4px] overflow-clip px-[4px] py-[2px] rounded-[160px] top-[-8px]" data-name="Badge">
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[1.2]">16</p>
        </div>
      </div>
    </div>
  );
}