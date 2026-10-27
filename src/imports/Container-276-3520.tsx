import svgPaths from "./svg-xr3x6coxx";
import img59 from "figma:asset/b24745fcb2f3b6fd6f823ae99430dfe5ab8cd460.png";

function BreadcrumbText() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Breadcrumb Text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Brands
      </p>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute bg-white inset-0 overflow-clip rounded-[7000px]" data-name="Image">
      <div className="absolute inset-0 rounded-[282.342px]" data-name="59">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[282.342px] size-full" src={img59} />
      </div>
    </div>
  );
}

function DisplayPictureVariants() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Display Picture Variants">
      <Image />
    </div>
  );
}

function Profile() {
  return (
    <div className="h-full relative rounded-[4px] shrink-0" data-name="Profile">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-full items-center justify-center p-[8px] relative">
          <DisplayPictureVariants />
        </div>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#000b25] text-[14px] w-[94px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mitchell Admin
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-full relative rounded-[8px] shrink-0" data-name="Icon">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-full items-center justify-center p-[4px] relative">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
            <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap">
              <p className="leading-[normal]">{`\uF107`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchConatiner() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Search conatiner">
      <div className="content-stretch flex items-center justify-center relative rounded-[160px] shrink-0 size-[40px]" data-name="Button">
        <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">
          <p className="leading-[normal]">{`\uF4B6`}</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[160px] shrink-0 size-[40px]" data-name="Button">
        <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">
          <p className="leading-[normal]">Clock</p>
        </div>
      </div>
      <div className="content-stretch flex items-center px-[8px] relative self-stretch shrink-0" data-name="User">
        <Profile />
        <Name />
        <Icon />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[32px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Search ...</p>
      </div>
    </div>
  );
}

function IconDropdown() {
  return (
    <div className="content-stretch flex h-full items-center justify-center relative rounded-[4px] shrink-0 w-[48px]" data-name="Icon dropdown">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
        <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(0,11,37,0.64)] whitespace-nowrap">
          <p className="leading-[normal]">{`\uF0D7`}</p>
        </div>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative" data-name="Search">
      <div className="bg-[#f8fafc] content-stretch flex gap-[8px] h-[40px] items-center pl-[16px] relative rounded-[4px] shrink-0 w-[503px]" data-name="Search">
        <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,11,37,0.64)] whitespace-nowrap">
          <p className="leading-[1.2]">Search</p>
        </div>
        <Content />
        <IconDropdown />
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-h-px min-w-px relative" data-name="CTA">
      <div className="bg-[#000000] content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">+</p>
        </div>
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[1.2]">Add Members</p>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17146600} stroke="var(--stroke-0, #000000)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Left() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
      <Icon1 />
    </button>
  );
}

function Th() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="TH">
      <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[12px] whitespace-nowrap">{`\uF0D7`}</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17146600} stroke="var(--stroke-0, #000000)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Left1() {
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
          <path d={svgPaths.p17146600} stroke="var(--stroke-0, #000000)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Left2() {
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
          <path d={svgPaths.p17146600} stroke="var(--stroke-0, #000000)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Left3() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
      <Icon4 />
    </button>
  );
}

function Th1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="TH">
      <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[12px] whitespace-nowrap">{`\uF0D7`}</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17146600} stroke="var(--stroke-0, #000000)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Left4() {
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
          <path d={svgPaths.p17146600} stroke="var(--stroke-0, #000000)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Left5() {
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
          <path d={svgPaths.p17146600} stroke="var(--stroke-0, #000000)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Left6() {
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
          <path d={svgPaths.p17146600} stroke="var(--stroke-0, #000000)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Left7() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
      <Icon8 />
    </button>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17146600} stroke="var(--stroke-0, #000000)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Left8() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
      <Icon9 />
    </button>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17146600} stroke="var(--stroke-0, #000000)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Left9() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
      <Icon10 />
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

function Th2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]" data-name="TH">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Name
      </p>
      <Sorting />
    </div>
  );
}

function Th3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="TH">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Hierarchy Type
      </p>
    </div>
  );
}

function Th4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="TH">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Hierarchy Type
      </p>
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

function Th5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]" data-name="TH">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Code
      </p>
      <Sorting1 />
    </div>
  );
}

function Sorting2() {
  return (
    <div className="content-stretch flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[12px] items-center justify-center not-italic pb-[6px] relative shrink-0 text-[rgba(0,11,37,0.57)] w-[9px]" data-name="Sorting">
      <p className="leading-[normal] relative shrink-0 w-full">angle-up</p>
      <div className="flex flex-col justify-end leading-[0] mb-[-6px] relative shrink-0 w-full">
        <p className="leading-[normal]">{`\uF107`}</p>
      </div>
    </div>
  );
}

function Th6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]" data-name="TH">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Segment
      </p>
      <Sorting2 />
    </div>
  );
}

function Sorting3() {
  return (
    <div className="content-stretch flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[12px] items-center justify-center not-italic pb-[6px] relative shrink-0 text-[rgba(0,11,37,0.57)] w-[9px]" data-name="Sorting">
      <p className="leading-[normal] relative shrink-0 w-full">angle-up</p>
      <div className="flex flex-col justify-end leading-[0] mb-[-6px] relative shrink-0 w-full">
        <p className="leading-[normal]">{`\uF107`}</p>
      </div>
    </div>
  );
}

function Th7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]" data-name="TH">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Phone
      </p>
      <Sorting3 />
    </div>
  );
}

function Sorting4() {
  return (
    <div className="content-stretch flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[12px] items-center justify-center not-italic pb-[6px] relative shrink-0 text-[rgba(0,11,37,0.57)] w-[9px]" data-name="Sorting">
      <p className="leading-[normal] relative shrink-0 w-full">angle-up</p>
      <div className="flex flex-col justify-end leading-[0] mb-[-6px] relative shrink-0 w-full">
        <p className="leading-[normal]">{`\uF107`}</p>
      </div>
    </div>
  );
}

function Th8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]" data-name="TH">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Stage
      </p>
      <Sorting4 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start relative shadow-[0px_3px_20px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="SalesPoint - Top Bar">
        <div className="bg-white relative shrink-0 w-full" data-name="SalesPoint - Top-header">
          <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[24px] py-[12px] relative w-full">
              <div className="content-stretch flex h-[40px] items-center px-[16px] py-[12px] relative rounded-[4px] shrink-0" data-name="Breadcrumb">
                <div className="content-stretch flex items-center relative shrink-0" data-name="Item">
                  <BreadcrumbText />
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0" data-name="User card">
                <SearchConatiner />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="SalesPoint - Action Bar">
          <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative w-full">
              <Search />
              <Cta />
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[4px] shrink-0 w-[1188px]" data-name="Table - Hierarchy Type">
        <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[56px]" data-name="Table's Columns">
            <div className="bg-[#e4e4e7] content-stretch flex h-[48px] items-center py-[10px] relative rounded-tl-[4px] shrink-0 w-full" data-name="Header Cell">
              <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px]" />
              <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table Elements">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[7px] items-center px-[16px] relative w-full">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
                      <Left />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="h-[48px] relative shrink-0 w-full" data-name="Table Elements">
                <div className="flex flex-row items-center justify-end size-full">
                  <div className="content-stretch flex items-center justify-end pr-[8px] relative size-full">
                    <Th />
                  </div>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] gap-[7px] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
                  <Left1 />
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex gap-[7px] h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
                  <Left2 />
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] gap-[7px] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
                  <Left3 />
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="h-[48px] relative shrink-0 w-full" data-name="Table Elements">
                <div className="flex flex-row items-center justify-end size-full">
                  <div className="content-stretch flex items-center justify-end pr-[8px] relative size-full">
                    <Th1 />
                  </div>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] gap-[7px] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
                  <Left4 />
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex gap-[7px] h-[48px] items-center px-[16px] relative shrink-0 w-[62px]" data-name="Table Elements">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
                  <Left5 />
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] gap-[7px] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
                  <Left6 />
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex gap-[7px] h-[48px] items-center px-[16px] relative shrink-0 w-[62px]" data-name="Table Elements">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
                  <Left7 />
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] gap-[7px] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
                  <Left8 />
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex gap-[7px] h-[48px] items-center px-[16px] relative shrink-0 w-[62px]" data-name="Table Elements">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
                  <Left9 />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Table's Columns">
            <div className="bg-[#e4e4e7] content-stretch flex h-[48px] items-center py-[10px] relative shrink-0 w-full" data-name="Header Cell">
              <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex items-center px-[16px] relative shrink-0 w-[118px]" data-name="Table Elements">
                <Th2 />
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center justify-end pr-[8px] relative shrink-0" data-name="Table Elements">
                <Th3 />
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center justify-end pr-[8px] relative shrink-0" data-name="Table Elements">
                <Th4 />
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0 w-[62px]" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Table's Columns">
            <div className="bg-[#e4e4e7] content-stretch flex h-[48px] items-center py-[10px] relative shrink-0 w-full" data-name="Header Cell">
              <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex items-center px-[16px] relative shrink-0 w-[118px]" data-name="Table Elements">
                <Th5 />
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center px-[16px] shrink-0 w-[62px]" data-name="Table Elements" />
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center px-[16px] shrink-0 w-[62px]" data-name="Table Elements" />
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0 w-[62px]" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Table's Columns">
            <div className="bg-[#e4e4e7] content-stretch flex h-[48px] items-center py-[10px] relative shrink-0 w-full" data-name="Header Cell">
              <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex items-center px-[16px] relative shrink-0 w-[118px]" data-name="Table Elements">
                <Th6 />
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center px-[16px] shrink-0 w-[62px]" data-name="Table Elements" />
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center px-[16px] shrink-0 w-[62px]" data-name="Table Elements" />
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0 w-[62px]" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Table's Columns">
            <div className="bg-[#e4e4e7] content-stretch flex h-[48px] items-center py-[10px] relative shrink-0 w-full" data-name="Header Cell">
              <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex items-center px-[16px] relative shrink-0 w-[118px]" data-name="Table Elements">
                <Th7 />
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center px-[16px] shrink-0 w-[62px]" data-name="Table Elements" />
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center px-[16px] shrink-0 w-[62px]" data-name="Table Elements" />
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative w-[62px]" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0 w-[62px]" data-name="Table Elements">
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Regular Text `}</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[118px]" data-name="Table's Columns">
            <div className="bg-[#e4e4e7] content-stretch flex h-[48px] items-center py-[10px] relative shrink-0 w-full" data-name="Header Cell">
              <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex items-center px-[16px] relative shrink-0 w-[118px]" data-name="Table Elements">
                <Th8 />
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex gap-[4px] h-[48px] items-center px-[16px] shrink-0 w-[62px]" data-name="Table Elements" />
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px px-[16px] relative" data-name="Table Elements">
                <div className="bg-[#edfcf2] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[30px] shrink-0" data-name="SalesPoint - Statuses">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#16b364] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Active
                  </p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex gap-[4px] h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
                <div className="bg-[#edfcf2] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[30px] shrink-0" data-name="SalesPoint - Statuses">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#16b364] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Active
                  </p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px px-[16px] relative" data-name="Table Elements">
                <div className="bg-[#edfcf2] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[30px] shrink-0" data-name="SalesPoint - Statuses">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#16b364] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Active
                  </p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex gap-[4px] h-[48px] items-center px-[16px] shrink-0 w-[62px]" data-name="Table Elements" />
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px px-[16px] relative" data-name="Table Elements">
                <div className="bg-[#edfcf2] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[30px] shrink-0" data-name="SalesPoint - Statuses">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#16b364] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Active
                  </p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex gap-[4px] h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
                <div className="bg-[#edfcf2] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[30px] shrink-0" data-name="SalesPoint - Statuses">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#16b364] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Active
                  </p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px px-[16px] relative" data-name="Table Elements">
                <div className="bg-[#edfcf2] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[30px] shrink-0" data-name="SalesPoint - Statuses">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#16b364] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Active
                  </p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex gap-[4px] h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
                <div className="bg-[#edfcf2] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[30px] shrink-0" data-name="SalesPoint - Statuses">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#16b364] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Active
                  </p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px px-[16px] relative" data-name="Table Elements">
                <div className="bg-[#edfcf2] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[30px] shrink-0" data-name="SalesPoint - Statuses">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#16b364] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Active
                  </p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                    <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="62" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
              <div className="content-stretch flex gap-[4px] h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
                <div className="bg-[#edfcf2] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[30px] shrink-0" data-name="SalesPoint - Statuses">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#16b364] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Active
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}