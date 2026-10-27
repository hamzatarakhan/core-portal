function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Linked Plans
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#000000] content-stretch flex gap-[8px] h-[40px] items-center justify-center leading-[0] px-[16px] py-0 relative rounded-[4px] shrink-0 text-[14px] text-white" data-name="Button">
      <div className="css-g0mm18 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0 text-center">
        <p className="css-ew64yg leading-[normal]">plus</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">Add Plans</p>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="left">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Text />
      </div>
      <Button />
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#e2e8f0] content-stretch flex items-center justify-center p-[12.5px] relative rounded-[26.667px] shrink-0 size-[50px]" data-name="Icon">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[25px] text-[18px] text-[rgba(0,11,37,0.57)] text-center">
        <p className="css-4hzbpn leading-[normal]" dir="auto">
          Plus
        </p>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="Section">
      <Icon />
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        No plans added to this cycle yet
      </p>
    </div>
  );
}

function SupportedFormats() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Supported formats">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[12px] text-[rgba(0,11,37,0.64)] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.2]">To calculate results for this cycle, link one or more commission plans. Use the Add Plans button to select and attach them.</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Section />
      <SupportedFormats />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-dashed inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function SectionBody() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <Frame />
      </div>
    </div>
  );
}

export default function ResultColumns() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full" data-name="Result Columns">
      <Left />
      <SectionBody />
    </div>
  );
}