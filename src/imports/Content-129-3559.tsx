import svgPaths from "./svg-tvsydur7bb";

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Action Details `}</p>
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
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Section-title">
      <Left />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px]">angle-down</p>
    </div>
  );
}

function Textfield() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Enter action name
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
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Action Name `}</p>
      <Textfield />
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px]">angle-down</p>
    </div>
  );
}

function Textfield2() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Select a model
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
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Model
      </p>
      <Textfield2 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px overflow-clip relative" data-name="Text">
      <p className="css-ew64yg font-['Roboto:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        After creation
      </p>
    </div>
  );
}

function DropdownField() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Dropdown field">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <Text1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative self-stretch" data-name="Dropdown">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Trigger (after creation)
      </p>
      <DropdownField />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Textfield1 />
      <Textfield3 />
      <Dropdown />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Active Status
      </p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        This action will be active/inactive based on the linked plan status. You can manually override the execution state here.
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Text2 />
      <Text3 />
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
    <div className="bg-[#f8fafc] h-[63px] relative rounded-[4px] shrink-0 w-full" data-name="field">
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

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Field />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Active on Plans
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px px-0 py-[8px] relative">
      <Frame4 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-0 relative rounded-[4px] shrink-0 size-[20px]" data-name="Icon">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <p className="css-ew64yg font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative text-[17px] text-[rgba(0,11,37,0.64)]">angle-down</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f8fafc] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center pl-0 pr-[4px] py-0 relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "21" } as React.CSSProperties}>
              <div className="flex-none h-full rotate-[90deg]">
                <div className="h-full relative w-[33px]">
                  <div className="absolute inset-[-1px_-3.03%]" style={{ "--stroke-0": "rgba(176, 211, 240, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 2">
                      <path d="M1 1H34" id="Line 1" stroke="var(--stroke-0, #B0D3F0)" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Frame1 />
          </div>
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#0072ce] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Hunting - Base
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f3f9fd] content-stretch flex h-[28px] items-center px-[13px] py-px relative rounded-[4px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dbedf8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#0072ce] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          VM CS - Enhanced
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#f3f9fd] content-stretch flex h-[28px] items-center px-[13px] py-px relative rounded-[4px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dbedf8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#0072ce] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          KAM CS
        </p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#f3f9fd] content-stretch flex h-[28px] items-center px-[13px] py-px relative rounded-[4px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dbedf8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Text6 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <Container />
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame3 />
      <Container3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Frame10 />
        <Container4 />
      </div>
    </div>
  );
}

function ContentSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-[3]" data-name="Content-section">
      <SectionTitle />
      <Frame6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Domain Filters
      </p>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="left">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Text7 />
      </div>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Section-title">
      <Left1 />
    </div>
  );
}

function Icon3() {
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
      <Icon3 />
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        No rules defined
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0071cd] content-stretch flex gap-[7.073px] h-[35.366px] items-center justify-center leading-[0] px-[14.147px] py-0 relative rounded-[3.743px] shrink-0 text-[12.378px] text-white" data-name="Button">
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">Add Rule</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0">
        <p className="css-ew64yg leading-[normal]">plus</p>
      </div>
    </div>
  );
}

function SupportedFormats() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Supported formats">
      <Button />
    </div>
  );
}

function Empty() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Empty">
      <Section />
      <SupportedFormats />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-dashed inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <Empty />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Frame2 />
      </div>
    </div>
  );
}

function ContentSection1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full z-[2]" data-name="Content-section">
      <SectionTitle1 />
      <Frame8 />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Liked Plans
      </p>
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="left">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Text8 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <div className="absolute inset-0" style={{ "--stroke-0": "rgba(0, 113, 205, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Icon">
            <path d={svgPaths.p17146600} stroke="var(--stroke-0, #0071CD)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
      <Icon4 />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
      <Left3 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Table cell">
      <Checkbox />
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Name
      </p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Duotone:Solid',sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableText() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Table text">
      <Text9 />
      <Icon5 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <TableText />
        </div>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Valid From
      </p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Duotone:Solid',sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableText1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Table text">
      <Text10 />
      <Icon6 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <TableText1 />
        </div>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Valid To
      </p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Duotone:Solid',sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableText2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Table text">
      <Text11 />
      <Icon7 />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableText2 />
        </div>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Weightage
      </p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Duotone:Solid',sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableText3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Table text">
      <Text12 />
      <Icon8 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableText3 />
        </div>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Assigned Users
      </p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Duotone:Solid',sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableText4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Table text">
      <Text13 />
      <Icon9 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableText4 />
        </div>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Calculation Type
      </p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Duotone:Solid',sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableText5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Table text">
      <Text14 />
      <Icon10 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableText5 />
        </div>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cycle Plan
      </p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Duotone:Solid',sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableText6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Table text">
      <Text15 />
      <Icon11 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableText6 />
        </div>
      </div>
    </div>
  );
}

function Tr() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative self-stretch z-[1]" data-name="tr">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function Thead() {
  return (
    <div className="bg-[#e6f1fa] content-stretch flex isolate items-start rounded-tl-[4px] rounded-tr-[4px] shrink-0 sticky top-0 w-full" data-name="thead">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l border-r border-solid border-t inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <Tr />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <div className="absolute inset-0" style={{ "--stroke-0": "rgba(0, 113, 205, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Icon">
            <path d={svgPaths.p17146600} stroke="var(--stroke-0, #0071CD)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Left4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
      <Icon12 />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Checkbox">
      <Left4 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="content-stretch flex flex-col h-[41px] items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Table cell">
      <Checkbox1 />
    </div>
  );
}

function TableText7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[78px]" data-name="Table text">
      <p className="css-g0mm18 flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] min-h-px min-w-px overflow-hidden relative text-[14px] text-[rgba(0,11,37,0.64)] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        B2C - 5G Partner - Activation
      </p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <TableText7 />
        </div>
      </div>
    </div>
  );
}

function TableText8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        17/2/2020
      </p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <TableText8 />
        </div>
      </div>
    </div>
  );
}

function TableText9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        17/2/2025
      </p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <TableText9 />
        </div>
      </div>
    </div>
  );
}

function Tagchip() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[50px] shrink-0 w-[57px]" data-name="Tagchip">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        40%
      </p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <Tagchip />
        </div>
      </div>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="flex-[1_0_0] h-[46px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableCell12 />
        </div>
      </div>
    </div>
  );
}

function Tagchip1() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[50px] shrink-0 w-[57px]" data-name="Tagchip">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        45
      </p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="flex-[1_0_0] h-[41px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <Tagchip1 />
        </div>
      </div>
    </div>
  );
}

function TableText10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Calculation Type
      </p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="flex-[1_0_0] h-[41px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableText10 />
        </div>
      </div>
    </div>
  );
}

function TableText11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cycle Plan Name
      </p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <TableText11 />
        </div>
      </div>
    </div>
  );
}

function TableTd() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table - TD">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <div className="absolute inset-0" style={{ "--stroke-0": "rgba(0, 113, 205, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Icon">
            <path d={svgPaths.p17146600} stroke="var(--stroke-0, #0071CD)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Left5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
      <Icon13 />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Checkbox">
      <Left5 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="content-stretch flex flex-col h-[41px] items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Table cell">
      <Checkbox2 />
    </div>
  );
}

function TableText12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[78px]" data-name="Table text">
      <p className="css-g0mm18 flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] min-h-px min-w-px overflow-hidden relative text-[14px] text-[rgba(0,11,37,0.64)] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>{`B2C - 5G Partner - Activation... `}</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <TableText12 />
        </div>
      </div>
    </div>
  );
}

function TableText13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        17/5/2020
      </p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <TableText13 />
        </div>
      </div>
    </div>
  );
}

function TableText14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        17/8/2020
      </p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <TableText14 />
        </div>
      </div>
    </div>
  );
}

function Tagchip2() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[50px] shrink-0 w-[57px]" data-name="Tagchip">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        30%
      </p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <Tagchip2 />
        </div>
      </div>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableCell21 />
        </div>
      </div>
    </div>
  );
}

function Tagchip3() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[50px] shrink-0 w-[57px]" data-name="Tagchip">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        45
      </p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="flex-[1_0_0] h-[41px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <Tagchip3 />
        </div>
      </div>
    </div>
  );
}

function TableText15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Calculation Type
      </p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="flex-[1_0_0] h-[41px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableText15 />
        </div>
      </div>
    </div>
  );
}

function TableText16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cycle Plan Name
      </p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <TableText16 />
        </div>
      </div>
    </div>
  );
}

function TableTd1() {
  return (
    <div className="content-stretch flex h-[46px] items-start relative shrink-0 w-full" data-name="Table - TD">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
    </div>
  );
}

function Tbody() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="tbody">
      <TableTd />
      {[...Array(2).keys()].map((_, i) => (
        <TableTd1 key={i} />
      ))}
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[7.073px] items-center justify-center leading-[0] relative shrink-0 text-[#0071cd] text-[14.147px]" data-name="Button">
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">Add a line</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0">
        <p className="css-ew64yg leading-[normal]">plus</p>
      </div>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="content-stretch flex items-start relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full" data-name="Table-row">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-br-[4px]" />
      <TableCell26 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Thead />
      <Tbody />
      <TableRow />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container5 />
    </div>
  );
}

function SectionBody() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame5 />
    </div>
  );
}

function SectionBody1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <SectionBody />
      </div>
    </div>
  );
}

function ContentSection2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[1112px] z-[1]" data-name="Content-section">
      <Left2 />
      <SectionBody1 />
    </div>
  );
}

export default function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] isolate items-start p-[24px] relative size-full" data-name="Content">
      <ContentSection />
      <ContentSection1 />
      <ContentSection2 />
    </div>
  );
}