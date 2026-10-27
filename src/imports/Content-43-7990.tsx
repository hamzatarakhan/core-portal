import clsx from "clsx";

function Textfield({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Field({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-[#f8fafc] grow min-h-px min-w-px relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type CardProps = {
  additionalClassNames?: string;
};

function Card({ children, additionalClassNames = "" }: React.PropsWithChildren<CardProps>) {
  return (
    <div className={clsx("basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[160px] shrink-0 size-[16px]">
      <div aria-hidden="true" className="absolute border-2 border-[#0072ce] border-solid inset-0 pointer-events-none rounded-[160px]" />
    </div>
  );
}
type TitleTextProps = {
  text: string;
};

function TitleText({ text }: TitleTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Roboto:Regular',sans-serif] font-normal h-[12px] leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
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
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]">
      <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4297dd] text-[17px] text-nowrap">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex relative shrink-0", additionalClassNames)}>
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

export default function Content() {
  return (
    <div className="relative size-full" data-name="Content">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Content-section">
            <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0" data-name="Content-section">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[1116px]" data-name="Section-title">
                <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="left">
                  <div className="flex flex-row items-center self-stretch">
                    <Text text="Download Vouchers" additionalClassNames="h-full items-center" />
                  </div>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[16px] relative rounded-[4px] shrink-0 w-[1116px]" data-name="Section-body">
                <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content gray">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Download Vouchers">
                      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Generate Voucher-content1">
                        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                          <Card additionalClassNames="bg-[#f5f6fa]">
                            <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[42px]">
                              <IconText text="user-tie" />
                            </div>
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Wallet balance">
                              <TitleText text="Channel member name" />
                              <div className="content-stretch flex items-center relative shrink-0" data-name="Price">
                                <Text text="Cannel member code" additionalClassNames="items-start" />
                              </div>
                            </div>
                          </Card>
                          <Card additionalClassNames="bg-[#f5f6fa]">
                            <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[42px]">
                              <IconText text="" />
                            </div>
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Wallet balance">
                              <TitleText text="Wallet Balance (wallet name)" />
                              <div className="content-stretch flex items-center relative shrink-0" data-name="Price">
                                <Text text="511.00" additionalClassNames="items-start" />
                              </div>
                            </div>
                          </Card>
                        </div>
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Operator">
                          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#000b25] text-[14px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                            <p className="leading-[1.2]">Balance Manipulation</p>
                          </div>
                          <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Group">
                            <div className="basis-0 content-stretch flex gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
                              <Field>
                                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Radio button">
                                  <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
                                    <Icon />
                                  </div>
                                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    Increment
                                  </p>
                                </div>
                              </Field>
                              <Field>
                                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Radio button">
                                  <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
                                    <Icon />
                                  </div>
                                  <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    Deduct
                                  </p>
                                </div>
                              </Field>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Textfield">
                              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                                Denominations
                              </p>
                              <Textfield>
                                <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  Select denominations
                                </p>
                                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
                                  <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px] text-nowrap">angle-down</p>
                                </div>
                              </Textfield>
                            </div>
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Textfield">
                              <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Number of voucher `}</p>
                              <Textfield>
                                <p className="basis-0 font-['Roboto:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  Enter number of voucher
                                </p>
                              </Textfield>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                          <Card additionalClassNames="bg-[#f3f9fd]">
                            <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[42px]">
                              <IconText text="" />
                            </div>
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Wallet balance">
                              <TitleText text="Wallet Balance (OMR)" />
                              <div className="content-stretch flex items-center relative shrink-0" data-name="Price">
                                <Text text="511.00" additionalClassNames="items-start" />
                              </div>
                            </div>
                          </Card>
                          <div className="basis-0 grow h-[66px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Card">
                            <div className="flex flex-row items-center size-full">
                              <div className="size-full" />
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Action bar">
                          <div className="bg-[#0072ce] content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[4px] shrink-0" data-name="Button">
                            <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                              <p className="leading-[1.2]">Submit</p>
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
    </div>
  );
}