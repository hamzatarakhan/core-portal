import svgPaths from "./svg-trk4u7qxda";
import { imgLogoContainer } from "./svg-5zviu";

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
        <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[16px] relative rounded-[4px] shrink-0 w-[204px]" data-name="Smart button">
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
        <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[16px] rounded-[4px] shrink-0 w-[204px]" data-name="Smart button" />
        <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[16px] rounded-[4px] shrink-0 w-[204px]" data-name="Smart button" />
        <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[16px] rounded-[4px] shrink-0 w-[204px]" data-name="Smart button" />
        <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[16px] rounded-[4px] shrink-0 w-[204px]" data-name="Smart button" />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Brand Specifications
      </p>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="left">
      <div className="flex flex-row items-center self-stretch">
        <Text />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <Left />
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[1116px]" data-name="Section-title">
      <Container1 />
    </div>
  );
}

function Textfield() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Enter brand name
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] h-[63px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Brand Name
        </p>
        <Textfield />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[63px] items-start min-h-px min-w-px" data-name="Textfield" />
    </div>
  );
}

function Textfield2() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[38px]" data-name="Textfield">
      <div className="content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <div className="bg-[#0072ce] flex-[1_0_0] h-full min-h-px min-w-px rounded-[2px]" data-name="Color Swatch" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield3() {
  return (
    <div className="bg-white flex-[1_0_0] h-[38px] min-h-px min-w-px relative rounded-[4px]" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-px relative text-[#000b25] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            #0072CE
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Input Field">
      <Textfield2 />
      <Textfield3 />
    </div>
  );
}

function Textfield1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Primary Color
      </p>
      <InputField />
    </div>
  );
}

function Textfield5() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[38px]" data-name="Textfield">
      <div className="content-stretch flex gap-[4px] items-center overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <div className="bg-[#00b0b2] flex-[1_0_0] h-full min-h-px min-w-px rounded-[2px]" data-name="Color Swatch" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-dashed inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield6() {
  return (
    <div className="bg-white flex-[1_0_0] h-[38px] min-h-px min-w-px relative rounded-[4px]" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-px relative text-[#000b25] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            #0072CE
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputField1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Input Field">
      <Textfield5 />
      <Textfield6 />
    </div>
  );
}

function Textfield4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Secondary Color (Optional)
      </p>
      <InputField1 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Brand will use primary color as fallback
      </p>
    </div>
  );
}

function ColorRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Color Row">
      <Textfield1 />
      <Textfield4 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Brand Status
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        This brand is currently active and visible in the system
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Container">
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
    <button className="bg-[#bebebe] content-stretch cursor-pointer flex h-[24px] items-center justify-end px-[4px] py-[2px] relative rounded-[160px] w-[40px]" data-name="Toggle">
      <Handle />
    </button>
  );
}

function Subsection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Placeholder V1">
        <Frame />
        <ColorRow />
        <div className="bg-[#f8fafc] h-[63px] relative rounded-[4px] shrink-0 w-full" data-name="Controllers Card">
          <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[10px] relative size-full">
              <Container2 />
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Toggle">
                <div className="flex items-center justify-center relative shrink-0">
                  <div className="-scale-y-100 flex-none rotate-180">
                    <Toggle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Brand Logo `}</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center py-[8px] relative size-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.001px_0px] mask-size-[40px_37.513px]" data-name="Logo Container" style={{ maskImage: `url('${imgLogoContainer}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.9992 37.9994">
        <g id="Logo Container">
          <path d={svgPaths.p2de7b580} fill="var(--fill-0, #0072CE)" id="Path 31523" />
          <path d={svgPaths.p2e053e00} fill="var(--fill-0, #0072CE)" id="Path 31524" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <LogoContainer />
    </div>
  );
}

function FileName() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="File name">
      <p className="font-['Hind:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap">File name.pdf</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Content">
      <FileName />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        File Description
      </p>
    </div>
  );
}

function Col() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="col">
      <Content2 />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button Group">
      <div className="bg-[#fff1f0] content-stretch flex flex-col items-center justify-center relative rounded-[39px] shrink-0 size-[26px]" data-name="SalesPoint - Document Uploader Icons">
        <div aria-hidden="true" className="absolute border-[#feeae6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[39px]" />
        <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f5222d] text-[9.1px] text-center w-full">
          <p className="leading-[normal]">trash</p>
        </div>
      </div>
      <div className="bg-[#eff8ff] content-stretch flex flex-col items-center justify-center relative rounded-[39px] shrink-0 size-[26px]" data-name="SalesPoint - Document Uploader Icons">
        <div aria-hidden="true" className="absolute border-[#d1e9ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[39px]" />
        <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2e90fa] text-[9.1px] text-center w-full">
          <p className="leading-[normal]">Edit</p>
        </div>
      </div>
      <div className="bg-[#f0fdf9] content-stretch flex flex-col items-center justify-center relative rounded-[39px] shrink-0 size-[26px]" data-name="SalesPoint - Document Uploader Icons">
        <div aria-hidden="true" className="absolute border-[#ccfbef] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[39px]" />
        <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#15b79e] text-[9.1px] text-center w-full">
          <p className="leading-[normal]">eye</p>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="h-[38px] overflow-clip relative shrink-0 w-[42px]" data-name="Table - Multibrand">
        <ClipPathGroup />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Col />
      </div>
      <ButtonGroup />
    </div>
  );
}

function Subsection1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
      <div className="bg-[#f8fafc] h-[33px] relative shrink-0 w-full" data-name="Subsection-Title">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pr-[8px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ containerType: "size", "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
                <div className="flex-none rotate-90 w-[100cqh]">
                  <div className="h-0 relative w-full">
                    <div className="absolute inset-[-1px_-3.03%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 2">
                        <path d="M1 1H34" id="Line 1" stroke="var(--stroke-0, #8DC1EC)" strokeLinecap="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
              <Container3 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafc] relative rounded-[4px] shrink-0 w-full" data-name="SalesPoint - Documents Uploader">
        <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[12px] relative w-full">
            <Content1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionBody() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <Subsection />
        <Subsection1 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        List of Applicable Processes
      </p>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="left">
      <div className="flex flex-row items-center self-stretch">
        <Text3 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <Left1 />
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Section-title">
      <Container5 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17146600} stroke="var(--stroke-0, #0072CE)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Left2() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
      <Icon />
    </button>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17146600} stroke="var(--stroke-0, #0072CE)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Left3() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
      <Icon1 />
    </button>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17146600} stroke="var(--stroke-0, #0072CE)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Left4() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
      <Icon2 />
    </button>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17146600} stroke="var(--stroke-0, #0072CE)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Left5() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
      <Icon3 />
    </button>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17146600} stroke="var(--stroke-0, #0072CE)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Left6() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
      <Icon4 />
    </button>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17146600} stroke="var(--stroke-0, #0072CE)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Left7() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
      <Icon5 />
    </button>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17146600} stroke="var(--stroke-0, #0072CE)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Left8() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
      <Icon6 />
    </button>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17146600} stroke="var(--stroke-0, #0072CE)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Left9() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
      <Icon7 />
    </button>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17146600} stroke="var(--stroke-0, #0072CE)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Left10() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
      <Icon8 />
    </button>
  );
}

function Sorting() {
  return (
    <div className="content-stretch flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[12px] items-center justify-center not-italic pb-[6px] relative shrink-0 text-[rgba(0,11,37,0.57)] w-[9px]" data-name="Sorting">
      <p className="leading-[normal] relative shrink-0 w-full">angle-up</p>
      <div className="flex flex-col justify-end leading-[0] mb-[-6px] relative shrink-0 w-full">
        <p className="leading-[normal]">{`\uF107`}</p>
      </div>
    </div>
  );
}

function Th() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]" data-name="TH">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Process Type
      </p>
      <Sorting />
    </div>
  );
}

function Sorting1() {
  return (
    <div className="content-stretch flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[12px] items-center justify-center not-italic pb-[6px] relative shrink-0 text-[rgba(0,11,37,0.57)] w-[9px]" data-name="Sorting">
      <p className="leading-[normal] relative shrink-0 w-full">angle-up</p>
      <div className="flex flex-col justify-end leading-[0] mb-[-6px] relative shrink-0 w-full">
        <p className="leading-[normal]">{`\uF107`}</p>
      </div>
    </div>
  );
}

function Th1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]" data-name="TH">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Module Name `}</p>
      <Sorting1 />
    </div>
  );
}

function Th2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="TH">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Actions
      </p>
    </div>
  );
}

function Delete() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Delete">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F02B02)" fillOpacity="0.05" id="Ellipse 5" r="12" />
        </svg>
      </div>
      <div className="col-1 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[21px] justify-center ml-[2.25px] mt-[1.5px] not-italic relative row-1 text-[#f02b02] text-[12px] text-center w-[19.5px]">
        <p className="leading-[normal]">trash</p>
      </div>
    </div>
  );
}

function Delete1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Delete">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F02B02)" fillOpacity="0.05" id="Ellipse 5" r="12" />
        </svg>
      </div>
      <div className="col-1 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[21px] justify-center ml-[2.25px] mt-[1.5px] not-italic relative row-1 text-[#f02b02] text-[12px] text-center w-[19.5px]">
        <p className="leading-[normal]">trash</p>
      </div>
    </div>
  );
}

function Delete2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Delete">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F02B02)" fillOpacity="0.05" id="Ellipse 5" r="12" />
        </svg>
      </div>
      <div className="col-1 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[21px] justify-center ml-[2.25px] mt-[1.5px] not-italic relative row-1 text-[#f02b02] text-[12px] text-center w-[19.5px]">
        <p className="leading-[normal]">trash</p>
      </div>
    </div>
  );
}

function Delete3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Delete">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F02B02)" fillOpacity="0.05" id="Ellipse 5" r="12" />
        </svg>
      </div>
      <div className="col-1 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[21px] justify-center ml-[2.25px] mt-[1.5px] not-italic relative row-1 text-[#f02b02] text-[12px] text-center w-[19.5px]">
        <p className="leading-[normal]">trash</p>
      </div>
    </div>
  );
}

function Delete4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Delete">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F02B02)" fillOpacity="0.05" id="Ellipse 5" r="12" />
        </svg>
      </div>
      <div className="col-1 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[21px] justify-center ml-[2.25px] mt-[1.5px] not-italic relative row-1 text-[#f02b02] text-[12px] text-center w-[19.5px]">
        <p className="leading-[normal]">trash</p>
      </div>
    </div>
  );
}

function Delete5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Delete">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F02B02)" fillOpacity="0.05" id="Ellipse 5" r="12" />
        </svg>
      </div>
      <div className="col-1 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[21px] justify-center ml-[2.25px] mt-[1.5px] not-italic relative row-1 text-[#f02b02] text-[12px] text-center w-[19.5px]">
        <p className="leading-[normal]">trash</p>
      </div>
    </div>
  );
}

function Delete6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Delete">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F02B02)" fillOpacity="0.05" id="Ellipse 5" r="12" />
        </svg>
      </div>
      <div className="col-1 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[21px] justify-center ml-[2.25px] mt-[1.5px] not-italic relative row-1 text-[#f02b02] text-[12px] text-center w-[19.5px]">
        <p className="leading-[normal]">trash</p>
      </div>
    </div>
  );
}

function Delete7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Delete">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F02B02)" fillOpacity="0.05" id="Ellipse 5" r="12" />
        </svg>
      </div>
      <div className="col-1 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[21px] justify-center ml-[2.25px] mt-[1.5px] not-italic relative row-1 text-[#f02b02] text-[12px] text-center w-[19.5px]">
        <p className="leading-[normal]">trash</p>
      </div>
    </div>
  );
}

function Subsection2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
      <div className="content-stretch flex items-center relative rounded-[4px] shrink-0 w-full" data-name="Placeholder V1">
        <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[52px]" data-name="Table's Columns">
          <div className="bg-[#f3f9fd] content-stretch flex h-[48px] items-center py-[10px] relative rounded-tl-[4px] shrink-0 w-full" data-name="Header Cell">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px]" />
            <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table Elements">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[7px] items-center px-[16px] relative w-full">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
                    <Left2 />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="h-[48px] relative shrink-0 w-full" data-name="Table Elements">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[7px] items-center px-[16px] relative size-full">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
                    <Left3 />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="56" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="h-[48px] relative shrink-0 w-full" data-name="Table Elements">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[7px] items-center px-[16px] relative size-full">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
                    <Left4 />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="52" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Table Elements">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[7px] items-center px-[16px] relative size-full">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
                    <Left5 />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="52" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="h-[48px] relative shrink-0 w-full" data-name="Table Elements">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[7px] items-center px-[16px] relative size-full">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
                    <Left6 />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="52" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Table Elements">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[7px] items-center px-[16px] relative size-full">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
                    <Left7 />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="52" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="h-[48px] relative shrink-0 w-full" data-name="Table Elements">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[7px] items-center px-[16px] relative size-full">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
                    <Left8 />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="52" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Table Elements">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[7px] items-center px-[16px] relative size-full">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
                    <Left9 />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="52" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex h-[48px] items-center relative rounded-bl-[4px] shrink-0 w-full" data-name="Cell">
            <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table Elements">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[7px] items-center px-[16px] relative w-full">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
                    <Left10 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Table's Columns">
          <div className="bg-[#f3f9fd] content-stretch flex h-[48px] items-center py-[10px] relative shrink-0 w-full" data-name="Header Cell">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table Elements">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] relative w-full">
                  <Th />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                SIM Replacement
              </p>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="118" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="h-[48px] relative shrink-0 w-full" data-name="Table Elements">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] relative size-full">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Prepaid
                  </p>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 491.5 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="491.5" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Table Elements">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] relative size-full">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Postpaid
                  </p>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 491.5 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="491.5" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="h-[48px] relative shrink-0 w-full" data-name="Table Elements">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] relative size-full">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Inventory
                  </p>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 491.5 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="491.5" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Table Elements">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] relative size-full">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    SIM Replacement
                  </p>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 491.5 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="491.5" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="h-[48px] relative shrink-0 w-full" data-name="Table Elements">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] relative size-full">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Purchase Order
                  </p>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 491.5 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="491.5" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Table Elements">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] relative size-full">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Sales Order
                  </p>
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 491.5 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="491.5" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="h-[48px] relative shrink-0 w-full" data-name="Table Elements">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] relative size-full">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Visit Management `}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Table's Columns">
          <div className="bg-[#f3f9fd] content-stretch flex h-[48px] items-center py-[10px] relative shrink-0 w-full" data-name="Header Cell">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-center px-[16px] relative shrink-0 w-[118px]" data-name="Table Elements">
              <Th1 />
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Module Name
              </p>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="118" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Module Name
              </p>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 491.5 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="491.5" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Module Name
              </p>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 491.5 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="491.5" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Module Name
              </p>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 491.5 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="491.5" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Module Name
              </p>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 491.5 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="491.5" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Module Name
              </p>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 491.5 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="491.5" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                Module Name
              </p>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 491.5 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="491.5" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="h-[48px] relative shrink-0 w-full" data-name="Table Elements">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] relative size-full">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Module Name
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[73px]" data-name="Table's Columns">
          <div className="bg-[#f3f9fd] content-stretch flex h-[48px] items-center py-[10px] relative rounded-tr-[4px] shrink-0 w-full" data-name="Header Cell">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none rounded-tr-[4px]" />
            <div className="content-stretch flex items-center px-[16px] relative shrink-0" data-name="Table Elements">
              <Th2 />
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="h-[48px] relative shrink-0 w-full" data-name="Table Elements">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] relative size-full">
                  <Delete />
                </div>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="112" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="content-stretch flex gap-[4px] h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
              <Delete1 />
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="73" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px px-[16px] relative" data-name="Table Elements">
              <Delete2 />
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="73" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="content-stretch flex gap-[4px] h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
              <Delete3 />
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="73" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px px-[16px] relative" data-name="Table Elements">
              <Delete4 />
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="73" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="content-stretch flex gap-[4px] h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
              <Delete5 />
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="73" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
            <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px px-[16px] relative" data-name="Table Elements">
              <Delete6 />
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 1">
                  <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="73" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex h-[48px] items-center relative rounded-br-[4px] shrink-0 w-full" data-name="Cell">
            <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table Elements">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center px-[16px] relative w-full">
                  <Delete7 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionBody1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <Subsection2 />
      </div>
    </div>
  );
}

export default function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full" data-name="Content">
      <div className="bg-white content-stretch flex h-[72px] items-start relative rounded-[4px] shadow-[0px_3px_20px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Smart Buttons Section">
        <Container />
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="SalesPoint - Section">
        <SectionTitle />
        <SectionBody />
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="SalesPoint - Section">
        <SectionTitle1 />
        <SectionBody1 />
      </div>
    </div>
  );
}