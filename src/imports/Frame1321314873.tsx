import svgPaths from "./svg-kltuusfhka";
import clsx from "clsx";
type TableHeaderProps = {
  text: string;
};

function TableHeader({ children, text }: React.PropsWithChildren<TableHeaderProps>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[97px]">
            <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              {text}
            </p>
            <IconText text="" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Members({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-[#f4f4f5] grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-[#f4f4f5] grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[8px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-[#f4f4f5] grow h-full min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function TableCell() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[16px] py-[8px] relative shrink-0">
      <div className="flex h-[11px] items-center justify-center relative shrink-0 w-[14px]" style={{ "--transform-inner-width": "10.5", "--transform-inner-height": "16" } as React.CSSProperties}>
        <Text3 text="" />
      </div>
    </div>
  );
}
type PaginationTextProps = {
  text: string;
};

function PaginationText({ text }: PaginationTextProps) {
  return (
    <div className="bg-[#000000] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[30px]">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.75px] border-solid inset-[-0.375px] pointer-events-none rounded-[4.375px]" />
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type IconText5Props = {
  text: string;
};

function IconText5({ text }: IconText5Props) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#ef4444] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type Text5Props = {
  text: string;
};

function Text5({ text }: Text5Props) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[12px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(239, 68, 68, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <circle cx="6" cy="6" fill="var(--fill-0, #EF4444)" id="Ellipse 4" r="6" />
          </svg>
        </div>
      </div>
      <p className="[grid-area:1_/_1] font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] ml-[3px] mt-px not-italic relative text-[10.286px] text-nowrap text-white">{text}</p>
    </div>
  );
}
type TableCellText5Props = {
  text: string;
};

function TableCellText5({ text }: TableCellText5Props) {
  return (
    <div className="content-stretch flex h-full items-center px-[16px] py-[8px] relative shrink-0 w-[164.67px]">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#34944f] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type IconText4Props = {
  text: string;
};

function IconText4({ text }: IconText4Props) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#f97316] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type IconText3Props = {
  text: string;
};

function IconText3({ text }: IconText3Props) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f97316] text-[12px] text-nowrap">{text}</p>
    </div>
  );
}
type TableCellText4Props = {
  text: string;
};

function TableCellText4({ text }: TableCellText4Props) {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[16px] py-[8px] relative shrink-0 w-[73px]">
      <div className="flex h-[10px] items-center justify-center relative shrink-0 w-[11px]" style={{ "--transform-inner-width": "31.515625", "--transform-inner-height": "12" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative text-[10.5px] text-[rgba(0,11,37,0.64)] text-center text-nowrap">
            <p className="leading-[normal]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type TableCellText3Props = {
  text: string;
};

function TableCellText3({ text }: TableCellText3Props) {
  return (
    <div className="content-stretch flex h-full items-center px-[16px] py-[8px] relative shrink-0 w-[164.67px]">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#da2702] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type IconText2Props = {
  text: string;
};

function IconText2({ text }: IconText2Props) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#49d16f] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type IconText1Props = {
  text: string;
};

function IconText1({ text }: IconText1Props) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#49d16f] text-[12px] text-nowrap">{text}</p>
    </div>
  );
}
type Text4Props = {
  text: string;
  additionalClassNames?: string;
};

function Text4({ text, additionalClassNames = "" }: Text4Props) {
  return (
    <div className={clsx("content-stretch flex items-center px-[16px] py-[8px] relative", additionalClassNames)}>
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type TableCellText2Props = {
  text: string;
};

function TableCellText2({ text }: TableCellText2Props) {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <Text4 text={text} additionalClassNames="size-full" />
      </div>
    </div>
  );
}
type Text3Props = {
  text: string;
  additionalClassNames?: string;
};

function Text3({ text, additionalClassNames = "" }: Text3Props) {
  return (
    <div className={clsx("flex-none rotate-[270deg]", additionalClassNames)}>
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative text-[14px] text-[rgba(0,11,37,0.64)] text-nowrap">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type TableHeaderTextProps = {
  text: string;
};

function TableHeaderText({ text }: TableHeaderTextProps) {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] py-[12px] relative shrink-0">
      <div className="flex h-[13px] items-center justify-center relative shrink-0 w-[14px]" style={{ "--transform-inner-width": "42.015625", "--transform-inner-height": "16" } as React.CSSProperties}>
        <Text3 text={text} additionalClassNames="scale-y-[-100%]" />
      </div>
    </div>
  );
}
type TableCellText1Props = {
  text: string;
};

function TableCellText1({ text }: TableCellText1Props) {
  return (
    <Wrapper>
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#15803d] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </Wrapper>
  );
}

function Helper() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[rgba(34,197,94,0.03)] content-stretch flex gap-[4.8px] items-center justify-center px-[9.6px] py-[4px] relative rounded-[2.4px] shrink-0">
        <div aria-hidden="true" className="absolute border border-[rgba(73,209,111,0.15)] border-solid inset-0 pointer-events-none rounded-[2.4px]" />
        <div className="content-stretch flex flex-col items-center pb-[2px] pt-0 px-0 relative shrink-0 w-[10px]">
          <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#22c55e] text-[9.6px] text-nowrap">
            <p className="leading-[normal]">{"users"}</p>
          </div>
        </div>
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#22c55e] text-[10px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          {"16 Included"}
        </p>
      </div>
      <div className="bg-[rgba(249,115,22,0.03)] content-stretch flex gap-[4.8px] items-center justify-center px-[9.6px] py-[4px] relative rounded-[2.4px] shrink-0">
        <div aria-hidden="true" className="absolute border border-[rgba(255,153,0,0.15)] border-solid inset-0 pointer-events-none rounded-[2.4px]" />
        <div className="content-stretch flex flex-col items-center pb-[2px] pt-0 px-0 relative shrink-0 w-[10px]">
          <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f97316] text-[9.6px] text-nowrap">
            <p className="leading-[normal]">{"users"}</p>
          </div>
        </div>
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#f97316] text-[10px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          {"2 Adjusted"}
        </p>
      </div>
      <div className="bg-[rgba(240,43,2,0.06)] content-stretch flex gap-[4.8px] items-center justify-center px-[9.6px] py-[4px] relative rounded-[2.4px] shrink-0">
        <div aria-hidden="true" className="absolute border border-[rgba(240,43,2,0.1)] border-solid inset-0 pointer-events-none rounded-[2.4px]" />
        <div className="content-stretch flex flex-col items-center pb-[2px] pt-0 px-0 relative shrink-0 w-[10px]">
          <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f02b02] text-[9.6px] text-nowrap">
            <p className="leading-[normal]">{"users"}</p>
          </div>
        </div>
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#f02b02] text-[10px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`2 Excluded `}</p>
      </div>
      <TableStatusText text="4 Failed" />
    </div>
  );
}
type TableStatusTextProps = {
  text: string;
};

function TableStatusText({ text }: TableStatusTextProps) {
  return (
    <div className="bg-[rgba(206,0,88,0.03)] content-stretch flex gap-[4.8px] items-center justify-center px-[9.6px] py-[4px] relative rounded-[2.4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(206,0,88,0.1)] border-solid inset-0 pointer-events-none rounded-[2.4px]" />
      <div className="content-stretch flex flex-col items-center pb-[2px] pt-0 px-0 relative shrink-0 w-[10px]">
        <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ce0058] text-[9.6px] w-full">
          <p className="leading-[normal]">{"warning"}</p>
        </div>
      </div>
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#ce0058] text-[10px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type TableCellTextProps = {
  text: string;
};

function TableCellText({ text }: TableCellTextProps) {
  return (
    <Wrapper>
      <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </Wrapper>
  );
}
type IconTextProps = {
  text: string;
};

function IconText({ text }: IconTextProps) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] text-nowrap">{text}</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-0" style={{ "--stroke-0": "rgba(0, 113, 205, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Icon">
            <path d={svgPaths.p17146600} stroke="var(--stroke-0, #000000)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type ExpandTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ExpandText({ text, additionalClassNames = "" }: ExpandTextProps) {
  return (
    <div className={clsx("bg-white content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[4px] w-[32px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] text-nowrap">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#15803d] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">{text}</p>
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
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000b25] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">{text}</p>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">{text}</p>
      </div>
    </div>
  );
}
type BackgroundProps = {
  text: string;
  text1: string;
};

function Background({ text, text1 }: BackgroundProps) {
  return (
    <div className="bg-[#f8fafc] content-stretch flex gap-[8px] h-full items-center px-[10px] py-[8px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">{text}</p>
      </div>
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] text-nowrap">
        <p className="leading-[normal]">{text1}</p>
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table-row">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center self-stretch">
        <div className="content-stretch flex flex-col h-full items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Table cell">
          <div className="content-stretch flex gap-[3px] items-start relative shrink-0" data-name="Checkbox">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
              <Icon />
            </div>
          </div>
        </div>
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableCellText text="Ethan Perez" />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableCellText text="Distributor" />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableCellText2 text="$100,000" />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Wrapper>
          <div className="bg-[rgba(163,190,217,0.15)] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-[160px] shrink-0" data-name="Achievements">
            <IconText3 text="" />
            <IconText4 text="71%" />
          </div>
        </Wrapper>
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableCellText1 text="$84,600.00" />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCellText5 text="$100,600.00" />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCellText4 text="ellipsis" />
      </div>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table-row">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center self-stretch">
        <div className="content-stretch flex flex-col h-full items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Table cell">
          <div className="content-stretch flex gap-[3px] items-start relative shrink-0" data-name="Checkbox">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
              <Icon />
            </div>
          </div>
        </div>
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableCellText text="Ethan Perez" />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableCellText text="Distributor" />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableCellText2 text="$100,000" />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Wrapper>
          <div className="bg-[rgba(163,190,217,0.15)] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-[160px] shrink-0" data-name="Achievements">
            <Text5 text="close" />
            <IconText5 text="35%" />
          </div>
        </Wrapper>
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableCellText1 text="$84,600.00" />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCellText3 text="$60,600.00" />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCellText4 text="ellipsis" />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Section-title">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="left">
            <div className="flex flex-row items-center self-stretch">
              <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
                <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Plan Results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[1112px]" data-name="Header">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="bg-[#edf1f5] content-stretch flex gap-[2px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Segmented control">
                <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <div className="bg-white content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative rounded-[4px] shrink-0" data-name="Segmented">
                  <div aria-hidden="true" className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000000] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Plans
                  </p>
                </div>
                <div className="content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative rounded-[4px] shrink-0" data-name="Segmented">
                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Members
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center self-stretch">
              <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="CTA">
                  <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[4px] shrink-0" data-name="Button">
                    <div aria-hidden="true" className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.2]">Operations</p>
                    </div>
                    <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-nowrap">
                      <p className="leading-[normal]"></p>
                    </div>
                  </div>
                </div>
                <div className="bg-white content-stretch flex gap-[2px] h-[41px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Segmented Control">
                  <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[31.304px]">
                    <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] text-center text-nowrap">
                      <p className="leading-[normal]"></p>
                    </div>
                  </div>
                  <div className="bg-[#000000] content-stretch flex h-[31.304px] items-center justify-center px-[8px] py-0 relative rounded-[3.2px] shrink-0" data-name="Button">
                    <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
                      <p className="leading-[normal]">list</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[12px] relative rounded-[4px] shrink-0 w-[1112px]">
            <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_3px_20px_0px_rgba(0,0,0,0.05)]" />
            <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-[1088px]">
              <div className="bg-white content-stretch flex gap-[8px] items-center min-w-[360px] px-[11px] py-[9px] relative rounded-[6px] shrink-0 w-[360px]" data-name="Background+Border">
                <div aria-hidden="true" className="absolute border border-[#e6e9f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
                  <div className="relative shrink-0 size-[18px]" data-name="SVG">
                    <div className="absolute left-0 size-[18px] top-0" data-name="Group">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g id="Group">
                          <path d="M15.75 15.75L12.495 12.495" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p334b2b00} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] w-[254.7px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[1.2]">Search by Plan, Member, or Account #</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0">
                <Background text="Hierarchy Type: All" text1="" />
                <Background text="Plan: All" text1="" />
                <Background text="Status: All" text1="" />
                <div className="content-stretch flex gap-[8px] h-full items-center leading-[0] px-[10px] py-[8px] relative rounded-[4px] shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-nowrap" data-name="Background">
                  <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.2] text-nowrap">Clear</p>
                  </div>
                  <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0">
                    <p className="leading-[normal] text-nowrap"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1112px]">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Title">
                <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_3px_20px_0px_rgba(0,0,0,0.05)]" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
                    <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                      <Wrapper1>
                        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                          <Text text="Hierarchy Type" />
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <div className="content-stretch flex items-center relative shrink-0">
                              <div className="content-stretch flex items-center relative shrink-0">
                                <Text1 text="VM" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Wrapper1>
                    </div>
                    <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                      <Wrapper2>
                        <div className="content-stretch flex items-center relative shrink-0">
                          <div className="content-stretch flex items-center relative shrink-0">
                            <Text text="Total Amount" />
                          </div>
                        </div>
                        <Text2 text="$100,800.00" />
                      </Wrapper2>
                    </div>
                    <Members>
                      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative rounded-[4px] shrink-0">
                        <div className="content-stretch flex items-center relative shrink-0">
                          <div className="content-stretch flex items-center relative shrink-0">
                            <Text text="No. Of Members" />
                          </div>
                        </div>
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <div className="content-stretch flex items-center relative shrink-0">
                            <div className="content-stretch flex items-center relative shrink-0">
                              <Text1 text="55" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Members>
                    <div className="flex items-center justify-center relative shrink-0">
                      <div className="flex-none scale-y-[-100%]">
                        <ExpandText text="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-[1112px]" data-name="List - Plan">
                <div className="bg-white content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Subscription details">
                  <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="bg-[#f4f4f5] content-stretch flex items-start relative rounded-[4px] shrink-0 w-full" data-name="Table-header">
                    <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <div className="self-stretch shrink-0 w-[46px]" data-name="Table cell" />
                    <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative self-stretch shrink-0" data-name="Table cell">
                      <div className="content-stretch flex gap-[3px] items-start relative shrink-0" data-name="Checkbox">
                        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
                          <Icon />
                        </div>
                      </div>
                    </div>
                    <TableHeader text="Plan Name" />
                    <div className="content-stretch flex h-[38px] items-center px-[8px] py-[12px] relative shrink-0 w-[367px]" data-name="Table header">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[97px]">
                        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {"Members"}
                        </p>
                        <IconText text="" />
                      </div>
                    </div>
                    <TableHeader text="Tax" />
                    <TableHeader text="Total Amount" />
                    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] shrink-0" data-name="Table header" />
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table-row">
                    <div aria-hidden="true" className="absolute border-[#e4e4e7] border-[1px_1px_0px] border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex h-full items-center justify-center px-[16px] py-[8px] relative shrink-0 w-[46px]" data-name="Table cell">
                        <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] text-nowrap">
                          <p className="leading-[normal]"></p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col h-full items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Table cell">
                        <div className="content-stretch flex gap-[3px] items-start relative shrink-0" data-name="Checkbox">
                          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
                            <Icon />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                      <TableCellText text="Plan Name" />
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0" data-name="Table cell">
                      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        20
                      </p>
                      <div className="content-stretch flex items-center relative shrink-0">
                        <Helper />
                      </div>
                    </div>
                    <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                      <TableCellText text="569" />
                    </div>
                    <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                      <TableCellText1 text="$84,600.00" />
                    </div>
                    <TableHeaderText text="ellipsis" />
                  </div>
                  <div className="bg-[#f8fafc] relative rounded-[4px] shrink-0 w-full" data-name="SMS">
                    <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center p-[12px] relative w-full">
                        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-end justify-center min-h-px min-w-px relative shrink-0">
                          <div className="bg-white content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Subscription details">
                            <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                            <div className="bg-[#f8fafc] content-stretch flex items-start relative rounded-[4px] shrink-0 w-full" data-name="Table-header">
                              <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                              <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative self-stretch shrink-0" data-name="Table cell">
                                <div className="content-stretch flex gap-[3px] items-start relative shrink-0" data-name="Checkbox">
                                  <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
                                    <Icon />
                                  </div>
                                </div>
                              </div>
                              <TableHeader text="Channel Member Name" />
                              <TableHeader text="Channel Member Type" />
                              <TableHeader text="Target" />
                              <TableHeader text="Achievement" />
                              <TableHeader text="Original Amount" />
                              <TableHeader text="Total After Adj." />
                              <div className="content-stretch flex items-center px-[16px] py-[12px] relative shrink-0" data-name="Table header">
                                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Table header">
                                  <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    Actions
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table-row">
                              <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                              <div className="flex flex-row items-center self-stretch">
                                <div className="content-stretch flex flex-col h-full items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Table cell">
                                  <div className="content-stretch flex gap-[3px] items-start relative shrink-0" data-name="Checkbox">
                                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
                                      <Icon />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <Wrapper>
                                  <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[109px]" data-name="Container">
                                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
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
                                    <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      <p className="leading-[1.2]">Hamza Tarakhan</p>
                                    </div>
                                  </div>
                                </Wrapper>
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <TableCellText text="Distributor" />
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <TableCellText2 text="$100,000" />
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <Wrapper>
                                  <div className="bg-[rgba(163,190,217,0.15)] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-[160px] shrink-0" data-name="Achievements">
                                    <IconText1 text="" />
                                    <IconText2 text="90%" />
                                  </div>
                                </Wrapper>
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <TableCellText1 text="$84,600.00" />
                              </div>
                              <div className="flex flex-row items-center self-stretch">
                                <TableCellText3 text="$60,600.00" />
                              </div>
                              <div className="flex flex-row items-center self-stretch">
                                <TableCellText4 text="ellipsis" />
                              </div>
                            </div>
                            <TableRow />
                            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table-row">
                              <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                              <div className="flex flex-row items-center self-stretch">
                                <div className="content-stretch flex flex-col h-full items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Table cell">
                                  <div className="content-stretch flex gap-[3px] items-start relative shrink-0" data-name="Checkbox">
                                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
                                      <Icon />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <TableCellText text="Ethan Perez" />
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <TableCellText text="Distributor" />
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <TableCellText2 text="$100,000" />
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <Wrapper>
                                  <div className="bg-[rgba(163,190,217,0.15)] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-[160px] shrink-0" data-name="Achievements">
                                    <Text5 text="close" />
                                    <IconText5 text="35%" />
                                  </div>
                                </Wrapper>
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <TableCellText1 text="$84,600.00" />
                              </div>
                              <div className="flex flex-row items-center self-stretch">
                                <Text4 text="$84,600.00" additionalClassNames="h-full shrink-0 w-[164.67px]" />
                              </div>
                              <div className="flex flex-row items-center self-stretch">
                                <TableCellText4 text="ellipsis" />
                              </div>
                            </div>
                            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table-row">
                              <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                              <div className="flex flex-row items-center self-stretch">
                                <div className="content-stretch flex flex-col h-full items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Table cell">
                                  <div className="content-stretch flex gap-[3px] items-start relative shrink-0" data-name="Checkbox">
                                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
                                      <Icon />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <TableCellText text="Ethan Perez" />
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <TableCellText text="Distributor" />
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <TableCellText2 text="$100,000" />
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <Wrapper>
                                  <div className="bg-[rgba(163,190,217,0.15)] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-[160px] shrink-0" data-name="Achievements">
                                    <IconText1 text="" />
                                    <IconText2 text="90%" />
                                  </div>
                                </Wrapper>
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <TableCellText1 text="$84,600.00" />
                              </div>
                              <div className="flex flex-row items-center self-stretch">
                                <TableCellText5 text="$100,600.00" />
                              </div>
                              <div className="flex flex-row items-center self-stretch">
                                <TableCellText4 text="ellipsis" />
                              </div>
                            </div>
                            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table-row">
                              <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                              <div className="flex flex-row items-center self-stretch">
                                <div className="content-stretch flex flex-col h-full items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Table cell">
                                  <div className="content-stretch flex gap-[3px] items-start relative shrink-0" data-name="Checkbox">
                                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
                                      <Icon />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <TableCellText text="Ethan Perez" />
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <TableCellText text="Distributor" />
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <TableCellText2 text="$100,000" />
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <Wrapper>
                                  <div className="bg-[rgba(163,190,217,0.15)] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-[160px] shrink-0" data-name="Achievements">
                                    <IconText3 text="" />
                                    <IconText4 text="71%" />
                                  </div>
                                </Wrapper>
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <TableCellText1 text="$84,600.00" />
                              </div>
                              <div className="flex flex-row items-center self-stretch">
                                <Text4 text="$84,600.00" additionalClassNames="h-full shrink-0 w-[164.67px]" />
                              </div>
                              <div className="flex flex-row items-center self-stretch">
                                <TableCellText4 text="ellipsis" />
                              </div>
                            </div>
                            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table-row">
                              <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                              <div className="flex flex-row items-center self-stretch">
                                <div className="content-stretch flex flex-col h-full items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Table cell">
                                  <div className="content-stretch flex gap-[3px] items-start relative shrink-0" data-name="Checkbox">
                                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
                                      <Icon />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <TableCellText text="Ethan Perez" />
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <TableCellText text="Distributor" />
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <TableCellText2 text="$100,000" />
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <Wrapper>
                                  <div className="bg-[rgba(163,190,217,0.15)] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-[160px] shrink-0" data-name="Achievements">
                                    <IconText1 text="" />
                                    <IconText2 text="90%" />
                                  </div>
                                </Wrapper>
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <TableCellText1 text="$84,600.00" />
                              </div>
                              <div className="flex flex-row items-center self-stretch">
                                <TableCellText3 text="$60,600.00" />
                              </div>
                              <div className="flex flex-row items-center self-stretch">
                                <TableCellText4 text="ellipsis" />
                              </div>
                            </div>
                            <TableRow1 />
                            <TableRow />
                            <TableRow1 />
                            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table-row">
                              <div className="flex flex-row items-center self-stretch">
                                <div className="content-stretch flex flex-col h-full items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Table cell">
                                  <div className="content-stretch flex gap-[3px] items-start relative shrink-0" data-name="Checkbox">
                                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
                                      <Icon />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <TableCellText text="Ethan Perez" />
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <TableCellText text="Distributor" />
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <TableCellText2 text="$100,000" />
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <Wrapper>
                                  <div className="bg-[rgba(163,190,217,0.15)] content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-[160px] shrink-0" data-name="Achievements">
                                    <IconText1 text="" />
                                    <IconText2 text="90%" />
                                  </div>
                                </Wrapper>
                              </div>
                              <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                                <TableCellText1 text="$84,600.00" />
                              </div>
                              <div className="flex flex-row items-center self-stretch">
                                <Text4 text="$84,600.00" additionalClassNames="h-full shrink-0 w-[164.67px]" />
                              </div>
                              <div className="flex flex-row items-center self-stretch">
                                <TableCellText4 text="ellipsis" />
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] h-[30px] items-center relative shrink-0">
                            <div className="bg-[#f8fafc] content-stretch flex gap-[1.5px] h-full items-center justify-center px-[6px] py-[1.5px] relative rounded-[4px] shrink-0" data-name="Count Of Pages">
                              <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.75px] border-solid inset-[-0.375px] pointer-events-none rounded-[4.375px]" />
                              <div className="content-stretch flex h-full items-center justify-center relative rounded-[4px] shrink-0" data-name="Pagination item">
                                <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  <p className="leading-[1.2]">10</p>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Slash">
                                <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center text-nowrap">
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
                  <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table-row">
                    <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center self-stretch">
                      <TableCell />
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col h-full items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Table cell">
                        <div className="content-stretch flex gap-[3px] items-start relative shrink-0" data-name="Checkbox">
                          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
                            <Icon />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                      <TableCellText text="Plan Name" />
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0 w-[367px]" data-name="Table cell">
                      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        20
                      </p>
                      <div className="content-stretch flex items-center relative shrink-0">
                        <Helper />
                      </div>
                    </div>
                    <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                      <TableCellText text="569" />
                    </div>
                    <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                      <TableCellText1 text="$84,600.00" />
                    </div>
                    <TableHeaderText text="ellipsis" />
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table-row">
                    <div className="flex flex-row items-center self-stretch">
                      <TableCell />
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col h-full items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Table cell">
                        <div className="content-stretch flex gap-[3px] items-start relative shrink-0" data-name="Checkbox">
                          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
                            <Icon />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                      <TableCellText text="Plan Name" />
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center p-[8px] relative shrink-0 w-[367px]" data-name="Table cell">
                      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        20
                      </p>
                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="content-stretch flex items-center relative shrink-0">
                          <TableStatusText text="4 Failed" />
                        </div>
                      </div>
                    </div>
                    <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                      <TableCellText text="569" />
                    </div>
                    <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                      <TableCellText1 text="$84,600.00" />
                    </div>
                    <TableHeaderText text="ellipsis" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Title">
              <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_3px_20px_0px_rgba(0,0,0,0.05)]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
                  <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                    <Wrapper1>
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                        <Text text="Hierarchy Type" />
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <div className="content-stretch flex items-center relative shrink-0">
                            <div className="content-stretch flex items-center relative shrink-0">
                              <Text1 text="SM" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Wrapper1>
                  </div>
                  <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                    <Wrapper2>
                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="content-stretch flex items-center relative shrink-0">
                          <Text text="Total Amount" />
                        </div>
                      </div>
                      <Text2 text="$100,800.00" />
                    </Wrapper2>
                  </div>
                  <Members>
                    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative rounded-[4px] shrink-0">
                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="content-stretch flex items-center relative shrink-0">
                          <Text text="No. Of Members" />
                        </div>
                      </div>
                      <div className="content-stretch flex items-center relative shrink-0 w-full">
                        <div className="content-stretch flex items-center relative shrink-0">
                          <div className="content-stretch flex items-center relative shrink-0">
                            <Text1 text="55" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Members>
                  <ExpandText text="" additionalClassNames="shrink-0" />
                </div>
              </div>
            </div>
            <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Title">
              <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_3px_20px_0px_rgba(0,0,0,0.05)]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
                  <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                    <Wrapper1>
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                        <Text text="Hierarchy Type" />
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <div className="content-stretch flex items-center relative shrink-0">
                            <div className="content-stretch flex items-center relative shrink-0">
                              <Text1 text="KAM" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Wrapper1>
                  </div>
                  <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                    <Wrapper2>
                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="content-stretch flex items-center relative shrink-0">
                          <Text text="Total Amount" />
                        </div>
                      </div>
                      <Text2 text="$100,800.00" />
                    </Wrapper2>
                  </div>
                  <Members>
                    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative rounded-[4px] shrink-0">
                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="content-stretch flex items-center relative shrink-0">
                          <Text text="No. Of Members" />
                        </div>
                      </div>
                      <div className="content-stretch flex items-center relative shrink-0 w-full">
                        <div className="content-stretch flex items-center relative shrink-0">
                          <div className="content-stretch flex items-center relative shrink-0">
                            <Text1 text="55" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Members>
                  <ExpandText text="" additionalClassNames="shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}