import svgPaths from "./svg-q9gsjx4o50";
import img59 from "figma:asset/b24745fcb2f3b6fd6f823ae99430dfe5ab8cd460.png";
import { imgGroup, imgGroup1 } from "./svg-igy88";

function Group13() {
  return (
    <div className="absolute inset-[0.04%_0.06%_0_0]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.2508 35.985">
        <g id="Group 157033">
          <path d={svgPaths.p106b200} fill="var(--fill-0, #6757EB)" id="Path 31643" />
          <path d={svgPaths.p26fe0532} fill="var(--fill-0, #6757EB)" id="Path 31644" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute contents inset-[0.04%_0.06%_0_0]" data-name="Logo">
      <Group13 />
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[39.273px]" data-name="Logo 1">
      <Logo />
    </div>
  );
}

function Logo2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[40px] items-center min-h-px min-w-px relative" data-name="Logo">
      <Logo1 />
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000b25] text-[24px] tracking-[0.024px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.5]">SalesPoint</p>
      </div>
    </div>
  );
}

function BurgerMenuItems() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] size-[40px]" data-name="Burger menu items">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="css-g0mm18 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(0,11,37,0.64)] text-center">
        <p className="css-ew64yg leading-[normal]"></p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Logo2 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <BurgerMenuItems />
        </div>
      </div>
    </div>
  );
}

function MenuHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu-header">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] py-0 relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function LogoLine() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Logo + Line">
      <MenuHeader />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(225, 225, 225, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 278 1">
            <line id="Divider" stroke="var(--stroke-0, #E1E1E1)" x2="278" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-[rgba(0,11,37,0.45)] text-center"></p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">Sales Teams</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-center flex flex-wrap h-full items-center justify-center relative shrink-0" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center"></p>
    </div>
  );
}

function ItemIcon() {
  return (
    <div className="content-stretch flex gap-[12px] h-full items-center justify-center relative shrink-0 w-[181px]" data-name="Item + Icon">
      <Text />
      <Icon1 />
    </div>
  );
}

function SideMenuItemLevel() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 1">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] py-0 relative size-full">
          <Icon />
          <ItemIcon />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-[rgba(0,11,37,0.45)] text-center"></p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">{`Commission `}</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-center flex flex-wrap h-full items-center justify-center relative shrink-0" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center"></p>
    </div>
  );
}

function ItemIcon1() {
  return (
    <div className="content-stretch flex gap-[12px] h-full items-center justify-center relative shrink-0 w-[181px]" data-name="Item + Icon">
      <Text1 />
      <Icon3 />
    </div>
  );
}

function SideMenuItemLevel1() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 3">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] py-0 relative size-full">
          <Icon2 />
          <ItemIcon1 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-[rgba(0,11,37,0.45)] text-center"></p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">{`E-reload `}</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-center flex flex-wrap h-full items-center justify-center relative shrink-0" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center"></p>
    </div>
  );
}

function ItemIcon2() {
  return (
    <div className="content-stretch flex gap-[12px] h-full items-center justify-center relative shrink-0 w-[181px]" data-name="Item + Icon">
      <Text2 />
      <Icon5 />
    </div>
  );
}

function SideMenuItemLevel2() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 4">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] py-0 relative size-full">
          <Icon4 />
          <ItemIcon2 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-[rgba(0,11,37,0.45)] text-center"></p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">{`Tracking `}</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-center flex flex-wrap h-full items-center justify-center relative shrink-0" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center"></p>
    </div>
  );
}

function ItemIcon3() {
  return (
    <div className="content-stretch flex gap-[12px] h-full items-center justify-center relative shrink-0 w-[181px]" data-name="Item + Icon">
      <Text3 />
      <Icon7 />
    </div>
  );
}

function SideMenuItemLevel3() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 5">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] py-0 relative size-full">
          <Icon6 />
          <ItemIcon3 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-[rgba(0,11,37,0.64)] text-center"></p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 w-[158px]" data-name="Text">
      <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[16px] text-[rgba(0,11,37,0.64)] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-g0mm18 leading-[1.2] overflow-hidden">Commission Engine</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-center flex flex-wrap h-full items-center justify-center relative shrink-0" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] text-center"></p>
    </div>
  );
}

function ItemIcon4() {
  return (
    <div className="content-stretch flex gap-[12px] h-full items-center justify-center relative shrink-0" data-name="Item + Icon">
      <Text4 />
      <Icon9 />
    </div>
  );
}

function SideMenuItemLevel11() {
  return (
    <div className="bg-[#f5f5f5] h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 1">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] py-0 relative size-full">
          <Icon8 />
          <ItemIcon4 />
        </div>
      </div>
    </div>
  );
}

function Line() {
  return (
    <div className="h-full relative shrink-0 w-0" data-name="Line">
      <div className="absolute inset-[-0.46%_-1px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.00001 218">
          <g id="Line">
            <path d="M1 1L1.00001 217" id="Arrow 2" stroke="var(--stroke-0, #6757EB)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6757eb] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">Cycle Plans</p>
      </div>
    </div>
  );
}

function ItemIcon5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center justify-center min-h-px min-w-px relative" data-name="Item  + Icon">
      <Text5 />
    </div>
  );
}

function SideMenuItemLevel12() {
  return (
    <div className="bg-[#f0eefd] h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center pl-[16px] pr-[20px] py-0 relative size-full">
          <ItemIcon5 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">Cycles Runs</p>
      </div>
    </div>
  );
}

function ItemIcon6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center justify-center min-h-px min-w-px relative" data-name="Item + Icon">
      <Text6 />
    </div>
  );
}

function SideMenuItemLevel16() {
  return (
    <div className="h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center pl-[16px] pr-[20px] py-0 relative size-full">
          <ItemIcon6 />
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">Simulated Cycles Run</p>
      </div>
    </div>
  );
}

function ItemIcon7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center justify-center min-h-px min-w-px relative" data-name="Item + Icon">
      <Text7 />
    </div>
  );
}

function SideMenuItemLevel17() {
  return (
    <div className="h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center pl-[16px] pr-[20px] py-0 relative size-full">
          <ItemIcon7 />
        </div>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">Commission Plans</p>
      </div>
    </div>
  );
}

function ItemIcon8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center justify-center min-h-px min-w-px relative" data-name="Item + Icon">
      <Text8 />
    </div>
  );
}

function SideMenuItemLevel18() {
  return (
    <div className="h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 3">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center pl-[16px] pr-[20px] py-0 relative size-full">
          <ItemIcon8 />
        </div>
      </div>
    </div>
  );
}

function Level1Open() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Level 1 open">
      <SideMenuItemLevel12 />
      <SideMenuItemLevel16 />
      <SideMenuItemLevel17 />
      <SideMenuItemLevel18 />
    </div>
  );
}

function GroupOf() {
  return (
    <div className="relative shrink-0 w-full" data-name="Group of">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-[16px] pl-[16px] pr-0 pt-0 relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <Line />
          </div>
          <Level1Open />
        </div>
      </div>
    </div>
  );
}

function SideMenuItemLevel4() {
  return (
    <div className="bg-[#fbfbfb] content-stretch flex flex-col gap-[12px] items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 6">
      <SideMenuItemLevel11 />
      <GroupOf />
    </div>
  );
}

function Icon10() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-[rgba(0,11,37,0.45)] text-center"></p>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">DCC</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="content-center flex flex-wrap h-full items-center justify-center relative shrink-0" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center"></p>
    </div>
  );
}

function ItemIcon9() {
  return (
    <div className="content-stretch flex gap-[12px] h-full items-center justify-center relative shrink-0 w-[181px]" data-name="Item + Icon">
      <Text9 />
      <Icon11 />
    </div>
  );
}

function SideMenuItemLevel5() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 7">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] py-0 relative size-full">
          <Icon10 />
          <ItemIcon9 />
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-[rgba(0,11,37,0.45)] text-center"></p>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">Notifications</p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="content-center flex flex-wrap h-full items-center justify-center relative shrink-0" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center"></p>
    </div>
  );
}

function ItemIcon10() {
  return (
    <div className="content-stretch flex gap-[12px] h-full items-center justify-center relative shrink-0 w-[181px]" data-name="Item + Icon">
      <Text10 />
      <Icon13 />
    </div>
  );
}

function SideMenuItemLevel6() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 8">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] py-0 relative size-full">
          <Icon12 />
          <ItemIcon10 />
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-[rgba(0,11,37,0.45)] text-center"></p>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[16px] text-[rgba(0,11,37,0.57)] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-g0mm18 leading-[1.2] overflow-hidden">POS Device</p>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="content-center flex flex-wrap h-full items-center justify-center relative shrink-0" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center"></p>
    </div>
  );
}

function ItemIcon11() {
  return (
    <div className="content-stretch flex gap-[12px] h-full items-center justify-center relative shrink-0 w-[181px]" data-name="Item + Icon">
      <Text11 />
      <Icon15 />
    </div>
  );
}

function SideMenuItemLevel7() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 9">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] py-0 relative size-full">
          <Icon14 />
          <ItemIcon11 />
        </div>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-[rgba(0,11,37,0.45)] text-center"></p>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">Configurations</p>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="content-center flex flex-wrap h-full items-center justify-center relative shrink-0" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center"></p>
    </div>
  );
}

function ItemIcon12() {
  return (
    <div className="content-stretch flex gap-[12px] h-full items-center justify-center relative shrink-0 w-[181px]" data-name="Item + Icon">
      <Text12 />
      <Icon17 />
    </div>
  );
}

function SideMenuItemLevel8() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 10">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] py-0 relative size-full">
          <Icon16 />
          <ItemIcon12 />
        </div>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-[rgba(0,11,37,0.45)] text-center"></p>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">Users</p>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="content-center flex flex-wrap h-full items-center justify-center relative shrink-0" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center"></p>
    </div>
  );
}

function ItemIcon13() {
  return (
    <div className="content-stretch flex gap-[12px] h-full items-center justify-center relative shrink-0 w-[181px]" data-name="Item + Icon">
      <Text13 />
      <Icon19 />
    </div>
  );
}

function SideMenuItemLevel9() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 11">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] py-0 relative size-full">
          <Icon18 />
          <ItemIcon13 />
        </div>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-[rgba(0,11,37,0.45)] text-center"></p>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">{`Visit Management `}</p>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="content-center flex flex-wrap h-full items-center justify-center relative shrink-0" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center"></p>
    </div>
  );
}

function ItemIcon14() {
  return (
    <div className="content-stretch flex gap-[12px] h-full items-center justify-center relative shrink-0 w-[181px]" data-name="Item + Icon">
      <Text14 />
      <Icon21 />
    </div>
  );
}

function SideMenuItemLevel10() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 12">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] py-0 relative size-full">
          <Icon20 />
          <ItemIcon14 />
        </div>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-[rgba(0,11,37,0.45)] text-center"></p>
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">Configurations</p>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="content-center flex flex-wrap h-full items-center justify-center relative shrink-0" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center"></p>
    </div>
  );
}

function ItemIcon15() {
  return (
    <div className="content-stretch flex gap-[12px] h-full items-center justify-center relative shrink-0 w-[181px]" data-name="Item + Icon">
      <Text15 />
      <Icon23 />
    </div>
  );
}

function SideMenuItemLevel13() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 15">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] py-0 relative size-full">
          <Icon22 />
          <ItemIcon15 />
        </div>
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-[rgba(0,11,37,0.45)] text-center"></p>
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">Apps</p>
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="content-center flex flex-wrap h-full items-center justify-center relative shrink-0" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center"></p>
    </div>
  );
}

function ItemIcon16() {
  return (
    <div className="content-stretch flex gap-[12px] h-full items-center justify-center relative shrink-0 w-[181px]" data-name="Item + Icon">
      <Text16 />
      <Icon25 />
    </div>
  );
}

function SideMenuItemLevel14() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 16">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] py-0 relative size-full">
          <Icon24 />
          <ItemIcon16 />
        </div>
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-[rgba(0,11,37,0.45)] text-center"></p>
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">Setting</p>
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="content-center flex flex-wrap h-full items-center justify-center relative shrink-0" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center"></p>
    </div>
  );
}

function ItemIcon17() {
  return (
    <div className="content-stretch flex gap-[12px] h-full items-center justify-center relative shrink-0 w-[181px]" data-name="Item + Icon">
      <Text17 />
      <Icon27 />
    </div>
  );
}

function SideMenuItemLevel15() {
  return (
    <div className="bg-white h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 17">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] py-0 relative size-full">
          <Icon26 />
          <ItemIcon17 />
        </div>
      </div>
    </div>
  );
}

function MenuBody() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Menu-body">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-0 relative size-full">
        <SideMenuItemLevel />
        <SideMenuItemLevel1 />
        <SideMenuItemLevel2 />
        <SideMenuItemLevel3 />
        <SideMenuItemLevel4 />
        <SideMenuItemLevel5 />
        <SideMenuItemLevel6 />
        <SideMenuItemLevel7 />
        <SideMenuItemLevel8 />
        <SideMenuItemLevel9 />
        <SideMenuItemLevel10 />
        <SideMenuItemLevel13 />
        <SideMenuItemLevel14 />
        <SideMenuItemLevel15 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[27.73%_73.83%_21.99%_17.24%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-88.875px_-69.142px] mask-size-[238.103px_132.283px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.23104 8.07793">
        <g id="Group">
          <path d={svgPaths.p3bcd5f00} fill="var(--fill-0, #0071B9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[-402.67%_-79.27%_-320.77%_-79.27%]" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[-0.02%_63.05%_21.91%_28.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-98.793px_-64.684px] mask-size-[238.103px_132.283px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.2376 12.5488">
        <g id="Group">
          <path d={svgPaths.p2b5e7fc0} fill="var(--fill-0, #0071B9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[-402.67%_-79.27%_-320.77%_-79.27%]" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[28.67%_58.95%_23.14%_39.35%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-109.242px_-69.293px] mask-size-[238.103px_132.283px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.56634 7.74174">
        <g id="Group">
          <path d={svgPaths.p2b786f00} fill="var(--fill-0, #0071B9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-[-402.67%_-79.27%_-320.77%_-79.27%]" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[27.64%_48.69%_23.15%_43.45%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-113.016px_-69.128px] mask-size-[238.103px_132.283px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.23718 7.90513">
        <g id="Group">
          <path d={svgPaths.p2274f600} fill="var(--fill-0, #0071B9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-[-402.67%_-79.27%_-320.77%_-79.27%]" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[27.68%_37.99%_0.1%_53.06%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-121.871px_-69.135px] mask-size-[238.103px_132.283px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.24432 11.6015">
        <g id="Group">
          <path d={svgPaths.p36c93600} fill="var(--fill-0, #0071B9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute contents inset-[-402.67%_-79.27%_-320.77%_-79.27%]" data-name="Clip path group">
      <Group4 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[27.88%_83.36%_21.8%_7.77%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-80.164px_-69.166px] mask-size-[238.103px_132.283px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16117 8.08417">
        <g id="Group">
          <path d={svgPaths.pc3d9380} fill="var(--fill-0, #0071B9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div className="absolute contents inset-[-402.67%_-79.27%_-320.77%_-79.27%]" data-name="Clip path group">
      <Group5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[27.07%_17.11%_21.79%_74.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-141.184px_-69.036px] mask-size-[238.103px_132.283px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16097 8.21605">
        <g id="Group">
          <path d={svgPaths.p2706f580} fill="var(--fill-0, #0071B9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup6() {
  return (
    <div className="absolute contents inset-[-402.67%_-79.27%_-320.77%_-79.27%]" data-name="Clip path group">
      <Group6 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[-0.11%_12.1%_72.98%_83.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-149.602px_-64.67px] mask-size-[238.103px_132.283px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.35679 4.35769">
        <g id="Group">
          <path d={svgPaths.p35306600} fill="var(--fill-0, #0071B9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup7() {
  return (
    <div className="absolute contents inset-[-402.67%_-79.27%_-320.77%_-79.27%]" data-name="Clip path group">
      <Group7 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[10.99%_58.77%_77.17%_39.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-109.074px_-66.452px] mask-size-[238.103px_132.283px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.90418 1.90327">
        <g id="Group">
          <path d={svgPaths.p36889580} fill="var(--fill-0, #0071B9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup8() {
  return (
    <div className="absolute contents inset-[-402.67%_-79.27%_-320.77%_-79.27%]" data-name="Clip path group">
      <Group8 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[28.87%_27.03%_6.3%_65.13%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-132.98px_-69.325px] mask-size-[238.103px_132.283px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.22 10.4156">
        <g id="Group">
          <path d={svgPaths.p463d900} fill="var(--fill-0, #8DC6E7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup9() {
  return (
    <div className="absolute contents inset-[-402.67%_-79.27%_-320.77%_-79.27%]" data-name="Clip path group">
      <Group9 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[36.96%_14.12%_26.86%_85.12%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-151.395px_-70.625px] mask-size-[238.103px_132.283px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.697611 5.81124">
        <g id="Group">
          <path d={svgPaths.p346c9100} fill="var(--fill-0, #8DC6E7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup10() {
  return (
    <div className="absolute contents inset-[-402.67%_-79.27%_-320.77%_-79.27%]" data-name="Clip path group">
      <Group10 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[28.91%_5.36%_26.84%_88.75%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-154.742px_-69.331px] mask-size-[238.103px_132.283px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.42514 7.10994">
        <g id="Group">
          <path d={svgPaths.p22587700} fill="var(--fill-0, #8DC6E7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup11() {
  return (
    <div className="absolute contents inset-[-402.67%_-79.27%_-320.77%_-79.27%]" data-name="Clip path group">
      <Group11 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[10.28%_0_26.83%_96.44%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-112.211px_-21.553px] mask-size-[138.938px_62.814px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.28404 10.1022">
        <g id="Group">
          <path d={svgPaths.p3d982100} fill="var(--fill-0, #8DC6E7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup12() {
  return (
    <div className="absolute contents inset-[-0.07%_-0.05%_0.38%_0]" data-name="Clip path group">
      <Group12 />
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute contents inset-[-402.67%_-79.27%_-320.77%_-79.27%]" data-name="Layer 1">
      <div className="absolute inset-[-0.06%_92.77%_23.11%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.65584 12.3618">
          <path d={svgPaths.p3dfe0080} fill="var(--fill-0, #0071B9)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup />
      <ClipPathGroup1 />
      <ClipPathGroup2 />
      <ClipPathGroup3 />
      <ClipPathGroup4 />
      <ClipPathGroup5 />
      <ClipPathGroup6 />
      <ClipPathGroup7 />
      <ClipPathGroup8 />
      <ClipPathGroup9 />
      <ClipPathGroup10 />
      <ClipPathGroup11 />
      <ClipPathGroup12 />
    </div>
  );
}

function Asset() {
  return (
    <div className="h-[16.065px] overflow-clip relative shrink-0 w-[92.096px]" data-name="Asset 1 1 1">
      <Layer />
    </div>
  );
}

function ActionBar() {
  return (
    <div className="bg-white relative shadow-[0px_3px_20px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Action bar">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative w-full">
          <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-shadow-[0px_4px_12px_rgba(0,0,0,0.12)]" dir="auto" style={{ fontVariationSettings: "'wdth' 100" }}>{`Powered By `}</p>
          <Asset />
        </div>
      </div>
    </div>
  );
}

function SideMenu() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[16px] px-px relative self-stretch shrink-0 w-[280px]" data-name="Side menu">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-r border-solid inset-0 pointer-events-none shadow-[0px_3px_20px_0px_rgba(0,0,0,0.05)]" />
      <LogoLine />
      <MenuBody />
      <ActionBar />
    </div>
  );
}

function BreadcrumbText() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Breadcrumb Text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Commission Management
      </p>
    </div>
  );
}

function Icon28() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[5px] py-px relative shrink-0" data-name="Icon">
      <div className="css-g0mm18 flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)]">
        <p className="css-ew64yg leading-[1.2]"></p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <BreadcrumbText />
      <Icon28 />
    </div>
  );
}

function BreadcrumbText1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Breadcrumb Text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cycle Plans
      </p>
    </div>
  );
}

function Icon29() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[5px] py-px relative shrink-0" data-name="Icon">
      <div className="css-g0mm18 flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)]">
        <p className="css-ew64yg leading-[1.2]"></p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <BreadcrumbText1 />
      <Icon29 />
    </div>
  );
}

function BreadcrumbText2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Breadcrumb Text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Create Cycle
      </p>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Item">
      <BreadcrumbText2 />
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="content-stretch flex gap-[4px] h-[41px] items-center px-[16px] py-[12px] relative rounded-[4px] shrink-0" data-name="Breadcrumb">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[160px] shrink-0 size-[40px]" data-name="Button">
      <div className="css-g0mm18 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(0,11,37,0.57)] text-center">
        <p className="css-ew64yg leading-[normal]"></p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[160px] shrink-0 size-[40px]" data-name="Button">
      <div className="css-g0mm18 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(0,11,37,0.57)] text-center">
        <p className="css-ew64yg leading-[normal]">Clock</p>
      </div>
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative self-stretch shrink-0" data-name="Icons">
      <Button />
      <Button1 />
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
    <div className="content-stretch flex h-full items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="Profile">
      <DisplayPictureVariants />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#000b25] text-[14px] w-[94px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mitchell Admin
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <div className="css-g0mm18 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000b25] text-[14px]">
        <p className="css-ew64yg leading-[normal]"></p>
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="content-stretch flex h-full items-center justify-center p-[4px] relative rounded-[8px] shrink-0" data-name="Icon">
      <Button2 />
    </div>
  );
}

function ProfileSettings() {
  return (
    <div className="content-stretch flex items-center relative self-stretch shrink-0" data-name="Profile settings">
      <Profile />
      <Name />
      <Icon30 />
    </div>
  );
}

function SearchConatiner() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Search conatiner">
      <Icons />
      <ProfileSettings />
    </div>
  );
}

function UserCard() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[237px]" data-name="User card">
      <SearchConatiner />
    </div>
  );
}

function TopHeader() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Top-header">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <Breadcrumb />
          <UserCard />
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#6757eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6757eb] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">Discard</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#6757eb] content-stretch flex gap-[8px] h-[40px] items-center justify-center leading-[0] px-[16px] py-0 relative rounded-[4px] shrink-0 text-[14px] text-white" data-name="Button">
      <div className="css-g0mm18 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0 text-center">
        <p className="css-ew64yg leading-[normal]">save</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">Save</p>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="CTA">
      <Button3 />
      <Button4 />
    </div>
  );
}

function CtaPagination() {
  return (
    <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="CTA + Pagination">
      <Cta />
    </div>
  );
}

function ActionBar1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Action bar">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[24px] py-[12px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <CtaPagination />
          </div>
        </div>
      </div>
    </div>
  );
}

function Text18() {
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
        <Text18 />
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

function Text19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Active Cycle
      </p>
    </div>
  );
}

function Text20() {
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
      <Text19 />
      <Text20 />
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

function Text21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        External Calculation
      </p>
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Commission for this cycle will be calculated using external Airflow.
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Text21 />
      <Text22 />
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
          <Frame2 />
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

function Line1() {
  return <div className="bg-[rgba(0,11,37,0.57)] h-px shrink-0 w-[12px]" data-name="Line" />;
}

function Line2() {
  return <div className="bg-[rgba(0,11,37,0.57)] h-px shrink-0 w-[8px]" data-name="Line" />;
}

function Icon31() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative" data-name="Icon">
      <Line1 />
      <Line2 />
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
              <Icon31 />
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

function ContentSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content-section">
      <SectionTitle />
      <SectionBody />
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cycle Schedule
      </p>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="left">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Text23 />
      </div>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center relative shrink-0 w-full" data-name="Section-title">
      <Left1 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px]"></p>
    </div>
  );
}

function Textfield3() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-px relative text-[#000b25] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Triggered Cycle
          </p>
          <Icon32 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[1.2]">{`Cycle Type  `}</span>
        <span className="leading-[1.2] text-[#ef4444]">*</span>
      </p>
      <Textfield3 />
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        This cycle will run when a specific event or action is triggered.
      </p>
    </div>
  );
}

function Icon33() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[17px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function Textfield5() {
  return (
    <div className="bg-[#f5f5f5] h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Select Frequency
          </p>
          <Icon33 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[1.2]">{`Frequency `}</span>
        <span className="leading-[1.2] text-[#ef4444]">*</span>
      </p>
      <Textfield5 />
    </div>
  );
}

function ContentContactInformation2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <Textfield4 />
      <Textfield6 />
    </div>
  );
}

function Textfield7() {
  return (
    <div className="bg-[#f5f5f5] h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Enter the cycle day
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[1.2]">{`Cycle Day `}</span>
        <span className="leading-[1.2] text-[#ef4444]">*</span>
      </p>
      <Textfield7 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px]">calendar</p>
    </div>
  );
}

function Textfield9() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Pick a date
          </p>
          <Icon34 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[1.2]">{`Publish Date `}</span>
        <span className="leading-[1.2] text-[#ef4444]">*</span>
      </p>
      <Textfield9 />
    </div>
  );
}

function ContentContactInformation3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <Textfield8 />
      <Textfield10 />
    </div>
  );
}

function ContentBasicInformation1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Content - Basic Information">
      <ContentContactInformation2 />
      <ContentContactInformation3 />
    </div>
  );
}

function SectionBody1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <ContentBasicInformation1 />
      </div>
    </div>
  );
}

function ContentSection1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content-section">
      <SectionTitle1 />
      <SectionBody1 />
    </div>
  );
}

function Text24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Linked Plans
      </p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#6757eb] content-stretch flex gap-[8px] h-[40px] items-center justify-center leading-[0] px-[16px] py-0 relative rounded-[4px] shrink-0 text-[14px] text-white" data-name="Button">
      <div className="css-g0mm18 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0 text-center">
        <p className="css-ew64yg leading-[normal]">plus</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">Add Plans</p>
      </div>
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="left">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Text24 />
      </div>
      <Button5 />
    </div>
  );
}

function Icon35() {
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
      <Icon35 />
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

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Section />
      <SupportedFormats />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-dashed inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative w-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function SectionBody2() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <Frame1 />
      </div>
    </div>
  );
}

function ResultColumns() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[1112px]" data-name="Result Columns">
      <Left2 />
      <SectionBody2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center p-[24px] relative w-full">
          <ContentSection />
          <ContentSection1 />
          <ResultColumns />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <TopHeader />
      <ActionBar1 />
      <Frame3 />
    </div>
  );
}

export default function CreateCycleFormEmptyForm() {
  return (
    <div className="bg-[#f5f6fa] content-stretch flex items-start relative size-full" data-name="Create Cycle Form - Empty Form">
      <SideMenu />
      <Container />
    </div>
  );
}