import svgPaths from "./svg-tozj1viga5";
import clsx from "clsx";

function Container3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[38.5px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">{children}</div>
    </div>
  );
}

function Container2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[38.5px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">{children}</div>
    </div>
  );
}

function Checkbox({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-start relative">{children}</div>
    </div>
  );
}

function Icon4Vector({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-1/4">
      <div className="absolute inset-[-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Container1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[64.5px] relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[13px] py-px relative size-full">{children}</div>
      </div>
    </div>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <div className="bg-[#eff6ff] h-[29px] relative rounded-[10px] shrink-0 w-[53.813px]">
      <div aria-hidden="true" className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[13px] py-[7px] relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#155dfc] text-[10px] text-center text-nowrap">{text}</p>
      </div>
    </div>
  );
}
type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <div className="content-stretch flex h-[16.5px] items-start overflow-clip relative shrink-0 w-full">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#fb2c36] text-[11px]">{text}</p>
    </div>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <div className="bg-[#f9fafb] h-[19.5px] relative rounded-[4px] shrink-0 w-[45.234px]">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Bold',sans-serif] leading-[13.5px] left-[7px] not-italic text-[#6a7282] text-[9px] top-px w-[32px]">{text}</p>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit]", additionalClassNames)}>
      <p className="font-['Arial:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap">{text}</p>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="bg-[#eff6ff] relative rounded-[3.35544e+07px] shrink-0 size-[36px]">
      <div aria-hidden="true" className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Arial:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#155dfc] text-[10px] text-nowrap">{text}</p>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative", additionalClassNames)}>
      <p className="font-['Arial:Bold',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[#6a7282] text-[11px] text-nowrap tracking-[0.55px] uppercase">{text}</p>
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

export default function Container() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid overflow-clip relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Container">
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 overflow-clip p-[16px] top-[81.5px] w-[510px]" data-name="Container">
        <div className="content-stretch flex gap-[8px] h-[16.5px] items-center relative shrink-0" data-name="Container">
          <Checkbox>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[15px]" data-name="Left">
              <Icon />
            </div>
          </Checkbox>
          <div className="h-[16.5px] relative shrink-0" data-name="Text">
            <Text text="Select All Members" additionalClassNames="h-full" />
          </div>
        </div>
        <Container1>
          <Checkbox>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[15px]" data-name="Left">
              <Icon />
            </div>
          </Checkbox>
          <Container3>
            <ContainerText text="JD" />
            <Container2>
              <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
                <div className="h-[20px] relative shrink-0" data-name="Paragraph">
                  <Text1 text="John Doe" additionalClassNames="h-full" />
                </div>
                <TextText text="#54987" />
              </div>
              <ParagraphText text="Missing Performance Data" />
            </Container2>
          </Container3>
          <ButtonText text="Rerun" />
        </Container1>
        <Container1>
          <Checkbox>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[15px]" data-name="Left">
              <Icon />
            </div>
          </Checkbox>
          <Container3>
            <ContainerText text="SW" />
            <Container2>
              <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
                <div className="h-[20px] relative shrink-0 w-[86px]" data-name="Paragraph">
                  <Text1 text="Sarah Wilson" additionalClassNames="size-full" />
                </div>
                <TextText text="#54988" />
              </div>
              <ParagraphText text="Incomplete Territory" />
            </Container2>
          </Container3>
          <ButtonText text="Rerun" />
        </Container1>
      </div>
      <div className="absolute bg-[rgba(249,250,251,0.5)] content-stretch flex h-[65px] items-center justify-between left-0 pb-0 pt-px px-[20px] top-[275px] w-[510px]" data-name="Container">
        <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
        <div className="h-[16.5px] relative shrink-0 w-[65.641px]" data-name="Text">
          <Text text="2 selected" additionalClassNames="size-full" />
        </div>
        <div className="h-[32px] relative shrink-0 w-[208.969px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
            <div className="h-[32px] relative rounded-[10px] shrink-0 w-[68.875px]" data-name="Button">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[8px] relative size-full">
                <p className="font-['Arial:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-center text-nowrap">Cancel</p>
              </div>
            </div>
            <div className="basis-0 bg-[#155dfc] grow h-[32px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
              <div className="size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[24px] py-[8px] relative size-full">
                  <p className="font-['Arial:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white">Rerun Selected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex h-[81.5px] items-center justify-between left-0 pb-px pt-0 px-[20px] top-0 w-[510px]" data-name="Container">
        <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        <div className="h-[40.5px] relative shrink-0 w-[243.469px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
            <div className="bg-[#eff6ff] relative rounded-[4px] shrink-0 size-[40px]" data-name="Container">
              <div aria-hidden="true" className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="Icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="Icon">
                      <path d={svgPaths.p2110f1c0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M2.5 2.5V6.66667H6.66667" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="basis-0 grow h-[40.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
                  <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-2px]">Rerun Excluded Members</p>
                </div>
                <div className="content-stretch flex h-[16.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
                  <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[11px]">KAM Plan (V.1) • 2 Members Found</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
            <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
              <Icon4Vector>
                <path d={svgPaths.p354ab980} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </Icon4Vector>
              <Icon4Vector>
                <path d={svgPaths.p2a4db200} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </Icon4Vector>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}