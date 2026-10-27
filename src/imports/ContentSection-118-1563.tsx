function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Plan Details
      </p>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="left">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Text />
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
          <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Enter the plan name
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
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Plan Name `}</p>
      <Textfield />
    </div>
  );
}

function Textfield2() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Enter weight
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>{` Weight (%)  `}</p>
      <Textfield2 />
    </div>
  );
}

function ContentContactInformation() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <Textfield1 />
      <Textfield3 />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px]">calendar</p>
    </div>
  );
}

function Textfield4() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Pick a date
          </p>
          <Icon />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Valid From
      </p>
      <Textfield4 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px]">calendar</p>
    </div>
  );
}

function Textfield6() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Pick a date
          </p>
          <Icon1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Valid To
      </p>
      <Textfield6 />
    </div>
  );
}

function ContentContactInformation1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <Textfield5 />
      <Textfield7 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px]">angle-down</p>
    </div>
  );
}

function Textfield8() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-0 relative size-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Select cycle plans
          </p>
          <Icon2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Textfield">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cycle Plan
      </p>
      <Textfield8 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Textfield9 />
    </div>
  );
}

function Frame5() {
  return <div className="h-[63px] shrink-0 w-[532px]" />;
}

function SectionBody() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Include Tax
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Commission in this plan will include 16% VAT.
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
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
    <div className="bg-[#0071cd] content-stretch flex h-[24px] items-center justify-end px-[4px] py-[2px] relative rounded-[160px] shrink-0 w-[40px]" data-name="Toggle">
      <Handle />
    </div>
  );
}

function Toggle1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Toggle">
      <Toggle />
    </div>
  );
}

function Field() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="field">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <Frame />
          <Toggle1 />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Activate Plan
      </p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Turn on to include this plan in commission calculations.
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Handle1() {
  return <div className="bg-white rounded-[160px] shrink-0 size-[16px]" data-name="Handle" />;
}

function Toggle2() {
  return (
    <div className="bg-[#0071cd] content-stretch flex h-[24px] items-center justify-end px-[4px] py-[2px] relative rounded-[160px] shrink-0 w-[40px]" data-name="Toggle">
      <Handle1 />
    </div>
  );
}

function Toggle3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Toggle">
      <Toggle2 />
    </div>
  );
}

function Field1() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch" data-name="field">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <Frame1 />
          <Toggle3 />
        </div>
      </div>
    </div>
  );
}

function SectionBody1() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <Field />
      <Field1 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Staged Payouts
      </p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Spread commission payouts across multiple stages
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Handle2() {
  return <div className="bg-white rounded-[160px] shrink-0 size-[16px]" data-name="Handle" />;
}

function Toggle4() {
  return (
    <div className="bg-[#0071cd] content-stretch flex h-[24px] items-center justify-end px-[4px] py-[2px] relative rounded-[160px] shrink-0 w-[40px]" data-name="Toggle">
      <Handle2 />
    </div>
  );
}

function Toggle5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Toggle">
      <Toggle4 />
    </div>
  );
}

function Field2() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="field">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <Frame2 />
          <Toggle5 />
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Detailed Calculation
      </p>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Commission will be calculated per row, in addition to the total.
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Handle3() {
  return <div className="bg-white rounded-[160px] shrink-0 size-[16px]" data-name="Handle" />;
}

function Toggle6() {
  return (
    <div className="bg-[#0071cd] content-stretch flex h-[24px] items-center justify-end px-[4px] py-[2px] relative rounded-[160px] shrink-0 w-[40px]" data-name="Toggle">
      <Handle3 />
    </div>
  );
}

function Toggle7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Toggle">
      <Toggle6 />
    </div>
  );
}

function Field3() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="field">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <Frame3 />
          <Toggle7 />
        </div>
      </div>
    </div>
  );
}

function SectionBody2() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <Field2 />
      <Field3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <SectionBody1 />
      <SectionBody2 />
    </div>
  );
}

function ContentBasicInformation() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Content - Basic Information">
      <ContentContactInformation />
      <ContentContactInformation1 />
      <SectionBody />
      <Frame6 />
    </div>
  );
}

function Line() {
  return <div className="bg-[rgba(0,11,37,0.57)] h-px shrink-0 w-[12px]" data-name="Line" />;
}

function Line1() {
  return <div className="bg-[rgba(0,11,37,0.57)] h-px shrink-0 w-[8px]" data-name="Line" />;
}

function Icon3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative" data-name="Icon">
      <Line />
      <Line1 />
    </div>
  );
}

function TextfArea() {
  return (
    <div className="bg-white h-[80px] relative rounded-[4px] shrink-0 w-full" data-name="TextfArea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start p-[12px] relative size-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Enter plan summary and description.....
          </p>
          <div className="absolute bottom-[0.17px] flex items-center justify-center right-[-0.31px] size-[11.314px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "63" } as React.CSSProperties}>
            <div className="flex-none rotate-[315deg]">
              <Icon3 />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Textfield">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Summary
      </p>
      <TextfArea />
    </div>
  );
}

function SectionBody3() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <ContentBasicInformation />
        <Textfield10 />
      </div>
    </div>
  );
}

export default function ContentSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full" data-name="Content-section">
      <SectionTitle />
      <SectionBody3 />
    </div>
  );
}