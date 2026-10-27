import React from "react";
import clsx from "clsx";
import svgPaths from "./svg-h1cypwa01f";

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative">{children}</div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[8px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="_Dot">{children}</g>
      </svg>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("relative rounded-[16px] shrink-0", additionalClassNames)}>
      <Wrapper4>{children}</Wrapper4>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">{children}</p>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">{children}</p>
      </div>
    </div>
  );
}

function WorkflowTestHelper() {
  return (
    <div className="absolute flex h-[97px] items-center justify-center left-0 top-0 w-[4px]">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="bg-[#16b364] h-[97px] rounded-br-[4px] rounded-tr-[4px] w-[4px]" data-name="Divider" />
      </div>
    </div>
  );
}
type ContainerText2Props = {
  text: string;
};

function ContainerText2({ text }: ContainerText2Props) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[20.83%_8.33%]">
      <div className="absolute inset-[-7.14%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 9.33333">
          <g id="Group">
            <path d={svgPaths.p288f3e00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d="M0.583333 3.5H12.25" id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return <Wrapper>{text}</Wrapper>;
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return <Wrapper1>{text}</Wrapper1>;
}
type TableStatusTextProps = {
  text: string;
};

function TableStatusText({ text }: TableStatusTextProps) {
  return (
    <Wrapper2 additionalClassNames="bg-[rgba(73,209,111,0.15)]">
      <Wrapper3>
        <circle cx="4.00001" cy="4" fill="var(--fill-0, #16B364)" id="Dot" r="3" />
      </Wrapper3>
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#16b364] text-[10px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </Wrapper2>
  );
}
type CardProps = {
  className?: string;
  type?: "Order" | "invoice" | "payment" | "Receipt" | "Order Highlighted" | "Invoice Highlighted" | "pAYMENT Highlighted" | "Receipt Highlighted";
};

function Card({ className, type = "Order" }: CardProps) {
  const isInvoiceOrInvoiceHighlighted = ["invoice", "Invoice Highlighted"].includes(type);
  const isInvoiceOrPaymentOrOrderHighlighted = ["invoice", "payment", "Order Highlighted"].includes(type);
  const isInvoiceOrReceiptOrInvoiceHighlightedOrReceiptHighlighted = ["invoice", "Receipt", "Invoice Highlighted", "Receipt Highlighted"].includes(type);
  const isOrderHighlighted = type === "Order Highlighted";
  const isPaymentOrPAymentHighlighted = ["payment", "pAYMENT Highlighted"].includes(type);
  const isReceiptHighlighted = type === "Receipt Highlighted";
  const isReceiptOrReceiptHighlighted = ["Receipt", "Receipt Highlighted"].includes(type);
  return (
    <div className={className || `relative rounded-bl-[4px] rounded-br-[8px] rounded-tl-[4px] rounded-tr-[8px] w-[200px] ${isReceiptHighlighted ? "bg-[#fefbe8]" : type === "pAYMENT Highlighted" ? "bg-[#edfcf2] h-[97px]" : type === "Invoice Highlighted" ? "bg-[#f4f3ff]" : isOrderHighlighted ? "bg-[#f4f4f5]" : type === "payment" ? "bg-white h-[97px]" : "bg-white"}`}>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-br-[8px] rounded-tl-[4px] rounded-tr-[8px]" />
      <div className={`content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[12px] relative ${isPaymentOrPAymentHighlighted ? "size-full" : "w-full"}`}>
        <div className="content-stretch flex flex-col gap-[8px] items-start pb-[4px] relative shrink-0 w-[168px]" data-name="Margin">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
                <div className="relative shrink-0 size-[14px]" data-name="SVG">
                  <div className={`absolute ${isReceiptOrReceiptHighlighted ? "inset-[8.32%_8.32%_8.34%_8.34%]" : isPaymentOrPAymentHighlighted ? "inset-[20.83%_8.33%]" : isInvoiceOrInvoiceHighlighted ? "inset-[8.33%_16.67%]" : "inset-[8.54%_7.96%_8.33%_8.54%]"}`} data-name="Group">
                    <div className={`absolute ${isReceiptOrReceiptHighlighted ? "inset-[-5%]" : isPaymentOrPAymentHighlighted ? "inset-[-7.14%_-5%]" : isInvoiceOrInvoiceHighlighted ? "inset-[-5%_-6.25%]" : "inset-[-5.01%_-4.99%]"}`}>
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={isReceiptOrReceiptHighlighted ? "0 0 12.834 12.8341" : isPaymentOrPAymentHighlighted ? "0 0 12.8333 9.33333" : isInvoiceOrInvoiceHighlighted ? "0 0 10.5 12.8333" : "0 0 12.8567 12.8042"}>
                        <g id="Group">
                          <path d={isReceiptOrReceiptHighlighted ? svgPaths.p32ad00 : isPaymentOrPAymentHighlighted ? svgPaths.p288f3e00 : isInvoiceOrInvoiceHighlighted ? svgPaths.p35668200 : svgPaths.p38e20f80} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                          <path d={isReceiptOrReceiptHighlighted ? svgPaths.p60f37c0 : isPaymentOrPAymentHighlighted ? "M0.583333 3.5H12.25" : isInvoiceOrInvoiceHighlighted ? svgPaths.p9f58380 : svgPaths.p2416d0d8} id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                          {["Order", "Order Highlighted"].includes(type) && <path d={svgPaths.p9d2f580} id="Vector_3" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />}
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] uppercase whitespace-nowrap">
                <p className="leading-[normal]">{isReceiptOrReceiptHighlighted ? "Receipt" : isPaymentOrPAymentHighlighted ? "Payment" : isInvoiceOrInvoiceHighlighted ? "Invoice" : isOrderHighlighted ? "Order" : "Order"}</p>
              </div>
            </div>
            <div className={`relative rounded-[16px] shrink-0 ${isReceiptOrReceiptHighlighted ? "bg-[rgba(255,193,7,0.15)]" : "bg-[rgba(73,209,111,0.15)]"}`} data-name="Table Status">
              <Wrapper4>
                <Wrapper3>
                  <circle cx="4.00001" cy="4" fill={isReceiptOrReceiptHighlighted ? "var(--fill-0, #EF6820)" : "var(--fill-0, #16B364)"} id="Dot" r="3" />
                </Wrapper3>
                <p className={`font-["Roboto:Medium",sans-serif] font-medium leading-[1.2] relative shrink-0 text-center ${isReceiptHighlighted ? "text-[#ef6820] text-[12px]" : type === "Receipt" ? "text-[#ef6820] text-[10px]" : isInvoiceOrPaymentOrOrderHighlighted ? "text-[#16b364] text-[10px]" : "text-[#16b364] text-[12px]"}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                  {isReceiptOrReceiptHighlighted ? "Pending" : isInvoiceOrPaymentOrOrderHighlighted ? "Done" : ["Invoice Highlighted", "pAYMENT Highlighted"].includes(type) ? "Active" : "Active"}
                </p>
              </Wrapper4>
            </div>
          </div>
          <Wrapper1>{isReceiptOrReceiptHighlighted ? "RCT-1092" : isPaymentOrPAymentHighlighted ? "Down Payment" : isInvoiceOrInvoiceHighlighted ? "INV-2023-001" : isOrderHighlighted ? "Order #001" : "Order #001"}</Wrapper1>
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
            <Wrapper>{isReceiptOrReceiptHighlighted ? "Oct 26, 2023" : ["invoice", "payment", "Order Highlighted", "Invoice Highlighted", "pAYMENT Highlighted"].includes(type) ? "Oct 24, 2023" : "Oct 24, 2023"}</Wrapper>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
              <div className={`flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] ${isPaymentOrPAymentHighlighted ? 'font-["Inter:Regular",sans-serif] not-italic whitespace-nowrap' : isInvoiceOrReceiptOrInvoiceHighlightedOrReceiptHighlighted ? 'font-["Roboto:Regular",sans-serif] whitespace-nowrap' : 'font-["Inter:Regular",sans-serif] h-[15px] not-italic w-[56.05px]'}`} style={isInvoiceOrReceiptOrInvoiceHighlightedOrReceiptHighlighted ? { fontVariationSettings: "'wdth' 100" } : undefined}>
                <p className={isPaymentOrPAymentHighlighted ? "leading-[normal]" : isInvoiceOrReceiptOrInvoiceHighlightedOrReceiptHighlighted ? "leading-[1.2]" : "leading-[normal] whitespace-pre-wrap"}>{isReceiptOrReceiptHighlighted ? "Sent" : isPaymentOrPAymentHighlighted ? "$500.00" : isInvoiceOrInvoiceHighlighted ? "Issued" : isOrderHighlighted ? "$1,250.00" : "$1,250.00"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`absolute flex items-center justify-center left-0 top-0 w-[4px] ${isReceiptOrReceiptHighlighted ? "h-[95px]" : "h-[97px]"}`}>
          <div className="-scale-y-100 flex-none rotate-180">
            <div className={`rounded-br-[4px] rounded-tr-[4px] w-[4px] ${isReceiptOrReceiptHighlighted ? "bg-[#fac515] h-[95px]" : isPaymentOrPAymentHighlighted ? "bg-[#16b364] h-[97px]" : isInvoiceOrInvoiceHighlighted ? "bg-[#6938ef] h-[97px]" : "bg-[#000000] h-[97px]"}`} data-name="Divider" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MainContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[20px] pt-[16px] px-[16px] relative size-full" data-name="Main Container">
      <div className="content-stretch flex flex-[1_0_0] items-start justify-center mb-[-4px] min-h-px min-w-px overflow-clip relative rounded-[4px]" data-name="Container">
        <div className="bg-[#f8fafc] h-[583px] max-h-[600px] overflow-clip relative shrink-0 w-[1100px]" data-name="Workflow - test">
          <div className="absolute bg-[#f4f4f5] inset-[7.89%_78.09%_75.64%_3.73%] rounded-bl-[4px] rounded-br-[8px] rounded-tl-[4px] rounded-tr-[8px]" data-name="Card">
            <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-br-[8px] rounded-tl-[4px] rounded-tr-[8px]" />
            <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[12px] relative size-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start pb-[4px] relative shrink-0 w-[168px]" data-name="Margin">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
                      <div className="relative shrink-0 size-[14px]" data-name="SVG">
                        <div className="absolute inset-[8.54%_7.96%_8.33%_8.54%]" data-name="Group">
                          <div className="absolute inset-[-5.01%_-4.99%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8567 12.8042">
                              <g id="Group">
                                <path d={svgPaths.p38e20f80} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                                <path d={svgPaths.p2416d0d8} id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                                <path d={svgPaths.p9d2f580} id="Vector_3" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] uppercase whitespace-nowrap">
                      <p className="leading-[normal]">Order</p>
                    </div>
                  </div>
                  <TableStatusText text="Done" />
                </div>
                <ContainerText text="Order #001" />
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                  <ContainerText1 text="Oct 24, 2023" />
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] w-[56.05px]">
                      <p className="leading-[normal] whitespace-pre-wrap">$1,250.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex h-[97px] items-center justify-center left-0 top-0 w-[4px]">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="bg-[#000000] h-[97px] rounded-br-[4px] rounded-tr-[4px] w-[4px]" data-name="Divider" />
                </div>
              </div>
            </div>
          </div>
          <Card className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-[calc(50%-155.77px)] rounded-bl-[4px] rounded-br-[8px] rounded-tl-[4px] rounded-tr-[8px] top-[calc(50%-198px)]" type="invoice" />
          <div className="-translate-x-1/2 absolute bg-white bottom-[75.47%] left-[calc(50%+141px)] rounded-bl-[4px] rounded-br-[8px] rounded-tl-[4px] rounded-tr-[8px] top-[7.89%] w-[200px]" data-name="Card">
            <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-br-[8px] rounded-tl-[4px] rounded-tr-[8px]" />
            <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[12px] relative size-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start pb-[4px] relative shrink-0 w-[168px]" data-name="Margin">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
                      <div className="relative shrink-0 size-[14px]" data-name="SVG">
                        <Group />
                      </div>
                    </div>
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] uppercase whitespace-nowrap">
                      <p className="leading-[normal]">Payment</p>
                    </div>
                  </div>
                  <Wrapper2 additionalClassNames="bg-[rgba(255,193,7,0.15)]">
                    <Wrapper3>
                      <circle cx="4.00001" cy="4" fill="var(--fill-0, #EF6820)" id="Dot" r="3" />
                    </Wrapper3>
                    <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#ef6820] text-[10px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Unpaid
                    </p>
                  </Wrapper2>
                </div>
                <ContainerText text="Down Payment" />
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                  <ContainerText1 text="Oct 24, 2023" />
                  <ContainerText2 text="$500.00" />
                </div>
              </div>
              <WorkflowTestHelper />
            </div>
          </div>
          <div className="-translate-y-1/2 absolute bg-white left-[53.73%] right-[28.09%] rounded-bl-[4px] rounded-br-[8px] rounded-tl-[4px] rounded-tr-[8px] top-[calc(50%-19.5px)]" data-name="Card">
            <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-br-[8px] rounded-tl-[4px] rounded-tr-[8px]" />
            <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[12px] relative w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start pb-[4px] relative shrink-0 w-[168px]" data-name="Margin">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
                      <div className="relative shrink-0 size-[14px]" data-name="SVG">
                        <Group />
                      </div>
                    </div>
                    <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] uppercase whitespace-nowrap">
                      <p className="leading-[normal]">Payment</p>
                    </div>
                  </div>
                  <TableStatusText text="Paid" />
                </div>
                <ContainerText text="Down Payment" />
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                  <ContainerText1 text="Oct 24, 2023" />
                  <ContainerText2 text="$500.00" />
                </div>
              </div>
              <WorkflowTestHelper />
            </div>
          </div>
          <Card className="-translate-y-1/2 absolute bg-white left-[78.64%] right-[3.18%] rounded-bl-[4px] rounded-br-[8px] rounded-tl-[4px] rounded-tr-[8px] top-[calc(50%-20px)]" type="Receipt" />
          <Card className="-translate-y-1/2 absolute bg-white left-[78.64%] right-[3.18%] rounded-bl-[4px] rounded-br-[8px] rounded-tl-[4px] rounded-tr-[8px] top-[calc(50%+156px)]" type="Receipt" />
          <Card className="-translate-y-1/2 absolute bg-white left-[78.64%] right-[3.18%] rounded-bl-[4px] rounded-br-[8px] rounded-tl-[4px] rounded-tr-[8px] top-[calc(50%-198px)]" type="Receipt" />
          <div className="absolute inset-[16.12%_73.27%_83.88%_21.91%]">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 1">
                <path d="M0 0.5H53" id="Vector 16" stroke="var(--stroke-0, #D6D6D6)" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[16.64%_46.26%_52.66%_44.91%]">
            <div className="absolute inset-[-0.28%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97.1778 180">
                <path d={svgPaths.p1d329f60} id="Vector 17" stroke="var(--stroke-0, #D6D6D6)" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[17.07%_21.36%_31.56%_63.03%]">
            <div className="absolute inset-[-0.17%_-0.29%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 172.66 300.5">
                <path d={svgPaths.p15a53000} id="Vector 18" stroke="var(--stroke-0, #D6D6D6)" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="absolute contents left-[1096px] top-[7px]" data-name="Line Container">
            <div className="absolute bg-[#d9d9d9] h-[346px] left-[1096px] rounded-[4px] top-[7px] w-[4px]" data-name="Line" />
            <div className="absolute bg-[#000000] h-[231.955px] left-[1096px] rounded-[4px] top-[121.04px] w-[4px]" data-name="Line" />
          </div>
        </div>
      </div>
      <div className="flex h-[4px] items-center justify-center leading-[0] mb-[-4px] relative shrink-0 w-[1075.5px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="Line Container">
            <div className="bg-[#d9d9d9] col-1 h-[1060px] ml-0 mt-0 rounded-[4px] row-1 w-[4px]" data-name="Line" />
            <div className="bg-[#000000] col-1 h-[728px] ml-0 mt-[347.5px] rounded-[4px] row-1 w-[4px]" data-name="Line" />
          </div>
        </div>
      </div>
    </div>
  );
}