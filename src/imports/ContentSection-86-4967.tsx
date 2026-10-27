function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cycle Schedule
      </p>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="left">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Text />
      </div>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center relative shrink-0 w-full" data-name="Section-title">
      <Left />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px]"></p>
    </div>
  );
}

function Textfield() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-px relative text-[#000b25] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Scheduled Cycle
          </p>
          <Icon />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[1.2]">{`Cycle Type  `}</span>
        <span className="leading-[1.2] text-[#ef4444]">*</span>
      </p>
      <Textfield />
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px]"></p>
    </div>
  );
}

function Textfield2() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-px relative text-[#000b25] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Quarterly
          </p>
          <Icon1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[1.2]">{`Frequency `}</span>
        <span className="leading-[1.2] text-[#ef4444]">*</span>
      </p>
      <Textfield2 />
    </div>
  );
}

function ContentContactInformation() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <Textfield1 />
      <Textfield3 />
    </div>
  );
}

function Textfield4() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-px relative text-[#000b25] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            25
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[1.2]">{`Cycle Day `}</span>
        <span className="leading-[1.2] text-[#ef4444]">*</span>
      </p>
      <Textfield4 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px]">calendar</p>
    </div>
  );
}

function Textfield6() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-px relative text-[#000b25] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`2024/11/15 `}</p>
          <Icon2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[1.2]">{`Publish Date `}</span>
        <span className="leading-[1.2] text-[#ef4444]">*</span>
      </p>
      <Textfield6 />
    </div>
  );
}

function ContentContactInformation1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <Textfield5 />
      <Textfield7 />
    </div>
  );
}

function ContentBasicInformation() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Content - Basic Information">
      <ContentContactInformation />
      <ContentContactInformation1 />
    </div>
  );
}

function SectionBody() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <ContentBasicInformation />
      </div>
    </div>
  );
}

export default function ContentSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full" data-name="Content-section">
      <SectionTitle />
      <SectionBody />
    </div>
  );
}