import svgPaths from "./svg-160qmwhwnu";
import clsx from "clsx";
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={additionalClassNames}>
      <p className="leading-[1.2]">{children}</p>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return <Wrapper4 additionalClassNames={clsx("flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-nowrap", additionalClassNames)}>{children}</Wrapper4>;
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return <Wrapper4 additionalClassNames={clsx("flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-nowrap", additionalClassNames)}>{children}</Wrapper4>;
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return <Wrapper4 additionalClassNames={clsx("flex flex-col justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] text-nowrap", additionalClassNames)}>{children}</Wrapper4>;
}

function CardInnerMember3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f8fafc] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Wrapper1 additionalClassNames="font-['Roboto:Medium',sans-serif] font-medium">{children}</Wrapper1>
    </div>
  );
}
type PaginationTextProps = {
  text: string;
};

function PaginationText({ text }: PaginationTextProps) {
  return (
    <div className="bg-[#0071cd] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[30px]">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.75px] border-solid inset-[-0.375px] pointer-events-none rounded-[4.375px]" />
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.5px] text-center text-nowrap text-white">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[24px] items-center pl-0 pr-[8px] py-0 relative shrink-0 w-[231px]">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
          <div className="flex flex-row items-center self-stretch">
            <TableStatusText text="Type" />
          </div>
        </div>
        <Wrapper1 additionalClassNames="font-['Roboto:Regular',sans-serif] font-normal">{"Hamza Tarakhan"}</Wrapper1>
      </div>
      <TableStatusText1 text="Included" />
    </div>
  );
}
type Helper3DotsMemberTextProps = {
  text: string;
};

function Helper3DotsMemberText({ text }: Helper3DotsMemberTextProps) {
  return (
    <div className="bg-white content-stretch flex flex-col h-[18px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0 w-[22px]">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex h-[9px] items-center justify-center relative shrink-0 w-[10px]" style={{ "--transform-inner-width": "30.015625", "--transform-inner-height": "11" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative text-[10px] text-[rgba(0,11,37,0.64)] text-nowrap">
            <p className="leading-[normal]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type IconText1Props = {
  text: string;
};

function IconText1({ text }: IconText1Props) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#49d16f] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type IconTextProps = {
  text: string;
};

function IconText({ text }: IconTextProps) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#49d16f] text-[12px] text-nowrap">{text}</p>
    </div>
  );
}

function Helper1() {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className="flex h-[13px] items-center justify-center relative shrink-0 w-0">
      <div className="flex-none rotate-[90deg]">
        <div className="h-0 relative w-[13px]">
          <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(203, 213, 225, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 1">
              <line id="Line 13" stroke="var(--stroke-0, #CBD5E1)" strokeLinecap="round" x1="0.5" x2="12.5" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text }: Text4Props) {
  return (
    <div className="absolute contents left-[7.5px] top-0">
      <div className="absolute left-0 size-[12px] top-0">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(253, 234, 215, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <circle cx="6" cy="6" fill="var(--fill-0, #FDEAD7)" id="Ellipse 2" r="6" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] left-[6px] not-italic text-[#e04f16] text-[8px] text-center text-nowrap top-[1.5px] translate-x-[-50%]">{text}</p>
    </div>
  );
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return (
    <div className="absolute contents left-0 top-[3.5px]">
      <div className="absolute left-0 size-[16px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #C2410C)" fillOpacity="0.1" id="Ellipse 1" r="8" />
        </svg>
      </div>
      <p className="absolute font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#f97316] text-[10px] text-center text-nowrap top-[3px] translate-x-[-50%]">{text}</p>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[0] relative shrink-0 text-nowrap">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] text-nowrap">{text}</p>
      </div>
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[0px] text-[rgba(0,11,37,0.6)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[1.2] line-through text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          {text1}
        </p>
      </div>
    </div>
  );
}
type TableStatusText1Props = {
  text: string;
};

function TableStatusText1({ text }: TableStatusText1Props) {
  return (
    <div className="bg-[rgba(73,209,111,0.15)] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[9.6px] shrink-0">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#49d16f] text-[9px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type TableStatusTextProps = {
  text: string;
};

function TableStatusText({ text }: TableStatusTextProps) {
  return (
    <div className="bg-[#eff6ff] content-stretch flex gap-[3.6px] h-full items-start justify-center px-[8px] py-[2px] relative rounded-[49px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[49px]" />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#3b82f6] text-[9px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <div className="absolute inset-0" style={{ "--stroke-0": "rgba(0, 113, 205, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Icon">
            <path d={svgPaths.p194c3bf0} stroke="var(--stroke-0, #0071CD)" strokeWidth="1.125" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type Text2Props = {
  text: string;
  additionalClassNames?: string;
};

function Text2({ text, additionalClassNames = "" }: Text2Props) {
  return (
    <div className={clsx("flex-none scale-y-[-100%]", additionalClassNames)}>
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative text-[14px] text-[rgba(0,11,37,0.64)] text-nowrap">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Wrapper1 additionalClassNames="font-['Roboto:Regular',sans-serif] font-normal">{text}</Wrapper1>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return <Wrapper>{text}</Wrapper>;
}

function CardInnerMember() {
  return (
    <CardInnerMember3>
      <div className="content-stretch flex gap-[3px] items-start relative shrink-0" data-name="Checkbox">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[15px]" data-name="Left">
          <Icon />
        </div>
      </div>
      <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Title">
        <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Container">
          <Container />
          <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                  <Text1 text="Code" />
                </div>
              </div>
            </div>
            <Wrapper1 additionalClassNames="font-['Roboto:Medium',sans-serif] font-medium">54987</Wrapper1>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[249.333px]" data-name="Total Amount">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="content-stretch flex items-center relative shrink-0">
                <div className="content-stretch flex items-center relative shrink-0">
                  <Text1 text="Total Amount" />
                </div>
              </div>
            </div>
            <Wrapper2 additionalClassNames="text-[#15803d]">$100,800.00</Wrapper2>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                  <Text1 text="Target" />
                </div>
              </div>
            </div>
            <Wrapper1 additionalClassNames="font-['Roboto:Medium',sans-serif] font-medium">$500.00</Wrapper1>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                  <Text1 text="Achievement" />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(163,190,217,0.15)] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-[160px] shrink-0" data-name="Achievements">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Icon">
                <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f97316] text-[12px] text-nowrap"></p>
              </div>
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Icon">
                <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#f97316] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  71%
                </p>
              </div>
            </div>
          </div>
        </div>
        <Helper3DotsMemberText text="ellipsis" />
      </div>
    </CardInnerMember3>
  );
}

function CardInnerMember1() {
  return (
    <CardInnerMember3>
      <div className="content-stretch flex gap-[3px] items-start relative shrink-0" data-name="Checkbox">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[15px]" data-name="Left">
          <Icon />
        </div>
      </div>
      <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Title">
        <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Container">
          <Container />
          <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                  <Text1 text="Code" />
                </div>
              </div>
            </div>
            <Wrapper1 additionalClassNames="font-['Roboto:Medium',sans-serif] font-medium">54987</Wrapper1>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[249.333px]" data-name="Total Amount">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
              <Text1 text="Total Amount" />
            </div>
            <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Container">
              <Helper text="Orig:" text1="$600,00.00" />
              <Helper1 />
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
                <Wrapper1 additionalClassNames="font-['Roboto:Regular',sans-serif] font-normal">Adj:</Wrapper1>
                <Wrapper2 additionalClassNames="text-[#34944f]">$100,800.00</Wrapper2>
                <div className="absolute contents left-[97px] top-[-5.5px]" data-name="Container">
                  <div className="absolute contents left-[97px] top-[-5.5px]" data-name="Container">
                    <Text3 text="" />
                    <Text4 text="2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                  <Text1 text="Target" />
                </div>
              </div>
            </div>
            <Wrapper1 additionalClassNames="font-['Roboto:Medium',sans-serif] font-medium">$500.00</Wrapper1>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                  <Text1 text="Achievement" />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(163,190,217,0.15)] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-[160px] shrink-0" data-name="Achievements">
              <IconText text="" />
              <IconText1 text="90%" />
            </div>
          </div>
        </div>
        <Helper3DotsMemberText text="ellipsis" />
      </div>
    </CardInnerMember3>
  );
}

function CardInnerMember2() {
  return (
    <CardInnerMember3>
      <div className="content-stretch flex gap-[3px] items-start relative shrink-0" data-name="Checkbox">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[15px]" data-name="Left">
          <Icon />
        </div>
      </div>
      <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Title">
        <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Container">
          <Container />
          <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                  <Text1 text="Code" />
                </div>
              </div>
            </div>
            <Wrapper1 additionalClassNames="font-['Roboto:Medium',sans-serif] font-medium">54987</Wrapper1>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[249.333px]" data-name="Total Amount">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Amount Details">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Amount Label Container">
                <div className="content-stretch flex items-center relative shrink-0" data-name="Amount Label">
                  <Text1 text="Total Amount" />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Amount Values">
              <Helper text="Orig:" text1="$600,00.00" />
              <Helper1 />
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Adjusted Amount Container">
                <Wrapper1 additionalClassNames="font-['Roboto:Regular',sans-serif] font-normal">Adj:</Wrapper1>
                <Wrapper2 additionalClassNames="text-[#f02b02]">$400,800.00</Wrapper2>
                <div className="absolute contents left-[97px] top-[-5.5px]" data-name="Info Icon Container">
                  <div className="absolute contents left-[97px] top-[-5.5px]" data-name="Info Icon">
                    <Text3 text="" />
                    <Text4 text="2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                  <Text1 text="Target" />
                </div>
              </div>
            </div>
            <Wrapper1 additionalClassNames="font-['Roboto:Medium',sans-serif] font-medium">$500.00</Wrapper1>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                  <Text1 text="Achievement" />
                </div>
              </div>
            </div>
            <div className="bg-[rgba(163,190,217,0.15)] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-[160px] shrink-0" data-name="Achievements">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[12px]">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(239, 68, 68, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                      <circle cx="6" cy="6" fill="var(--fill-0, #EF4444)" id="Ellipse 4" r="6" />
                    </svg>
                  </div>
                </div>
                <p className="[grid-area:1_/_1] font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] ml-[3px] mt-px not-italic relative text-[10.286px] text-nowrap text-white">close</p>
              </div>
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Icon">
                <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#ef4444] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  35%
                </p>
              </div>
            </div>
          </div>
        </div>
        <Helper3DotsMemberText text="ellipsis" />
      </div>
    </CardInnerMember3>
  );
}

export default function CardPlans() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shadow-[0px_3px_20px_0px_rgba(0,0,0,0.05)] size-full" data-name="Card - Plans">
      <div className="bg-white relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="SMS">
        <div aria-hidden="true" className="absolute border-[#d9eaf8] border-[1px_1px_0px] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center pb-0 pt-[12px] px-[16px] relative w-full">
            <div className="bg-[#0071cd] content-stretch flex flex-col items-center justify-center relative rounded-[120px] shrink-0 size-[30px]" data-name="icon">
              <div aria-hidden="true" className="absolute border-[#e1e1e1] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[120px]" />
              <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-white">v.1</p>
            </div>
            <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Title">
              <div className="flex flex-row items-center self-stretch">
                <div className="bg-[#f8fafc] content-stretch flex h-full items-center px-[12px] py-[8px] relative rounded-[4px] shrink-0 w-[244.6px]">
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="content-stretch flex items-center relative shrink-0">
                          <div className="content-stretch flex items-center justify-center relative shrink-0">
                            <Wrapper2 additionalClassNames="text-[#000b25]">KAM Plan</Wrapper2>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center self-stretch">
                        <div className="bg-[#f8fafc] content-stretch flex gap-[3.6px] h-full items-start justify-center px-[8px] py-[2px] relative rounded-[49px] shrink-0" data-name="Table Status">
                          <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[49px]" />
                          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#334155] text-[9px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                            40%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#f8fafc] content-stretch flex flex-col gap-[4px] items-start justify-center pl-[12px] pr-[56px] py-[8px] relative rounded-[4px] shrink-0 w-[141px]">
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="content-stretch flex items-center relative shrink-0">
                    <Text text="Total Amount" />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center relative shrink-0">
                  <Wrapper3 additionalClassNames="text-[#15803d]">$100,800.00</Wrapper3>
                </div>
              </div>
              <div className="bg-[#f8fafc] content-stretch flex flex-col gap-[4px] items-start justify-center pl-[12px] pr-[56px] py-[8px] relative rounded-[4px] shrink-0 w-[135px]">
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="content-stretch flex items-center relative shrink-0">
                    <Text text="Tax Amount" />
                  </div>
                </div>
                <Text1 text="$100,800.00" />
              </div>
              <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Members">
                <div className="basis-0 bg-[#f8fafc] grow h-[48px] min-h-px min-w-px relative rounded-[4px] shrink-0">
                  <div className="flex flex-col justify-center size-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[12px] py-[8px] relative size-full">
                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="content-stretch flex items-center relative shrink-0">
                          <Wrapper>
                            Members (<span className="text-[#0071cd]">20</span>)
                          </Wrapper>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                          <div className="bg-[rgba(34,197,94,0.03)] content-stretch flex gap-[4.8px] items-center justify-center px-[9.6px] py-[4px] relative rounded-[2.4px] shrink-0" data-name="Table Status">
                            <div aria-hidden="true" className="absolute border border-[rgba(73,209,111,0.15)] border-solid inset-0 pointer-events-none rounded-[2.4px]" />
                            <div className="content-stretch flex flex-col items-center pb-[2px] pt-0 px-0 relative shrink-0 w-[10px]">
                              <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#22c55e] text-[9.6px] text-nowrap">
                                <p className="leading-[normal]">users</p>
                              </div>
                            </div>
                            <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#22c55e] text-[10px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                              16 Included
                            </p>
                          </div>
                          <div className="bg-[rgba(249,115,22,0.03)] content-stretch flex gap-[4.8px] items-center justify-center px-[9.6px] py-[4px] relative rounded-[2.4px] shrink-0" data-name="Table Status">
                            <div aria-hidden="true" className="absolute border border-[rgba(255,153,0,0.15)] border-solid inset-0 pointer-events-none rounded-[2.4px]" />
                            <div className="content-stretch flex flex-col items-center pb-[2px] pt-0 px-0 relative shrink-0 w-[10px]">
                              <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f97316] text-[9.6px] text-nowrap">
                                <p className="leading-[normal]">users</p>
                              </div>
                            </div>
                            <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#f97316] text-[10px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                              2 Adjusted
                            </p>
                          </div>
                          <div className="bg-[rgba(240,43,2,0.06)] content-stretch flex gap-[4.8px] items-center justify-center px-[9.6px] py-[4px] relative rounded-[2.4px] shrink-0" data-name="Table Status">
                            <div aria-hidden="true" className="absolute border border-[rgba(240,43,2,0.1)] border-solid inset-0 pointer-events-none rounded-[2.4px]" />
                            <div className="content-stretch flex flex-col items-center pb-[2px] pt-0 px-0 relative shrink-0 w-[10px]">
                              <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f02b02] text-[9.6px] text-nowrap">
                                <p className="leading-[normal]">users</p>
                              </div>
                            </div>
                            <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#f02b02] text-[10px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`2 Excluded `}</p>
                          </div>
                          <div className="bg-[rgba(206,0,88,0.03)] content-stretch flex gap-[4.8px] items-center justify-center px-[9.6px] py-[4px] relative rounded-[2.4px] shrink-0" data-name="Table Status">
                            <div aria-hidden="true" className="absolute border border-[rgba(206,0,88,0.1)] border-solid inset-0 pointer-events-none rounded-[2.4px]" />
                            <div className="content-stretch flex flex-col items-center pb-[2px] pt-0 px-0 relative shrink-0 w-[10px]">
                              <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ce0058] text-[9.6px] w-full">
                                <p className="leading-[normal]">warning</p>
                              </div>
                            </div>
                            <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#ce0058] text-[10px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                              4 Failed
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="content-stretch flex flex-col h-[30px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0 w-[32px]" data-name="3 Dots">
                <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <div className="flex h-[13px] items-center justify-center relative shrink-0 w-[14px]" style={{ "--transform-inner-width": "42.015625", "--transform-inner-height": "16" } as React.CSSProperties}>
                  <Text2 text="ellipsis" additionalClassNames="rotate-[270deg]" />
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[4px] shrink-0 w-[32px]">
                <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <div className="flex items-center justify-center relative shrink-0">
                  <Text2 text="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="SMS">
        <div aria-hidden="true" className="absolute border-[#d9eaf8] border-[0px_1px_1px] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pb-[12px] pt-[16px] px-[16px] relative w-full">
            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-end min-h-px min-w-px relative shrink-0">
              <CardInnerMember3>
                <div className="content-stretch flex gap-[3px] items-start relative shrink-0" data-name="Checkbox">
                  <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[15px]" data-name="Left">
                    <Icon />
                  </div>
                </div>
                <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Title">
                  <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Container">
                    <div className="content-stretch flex gap-[24px] items-center pl-0 pr-[8px] py-0 relative shrink-0 w-[231px]" data-name="Container">
                      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
                      <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
                          <div className="flex flex-row items-center self-stretch">
                            <TableStatusText text="Type" />
                          </div>
                          <div className="bg-[#fff7ed] relative rounded-[21.75px] shrink-0" data-name="Textfield">
                            <div className="content-stretch flex gap-[4px] items-center overflow-clip px-[4px] py-[2px] relative rounded-[inherit]">
                              <div className="content-stretch flex font-['Roboto:Medium',sans-serif] font-medium gap-[4px] items-center leading-[1.2] relative shrink-0 text-[#b56d00] text-[9px] text-nowrap" data-name="Container">
                                <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  Caretaker
                                </p>
                                <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  20%
                                </p>
                              </div>
                            </div>
                            <div aria-hidden="true" className="absolute border-[#fdead7] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[21.75px]" />
                          </div>
                        </div>
                        <Wrapper1 additionalClassNames="font-['Roboto:Regular',sans-serif] font-normal">Hamza Tarakhan</Wrapper1>
                      </div>
                      <TableStatusText1 text="Included" />
                    </div>
                    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
                      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
                        <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                          <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                            <Text1 text="Code" />
                          </div>
                        </div>
                      </div>
                      <Wrapper1 additionalClassNames="font-['Roboto:Medium',sans-serif] font-medium">54987</Wrapper1>
                    </div>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[249.333px]" data-name="Total Amount">
                      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
                      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
                        <Text1 text="Total Amount" />
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Container">
                        <Helper text="Orig:" text1="$600,00.00" />
                        <Helper1 />
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
                          <Wrapper1 additionalClassNames="font-['Roboto:Regular',sans-serif] font-normal">Adj:</Wrapper1>
                          <Wrapper2 additionalClassNames="text-[#34944f]">$100,800.00</Wrapper2>
                          <div className="absolute contents left-[97px] top-[-5.5px]" data-name="Container">
                            <div className="absolute contents left-[97px] top-[-5.5px]" data-name="Container">
                              <Text3 text="" />
                              <Text4 text="2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
                      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
                        <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                          <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                            <Text1 text="Target" />
                          </div>
                        </div>
                      </div>
                      <Wrapper1 additionalClassNames="font-['Roboto:Medium',sans-serif] font-medium">$500.00</Wrapper1>
                    </div>
                    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
                        <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                          <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                            <Text1 text="Achievement" />
                          </div>
                        </div>
                      </div>
                      <div className="bg-[rgba(163,190,217,0.15)] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-[160px] shrink-0" data-name="Achievements">
                        <IconText text="" />
                        <IconText1 text="90%" />
                      </div>
                    </div>
                  </div>
                  <Helper3DotsMemberText text="ellipsis" />
                </div>
              </CardInnerMember3>
              <CardInnerMember />
              <CardInnerMember1 />
              <CardInnerMember2 />
              <CardInnerMember1 />
              <CardInnerMember />
              <CardInnerMember2 />
              <CardInnerMember />
              <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0">
                <div className="bg-[#f8fafc] content-stretch flex gap-[1.5px] h-full items-center justify-center px-[6px] py-[1.5px] relative rounded-[4px] shrink-0" data-name="Count Of Pages">
                  <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.75px] border-solid inset-[-0.375px] pointer-events-none rounded-[4.375px]" />
                  <div className="content-stretch flex h-full items-center justify-center relative rounded-[4px] shrink-0" data-name="Pagination item">
                    <Wrapper3 additionalClassNames="text-[#0071cd] text-center">10</Wrapper3>
                  </div>
                  <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Slash">
                    <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.5px] text-[rgba(0,11,37,0.57)] text-center text-nowrap">
                      <p className="leading-[1.73]">/</p>
                    </div>
                  </div>
                  <div className="content-stretch flex h-full items-center justify-center relative rounded-[4px] shrink-0" data-name="Pagination item">
                    <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[18px]">55</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <PaginationText text="angle-left" />
                  <PaginationText text="angle-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}