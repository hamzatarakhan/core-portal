type TitleProps = {
  text: string;
  text1: string;
};

function Title({ text, text1 }: TitleProps) {
  return (
    <div className="bg-[#f8fafc] content-stretch flex gap-[8px] items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] text-nowrap">
        <p className="leading-[normal]">{text}</p>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[12px] text-nowrap" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text1}
      </p>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-gradient-to-r from-[#f4f4f5] relative rounded-[8px] size-full to-[rgba(218,215,246,0.51)] via-[#f4f4f5] via-[50.481%]" data-name="Card">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center overflow-clip px-[24px] py-[16px] relative size-full">
          <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
            <div className="bg-[#000000] content-stretch flex items-center justify-center relative rounded-[32px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] shrink-0" data-name="Icon">
              <div className="absolute content-stretch flex items-center left-[10px] top-[10px]" data-name="Rectangle">
                <div className="relative shrink-0 size-[20px]" data-name="rectangle">
                  <p className="absolute font-['Font_Awesome_6_Pro:Solid',sans-serif] inset-0 leading-[normal] not-italic text-[20px] text-center text-nowrap text-white"></p>
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Details">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Value">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <div className="content-stretch flex items-start relative shrink-0" data-name="price">
                    <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Cycle Name
                    </p>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Title">
                    <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-nowrap">
                      <p className="leading-[normal]"></p>
                    </div>
                  </div>
                </div>
                <div className="bg-white content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Request status">
                  <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#ef4444] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Failed
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                <Title text="" text1="Oct 1, 2024 - Dec 31, 2024" />
                <Title text="users" text1="45 members" />
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
              <div className="content-stretch flex items-start relative shrink-0" data-name="text">
                <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Executed Date:
                </p>
              </div>
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Text">
                <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[16px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Jan 5, 2025 at 2:30 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_3px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}