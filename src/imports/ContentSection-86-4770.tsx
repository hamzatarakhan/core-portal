function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cycle Information
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

function Textfield() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-px relative text-[#000b25] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Cycle Name
          </p>
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
        <span className="leading-[1.2]">{`Cycle Name `}</span>
        <span className="leading-[1.2] text-[#ef4444]">*</span>
      </p>
      <Textfield />
    </div>
  );
}

function ContentContactInformation() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <Textfield1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Active Cycle
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Turn on to make this cycle the active one for commissions
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Handle() {
  return <div className="bg-white rounded-[160px] shrink-0 size-[16px]" data-name="Handle" />;
}

function Toggle() {
  return (
    <div className="bg-[#bebebe] content-stretch flex h-[24px] items-center justify-end px-[4px] py-[2px] relative rounded-[160px] w-[40px]" data-name="Toggle">
      <Handle />
    </div>
  );
}

function Toggle1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Toggle">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Toggle />
        </div>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] h-[63px] min-h-px min-w-px relative rounded-[4px]" data-name="field">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <Frame />
          <Toggle1 />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        External Calculation
      </p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Commission for this cycle will be calculated using external Airflow.
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Handle1() {
  return <div className="bg-white rounded-[160px] shrink-0 size-[16px]" data-name="Handle" />;
}

function Toggle2() {
  return (
    <div className="bg-[#bebebe] content-stretch flex h-[24px] items-center justify-end px-[4px] py-[2px] relative rounded-[160px] w-[40px]" data-name="Toggle">
      <Handle1 />
    </div>
  );
}

function Toggle3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Toggle">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Toggle2 />
        </div>
      </div>
    </div>
  );
}

function Field1() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] h-[63px] min-h-px min-w-px relative rounded-[4px]" data-name="field">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <Frame1 />
          <Toggle3 />
        </div>
      </div>
    </div>
  );
}

function ContentContactInformation1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <Field />
      <Field1 />
    </div>
  );
}

function Line() {
  return <div className="bg-[rgba(0,11,37,0.57)] h-px shrink-0 w-[12px]" data-name="Line" />;
}

function Line1() {
  return <div className="bg-[rgba(0,11,37,0.57)] h-px shrink-0 w-[8px]" data-name="Line" />;
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative" data-name="Icon">
      <Line />
      <Line1 />
    </div>
  );
}

function TextfArea() {
  return (
    <div className="bg-white h-[80px] relative rounded-[4px] shrink-0 w-full" data-name="TextfArea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start p-[12px] relative size-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-px relative text-[#000b25] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Summary text  , Summary text  , Summary text `}</p>
          <div className="absolute bottom-[0.17px] flex items-center justify-center right-[-0.31px] size-[11.314px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "126" } as React.CSSProperties}>
            <div className="flex-none rotate-[315deg]">
              <Icon />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Textfield">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Description
      </p>
      <TextfArea />
    </div>
  );
}

function ContentBasicInformation() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Content - Basic Information">
      <ContentContactInformation />
      <ContentContactInformation1 />
      <Textfield2 />
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