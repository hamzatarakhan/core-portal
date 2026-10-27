import svgPaths from "./svg-hzeqweoh6r";
import clsx from "clsx";
type TableCell1Props = {
  additionalClassNames?: string;
};

function TableCell1({ children, additionalClassNames = "" }: React.PropsWithChildren<TableCell1Props>) {
  return (
    <div className={clsx("basis-0 grow min-h-px min-w-px relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function TableCell({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type IconTextProps = {
  text: string;
};

function IconText({ text }: IconTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
      <p className="font-['Font_Awesome_6_Duotone:Solid',sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,11,37,0.57)] text-nowrap">{text}</p>
    </div>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-0" style={{ "--stroke-0": "rgba(103, 87, 235, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Icon">
            <path d={svgPaths.p17146600} stroke="var(--stroke-0, #6757EB)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type PaginationItemTextProps = {
  text: string;
};

function PaginationItemText({ text }: PaginationItemTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[40px]">
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] text-center text-nowrap">
        <p className="leading-[normal]">{text}</p>
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
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0", additionalClassNames)}>
      <p className="leading-[1.2] text-nowrap">{text}</p>
    </div>
  );
}

export default function Modal() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[8px] shadow-[4px_4px_4px_0px_rgba(0,11,37,0.08)] size-full" data-name="Modal">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] isolate items-start p-[24px] relative size-full">
          <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full z-[3]" data-name="Modal header">
            <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Title">
              <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 text-nowrap">
                <Text text="Rerun Excluded Members" additionalClassNames="leading-[0] text-[#000b25] text-[19px]" />
                <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  KAM Plan (V.1) • 30 Members Found
                </p>
              </div>
            </div>
            <p className="font-['Font_Awesome_6_Pro:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[20px] text-nowrap">close</p>
          </div>
          <div className="bg-white relative rounded-[8px] shrink-0 w-full z-[2]">
            <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="flex flex-col items-end justify-center size-full">
              <div className="content-stretch flex flex-col gap-[16px] items-end justify-center p-[16px] relative w-full">
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="left">
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[511px]" data-name="Textfield">
                      <div className="bg-[#f8fafc] h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
                            <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Search
                            </p>
                            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
                              <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px] text-nowrap">Search</p>
                            </div>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-name="Table footer">
                    <div className="content-stretch flex h-[40px] items-center justify-center relative rounded-[4px] shrink-0" data-name="Pages number">
                      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
                      <div className="content-stretch flex h-full items-center justify-center px-[8px] py-0 relative rounded-[4px] shrink-0" data-name="Pagination item">
                        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6757eb] text-[16px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                          <p className="leading-[1.2]">1</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Slash">
                        <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center text-nowrap">
                          <p className="leading-[1.2]">/</p>
                        </div>
                      </div>
                      <div className="content-stretch flex h-full items-center justify-center px-[8px] py-0 relative rounded-[4px] shrink-0" data-name="Pagination item">
                        <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,11,37,0.64)] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                          <p className="leading-[24px]">55</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Pagination">
                      <PaginationItemText text="angle-left" />
                      <PaginationItemText text="angle-right" />
                    </div>
                  </div>
                </div>
                <div className="relative rounded-[4px] shrink-0 w-full" data-name="Content - Table">
                  <div className="content-stretch flex flex-col isolate items-start overflow-x-clip overflow-y-auto relative w-full">
                    <div className="bg-[#f0eefd] content-stretch flex isolate items-start shrink-0 sticky top-0 w-full z-[2]" data-name="thead">
                      <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative self-stretch shrink-0 z-[1]" data-name="tr">
                        <div aria-hidden="true" className="absolute border-[#e1e1e1] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex flex-col h-[48px] items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Table cell">
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
                            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
                              <Icon />
                            </div>
                          </div>
                        </div>
                        <TableCell>
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Table text">
                            <TextText text="Name" />
                            <IconText text="" />
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Table text">
                            <TextText text="Code" />
                            <IconText text="" />
                          </div>
                        </TableCell>
                        <TableCell1 additionalClassNames="h-full">
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Table text">
                            <TextText text="Reason for Exclusion" />
                            <IconText text="" />
                          </div>
                        </TableCell1>
                      </div>
                    </div>
                    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full z-[1]" data-name="tbody">
                      {[...Array(6).keys()].map((_, i) => (
                        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table - TD">
                          <div aria-hidden="true" className="absolute border-[#e1e1e1] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                          <div className="content-stretch flex flex-col h-[41px] items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Table cell">
                            <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Checkbox">
                              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
                                <Icon />
                              </div>
                            </div>
                          </div>
                          <TableCell>
                            <div className="content-stretch flex items-center relative shrink-0 w-[78px]" data-name="Table text">
                              <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                John Doe
                              </p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
                              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                #54987
                              </p>
                            </div>
                          </TableCell>
                          <TableCell1 additionalClassNames="h-[41px]">
                            <div className="bg-[rgba(240,43,2,0.05)] content-stretch flex h-[22.5px] items-center justify-center px-[9px] py-[5px] relative rounded-[4px] shrink-0" data-name="Text">
                              <div aria-hidden="true" className="absolute border border-[rgba(240,43,2,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#ef4444] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Reason `}</p>
                            </div>
                          </TableCell1>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full z-[1]" data-name="Modal footer">
            <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
              0 SELECTED
            </p>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[4px] shrink-0" data-name="Button">
                <div aria-hidden="true" className="absolute border border-[#6757eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6757eb] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[1.2]">Cancel</p>
                </div>
              </div>
              <div className="bg-[#6757eb] content-stretch flex gap-[8px] h-[40px] items-center justify-center leading-[0] px-[16px] py-0 relative rounded-[4px] shrink-0 text-[14px] text-nowrap text-white" data-name="Button">
                <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0 text-center">
                  <p className="leading-[normal] text-nowrap"></p>
                </div>
                <Text text="Rerun Selected" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}