export default function Card() {
  return (
    <div className="bg-[#f6fef9] relative rounded-[4px] size-full" data-name="Card">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative" data-name="Wallet balance">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Title">
            <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Credit Limit
            </p>
          </div>
          <div className="content-stretch flex gap-[4px] items-end justify-center relative shrink-0" data-name="Price">
            <div className="content-stretch flex items-start relative shrink-0" data-name="price">
              <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[19px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                1000
              </p>
            </div>
            <div className="content-stretch flex items-end justify-center pb-px relative shrink-0" data-name="price">
              <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[1.2]">OMR</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#dbedf8] relative rounded-[4px] shrink-0" data-name="Button">
          <div aria-hidden="true" className="absolute border border-[#dbedf8] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center leading-[0] p-[8px] relative text-[#0072ce] text-[10px] whitespace-nowrap">
              <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0 text-center">
                <p className="leading-[normal]">edit</p>
              </div>
              <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[1.2]">Change</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d3f8df] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}