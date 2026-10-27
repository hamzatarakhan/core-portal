import img59 from "./b24745fcb2f3b6fd6f823ae99430dfe5ab8cd460.png";
import svgPaths from "./svg-wje89zvsef";
import { imgGroup, imgGroup1 } from "./svg-85oe4";
type ToggleProps = {
  className?: string;
  leftLabelText?: string;
  rightLabelText?: string;
  showLeftLabel?: boolean;
  showRightLabel?: boolean;
  state?: boolean;
};

function Toggle({ className, leftLabelText = "Label", rightLabelText = "Label", showLeftLabel = true, showRightLabel = true, state = true }: ToggleProps) {
  const isNotState = !state;
  const isState = state;
  return (
    <div className={className || "relative"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center relative size-full">
          {isState && showLeftLabel && (
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              {leftLabelText}
            </p>
          )}
          {isState && (
            <button className="bg-[#000000] content-stretch cursor-pointer flex h-[24px] items-center justify-end px-[4px] py-[2px] relative rounded-[160px] shrink-0 w-[40px]" data-name="Toggle">
              <div className="bg-white relative rounded-[160px] shrink-0 size-[16px]" data-name="Handle" />
            </button>
          )}
          {isState && showRightLabel && (
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              {rightLabelText}
            </p>
          )}
          {isNotState && showLeftLabel && (
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Label
            </p>
          )}
          {isNotState && (
            <div className="flex items-center justify-center relative shrink-0">
              <div className="-scale-y-100 flex-none rotate-180">
                <button className="bg-[#bebebe] content-stretch cursor-pointer flex h-[24px] items-center justify-end px-[4px] py-[2px] relative rounded-[160px] w-[40px]" data-name="Toggle">
                  <div className="bg-white relative rounded-[160px] shrink-0 size-[16px]" data-name="Handle" />
                </button>
              </div>
            </div>
          )}
          {isNotState && showRightLabel && (
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              {rightLabelText}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
type UserProps = {
  className?: string;
  type?: "Default" | "Hovered";
};

function User({ className, type = "Default" }: UserProps) {
  const isHovered = type === "Hovered";
  return (
    <div className={className || `h-[40px] relative ${isHovered ? "bg-[#f4f4f5] rounded-[4px]" : ""}`}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative size-full">
          <div className="h-full relative rounded-[4px] shrink-0" data-name="Profile">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Display Picture Variants">
                  <div className="absolute bg-white inset-0 overflow-clip rounded-[7000px]" data-name="Image">
                    <div className="absolute inset-0 rounded-[282.342px]" data-name="59">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[282.342px] size-full" src={img59} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
            <p className={`[word-break:break-word] font-["Roboto:Regular",sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] w-[94px] ${isHovered ? "text-[#000000]" : "text-[rgba(0,11,37,0.87)]"}`} style={{ fontVariationSettings: '"wdth" 100' }}>
              Mitchell Admin
            </p>
          </div>
          <div className="h-full relative rounded-[8px] shrink-0" data-name="Icon">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                {type === "Default" && (
                  <div className="relative shrink-0" data-name="Button">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap">
                          <p className="leading-[normal]">{`\uF107`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {isHovered && (
                  <div className="flex items-center justify-center relative shrink-0">
                    <div className="-scale-y-100 flex-none">
                      <div className="relative" data-name="Button">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap">
                              <p className="leading-[normal]">{`\uF107`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type LineProps = {
  className?: string;
  type?: boolean;
};

function Line({ className, type = true }: LineProps) {
  return (
    <div className={className || "h-[18px] relative"}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-px relative size-full">
          <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
            <div className="flex-none rotate-90 w-[100cqh]">
              <div className="h-0 relative w-full">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 18 1" width="18">
                    <line id="Line 1" stroke={!type ? "#E2E8F0" : "#73B3E7"} x2="18" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type PointProps = {
  className?: string;
  type?: "Default" | "Active";
};

function Point({ className, type = "Default" }: PointProps) {
  return (
    <div className={className || "relative"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center relative size-full">
          <div className="relative shrink-0 size-[5px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
              <circle cx="2.5" cy="2.5" fill={type === "Active" ? "#73B3E7" : "#E2E8F0"} id="Ellipse 1" r="2.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
type LogoProps = {
  className?: string;
  type?: "Sales point";
};

function Logo({ className, type = "Sales point" }: LogoProps) {
  return (
    <div className={className || "h-[40px] relative w-[222px]"}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Logo Container">
            <div className="bg-[#f4f4f5] content-stretch flex flex-col items-start overflow-clip p-[3.544px] relative rounded-[3.544px] shrink-0" data-name="Logo 1">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Logo">
                <div className="col-1 h-[31.879px] ml-0 mt-0 relative row-1 w-[34.772px]" data-name="Logo">
                  <svg className="absolute block inset-0 size-full" fill="none" height="31.8788" preserveAspectRatio="none" viewBox="0 0 34.7724 31.8788" width="34.7724">
                    <g id="Logo">
                      <path d={svgPaths.p22f46a00} fill="#000000" id="Path 31643" />
                      <path d={svgPaths.p28967800} fill="#000000" id="Path 31644" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center leading-[0] min-w-px relative whitespace-nowrap" data-name="Logo Text">
              <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#000b25] text-[19px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">SalesPoint</p>
              </div>
              <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">Enterprise Suite</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu-header">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pl-[8px] relative size-full">
          <Logo className="h-[40px] relative shrink-0 w-[222px]" />
        </div>
      </div>
    </div>
  );
}

function LogoLine() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_3px_10px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center py-[12px] relative shrink-0 w-full" data-name="Logo + Line">
      <MenuHeader />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex h-[17px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000000] text-[14px] text-center whitespace-nowrap">{`\uF2BB`}</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">Sales Teams</p>
      </div>
    </div>
  );
}

function RightIcon() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[11px]" data-name="Right icon">
        <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000000] text-[12px] text-center w-full">chevron-up</p>
      </div>
    </div>
  );
}

function ItemIcon() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[184px]" data-name="Item + Icon">
      <Text />
      <RightIcon />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#f4f4f5] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <div className="h-[17px] relative rounded-[4px] shrink-0" data-name="Side Menu - Item Icons">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center relative size-full">
                <Icon />
              </div>
            </div>
          </div>
          <ItemIcon />
        </div>
      </div>
    </div>
  );
}

function DotLineUp() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-end min-h-px relative" data-name="Dot line up">
      <div className="flex-[1_0_0] min-h-px relative w-px" data-name="Line">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center pr-px relative size-full" />
        </div>
      </div>
      <Point className="relative shrink-0" />
      <div className="flex-[1_0_0] min-h-px relative" data-name="Line">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center pr-px relative size-full">
            <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
              <div className="flex-none rotate-90 w-[100cqh]">
                <div className="h-0 relative w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 16.5 1" width="16.5">
                      <line id="Line 1" stroke="#E2E8F0" x2="16.5" y1="0.5" y2="0.5" />
                    </svg>
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

function Text1() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-name="Text">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] text-left whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[1.2]">Onboarding Channel Member</p>
        </div>
      </div>
    </div>
  );
}

function ItemIcon1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="Item + Icon">
      <Text1 />
    </div>
  );
}

function Item() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Item">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pl-[12px] pr-[8px] py-[12px] relative size-full">
          <ItemIcon1 />
        </div>
      </div>
    </div>
  );
}

function DotLineCenter() {
  return (
    <div className="content-stretch flex flex-col h-full items-center relative shrink-0 w-[5px]" data-name="Dot line center">
      <Line className="flex-[1_0_0] min-h-px relative" type={false} />
      <div className="relative shrink-0" data-name="Point">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <div className="relative shrink-0 size-[5px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
                <circle cx="2.5" cy="2.5" fill="#73B3E7" id="Ellipse 1" r="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-h-px relative" data-name="Line">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center pr-px relative size-full">
            <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
              <div className="flex-none rotate-90 w-[100cqh]">
                <div className="h-0 relative w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 16.5 1" width="16.5">
                      <line id="Line 1" stroke="#73B3E7" x2="16.5" y1="0.5" y2="0.5" />
                    </svg>
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

function Text2() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-name="Text">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-left whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[1.2]">Channel Members</p>
        </div>
      </div>
    </div>
  );
}

function ItemIcon2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="Item + Icon">
      <Text2 />
    </div>
  );
}

function Item1() {
  return (
    <div className="bg-[#e4e4e7] flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Item">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pl-[12px] pr-[8px] py-[12px] relative size-full">
          <ItemIcon2 />
        </div>
      </div>
    </div>
  );
}

function DotLineCenter1() {
  return (
    <div className="content-stretch flex flex-col h-full items-center relative shrink-0 w-[5px]" data-name="Dot line center">
      <Line className="flex-[1_0_0] min-h-px relative" type={false} />
      <div className="relative shrink-0" data-name="Point">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <div className="relative shrink-0 size-[5px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
                <circle cx="2.5" cy="2.5" fill="#E2E8F0" id="Ellipse 1" r="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Line className="flex-[1_0_0] min-h-px relative" type={false} />
    </div>
  );
}

function Text3() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-name="Text">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] text-left whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[1.2]">Prospect</p>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-center flex flex-wrap h-full items-center justify-center relative shrink-0" data-name="Icon">
        <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">chevron-down</p>
      </div>
    </div>
  );
}

function ItemIcon3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="Item + Icon">
      <Text3 />
      <Icon1 />
    </div>
  );
}

function Item2() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Item">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pl-[12px] pr-[8px] py-[12px] relative size-full">
          <ItemIcon3 />
        </div>
      </div>
    </div>
  );
}

function DotLineCenter2() {
  return (
    <div className="content-stretch flex flex-col h-full items-center relative shrink-0 w-[5px]" data-name="Dot line center">
      <Line className="flex-[1_0_0] min-h-px relative" type={false} />
      <div className="relative shrink-0" data-name="Point">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <div className="relative shrink-0 size-[5px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
                <circle cx="2.5" cy="2.5" fill="#E2E8F0" id="Ellipse 1" r="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Line className="flex-[1_0_0] min-h-px relative" type={false} />
    </div>
  );
}

function Text4() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-name="Text">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] text-left whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[1.2]">Hierarchy</p>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-center flex flex-wrap h-full items-center justify-center relative shrink-0" data-name="Icon">
        <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">chevron-down</p>
      </div>
    </div>
  );
}

function ItemIcon4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="Item + Icon">
      <Text4 />
      <Icon2 />
    </div>
  );
}

function Item3() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Item">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pl-[12px] pr-[8px] py-[12px] relative size-full">
          <ItemIcon4 />
        </div>
      </div>
    </div>
  );
}

function DotLineCenter3() {
  return (
    <div className="content-stretch flex flex-col h-full items-center relative shrink-0 w-[5px]" data-name="Dot line center">
      <Line className="flex-[1_0_0] min-h-px relative" type={false} />
      <div className="relative shrink-0" data-name="Point">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <div className="relative shrink-0 size-[5px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
                <circle cx="2.5" cy="2.5" fill="#E2E8F0" id="Ellipse 1" r="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Line className="flex-[1_0_0] min-h-px relative" type={false} />
    </div>
  );
}

function Text5() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px relative" data-name="Text">
        <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] text-left whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[1.2]">Direct Sales</p>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-center flex flex-wrap h-full items-center justify-center relative shrink-0" data-name="Icon">
        <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">chevron-down</p>
      </div>
    </div>
  );
}

function ItemIcon5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="Item + Icon">
      <Text5 />
      <Icon3 />
    </div>
  );
}

function Item4() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Item">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pl-[12px] pr-[8px] py-[12px] relative size-full">
          <ItemIcon5 />
        </div>
      </div>
    </div>
  );
}

function Items() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[8px] relative shrink-0 w-full" data-name="Items">
      <div className="relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 10">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[24px] pr-[12px] relative size-full">
            <div className="h-[38px] relative shrink-0" data-name="Line">
              <div className="flex flex-col justify-end size-full">
                <div className="content-stretch flex flex-col items-start justify-end relative size-full">
                  <DotLineUp />
                </div>
              </div>
            </div>
            <Item />
          </div>
        </div>
      </div>
      <div className="relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 13">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[24px] pr-[12px] relative size-full">
            <div className="h-[38px] relative shrink-0 w-[5px]" data-name="Line">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <DotLineCenter />
                </div>
              </div>
            </div>
            <Item1 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 14">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[24px] pr-[12px] relative size-full">
            <div className="h-[38px] relative shrink-0 w-[5px]" data-name="Line">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <DotLineCenter1 />
                </div>
              </div>
            </div>
            <Item2 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 12">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[24px] pr-[12px] relative size-full">
            <div className="h-[38px] relative shrink-0 w-[5px]" data-name="Line">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <DotLineCenter2 />
                </div>
              </div>
            </div>
            <Item3 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[4px] shrink-0 w-full" data-name="Side Menu Item - Level 15">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[24px] pr-[12px] relative size-full">
            <div className="h-[38px] relative shrink-0 w-[5px]" data-name="Line">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <DotLineCenter3 />
                </div>
              </div>
            </div>
            <Item4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex h-[17px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">{`\uF15C`}</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">Commission</p>
      </div>
    </div>
  );
}

function RightIcon1() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[11px]" data-name="Right icon">
        <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] text-center w-full">chevron-down</p>
      </div>
    </div>
  );
}

function ItemIcon6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[184px]" data-name="Item + Icon">
      <Text6 />
      <RightIcon1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex h-[17px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">{`\uF145`}</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">{`E-reload `}</p>
      </div>
    </div>
  );
}

function RightIcon2() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[11px]" data-name="Right icon">
        <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] text-center w-full">chevron-down</p>
      </div>
    </div>
  );
}

function ItemIcon7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[184px]" data-name="Item + Icon">
      <Text7 />
      <RightIcon2 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex h-[17px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">{`\uF095`}</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">Tracking</p>
      </div>
    </div>
  );
}

function RightIcon3() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[11px]" data-name="Right icon">
        <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] text-center w-full">chevron-down</p>
      </div>
    </div>
  );
}

function ItemIcon8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[184px]" data-name="Item + Icon">
      <Text8 />
      <RightIcon3 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex h-[17px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">{`\uF51E`}</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">Commission Engine</p>
      </div>
    </div>
  );
}

function RightIcon4() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[11px]" data-name="Right icon">
        <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] text-center w-full">chevron-down</p>
      </div>
    </div>
  );
}

function ItemIcon9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[184px]" data-name="Item + Icon">
      <Text9 />
      <RightIcon4 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex h-[17px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">{`\uF075`}</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">Notifications</p>
      </div>
    </div>
  );
}

function RightIcon5() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[11px]" data-name="Right icon">
        <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] text-center w-full">chevron-down</p>
      </div>
    </div>
  );
}

function ItemIcon10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[184px]" data-name="Item + Icon">
      <Text10 />
      <RightIcon5 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex h-[17px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">{`\uF0FE`}</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">{`POS Device Mange `}</p>
      </div>
    </div>
  );
}

function RightIcon6() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[11px]" data-name="Right icon">
        <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] text-center w-full">chevron-down</p>
      </div>
    </div>
  );
}

function ItemIcon11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[184px]" data-name="Item + Icon">
      <Text11 />
      <RightIcon6 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="content-stretch flex h-[17px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">{`\uF02D`}</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">Configurations</p>
      </div>
    </div>
  );
}

function RightIcon7() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[11px]" data-name="Right icon">
        <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] text-center w-full">chevron-down</p>
      </div>
    </div>
  );
}

function ItemIcon12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[184px]" data-name="Item + Icon">
      <Text12 />
      <RightIcon7 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="content-stretch flex h-[17px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">{`\uF0C0`}</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">Users</p>
      </div>
    </div>
  );
}

function RightIcon8() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[11px]" data-name="Right icon">
        <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] text-center w-full">chevron-down</p>
      </div>
    </div>
  );
}

function ItemIcon13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[184px]" data-name="Item + Icon">
      <Text13 />
      <RightIcon8 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="content-stretch flex h-[17px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">{`\uF271`}</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">{`Visit Management `}</p>
      </div>
    </div>
  );
}

function RightIcon9() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[11px]" data-name="Right icon">
        <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] text-center w-full">chevron-down</p>
      </div>
    </div>
  );
}

function ItemIcon14() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[184px]" data-name="Item + Icon">
      <Text14 />
      <RightIcon9 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="content-stretch flex h-[17px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">{`\uF1C0`}</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">Apps</p>
      </div>
    </div>
  );
}

function RightIcon10() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[11px]" data-name="Right icon">
        <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] text-center w-full">chevron-down</p>
      </div>
    </div>
  );
}

function ItemIcon15() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[184px]" data-name="Item + Icon">
      <Text15 />
      <RightIcon10 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="content-stretch flex h-[17px] items-center justify-center relative shrink-0 w-[14px]" data-name="Icon">
      <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">{`\uF013`}</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Text">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">Setting</p>
      </div>
    </div>
  );
}

function RightIcon11() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0 w-[11px]" data-name="Right icon">
        <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] text-center w-full">chevron-down</p>
      </div>
    </div>
  );
}

function ItemIcon16() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[184px]" data-name="Item + Icon">
      <Text16 />
      <RightIcon11 />
    </div>
  );
}

function MenuBody() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px px-[8px] relative" data-name="Menu-body">
      <button className="bg-[#f8fafc] cursor-pointer relative rounded-[4px] shrink-0" data-name="Side Menu Item - Level 1">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-center relative size-full">
            <Header />
            <Items />
          </div>
        </div>
      </button>
      <div className="bg-white relative rounded-[4px] shrink-0" data-name="Side Menu Item - Level 2">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative size-full">
            <div className="h-[17px] relative rounded-[4px] shrink-0" data-name="Side Menu - Item Icons">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <Icon4 />
                </div>
              </div>
            </div>
            <ItemIcon6 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0" data-name="Side Menu Item - Level 3">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative size-full">
            <div className="h-[17px] relative rounded-[4px] shrink-0" data-name="Side Menu - Item Icons">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <Icon5 />
                </div>
              </div>
            </div>
            <ItemIcon7 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0" data-name="Side Menu Item - Level 4">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative size-full">
            <div className="h-[17px] relative rounded-[4px] shrink-0" data-name="Side Menu - Item Icons">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <Icon6 />
                </div>
              </div>
            </div>
            <ItemIcon8 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0" data-name="Side Menu Item - Level 5">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative size-full">
            <div className="h-[17px] relative rounded-[4px] shrink-0" data-name="Side Menu - Item Icons">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <Icon7 />
                </div>
              </div>
            </div>
            <ItemIcon9 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0" data-name="Side Menu Item - Level 6">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative size-full">
            <div className="h-[17px] relative rounded-[4px] shrink-0" data-name="Side Menu - Item Icons">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <Icon8 />
                </div>
              </div>
            </div>
            <ItemIcon10 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0" data-name="Side Menu Item - Level 7">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative size-full">
            <div className="h-[17px] relative rounded-[4px] shrink-0" data-name="Side Menu - Item Icons">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <Icon9 />
                </div>
              </div>
            </div>
            <ItemIcon11 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0" data-name="Side Menu Item - Level 8">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative size-full">
            <div className="h-[17px] relative rounded-[4px] shrink-0" data-name="Side Menu - Item Icons">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <Icon10 />
                </div>
              </div>
            </div>
            <ItemIcon12 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0" data-name="Side Menu Item - Level 9">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative size-full">
            <div className="h-[17px] relative rounded-[4px] shrink-0" data-name="Side Menu - Item Icons">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <Icon11 />
                </div>
              </div>
            </div>
            <ItemIcon13 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0" data-name="Side Menu Item - Level 10">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative size-full">
            <div className="h-[17px] relative rounded-[4px] shrink-0" data-name="Side Menu - Item Icons">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <Icon12 />
                </div>
              </div>
            </div>
            <ItemIcon14 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0" data-name="Side Menu Item - Level 11">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative size-full">
            <div className="h-[17px] relative rounded-[4px] shrink-0" data-name="Side Menu - Item Icons">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <Icon13 />
                </div>
              </div>
            </div>
            <ItemIcon15 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0" data-name="Side Menu Item - Level 12">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative size-full">
            <div className="h-[17px] relative rounded-[4px] shrink-0" data-name="Side Menu - Item Icons">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <Icon14 />
                </div>
              </div>
            </div>
            <ItemIcon16 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[27.73%_73.83%_21.99%_17.24%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-88.876px_-69.142px] mask-size-[238.103px_132.283px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="8.07793" preserveAspectRatio="none" viewBox="0 0 8.23104 8.07793" width="8.23104">
        <g id="Group">
          <path d={svgPaths.p3bcd5f00} fill="#000000" id="Vector" />
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
    <div className="absolute inset-[-0.02%_63.05%_21.91%_28.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-98.795px_-64.684px] mask-size-[238.103px_132.283px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="12.5488" preserveAspectRatio="none" viewBox="0 0 8.2376 12.5488" width="8.2376">
        <g id="Group">
          <path d={svgPaths.p2b5e7fc0} fill="#000000" id="Vector" />
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
    <div className="absolute inset-[28.67%_58.95%_23.14%_39.35%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-109.242px_-69.293px] mask-size-[238.103px_132.283px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="7.74174" preserveAspectRatio="none" viewBox="0 0 1.56634 7.74174" width="1.56634">
        <g id="Group">
          <path d={svgPaths.p2b786f00} fill="#000000" id="Vector" />
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
    <div className="absolute inset-[27.64%_48.69%_23.15%_43.45%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-113.017px_-69.128px] mask-size-[238.103px_132.283px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="7.90513" preserveAspectRatio="none" viewBox="0 0 7.23718 7.90513" width="7.23718">
        <g id="Group">
          <path d={svgPaths.p2274f600} fill="#000000" id="Vector" />
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
    <div className="absolute inset-[27.68%_37.99%_0.1%_53.06%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-121.869px_-69.135px] mask-size-[238.103px_132.283px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.6015" preserveAspectRatio="none" viewBox="0 0 8.24432 11.6015" width="8.24432">
        <g id="Group">
          <path d={svgPaths.p36c93600} fill="#000000" id="Vector" />
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
    <div className="absolute inset-[27.88%_83.36%_21.8%_7.77%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-80.163px_-69.166px] mask-size-[238.103px_132.283px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="8.08417" preserveAspectRatio="none" viewBox="0 0 8.16117 8.08417" width="8.16117">
        <g id="Group">
          <path d={svgPaths.pc3d9380} fill="#000000" id="Vector" />
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
    <div className="absolute inset-[27.07%_17.11%_21.79%_74.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-141.183px_-69.036px] mask-size-[238.103px_132.283px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="8.21605" preserveAspectRatio="none" viewBox="0 0 8.16097 8.21605" width="8.16097">
        <g id="Group">
          <path d={svgPaths.p2706f580} fill="#000000" id="Vector" />
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
    <div className="absolute inset-[-0.11%_12.1%_72.98%_83.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-149.6px_-64.67px] mask-size-[238.103px_132.283px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="4.35769" preserveAspectRatio="none" viewBox="0 0 4.35679 4.35769" width="4.35679">
        <g id="Group">
          <path d={svgPaths.p356c3900} fill="#000000" id="Vector" />
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
    <div className="absolute inset-[10.99%_58.77%_77.17%_39.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-109.073px_-66.452px] mask-size-[238.103px_132.283px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.90327" preserveAspectRatio="none" viewBox="0 0 1.90418 1.90327" width="1.90418">
        <g id="Group">
          <path d={svgPaths.p14074c00} fill="#000000" id="Vector" />
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
    <div className="absolute inset-[28.87%_27.03%_6.3%_65.13%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-132.981px_-69.325px] mask-size-[238.103px_132.283px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.4156" preserveAspectRatio="none" viewBox="0 0 7.22 10.4156" width="7.22">
        <g id="Group">
          <path d={svgPaths.p463d900} fill="#d4d4d8" id="Vector" />
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
    <div className="absolute inset-[36.96%_14.12%_26.86%_85.12%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-151.395px_-70.625px] mask-size-[238.103px_132.283px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="5.81124" preserveAspectRatio="none" viewBox="0 0 0.697611 5.81124" width="0.697611">
        <g id="Group">
          <path d={svgPaths.p346c9100} fill="#d4d4d8" id="Vector" />
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
    <div className="absolute inset-[28.91%_5.36%_26.84%_88.75%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-154.74px_-69.331px] mask-size-[238.103px_132.283px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="7.10994" preserveAspectRatio="none" viewBox="0 0 5.42514 7.10994" width="5.42514">
        <g id="Group">
          <path d={svgPaths.p22587700} fill="#d4d4d8" id="Vector" />
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
    <div className="absolute inset-[10.28%_0_26.83%_96.44%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-112.213px_-21.553px] mask-size-[138.938px_62.814px]" style={{ maskImage: `url("${imgGroup1}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.1022" preserveAspectRatio="none" viewBox="0 0 3.28404 10.1022" width="3.28404">
        <g id="Group">
          <path d={svgPaths.p3d982100} fill="#d4d4d8" id="Vector" />
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
        <svg className="absolute block inset-0 size-full" fill="none" height="12.3618" preserveAspectRatio="none" viewBox="0 0 6.65584 12.3618" width="6.65584">
          <path d={svgPaths.p3dfe0080} fill="#000000" id="Vector" />
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
    <div className="bg-white drop-shadow-[0px_3px_10px_rgba(0,0,0,0.05)] h-[41px] relative shrink-0 w-full" data-name="Action bar">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-shadow-[0px_4px_12px_rgba(0,0,0,0.12)] whitespace-nowrap" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>{`Powered By `}</p>
          <Asset />
        </div>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[5px] py-px relative shrink-0" data-name="Icon">
      <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] whitespace-nowrap">
        <p className="leading-[1.2]">{`\uF105`}</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <div className="relative shrink-0" data-name="Breadcrumb Text">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Sales Team
            </p>
          </div>
        </div>
      </div>
      <Icon15 />
    </div>
  );
}

function BreadcrumbText() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Breadcrumb Text">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Channel Member Profile
      </p>
    </div>
  );
}

function SearchConatiner() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Search conatiner">
      <div className="relative rounded-[160px] shrink-0 size-[40px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">
              <p className="leading-[normal]">{`\uF0F3`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[160px] shrink-0 size-[40px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">
              <p className="leading-[normal]">{`\uF186`}</p>
            </div>
          </div>
        </div>
      </div>
      <User className="h-[40px] relative shrink-0" />
    </div>
  );
}

function Search() {
  return <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[40px] items-center min-w-px relative" data-name="Search" />;
}

function Cta() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-w-px relative" data-name="CTA">
      <div className="h-[40px] relative rounded-[4px] shrink-0" data-name="Button">
        <div aria-hidden className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[1.2]">Discard</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#000000] h-[40px] relative rounded-[4px] shrink-0" data-name="Button">
        <div aria-hidden className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[1.2]">Save</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cta1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-name="CTA">
      <div className="h-[40px] relative rounded-[4px] shrink-0" data-name="Button">
        <div aria-hidden className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[1.2]">Action</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#000000] h-[40px] relative rounded-[4px] shrink-0" data-name="Button">
        <div aria-hidden className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[1.2]">Action</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SegmentedControlItem() {
  return (
    <div className="content-stretch flex flex-col h-[33px] items-start relative shrink-0 w-[113px]" data-name="Segmented Control Item">
      <div className="absolute bg-white h-[33px] left-0 rounded-[4px] top-0" data-name="Segmented">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#3f3f46] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Submitted
            </p>
          </div>
        </div>
      </div>
      <div className="absolute left-[97px] size-[16px] top-0">
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <path d="M0 0H16V16L7.5 7.5L0 0Z" fill="#E1E1E1" id="Rectangle 20" />
        </svg>
      </div>
      <div className="absolute flex h-[17px] items-center justify-center left-[97px] top-[16px] w-[16px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[17px] relative w-[16px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 16 17" width="16">
              <path d="M0 0H16V17L7.5 7.96875L0 0Z" fill="#E1E1E1" id="Rectangle 21" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SegmentedControl() {
  return (
    <div className="bg-[#e1e1e1] content-stretch flex gap-[2px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Segmented control">
      <SegmentedControlItem />
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative rounded-[4px] shrink-0" data-name="Segmented">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative size-full">
              <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                To Approve
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative rounded-[4px] shrink-0" data-name="Segmented">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative size-full">
              <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                Approved
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative rounded-[4px] shrink-0" data-name="Segmented">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative size-full">
              <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                Active
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative rounded-[4px] shrink-0" data-name="Segmented">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative size-full">
              <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                Suspended
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative rounded-[4px] shrink-0" data-name="Segmented">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative size-full">
              <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                Terminated
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative rounded-[4px] shrink-0" data-name="Segmented">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative size-full">
              <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                Resigned
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Group">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative size-full">
        <Cta1 />
        <SegmentedControl />
      </div>
    </div>
  );
}

function SmartButtonsSection() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_3px_10px_rgba(0,0,0,0.05)] flex items-start relative rounded-[4px] shrink-0 w-full" data-name="Smart Buttons Section">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Group13 />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-bl-[4px] rounded-tl-[4px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-l border-solid border-t inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative size-full">
        <div className="flex-[1_0_0] h-[40px] min-w-px relative rounded-[4px]" data-name="Smart button">
          <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
              <div className="relative shrink-0" data-name="Circle">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center w-full">
                      <p className="leading-[normal]">circle</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[14px] text-[rgba(0,11,37,0.57)] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2] overflow-hidden text-ellipsis">Smart Button Name</p>
              </div>
              <div className="absolute bg-[#000000] left-[4px] rounded-[160px] top-[-8px]" data-name="Badge">
                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center justify-center px-[4px] py-[2px] relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p className="leading-[1.2]">16</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] h-[40px] min-w-px relative rounded-[4px]" data-name="Smart button">
          <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
              <div className="relative shrink-0" data-name="Circle">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center w-full">
                      <p className="leading-[normal]">circle</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[14px] text-[rgba(0,11,37,0.57)] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2] overflow-hidden text-ellipsis">Smart Button Name</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] h-[40px] min-w-px relative rounded-[4px]" data-name="Smart button">
          <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
              <div className="relative shrink-0" data-name="Circle">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center w-full">
                      <p className="leading-[normal]">circle</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[14px] text-[rgba(0,11,37,0.57)] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2] overflow-hidden text-ellipsis">Smart Button Name</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] h-[40px] min-w-px relative rounded-[4px]" data-name="Smart button">
          <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
              <div className="relative shrink-0" data-name="Circle">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center w-full">
                      <p className="leading-[normal]">circle</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[14px] text-[rgba(0,11,37,0.57)] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2] overflow-hidden text-ellipsis">Smart Button Name</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] h-[40px] min-w-px relative rounded-[4px]" data-name="Smart button">
          <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
              <div className="relative shrink-0" data-name="Circle">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] text-center whitespace-nowrap">
                      <p className="leading-[normal]">circle</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[14px] text-[rgba(0,11,37,0.57)] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2] overflow-hidden text-ellipsis">Smart Button Name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-full items-center justify-center relative rounded-[4px] shrink-0 w-[48px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,11,37,0.64)] text-center whitespace-nowrap">
        <p className="leading-[normal]">angle-down</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Channel Member Name
      </p>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center min-w-px relative" data-name="left">
      <Text17 />
    </div>
  );
}

function Tagchips() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="bg-[#f8fafc] h-full relative rounded-[4px] shrink-0" data-name="Tagchips">
        <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full text-[#3f3f46] text-center whitespace-nowrap">
            <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px]">{`\uF0E8`}</p>
            <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[1.2]" dir="auto">
                Operator
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WidgetTitleContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Widget Title Container">
      <Left />
      <Tagchips />
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Code
      </p>
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        5456589
      </p>
    </div>
  );
}

function Field() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="field">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[12px] relative size-full">
          <Text18 />
          <Text19 />
        </div>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Reporting to
      </p>
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Omer Khaled
      </p>
    </div>
  );
}

function Field1() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="field">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[12px] relative size-full">
          <Text20 />
          <Text21 />
        </div>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Phone Number `}</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        07789565
      </p>
    </div>
  );
}

function Field2() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="field">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[12px] relative size-full">
          <Text22 />
          <Text23 />
        </div>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Email
      </p>
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        654165444
      </p>
    </div>
  );
}

function Field3() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="field">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[12px] relative size-full">
          <Text24 />
          <Text25 />
        </div>
      </div>
    </div>
  );
}

function Fileds() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Fileds">
      <Field />
      <Field1 />
      <Field2 />
      <Field3 />
    </div>
  );
}

function Text26() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Area Manager
      </p>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center min-w-px relative" data-name="left">
      <Text26 />
    </div>
  );
}

function WidgetTitleContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Widget Title Container">
      <Left1 />
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Dealer Name
      </p>
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[rgba(0,11,37,0.57)] text-center">
        <p className="leading-[normal]">phone</p>
      </div>
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25]" style={{ fontVariationSettings: '"wdth" 100' }}>
        5456589
      </p>
    </div>
  );
}

function Text29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[rgba(0,11,37,0.57)] text-center">
        <p className="leading-[normal]">{`\uF0E0`}</p>
      </div>
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25]" style={{ fontVariationSettings: '"wdth" 100' }}>
        5456589
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-start relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Container">
      <Text28 />
      <Text29 />
    </div>
  );
}

function Field4() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[4px] shrink-0 w-full" data-name="field">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center pb-[16px] pt-[8px] px-[16px] relative size-full">
          <Text27 />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Dealer Support
      </p>
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center min-w-px relative" data-name="left">
      <Text30 />
    </div>
  );
}

function WidgetTitleContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Widget Title Container">
      <Left2 />
    </div>
  );
}

function Text31() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Dealer Name
      </p>
    </div>
  );
}

function Text32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[rgba(0,11,37,0.57)] text-center">
        <p className="leading-[normal]">phone</p>
      </div>
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25]" style={{ fontVariationSettings: '"wdth" 100' }}>
        5456589
      </p>
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[rgba(0,11,37,0.57)] text-center">
        <p className="leading-[normal]">{`\uF0E0`}</p>
      </div>
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25]" style={{ fontVariationSettings: '"wdth" 100' }}>
        5456589
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-start relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Container">
      <Text32 />
      <Text33 />
    </div>
  );
}

function Field5() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[4px] shrink-0 w-full" data-name="field">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center pb-[16px] pt-[8px] px-[16px] relative size-full">
          <Text31 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function WidgetColumn() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative self-stretch" data-name="Widget Column">
      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Widget">
        <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Widget-Title">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center relative size-full">
                <WidgetTitleContainer1 />
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0 w-full" data-name="Widget-Channel member">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <Field4 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Widget">
        <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Widget-Title">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center relative size-full">
                <WidgetTitleContainer2 />
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0 w-full" data-name="Widget-Channel member">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <Field5 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`E - Wallet Account `}</p>
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center min-w-px relative" data-name="left">
      <Text34 />
    </div>
  );
}

function WidgetTitleContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Widget Title Container">
      <Left3 />
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[1.2]">View all</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[1.2] min-w-px relative text-[#000b25] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Wallet
      </p>
      <div className="relative rounded-[160px] shrink-0" data-name="Tagchips">
        <div aria-hidden className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[160px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[2px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[1.2]">Label</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="bg-[#e6f7f7] content-stretch flex flex-col items-end p-[4px] relative rounded-[2px] shrink-0" data-name="Icon">
      <div aria-hidden className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#00b0b2] text-[12px] w-full">{`\uF0D6`}</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Icon16 />
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        123.333 OMR
      </p>
    </div>
  );
}

function Col1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="col">
      <Container6 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Ooredoo
      </p>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Manager name
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Col1 />
      <Label1 />
      <Label2 />
    </div>
  );
}

function Col() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="col">
      <Label />
      <Container5 />
    </div>
  );
}

function Item6() {
  return (
    <div className="bg-[#f4f4f5] flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <Col />
        </div>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[1.2] min-w-px relative text-[#000b25] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Wallet
      </p>
      <div className="relative rounded-[160px] shrink-0" data-name="Tagchips">
        <div aria-hidden className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[160px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[2px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[1.2]">Label</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="bg-[#e6f7f7] content-stretch flex flex-col items-end p-[4px] relative rounded-[2px] shrink-0" data-name="Icon">
      <div aria-hidden className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#00b0b2] text-[12px] w-full">{`\uF0D6`}</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Icon17 />
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        123.333 OMR
      </p>
    </div>
  );
}

function Col3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="col">
      <Container8 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Ooredoo
      </p>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Manager name
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Col3 />
      <Label4 />
      <Label5 />
    </div>
  );
}

function Col2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="col">
      <Label3 />
      <Container7 />
    </div>
  );
}

function Item7() {
  return (
    <div className="bg-[#f4f4f5] flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <Col2 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Item6 />
      <Item7 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[1.2] min-w-px relative text-[#000b25] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Wallet
      </p>
      <div className="relative rounded-[160px] shrink-0" data-name="Tagchips">
        <div aria-hidden className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[160px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[2px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[1.2]">Label</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="bg-[#e6f7f7] content-stretch flex flex-col items-end p-[4px] relative rounded-[2px] shrink-0" data-name="Icon">
      <div aria-hidden className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#00b0b2] text-[12px] w-full">{`\uF0D6`}</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Icon18 />
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        123.333 OMR
      </p>
    </div>
  );
}

function Col5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="col">
      <Container11 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Ooredoo
      </p>
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Manager name
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Col5 />
      <Label7 />
      <Label8 />
    </div>
  );
}

function Col4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="col">
      <Label6 />
      <Container10 />
    </div>
  );
}

function Item8() {
  return (
    <div className="bg-[#f4f4f5] flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <Col4 />
        </div>
      </div>
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[1.2] min-w-px relative text-[#000b25] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Wallet
      </p>
      <div className="relative rounded-[160px] shrink-0" data-name="Tagchips">
        <div aria-hidden className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[160px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[2px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[1.2]">Label</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="bg-[#e6f7f7] content-stretch flex flex-col items-end p-[4px] relative rounded-[2px] shrink-0" data-name="Icon">
      <div aria-hidden className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#00b0b2] text-[12px] w-full">{`\uF0D6`}</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Icon19 />
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        123.333 OMR
      </p>
    </div>
  );
}

function Col7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="col">
      <Container13 />
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Ooredoo
      </p>
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Manager name
      </p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Col7 />
      <Label10 />
      <Label11 />
    </div>
  );
}

function Col6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="col">
      <Label9 />
      <Container12 />
    </div>
  );
}

function Item9() {
  return (
    <div className="bg-[#f4f4f5] flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <Col6 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Item8 />
      <Item9 />
    </div>
  );
}

function Card() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex flex-col gap-[8px] h-full items-start relative shrink-0 w-[334px]" data-name="Card">
        <Container4 />
        <Container9 />
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px] whitespace-pre" style={{ fontVariationSettings: '"wdth" 100' }}>{`Latest Commission Details  `}</p>
    </div>
  );
}

function Left4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center min-w-px relative" data-name="left">
      <Text35 />
    </div>
  );
}

function WidgetTitleContainer4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Widget Title Container">
      <Left4 />
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[1.2]">History</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Title">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Unpaid Commission
      </p>
    </div>
  );
}

function Price1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="price">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#b93815] text-[19px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        658.56
      </p>
    </div>
  );
}

function Price2() {
  return (
    <div className="content-stretch flex items-end justify-center pb-px relative shrink-0" data-name="price">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#b93815] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">OMR</p>
      </div>
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex gap-[4px] items-end justify-center relative shrink-0" data-name="Price">
      <Price1 />
      <Price2 />
    </div>
  );
}

function WalletBalance() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-w-px relative" data-name="Wallet balance">
      <Title />
      <Price />
    </div>
  );
}

function Group20() {
  return (
    <div className="col-1 h-[14.663px] ml-0 mt-[0.92px] relative row-1 w-[36px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.6634" preserveAspectRatio="none" viewBox="0 0 36.0002 14.6634" width="36.0002">
        <g id="Group">
          <path d={svgPaths.p1cdb5500} fill="#FABA97" id="Vector" />
          <path d={svgPaths.p1b0e9580} fill="#DB8F72" id="Vector_2" />
          <path d={svgPaths.p4531e00} fill="#5E514C" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group21() {
  return (
    <div className="col-1 h-[14.665px] ml-0 mt-0 relative row-1 w-[36px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.6652" preserveAspectRatio="none" viewBox="0 0 36.0002 14.6652" width="36.0002">
        <g id="Group">
          <path d={svgPaths.p32bb0500} fill="#FABA97" id="Vector" />
          <path d={svgPaths.p2dcb9930} fill="#EDA988" id="Vector_2" />
          <path d={svgPaths.p5620780} fill="#7B6F69" id="Vector_3" />
          <path d={svgPaths.p134c5100} fill="#71645E" id="Vector_4" />
          <g id="Group_2">
            <path d={svgPaths.p211bb300} fill="white" id="Vector_5" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p3dd0900} fill="#F3F2FD" id="Vector_6" />
          </g>
          <g id="Group_4">
            <path d={svgPaths.pbbc5040} fill="#EDA988" id="Vector_7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group20 />
      <Group21 />
    </div>
  );
}

function Group18() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group19 />
    </div>
  );
}

function Group17() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group18 />
    </div>
  );
}

function Group23() {
  return (
    <div className="col-1 h-[2.579px] ml-0 mt-0 relative row-1 w-[0.539px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.57922" preserveAspectRatio="none" viewBox="0 0 0.539214 2.57922" width="0.539214">
        <g id="Group">
          <path d={svgPaths.p3fb8b470} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group24() {
  return (
    <div className="col-1 h-[1.084px] ml-0 mt-[2.97px] relative row-1 w-[0.535px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.08386" preserveAspectRatio="none" viewBox="0 0 0.535014 1.08386" width="0.535014">
        <g id="Group">
          <path d={svgPaths.p1da07d80} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[1.12px] mt-[6.51px] opacity-20 place-items-start relative row-1" data-name="Group">
      <Group23 />
      <Group24 />
    </div>
  );
}

function Group16() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group17 />
      <Group22 />
    </div>
  );
}

function Group15() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[16.31px] place-items-start relative row-1" data-name="Group">
      <Group16 />
    </div>
  );
}

function Group26() {
  return (
    <div className="col-1 h-[19.125px] ml-0 mt-0 relative row-1 w-[25.828px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.1247" preserveAspectRatio="none" viewBox="0 0 25.8277 19.1247" width="25.8277">
        <g id="Group">
          <path d={svgPaths.p2034f600} fill="#92B62B" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group28() {
  return (
    <div className="col-1 h-[19.124px] ml-0 mt-0 relative row-1 w-[25.828px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.1236" preserveAspectRatio="none" viewBox="0 0 25.8277 19.1236" width="25.8277">
        <g id="Group">
          <path d={svgPaths.p22c6f400} fill="#92B62B" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p98d5d00} fill="#7B9319" id="Vector_2" />
            <path d={svgPaths.p1e54d280} fill="#89A523" id="Vector_3" />
            <path d={svgPaths.p26391cf0} fill="#89A523" id="Vector_4" />
            <path d={svgPaths.p6876a80} fill="#7B9319" id="Vector_5" />
            <path d={svgPaths.p28723570} fill="#89A523" id="Vector_6" />
            <path d={svgPaths.p2317a2c0} fill="#7B9319" id="Vector_7" />
          </g>
          <path d={svgPaths.p3c33cfc0} fill="#89A523" id="Vector_8" />
          <path d={svgPaths.pd3a2380} fill="#7B9319" id="Vector_9" />
          <g id="Group_3">
            <path d={svgPaths.pad7d280} fill="#92B62B" id="Vector_10" />
            <path d={svgPaths.p28210cf1} fill="#92B62B" id="Vector_11" />
            <path d={svgPaths.p2971f200} fill="#92B62B" id="Vector_12" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group30() {
  return (
    <div className="col-1 h-[1.329px] ml-[0.97px] mt-0 relative row-1 w-[2.751px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.32899" preserveAspectRatio="none" viewBox="0 0 2.75052 1.32899" width="2.75052">
        <g id="Group">
          <path d={svgPaths.p10429900} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group31() {
  return (
    <div className="col-1 ml-0 mt-[1.65px] relative row-1 size-[0.973px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="0.973429" preserveAspectRatio="none" viewBox="0 0 0.972895 0.973429" width="0.972895">
        <g id="Group">
          <path d={svgPaths.p11de200} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group29() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[5.48px] mt-[6.33px] opacity-20 place-items-start relative row-1" data-name="Group">
      <Group30 />
      <Group31 />
    </div>
  );
}

function Group27() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group28 />
      <div className="col-1 h-[1.909px] ml-[8.79px] mt-px relative row-1 w-[8.475px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="1.90944" preserveAspectRatio="none" viewBox="0 0 8.47453 1.90944" width="8.47453">
          <path d={svgPaths.p1c564f00} fill="#EABE03" id="Vector" />
        </svg>
      </div>
      <Group29 />
    </div>
  );
}

function Group25() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[9.77px] mt-0 place-items-start relative row-1" data-name="Group">
      <Group26 />
      <Group27 />
      <div className="col-1 h-[16.069px] ml-[10.61px] mt-[1.97px] relative row-1 w-[6.653px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="16.069" preserveAspectRatio="none" viewBox="0 0 6.65329 16.069" width="6.65329">
          <path d={svgPaths.p2e93f980} fill="#FFE03C" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[15.478px] ml-[10.61px] mt-[2.56px] relative row-1 w-[6.654px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="15.4775" preserveAspectRatio="none" viewBox="0 0 6.6536 15.4775" width="6.6536">
          <path d={svgPaths.p733f500} fill="#F9D12B" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group33() {
  return (
    <div className="col-1 h-[3.257px] ml-0 mt-0 relative row-1 w-[0.677px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="3.25737" preserveAspectRatio="none" viewBox="0 0 0.676947 3.25737" width="0.676947">
        <g id="Group">
          <path d={svgPaths.p39147380} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group34() {
  return (
    <div className="col-1 h-[1.536px] ml-[0.02px] mt-[3.86px] relative row-1 w-[0.667px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="1.5364" preserveAspectRatio="none" viewBox="0 0 0.666759 1.5364" width="0.666759">
        <g id="Group">
          <path d={svgPaths.p54d2980} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group32() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[25.38px] mt-[8.44px] opacity-30 place-items-start relative row-1" data-name="Group">
      <Group33 />
      <Group34 />
    </div>
  );
}

function Group14() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <Group15 />
      <Group25 />
      <Group32 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#f8fafc] h-[78px] relative rounded-[4px] shrink-0 w-full" data-name="Card">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative size-full">
          <WalletBalance />
          <Group14 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function SegmentedControl1() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[4px] shrink-0 w-full" data-name="Segmented control">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[2px] items-center p-[4px] relative size-full">
          <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Segmented">
            <div aria-hidden className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000000] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Plan 1 `}</p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Segmented">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Plan 2
                </p>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Segmented">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative size-full">
                <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Plan 3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center relative shrink-0 whitespace-nowrap" data-name="text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Target
      </p>
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7a5af8] text-[10px] text-center">
        <p className="leading-[normal]">{`\uF140`}</p>
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7a5af8] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        536 OMR
      </p>
    </div>
  );
}

function Field6() {
  return (
    <div className="bg-[#fafaff] flex-[1_0_0] h-full min-w-px relative rounded-[4px]" data-name="field">
      <div aria-hidden className="absolute border border-[#ebe9fe] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-[8px] py-[12px] relative size-full">
          <Text36 />
          <Text37 />
        </div>
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center relative shrink-0 whitespace-nowrap" data-name="text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Achieved %
      </p>
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#087443] text-[10px] text-center">
        <p className="leading-[normal]">{`\uF058`}</p>
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#087443] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        65%
      </p>
    </div>
  );
}

function Field7() {
  return (
    <div className="bg-[#edfcf2] flex-[1_0_0] h-full min-w-px relative rounded-[4px]" data-name="field">
      <div aria-hidden className="absolute border border-[#d3f8df] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-[8px] py-[12px] relative size-full">
          <Text38 />
          <Text39 />
        </div>
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center relative shrink-0 whitespace-nowrap" data-name="text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: '"wdth" 100' }}>{`Commission `}</p>
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="leading-[normal]">{`\uF68B`}</p>
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000000] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        5369 OMR
      </p>
    </div>
  );
}

function Field8() {
  return (
    <div className="bg-[#f4f4f5] flex-[1_0_0] h-full min-w-px relative rounded-[4px]" data-name="field">
      <div aria-hidden className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-[8px] py-[12px] relative size-full">
          <Text40 />
          <Text41 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px relative w-full" data-name="Container">
      <Field6 />
      <Field7 />
      <Field8 />
    </div>
  );
}

function Card3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-name="Card">
      <SegmentedControl1 />
      <Container14 />
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[224px] items-start relative shrink-0 w-full" data-name="Card">
      <Card2 />
      <Card3 />
    </div>
  );
}

function WidgetContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Widget Container">
      <WidgetColumn />
      <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Widget">
        <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Widget-Title">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center relative size-full">
                <WidgetTitleContainer3 />
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0 w-full" data-name="Widget- Ewallet account">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center relative size-full">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Widget">
        <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Widget-Title">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center relative size-full">
                <WidgetTitleContainer4 />
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0 w-full" data-name="Placeholder V1">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <Card1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
        <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Channel Member Information
        </p>
      </div>
    </div>
  );
}

function Left5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="left">
      <Text42 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="Container">
      <Left5 />
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Section-title">
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Group Name
      </p>
    </div>
  );
}

function Container16() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center py-[8px] relative size-full">
            <Container17 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Textfield() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-w-px relative text-[#000b25] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            5456589
          </p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield1() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-w-px relative text-[#000b25] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Reporting to
          </p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield2() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-w-px relative text-[#000b25] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`Phone Number `}</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ContentContactInformation() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <div className="flex-[1_0_0] min-w-px relative" data-name="Textfield">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Code
          </p>
          <Textfield />
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Textfield">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Reporting to
          </p>
          <Textfield1 />
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Textfield">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Phone Number `}</p>
          <Textfield2 />
        </div>
      </div>
    </div>
  );
}

function Subsection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
      <div className="bg-[#f8fafc] relative shrink-0 w-full" data-name="Subsection-Title">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pr-[8px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
                <div className="flex-none rotate-90 w-[100cqh]">
                  <div className="h-0 relative w-full">
                    <div className="absolute inset-[-1px_-3.03%]">
                      <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 35 2" width="35">
                        <path d="M1 1H34" id="Line 1" stroke="#d4d4d8" strokeLinecap="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Container16 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Placeholder V1">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <ContentContactInformation />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Group Name
      </p>
    </div>
  );
}

function Container18() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center py-[8px] relative size-full">
            <Container19 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Textfield3() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-w-px relative text-[#000b25] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Value
          </p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield4() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-w-px relative text-[#000b25] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Value
          </p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield5() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-w-px relative text-[#000b25] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Value
          </p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ContentContactInformation1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <div className="flex-[1_0_0] min-w-px relative" data-name="Textfield">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Lebel
          </p>
          <Textfield3 />
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Textfield">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Lebel
          </p>
          <Textfield4 />
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Textfield">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Lebel
          </p>
          <Textfield5 />
        </div>
      </div>
    </div>
  );
}

function Subsection1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
      <div className="bg-[#f8fafc] relative shrink-0 w-full" data-name="Subsection-Title">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pr-[8px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
                <div className="flex-none rotate-90 w-[100cqh]">
                  <div className="h-0 relative w-full">
                    <div className="absolute inset-[-1px_-3.03%]">
                      <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 35 2" width="35">
                        <path d="M1 1H34" id="Line 1" stroke="#d4d4d8" strokeLinecap="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Container18 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Placeholder V1">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <ContentContactInformation1 />
        </div>
      </div>
    </div>
  );
}

function SectionBody() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
        <Subsection />
        <Subsection1 />
      </div>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content Container">
      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Widget">
        <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Widget-Title">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center relative size-full">
                <WidgetTitleContainer />
              </div>
            </div>
          </div>
          <div className="relative rounded-[4px] shrink-0 w-full" data-name="Widget-Channel member">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <Fileds />
            </div>
          </div>
        </div>
      </div>
      <WidgetContainer />
      <div className="relative shrink-0 w-full" data-name="SalesPoint - Section">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <SectionTitle />
          <SectionBody />
        </div>
      </div>
    </div>
  );
}

function Text43() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
        <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Profile Settings
        </p>
      </div>
    </div>
  );
}

function Left6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="left">
      <Text43 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="Container">
      <Left6 />
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Section-title">
      <Container20 />
    </div>
  );
}

function Text44() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Is Trusted?
      </p>
    </div>
  );
}

function Text45() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Enable trusted member privileges
      </p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Container">
      <Text44 />
      <Text45 />
    </div>
  );
}

function Subsection2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
      <div className="bg-[#f8fafc] relative rounded-[4px] shrink-0 w-full" data-name="Controllers Card">
        <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
            <Container21 />
            <Toggle className="relative shrink-0" showLeftLabel={false} showRightLabel={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Product & Channel Access`}</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center py-[8px] relative size-full">
            <Container23 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px] whitespace-nowrap">ANGLE-DOWN</p>
    </div>
  );
}

function Textfield6() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            All product
          </p>
          <Icon20 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield7() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Enter allowed channels
          </p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ContentContactInformation2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <div className="flex-[1_0_0] min-w-px relative" data-name="Textfield">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Allowed Products
          </p>
          <Textfield6 />
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Textfield">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Allowed Channels
          </p>
          <Textfield7 />
        </div>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px] whitespace-nowrap">ANGLE-DOWN</p>
    </div>
  );
}

function Textfield8() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Select categories
          </p>
          <Icon21 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ContentContactInformation3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <div className="flex-[1_0_0] min-w-px relative" data-name="Textfield">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Channel Categories
          </p>
          <Textfield8 />
        </div>
      </div>
      <div className="flex-[1_0_0] h-[63px] min-w-px relative" data-name="Textfield">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" />
      </div>
    </div>
  );
}

function Subsection3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
      <div className="bg-[#f8fafc] relative shrink-0 w-full" data-name="Subsection-Title">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pr-[8px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
                <div className="flex-none rotate-90 w-[100cqh]">
                  <div className="h-0 relative w-full">
                    <div className="absolute inset-[-1px_-3.03%]">
                      <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 35 2" width="35">
                        <path d="M1 1H34" id="Line 1" stroke="#d4d4d8" strokeLinecap="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Container22 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Placeholder V1">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <ContentContactInformation2 />
          <ContentContactInformation3 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Hierarchy & Organization`}</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center py-[8px] relative size-full">
            <Container25 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px] whitespace-nowrap">ANGLE-DOWN</p>
    </div>
  );
}

function Textfield9() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Hierarchy Type
          </p>
          <Icon22 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield10() {
  return (
    <div className="bg-[#f5f5f5] h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Territory Type
          </p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ContentContactInformation4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <div className="flex-[1_0_0] min-w-px relative" data-name="Textfield">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Hierarchy Type
          </p>
          <Textfield9 />
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Textfield">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Territory Type
          </p>
          <Textfield10 />
        </div>
      </div>
    </div>
  );
}

function Textfield11() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Operator
          </p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield12() {
  return (
    <div className="bg-[#f5f5f5] h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Operator
          </p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ContentContactInformation5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <div className="flex-[1_0_0] min-w-px relative" data-name="Textfield">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Parent
          </p>
          <Textfield11 />
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Textfield">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Related User
          </p>
          <Textfield12 />
        </div>
      </div>
    </div>
  );
}

function Subsection4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
      <div className="bg-[#f8fafc] relative shrink-0 w-full" data-name="Subsection-Title">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pr-[8px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
                <div className="flex-none rotate-90 w-[100cqh]">
                  <div className="h-0 relative w-full">
                    <div className="absolute inset-[-1px_-3.03%]">
                      <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 35 2" width="35">
                        <path d="M1 1H34" id="Line 1" stroke="#d4d4d8" strokeLinecap="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Container24 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Placeholder V1">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <ContentContactInformation4 />
          <ContentContactInformation5 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Account & Business Configuration`}</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center py-[8px] relative size-full">
            <Container27 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px] whitespace-nowrap">angle-down</p>
    </div>
  );
}

function Textfield13() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: '"wdth" 100' }}>{`Select business type `}</p>
          <Icon23 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Icon24() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px] whitespace-nowrap">angle-down</p>
    </div>
  );
}

function Textfield14() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Allocation Mode
          </p>
          <Icon24 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ContentContactInformation6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <div className="flex-[1_0_0] min-w-px relative" data-name="Textfield">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Business Type
          </p>
          <Textfield13 />
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Textfield">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Allocation Mode
          </p>
          <Textfield14 />
        </div>
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px] whitespace-nowrap">angle-down</p>
    </div>
  );
}

function Textfield15() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Yousef@gmail .com
          </p>
          <Icon25 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ContentContactInformation7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <div className="flex-[1_0_0] min-w-px relative" data-name="Textfield">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Account Type
          </p>
          <Textfield15 />
        </div>
      </div>
      <div className="flex-[1_0_0] h-[63px] min-w-px relative" data-name="Textfield">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" />
      </div>
    </div>
  );
}

function Subsection5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
      <div className="bg-[#f8fafc] relative shrink-0 w-full" data-name="Subsection-Title">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pr-[8px] relative size-full">
            <div className="flex flex-row items-center self-stretch">
              <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
                <div className="flex-none rotate-90 w-[100cqh]">
                  <div className="h-0 relative w-full">
                    <div className="absolute inset-[-1px_-3.03%]">
                      <svg className="block size-full" fill="none" height="2" preserveAspectRatio="none" viewBox="0 0 35 2" width="35">
                        <path d="M1 1H34" id="Line 1" stroke="#d4d4d8" strokeLinecap="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Container26 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Placeholder V1">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <ContentContactInformation6 />
          <ContentContactInformation7 />
        </div>
      </div>
    </div>
  );
}

function SectionBody1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
        <Subsection2 />
        <Subsection3 />
        <Subsection4 />
        <Subsection5 />
      </div>
    </div>
  );
}

function Text46() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
        <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Channel Member Parents
        </p>
      </div>
    </div>
  );
}

function Left7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="left">
      <Text46 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="Container">
      <Left7 />
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Section-title">
      <Container28 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="bg-[#7a5af8] content-stretch flex flex-col gap-[3.2px] items-center justify-center relative rounded-[128px] shrink-0 size-[32px]" data-name="Icon">
      <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[12.8px] whitespace-nowrap">
        <p className="leading-[1.2]">O</p>
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Operator
      </p>
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Operator
      </p>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Container">
      <Details />
      <Details1 />
    </div>
  );
}

function Inner() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Inner">
      <Icon26 />
      <Container29 />
    </div>
  );
}

function Level1() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Level 6">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <Inner />
        </div>
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <div className="absolute inset-[0_-3.13%_0_0]">
        <svg className="block size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 33 32" width="33">
          <g id="Icon">
            <line id="Line 1" stroke="#d4d4d8" x1="32.5" x2="32.5" y1="2.18557e-08" y2="32" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="bg-[#0085ca] content-stretch flex flex-col gap-[3.2px] items-center justify-center relative rounded-[128px] shrink-0 size-[32px]" data-name="Icon">
      <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[12.8px] whitespace-nowrap">
        <p className="leading-[1.2]">A</p>
      </div>
    </div>
  );
}

function Details2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Administrator
      </p>
    </div>
  );
}

function Details3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Operator
      </p>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Container">
      <Details2 />
      <Details3 />
    </div>
  );
}

function Inner1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Inner">
      <Icon28 />
      <Container30 />
    </div>
  );
}

function Level() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Level 2">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <Inner1 />
        </div>
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <div className="absolute inset-[0_-3.13%_0_0]">
        <svg className="block size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 33 32" width="33">
          <g id="Icon">
            <line id="Line 1" stroke="#d4d4d8" x1="32.5" x2="32.5" y1="2.18557e-08" y2="32" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="bg-[#16b364] content-stretch flex flex-col gap-[3.2px] items-center justify-center relative rounded-[128px] shrink-0 size-[32px]" data-name="Icon">
      <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[12.8px] whitespace-nowrap">
        <p className="leading-[1.2]">I</p>
      </div>
    </div>
  );
}

function Details4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Indirect Manager
      </p>
    </div>
  );
}

function Details5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Indirect Sales
      </p>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Container">
      <Details4 />
      <Details5 />
    </div>
  );
}

function Inner2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Inner">
      <Icon30 />
      <Container31 />
    </div>
  );
}

function Level6() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Level 17">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <Inner2 />
        </div>
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <div className="absolute inset-[0_-3.13%_0_0]">
        <svg className="block size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 33 32" width="33">
          <g id="Icon">
            <line id="Line 1" stroke="#d4d4d8" x1="32.5" x2="32.5" y1="2.18557e-08" y2="32" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="bg-[#3f3f46] content-stretch flex flex-col gap-[3.2px] items-center justify-center relative rounded-[128px] shrink-0 size-[32px]" data-name="Icon">
      <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[12.8px] whitespace-nowrap">
        <p className="leading-[1.2]">H</p>
      </div>
    </div>
  );
}

function Details6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Hamza `}</p>
    </div>
  );
}

function Details7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Distributor
      </p>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Container">
      <Details6 />
      <Details7 />
    </div>
  );
}

function Inner3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Inner">
      <Icon32 />
      <Container33 />
    </div>
  );
}

function PercentIcon() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Percent icon">
      <div className="flex items-center justify-center mb-[-10px] relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative text-[16px] text-[rgba(0,11,37,0.64)] whitespace-nowrap">{`\uF106`}</p>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative text-[16px] text-[rgba(0,11,37,0.64)] whitespace-nowrap">{`\uF106`}</p>
        </div>
      </div>
    </div>
  );
}

function Level2() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[284px]" data-name="Level  11">
      <div aria-hidden className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Inner3 />
      <PercentIcon />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end justify-center relative shrink-0 w-full" data-name="Container">
      <div className="absolute left-[32px] rounded-bl-[16px] rounded-tr-[16px] size-[25px] top-0" data-name="Line">
        <div aria-hidden className="absolute border-[#d4d4d8] border-b border-l border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-tr-[16px]" />
      </div>
      <Level2 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="h-[32px] relative shrink-0 w-[80px]" data-name="Icon">
      <div className="absolute inset-[0_-1.25%_0_0]">
        <svg className="block size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 81 32" width="81">
          <g id="Icon">
            <line id="Line 1" stroke="#d4d4d8" x1="80.5" x2="80.5" y1="2.18557e-08" y2="32" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon34() {
  return (
    <div className="bg-[#ee46bc] content-stretch flex flex-col gap-[3.2px] items-center justify-center relative rounded-[128px] shrink-0 size-[32px]" data-name="Icon">
      <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[12.8px] whitespace-nowrap">
        <p className="leading-[1.2]">S</p>
      </div>
    </div>
  );
}

function Details8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Store test
      </p>
    </div>
  );
}

function Details9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Store
      </p>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Container">
      <Details8 />
      <Details9 />
    </div>
  );
}

function Inner4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Inner">
      <Icon34 />
      <Container35 />
    </div>
  );
}

function Level3() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[284px]" data-name="Level  11">
      <Inner4 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Container">
      <Level3 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="h-[32px] relative shrink-0 w-[80px]" data-name="Icon">
      <div className="absolute inset-[0_-1.25%_0_0]">
        <svg className="block size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 81 32" width="81">
          <g id="Icon">
            <line id="Line 1" stroke="#d4d4d8" x1="80.5" x2="80.5" y1="2.18557e-08" y2="32" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon36() {
  return (
    <div className="bg-[#00bfb3] content-stretch flex flex-col gap-[3.2px] items-center justify-center relative rounded-[128px] shrink-0 size-[32px]" data-name="Icon">
      <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[12.8px] whitespace-nowrap">
        <p className="leading-[1.2]">S</p>
      </div>
    </div>
  );
}

function Details10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Store test
      </p>
    </div>
  );
}

function Details11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Store
      </p>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Container">
      <Details10 />
      <Details11 />
    </div>
  );
}

function Inner5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Inner">
      <Icon36 />
      <Container37 />
    </div>
  );
}

function Level4() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[284px]" data-name="Level  11">
      <Inner5 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Container">
      <Level4 />
    </div>
  );
}

function Icon37() {
  return (
    <div className="h-[32px] relative shrink-0 w-[80px]" data-name="Icon">
      <div className="absolute inset-[0_-1.25%_0_0]">
        <svg className="block size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 81 32" width="81">
          <g id="Icon">
            <line id="Line 1" stroke="#d4d4d8" x1="80.5" x2="80.5" y1="2.18557e-08" y2="32" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon38() {
  return (
    <div className="bg-[#f38744] content-stretch flex flex-col gap-[3.2px] items-center justify-center relative rounded-[128px] shrink-0 size-[32px]" data-name="Icon">
      <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[12.8px] whitespace-nowrap">
        <p className="leading-[1.2]">S</p>
      </div>
    </div>
  );
}

function Details12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Store test
      </p>
    </div>
  );
}

function Details13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Store
      </p>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Container">
      <Details12 />
      <Details13 />
    </div>
  );
}

function Inner6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Inner">
      <Icon38 />
      <Container39 />
    </div>
  );
}

function Level5() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[284px]" data-name="Level  11">
      <Inner6 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Container">
      <Level5 />
    </div>
  );
}

function Subsection6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
      <div className="relative shrink-0 w-full" data-name="Placeholder V1">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <Level1 />
            <Icon27 />
            <Level />
            <Icon29 />
            <Level6 />
            <Icon31 />
            <Container32 />
            <Icon33 />
            <Container34 />
            <Icon35 />
            <Container36 />
            <Icon37 />
            <Container38 />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionBody2() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
        <Subsection6 />
      </div>
    </div>
  );
}

function ContentSection() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content-section">
      <div className="relative shrink-0 w-[752px]" data-name="SalesPoint - Section">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <SectionTitle1 />
          <SectionBody1 />
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="SalesPoint - Section">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <SectionTitle2 />
          <SectionBody2 />
        </div>
      </div>
    </div>
  );
}

function Text47() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
        <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Upload Document
        </p>
      </div>
    </div>
  );
}

function Left8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="left">
      <Text47 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="Container">
      <Left8 />
    </div>
  );
}

function Cta2() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="CTA">
        <div className="relative shrink-0" data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center justify-center leading-[0] relative size-full text-[#000000] text-[14px] whitespace-nowrap">
              <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.2]">View All</p>
              </div>
              <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0">
                <p className="leading-[normal]">Arrow-right</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTitle3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Section-title">
      <Container40 />
      <Cta2 />
    </div>
  );
}

function Icon39() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="[word-break:break-word] font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px] whitespace-nowrap">angle-down</p>
    </div>
  );
}

function Textfield16() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Select document type
          </p>
          <Icon39 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Dropdown">
      <div className="relative shrink-0 w-[500px]" data-name="Dropdown">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <Textfield16 />
        </div>
      </div>
    </div>
  );
}

function Cta3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="CTA">
      <div className="bg-[#f3f4f6] h-[40px] relative rounded-[4px] shrink-0" data-name="Button">
        <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center justify-center leading-[0] px-[16px] relative size-full text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap">
            <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0 text-center">
              <p className="leading-[normal]">ADD</p>
            </div>
            <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[1.2]">Upload</p>
            </div>
            <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0">
              <p className="leading-[normal]">angle-down</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        No Document found
      </p>
    </div>
  );
}

function Desc() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Desc">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[12px] text-[rgba(0,11,37,0.64)] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[1.2]">Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <Container41 />
      <Desc />
    </div>
  );
}

function Subsection7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
      <div className="relative shrink-0 w-full" data-name="Content - Document uploader - Horizontal">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <div className="relative shrink-0 w-full" data-name="Uploader Buttons">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center relative size-full">
                <Dropdown />
                <Cta3 />
              </div>
            </div>
          </div>
          <div className="bg-[#f8fafc] h-[182px] relative rounded-[4px] shrink-0 w-full" data-name="Empty State">
            <div aria-hidden className="absolute border border-[#e2e8f0] border-dashed inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col gap-[12px] items-center justify-center p-[16px] relative size-full">
                <div className="bg-[#e4e4e7] relative rounded-[26.667px] shrink-0 size-[50px]" data-name="Empty - Icons">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center p-[12.5px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[25px] text-[#000000] text-[18px] text-center">
                        <p className="leading-[normal]">circle-info</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Content2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionBody3() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
        <Subsection7 />
      </div>
    </div>
  );
}

function Text48() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
        <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Locality Settings
        </p>
      </div>
    </div>
  );
}

function Left9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="left">
      <Text48 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="Container">
      <Left9 />
    </div>
  );
}

function SectionTitle4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Section-title">
      <Container42 />
    </div>
  );
}

function Sorting() {
  return (
    <div className="content-stretch flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[12px] items-center justify-center not-italic relative shrink-0 text-[rgba(0,11,37,0.57)] w-[9px]" data-name="Sorting">
      <p className="leading-[normal] mb-[-6px] relative shrink-0 w-full">angle-up</p>
      <div className="flex flex-col justify-end leading-[0] relative shrink-0 w-full">
        <p className="leading-[normal]">{`\uF107`}</p>
      </div>
    </div>
  );
}

function Th() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]" data-name="TH">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Name `}</p>
      <Sorting />
    </div>
  );
}

function Sorting1() {
  return (
    <div className="content-stretch flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[12px] items-center justify-center not-italic relative shrink-0 text-[rgba(0,11,37,0.57)] w-[9px]" data-name="Sorting">
      <p className="leading-[normal] mb-[-6px] relative shrink-0 w-full">angle-up</p>
      <div className="flex flex-col justify-end leading-[0] relative shrink-0 w-full">
        <p className="leading-[normal]">{`\uF107`}</p>
      </div>
    </div>
  );
}

function Th1() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]" data-name="TH">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Code
      </p>
      <Sorting1 />
    </div>
  );
}

function Subsection8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
      <div className="relative rounded-[4px] shrink-0 w-full" data-name="Placeholder V1">
        <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <div className="flex-[1_0_0] min-w-px relative" data-name="Table's Columns">
              <div className="content-stretch flex flex-col items-start relative size-full">
                <div className="bg-[#e4e4e7] h-[48px] relative rounded-tl-[4px] shrink-0 w-full" data-name="Header Cell">
                  <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px]" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center py-[10px] relative size-full">
                      <div className="flex-[1_0_0] min-w-px relative" data-name="Table Elements">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center px-[16px] relative size-full">
                            <Th />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white relative shrink-0 w-full" data-name="Cell">
                  <div className="flex flex-col justify-center size-full">
                    <div className="content-stretch flex flex-col items-start justify-center relative size-full">
                      <div className="h-[48px] relative shrink-0 w-[62px]" data-name="Table Elements">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center px-[16px] relative size-full">
                            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              Name
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-0 relative shrink-0 w-full">
                        <div className="absolute inset-[-1px_0_0_0]">
                          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 554 1" width="554">
                            <line id="Line 11" stroke="#E2E8F0" x2="554" y1="0.5" y2="0.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fafc] h-[48px] relative shrink-0 w-full" data-name="Cell">
                  <div className="flex flex-col justify-center size-full">
                    <div className="content-stretch flex flex-col items-start justify-center relative size-full">
                      <div className="flex-[1_0_0] min-h-px relative w-[62px]" data-name="Table Elements">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center px-[16px] relative size-full">
                            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              Name
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-0 relative shrink-0 w-full">
                        <div className="absolute inset-[-1px_0_0_0]">
                          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 554 1" width="554">
                            <line id="Line 11" stroke="#E2E8F0" x2="554" y1="0.5" y2="0.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white relative shrink-0 w-full" data-name="Cell">
                  <div className="flex flex-col justify-center size-full">
                    <div className="content-stretch flex flex-col items-start justify-center relative size-full">
                      <div className="h-[48px] relative shrink-0" data-name="Table Elements">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center px-[16px] relative size-full">
                            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              Name
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-0 relative shrink-0 w-full">
                        <div className="absolute inset-[-1px_0_0_0]">
                          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 554 1" width="554">
                            <line id="Line 11" stroke="#E2E8F0" x2="554" y1="0.5" y2="0.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fafc] h-[48px] relative shrink-0 w-full" data-name="Cell">
                  <div className="flex flex-col justify-center size-full">
                    <div className="content-stretch flex flex-col items-start justify-center relative size-full">
                      <div className="flex-[1_0_0] min-h-px relative w-[62px]" data-name="Table Elements">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center px-[16px] relative size-full">
                            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              Name
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-0 relative shrink-0 w-full">
                        <div className="absolute inset-[-1px_0_0_0]">
                          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 554 1" width="554">
                            <line id="Line 11" stroke="#E2E8F0" x2="554" y1="0.5" y2="0.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white h-[48px] relative rounded-bl-[4px] shrink-0 w-full" data-name="Cell">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center relative size-full">
                      <div className="flex-[1_0_0] min-w-px relative" data-name="Table Elements">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[7px] items-center px-[16px] relative size-full">
                            <div className="relative rounded-[4px] shrink-0" data-name="Button">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center justify-center leading-[0] px-[16px] py-[9px] relative size-full text-[#000000] text-[12px] whitespace-nowrap">
                                  <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0 text-center">
                                    <p className="leading-[normal]">Plus</p>
                                  </div>
                                  <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                                    <p className="leading-[1.2]">Add a Line</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[1_0_0] min-w-px relative" data-name="Table's Columns">
              <div className="content-stretch flex flex-col items-start relative size-full">
                <div className="bg-[#e4e4e7] h-[48px] relative shrink-0 w-full" data-name="Header Cell">
                  <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center py-[10px] relative size-full">
                      <div className="relative shrink-0 w-[118px]" data-name="Table Elements">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center px-[16px] relative size-full">
                            <Th1 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white relative shrink-0 w-full" data-name="Cell">
                  <div className="flex flex-col justify-center size-full">
                    <div className="content-stretch flex flex-col items-start justify-center relative size-full">
                      <div className="h-[48px] relative shrink-0" data-name="Table Elements">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center px-[16px] relative size-full">
                            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              Code
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-0 relative shrink-0 w-full">
                        <div className="absolute inset-[-1px_0_0_0]">
                          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 554 1" width="554">
                            <line id="Line 11" stroke="#E2E8F0" x2="554" y1="0.5" y2="0.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fafc] h-[48px] relative shrink-0 w-full" data-name="Cell">
                  <div className="flex flex-col justify-center size-full">
                    <div className="content-stretch flex flex-col items-start justify-center relative size-full">
                      <div className="flex-[1_0_0] min-h-px relative w-[62px]" data-name="Table Elements">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center px-[16px] relative size-full">
                            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              Code
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-0 relative shrink-0 w-full">
                        <div className="absolute inset-[-1px_0_0_0]">
                          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 554 1" width="554">
                            <line id="Line 11" stroke="#E2E8F0" x2="554" y1="0.5" y2="0.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white relative shrink-0 w-full" data-name="Cell">
                  <div className="flex flex-col justify-center size-full">
                    <div className="content-stretch flex flex-col items-start justify-center relative size-full">
                      <div className="h-[48px] relative shrink-0" data-name="Table Elements">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center px-[16px] relative size-full">
                            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              Code
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-0 relative shrink-0 w-full">
                        <div className="absolute inset-[-1px_0_0_0]">
                          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 554 1" width="554">
                            <line id="Line 11" stroke="#E2E8F0" x2="554" y1="0.5" y2="0.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fafc] h-[48px] relative shrink-0 w-full" data-name="Cell">
                  <div className="flex flex-col justify-center size-full">
                    <div className="content-stretch flex flex-col items-start justify-center relative size-full">
                      <div className="flex-[1_0_0] min-h-px relative w-[62px]" data-name="Table Elements">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center px-[16px] relative size-full">
                            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                              Code
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-0 relative shrink-0 w-full">
                        <div className="absolute inset-[-1px_0_0_0]">
                          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 554 1" width="554">
                            <line id="Line 11" stroke="#E2E8F0" x2="554" y1="0.5" y2="0.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white h-[48px] relative rounded-br-[4px] shrink-0 w-full" data-name="Cell">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center relative size-full">
                      <div className="h-[14px] relative shrink-0 w-[62px]" data-name="Table Elements">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center px-[16px] relative size-full" />
                        </div>
                      </div>
                    </div>
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

function SectionBody4() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
        <Subsection8 />
      </div>
    </div>
  );
}

function Text49() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
        <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Configuration Settings
        </p>
      </div>
    </div>
  );
}

function Left10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="left">
      <Text49 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="Container">
      <Left10 />
    </div>
  );
}

function SectionTitle5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Section-title">
      <Container43 />
    </div>
  );
}

function TabContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px overflow-clip relative" data-name="Tab Container">
      <div className="bg-[#f4f4f5] flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Tab Segments">
        <div aria-hidden className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000000] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              User Management
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Tab Segments">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-pre" style={{ fontVariationSettings: '"wdth" 100' }}>{`Location and  Address`}</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Tab Segments">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Financial And Sales
            </p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[4px] shrink-0" data-name="Tab Segments">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Settings And Miscellaneous
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Tab Segments">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              KPI Configuration
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Tab Segments">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Commission Criteria
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Subsection9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
      <div className="bg-[#f8fafc] relative rounded-[4px] shrink-0 w-full" data-name="Tabs">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center p-[4px] relative size-full">
            <div className="bg-[#e4e4e7] relative rounded-[160px] shrink-0 size-[32px]" data-name="Button">
              <div aria-hidden className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[160px]" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-center whitespace-nowrap">
                    <p className="leading-[normal]">chevron-left</p>
                  </div>
                </div>
              </div>
            </div>
            <TabContainer />
            <div className="bg-[#e4e4e7] relative rounded-[160px] shrink-0 size-[32px]" data-name="Button">
              <div aria-hidden className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[160px]" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-center whitespace-nowrap">
                    <p className="leading-[normal]">chevron-right</p>
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

function Header1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] h-[44px] items-start leading-[1.2] relative shrink-0 w-full whitespace-nowrap" data-name="Header">
      <p className="font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[#000b25] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        User Management
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>
        Configure user roles, permissions, and access controls
      </p>
    </div>
  );
}

function TabContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px overflow-clip relative" data-name="Tab Container">
      <div className="bg-[#e4e4e7] flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Tab Segments">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000000] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Sales App Rights Group
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Tab Segments">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Additional Users
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative rounded-[4px]" data-name="Tab Segments">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Widgets
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sorting2() {
  return (
    <div className="content-stretch flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[12px] items-center justify-center not-italic relative shrink-0 text-[rgba(0,11,37,0.57)] w-[9px]" data-name="Sorting">
      <p className="leading-[normal] mb-[-6px] relative shrink-0 w-full">angle-up</p>
      <div className="flex flex-col justify-end leading-[0] relative shrink-0 w-full">
        <p className="leading-[normal]">{`\uF107`}</p>
      </div>
    </div>
  );
}

function Th2() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]" data-name="TH">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Name `}</p>
      <Sorting2 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Header1 />
      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Segmented Control">
        <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center p-[4px] relative size-full">
            <TabContainer1 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[4px] shrink-0 w-full" data-name="Table">
        <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <div className="flex-[1_0_0] min-w-px relative" data-name="Table's Columns">
              <div className="content-stretch flex flex-col items-start relative size-full">
                <div className="bg-[#e4e4e7] h-[48px] relative rounded-tl-[4px] shrink-0 w-full" data-name="Header Cell">
                  <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px]" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center py-[10px] relative size-full">
                      <div className="flex-[1_0_0] min-w-px relative" data-name="Table Elements">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center px-[16px] relative size-full">
                            <Th2 />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white h-[48px] relative rounded-bl-[4px] shrink-0 w-full" data-name="Cell">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center relative size-full">
                      <div className="flex-[1_0_0] min-w-px relative" data-name="Table Elements">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[7px] items-center px-[16px] relative size-full">
                            <div className="relative rounded-[4px] shrink-0" data-name="Button">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center justify-center leading-[0] px-[16px] py-[9px] relative size-full text-[#000000] text-[12px] whitespace-nowrap">
                                  <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0 text-center">
                                    <p className="leading-[normal]">Plus</p>
                                  </div>
                                  <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
                                    <p className="leading-[1.2]">Add a Line</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[1_0_0] min-w-px relative" data-name="Table's Columns">
              <div className="content-stretch flex flex-col items-start relative size-full">
                <div className="bg-[#e4e4e7] h-[48px] relative rounded-tr-[4px] shrink-0 w-full" data-name="Header Cell">
                  <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none rounded-tr-[4px]" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center py-[10px] relative size-full">
                      <div className="flex-[1_0_0] h-[14px] min-w-px relative" data-name="Table Elements">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center px-[16px] relative size-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white h-[48px] relative rounded-br-[4px] shrink-0 w-full" data-name="Cell">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center relative size-full">
                      <div className="h-[14px] relative shrink-0 w-[62px]" data-name="Table Elements">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[7px] items-center px-[16px] relative size-full" />
                        </div>
                      </div>
                    </div>
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

function Subsection10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Subsection">
      <div className="bg-[#f8fafc] relative rounded-[4px] shrink-0 w-full" data-name="Section-User Management">
        <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="content-stretch flex flex-col items-start px-[12px] py-[16px] relative size-full">
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function SectionBody5() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
        <Subsection9 />
        <Subsection10 />
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative self-stretch" data-name="Content">
      <SmartButtonsSection />
      <div className="bg-white drop-shadow-[0px_3px_10px_rgba(0,0,0,0.05)] h-[72px] relative rounded-[4px] shrink-0 w-full" data-name="Smart Buttons Section">
        <div className="content-stretch flex items-start relative size-full">
          <Container1 />
          <div className="h-[72px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0" data-name="Dropdpwon - Smart buttons">
            <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
            <div className="content-stretch flex items-start relative size-full">
              <Button />
            </div>
          </div>
        </div>
      </div>
      <ContentContainer />
      <ContentSection />
      <div className="relative shrink-0 w-full" data-name="SalesPoint - Section">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <SectionTitle3 />
          <SectionBody3 />
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="SalesPoint - Section">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <SectionTitle4 />
          <SectionBody4 />
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="SalesPoint - Section">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
          <SectionTitle5 />
          <SectionBody5 />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex items-start p-[24px] relative size-full">
        <Content1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative z-[1]" data-name="Container">
      <div className="drop-shadow-[0px_3px_10px_rgba(0,0,0,0.05)] relative shrink-0 w-full" data-name="Top bar">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="bg-white relative shrink-0 w-full" data-name="SalesPoint - Top-header">
            <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-between px-[24px] py-[12px] relative size-full">
                <div className="h-[40px] relative rounded-[4px] shrink-0" data-name="Breadcrumb">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[4px] items-center px-[16px] py-[12px] relative size-full">
                      <Item5 />
                      <div className="relative shrink-0" data-name="Item">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center relative size-full">
                            <BreadcrumbText />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0" data-name="User card">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center relative size-full">
                      <SearchConatiner />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="SalesPoint - Action Bar">
            <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
                <Search />
                <Cta />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Content />
    </div>
  );
}

export default function Screen() {
  return (
    <div className="bg-[#f5f6fa] content-stretch flex isolate items-start relative size-full" data-name="Screen">
      <div className="bg-white drop-shadow-[0px_3px_10px_rgba(0,0,0,0.05)] relative self-stretch shrink-0 z-[2]" data-name="Sales -  Side menu">
        <div aria-hidden className="absolute border-[#e2e8f0] border-r border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col gap-[16px] items-start px-px relative size-full">
          <LogoLine />
          <MenuBody />
          <ActionBar />
          <div className="absolute flex items-center justify-center right-[-20px] size-[40px] top-[12px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <button className="bg-white cursor-pointer drop-shadow-[0px_3px_10px_rgba(0,0,0,0.05)] relative rounded-[4px] size-[40px]" data-name="Expand Item">
                <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center relative size-full">
                    <div className="flex items-center justify-center relative shrink-0">
                      <div className="flex-none rotate-180">
                        <div className="[word-break:break-word] flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative text-[18px] text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">
                          <p className="leading-[normal]">arrow-left-to-line</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Container />
    </div>
  );
}