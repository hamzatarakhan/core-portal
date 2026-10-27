import svgPaths from "./svg-amttgssrsm";

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0072ce] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0072ce] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">Action</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0072ce] content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0072ce] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">Action</p>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="CTA">
      <Button />
      <Button1 />
    </div>
  );
}

function Segmented() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] h-[33px] items-center justify-center left-0 px-[24px] py-[8px] rounded-[4px] top-0" data-name="Segmented">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#4297dd] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Submitted
      </p>
    </div>
  );
}

function SegmentedControlItem() {
  return (
    <div className="content-stretch flex flex-col h-[33px] items-start relative shrink-0 w-[113px]" data-name="Segmented Control Item">
      <Segmented />
      <div className="absolute left-[97px] size-[16px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d="M0 0H16V16L7.5 7.5L0 0Z" fill="var(--fill-0, #E1E1E1)" id="Rectangle 20" />
        </svg>
      </div>
      <div className="absolute flex h-[17px] items-center justify-center left-[97px] top-[16px] w-[16px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[17px] relative w-[16px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17">
              <path d="M0 0H16V17L7.5 7.96875L0 0Z" fill="var(--fill-0, #E1E1E1)" id="Rectangle 21" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Segmented1() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center justify-center px-[24px] py-[8px] relative rounded-[4px] shrink-0" data-name="Segmented">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        To Approve
      </p>
    </div>
  );
}

function Segmented2() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center justify-center px-[24px] py-[8px] relative rounded-[4px] shrink-0" data-name="Segmented">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Approved
      </p>
    </div>
  );
}

function Segmented3() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center justify-center px-[24px] py-[8px] relative rounded-[4px] shrink-0" data-name="Segmented">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Active
      </p>
    </div>
  );
}

function Segmented4() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center justify-center px-[24px] py-[8px] relative rounded-[4px] shrink-0" data-name="Segmented">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Suspended
      </p>
    </div>
  );
}

function Segmented5() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center justify-center px-[24px] py-[8px] relative rounded-[4px] shrink-0" data-name="Segmented">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Terminated
      </p>
    </div>
  );
}

function Segmented6() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center justify-center px-[24px] py-[8px] relative rounded-[4px] shrink-0" data-name="Segmented">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Resigned
      </p>
    </div>
  );
}

function SegmentedControl() {
  return (
    <div className="bg-[#e1e1e1] content-stretch flex gap-[2px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Segmented control">
      <SegmentedControlItem />
      <div className="flex flex-row items-center self-stretch">
        <Segmented1 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Segmented2 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Segmented3 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Segmented4 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Segmented5 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Segmented6 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Group">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
        <Cta />
        <SegmentedControl />
      </div>
    </div>
  );
}

function SmartButtonsSection() {
  return (
    <div className="bg-white content-stretch flex items-start relative rounded-[4px] shrink-0 w-full" data-name="Smart Buttons Section">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_3px_20px_0px_rgba(0,0,0,0.05)]" />
      <Group />
    </div>
  );
}

function Circle() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="circle">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center w-full">
        <p className="leading-[normal] whitespace-pre-wrap">circle</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#0072ce] content-stretch flex items-center justify-center left-[4px] overflow-clip px-[4px] py-[2px] rounded-[160px] top-[-8px]" data-name="Badge">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">16</p>
      </div>
    </div>
  );
}

function SmartButton() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[4px]" data-name="Smart button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Circle />
          <div className="flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[14px] text-[rgba(0,11,37,0.57)] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[1.2] overflow-hidden">Smart Button Name</p>
          </div>
          <Badge />
        </div>
      </div>
    </div>
  );
}

function Circle1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="circle">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center w-full">
        <p className="leading-[normal] whitespace-pre-wrap">circle</p>
      </div>
    </div>
  );
}

function SmartButton1() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[4px]" data-name="Smart button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Circle1 />
          <div className="flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[14px] text-[rgba(0,11,37,0.57)] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[1.2] overflow-hidden">Smart Button Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Circle2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="circle">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center w-full">
        <p className="leading-[normal] whitespace-pre-wrap">circle</p>
      </div>
    </div>
  );
}

function SmartButton2() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[4px]" data-name="Smart button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Circle2 />
          <div className="flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[14px] text-[rgba(0,11,37,0.57)] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[1.2] overflow-hidden">Smart Button Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Circle3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="circle">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center w-full">
        <p className="leading-[normal] whitespace-pre-wrap">circle</p>
      </div>
    </div>
  );
}

function SmartButton3() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[4px]" data-name="Smart button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Circle3 />
          <div className="flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[14px] text-[rgba(0,11,37,0.57)] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[1.2] overflow-hidden">Smart Button Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconChangeNumber() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon - Change number">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] text-center whitespace-nowrap">
        <p className="leading-[normal]">circle</p>
      </div>
    </div>
  );
}

function SmartButton4() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[4px]" data-name="Smart button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <IconChangeNumber />
          <div className="flex flex-[1_0_0] flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[14px] text-[rgba(0,11,37,0.57)] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            <p className="leading-[1.2] overflow-hidden">Smart Button Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[4px] rounded-tl-[4px]" data-name="Group">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-l border-solid border-t inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
        <SmartButton />
        <SmartButton1 />
        <SmartButton2 />
        <SmartButton3 />
        <SmartButton4 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex h-full items-center justify-center relative rounded-[4px] shrink-0 w-[48px]" data-name="Button">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,11,37,0.64)] text-center whitespace-nowrap">
        <p className="leading-[normal]">angle-down</p>
      </div>
    </div>
  );
}

function DropdpwonSmartButtons() {
  return (
    <div className="content-stretch flex h-[72px] items-start relative rounded-br-[4px] rounded-tr-[4px] shrink-0" data-name="Dropdpwon - Smart buttons">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <Button2 />
    </div>
  );
}

function SmartButtonsSection1() {
  return (
    <div className="bg-white content-stretch flex items-start relative rounded-[4px] shadow-[0px_3px_20px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Smart Buttons Section">
      <Group1 />
      <DropdpwonSmartButtons />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Channel Member Name
      </p>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center min-h-px min-w-px relative" data-name="left">
      <Text />
    </div>
  );
}

function Tagchips() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex gap-[4px] h-full items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tagchips">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4297dd] text-[13px] text-center"></p>
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4297dd] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]" dir="auto">
          Operator
        </p>
      </div>
    </div>
  );
}

function WidgetTitleContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Widget Title Container">
      <Left />
      <div className="flex flex-row items-center self-stretch">
        <Tagchips />
      </div>
    </div>
  );
}

function WidgetTitle() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Widget-Title">
      <WidgetTitleContainer />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Code
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5456589
      </p>
    </div>
  );
}

function Field() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="field">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[12px] relative w-full">
          <Text1 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Reporting to
      </p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Omer Khaled
      </p>
    </div>
  );
}

function Field1() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="field">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[12px] relative w-full">
          <Text3 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Phone Number `}</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        07789565
      </p>
    </div>
  );
}

function Field2() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="field">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[12px] relative w-full">
          <Text5 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Email
      </p>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        654165444
      </p>
    </div>
  );
}

function Field3() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="field">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[12px] relative w-full">
          <Text7 />
          <Text8 />
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

function WidgetChannelMember() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Widget-Channel member">
      <Fileds />
    </div>
  );
}

function Widget() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[4px] shrink-0 w-[1132px]" data-name="Widget">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <WidgetTitle />
      <WidgetChannelMember />
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Area Manager
      </p>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center min-h-px min-w-px relative" data-name="left">
      <Text9 />
    </div>
  );
}

function WidgetTitleContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Widget Title Container">
      <Left1 />
    </div>
  );
}

function WidgetTitle1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Widget-Title">
      <WidgetTitleContainer1 />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Dealer Name
      </p>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">
        <p className="leading-[normal]">phone</p>
      </div>
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5456589
      </p>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">
        <p className="leading-[normal]"></p>
      </div>
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5456589
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[14px] w-full" data-name="Container">
      <Text11 />
      <Text12 />
    </div>
  );
}

function Field4() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[4px] shrink-0 w-full" data-name="field">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center pb-[16px] pt-[8px] px-[16px] relative w-full">
          <Text10 />
          <Container />
        </div>
      </div>
    </div>
  );
}

function WidgetChannelMember1() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Widget-Channel member">
      <Field4 />
    </div>
  );
}

function Widget1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Widget">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <WidgetTitle1 />
        <WidgetChannelMember1 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Dealer Support
      </p>
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center min-h-px min-w-px relative" data-name="left">
      <Text13 />
    </div>
  );
}

function WidgetTitleContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Widget Title Container">
      <Left2 />
    </div>
  );
}

function WidgetTitle2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Widget-Title">
      <WidgetTitleContainer2 />
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Dealer Name
      </p>
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">
        <p className="leading-[normal]">phone</p>
      </div>
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5456589
      </p>
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">
        <p className="leading-[normal]"></p>
      </div>
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5456589
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 text-[14px] w-full" data-name="Container">
      <Text15 />
      <Text16 />
    </div>
  );
}

function Field5() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[4px] shrink-0 w-full" data-name="field">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center pb-[16px] pt-[8px] px-[16px] relative w-full">
          <Text14 />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function WidgetChannelMember2() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Widget-Channel member">
      <Field5 />
    </div>
  );
}

function Widget2() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Widget">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <WidgetTitle2 />
        <WidgetChannelMember2 />
      </div>
    </div>
  );
}

function WidgetColumn() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Widget Column">
      <Widget1 />
      <Widget2 />
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`E - Wallet Account `}</p>
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center min-h-px min-w-px relative" data-name="left">
      <Text17 />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0072ce] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">View all</p>
      </div>
    </div>
  );
}

function WidgetTitleContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Widget Title Container">
      <Left3 />
      <Button3 />
    </div>
  );
}

function WidgetTitle3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Widget-Title">
      <WidgetTitleContainer3 />
    </div>
  );
}

function Tagchips1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[160px] shrink-0" data-name="Tagchips">
      <div aria-hidden="true" className="absolute border border-[#0072ce] border-solid inset-0 pointer-events-none rounded-[160px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0072ce] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">Label</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[1.2] min-h-px min-w-px relative text-[#000b25] text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Wallet
      </p>
      <Tagchips1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#e6f7f7] content-stretch flex flex-col items-end p-[4px] relative rounded-[2px] shrink-0" data-name="Icon">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#00b0b2] text-[12px] w-full whitespace-pre-wrap"></p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Icon />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        123.333 OMR
      </p>
    </div>
  );
}

function Col1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="col">
      <Container4 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Ooredoo
      </p>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Manager name
      </p>
    </div>
  );
}

function Container3() {
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="col">
      <Label />
      <Container3 />
    </div>
  );
}

function Item() {
  return (
    <div className="bg-[#f3f9fd] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative w-full">
          <Col />
        </div>
      </div>
    </div>
  );
}

function Tagchips2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[160px] shrink-0" data-name="Tagchips">
      <div aria-hidden="true" className="absolute border border-[#0072ce] border-solid inset-0 pointer-events-none rounded-[160px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0072ce] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">Label</p>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[1.2] min-h-px min-w-px relative text-[#000b25] text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Wallet
      </p>
      <Tagchips2 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#e6f7f7] content-stretch flex flex-col items-end p-[4px] relative rounded-[2px] shrink-0" data-name="Icon">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#00b0b2] text-[12px] w-full whitespace-pre-wrap"></p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Icon1 />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        123.333 OMR
      </p>
    </div>
  );
}

function Col3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="col">
      <Container6 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Ooredoo
      </p>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Manager name
      </p>
    </div>
  );
}

function Container5() {
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="col">
      <Label3 />
      <Container5 />
    </div>
  );
}

function Item1() {
  return (
    <div className="bg-[#f3f9fd] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative w-full">
          <Col2 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Item />
      <Item1 />
    </div>
  );
}

function Tagchips3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[160px] shrink-0" data-name="Tagchips">
      <div aria-hidden="true" className="absolute border border-[#0072ce] border-solid inset-0 pointer-events-none rounded-[160px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0072ce] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">Label</p>
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[1.2] min-h-px min-w-px relative text-[#000b25] text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Wallet
      </p>
      <Tagchips3 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#e6f7f7] content-stretch flex flex-col items-end p-[4px] relative rounded-[2px] shrink-0" data-name="Icon">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#00b0b2] text-[12px] w-full whitespace-pre-wrap"></p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Icon2 />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        123.333 OMR
      </p>
    </div>
  );
}

function Col5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="col">
      <Container9 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Ooredoo
      </p>
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Manager name
      </p>
    </div>
  );
}

function Container8() {
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="col">
      <Label6 />
      <Container8 />
    </div>
  );
}

function Item2() {
  return (
    <div className="bg-[#f3f9fd] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative w-full">
          <Col4 />
        </div>
      </div>
    </div>
  );
}

function Tagchips4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[160px] shrink-0" data-name="Tagchips">
      <div aria-hidden="true" className="absolute border border-[#0072ce] border-solid inset-0 pointer-events-none rounded-[160px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0072ce] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">Label</p>
      </div>
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[1.2] min-h-px min-w-px relative text-[#000b25] text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Wallet
      </p>
      <Tagchips4 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="bg-[#e6f7f7] content-stretch flex flex-col items-end p-[4px] relative rounded-[2px] shrink-0" data-name="Icon">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#00b0b2] text-[12px] w-full whitespace-pre-wrap"></p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Icon3 />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        123.333 OMR
      </p>
    </div>
  );
}

function Col7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="col">
      <Container11 />
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Ooredoo
      </p>
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Manager name
      </p>
    </div>
  );
}

function Container10() {
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="col">
      <Label9 />
      <Container10 />
    </div>
  );
}

function Item3() {
  return (
    <div className="bg-[#f3f9fd] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative w-full">
          <Col6 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Item2 />
      <Item3 />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-start relative shrink-0 w-[334px]" data-name="Card">
      <Container2 />
      <Container7 />
    </div>
  );
}

function WidgetEwalletAccount() {
  return (
    <div className="content-stretch flex items-center relative rounded-[4px] shrink-0 w-full" data-name="Widget- Ewallet account">
      <div className="flex flex-row items-center self-stretch">
        <Card />
      </div>
    </div>
  );
}

function Widget3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Widget">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <WidgetTitle3 />
        <WidgetEwalletAccount />
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Latest Commission Details  `}</p>
    </div>
  );
}

function Left4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center min-h-px min-w-px relative" data-name="left">
      <Text18 />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0072ce] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">History</p>
      </div>
    </div>
  );
}

function WidgetTitleContainer4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Widget Title Container">
      <Left4 />
      <Button4 />
    </div>
  );
}

function WidgetTitle4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Widget-Title">
      <WidgetTitleContainer4 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Title">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Unpaid Commission
      </p>
    </div>
  );
}

function Price1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="price">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#b93815] text-[19px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        658.56
      </p>
    </div>
  );
}

function Price2() {
  return (
    <div className="content-stretch flex items-end justify-center pb-px relative shrink-0" data-name="price">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#b93815] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative" data-name="Wallet balance">
      <Title />
      <Price />
    </div>
  );
}

function Group8() {
  return (
    <div className="col-1 h-[14.663px] ml-0 mt-[5.88%] relative row-1 w-[36px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 14.6634">
        <g id="Group">
          <path d={svgPaths.p1cdb5500} fill="var(--fill-0, #FABA97)" id="Vector" />
          <path d={svgPaths.p1b0e9580} fill="var(--fill-0, #DB8F72)" id="Vector_2" />
          <path d={svgPaths.p4531e00} fill="var(--fill-0, #5E514C)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="col-1 h-[14.665px] ml-0 mt-0 relative row-1 w-[36px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 14.6653">
        <g id="Group">
          <path d={svgPaths.p32bb0500} fill="var(--fill-0, #FABA97)" id="Vector" />
          <path d={svgPaths.p2dcb9930} fill="var(--fill-0, #EDA988)" id="Vector_2" />
          <path d={svgPaths.p5620780} fill="var(--fill-0, #7B6F69)" id="Vector_3" />
          <path d={svgPaths.p134c5100} fill="var(--fill-0, #71645E)" id="Vector_4" />
          <g id="Group_2">
            <path d={svgPaths.p211bb300} fill="var(--fill-0, white)" id="Vector_5" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p3dd0900} fill="var(--fill-0, #F3F2FD)" id="Vector_6" />
          </g>
          <g id="Group_4">
            <path d={svgPaths.pbbc5040} fill="var(--fill-0, #EDA988)" id="Vector_7" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group8 />
      <Group9 />
    </div>
  );
}

function Group6() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group7 />
    </div>
  );
}

function Group5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group6 />
    </div>
  );
}

function Group11() {
  return (
    <div className="col-1 h-[2.579px] ml-[0.41%] mt-0 relative row-1 w-[0.539px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.539214 2.57922">
        <g id="Group">
          <path d={svgPaths.p3fb8b470} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="col-1 h-[1.084px] ml-0 mt-[73.27%] relative row-1 w-[0.535px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.535014 1.08386">
        <g id="Group">
          <path d={svgPaths.p1da07d80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.11%] mt-[41.79%] opacity-20 place-items-start relative row-1" data-name="Group">
      <Group11 />
      <Group12 />
    </div>
  );
}

function Group4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group5 />
      <Group10 />
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[51.14%] place-items-start relative row-1" data-name="Group">
      <Group4 />
    </div>
  );
}

function Group14() {
  return (
    <div className="col-1 h-[19.125px] ml-0 mt-0 relative row-1 w-[25.828px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.8277 19.1247">
        <g id="Group">
          <path d={svgPaths.p2034f600} fill="var(--fill-0, #92B62B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="col-1 h-[19.124px] ml-0 mt-0 relative row-1 w-[25.828px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.8277 19.1236">
        <g id="Group">
          <path d={svgPaths.p22c6f400} fill="var(--fill-0, #92B62B)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p98d5d00} fill="var(--fill-0, #7B9319)" id="Vector_2" />
            <path d={svgPaths.p1e54d280} fill="var(--fill-0, #89A523)" id="Vector_3" />
            <path d={svgPaths.p26391cf0} fill="var(--fill-0, #89A523)" id="Vector_4" />
            <path d={svgPaths.p6876a80} fill="var(--fill-0, #7B9319)" id="Vector_5" />
            <path d={svgPaths.p28723570} fill="var(--fill-0, #89A523)" id="Vector_6" />
            <path d={svgPaths.p2317a2c0} fill="var(--fill-0, #7B9319)" id="Vector_7" />
          </g>
          <path d={svgPaths.p3c33cfc0} fill="var(--fill-0, #89A523)" id="Vector_8" />
          <path d={svgPaths.pd3a2380} fill="var(--fill-0, #7B9319)" id="Vector_9" />
          <g id="Group_3">
            <path d={svgPaths.pad7d280} fill="var(--fill-0, #92B62B)" id="Vector_10" />
            <path d={svgPaths.p28210cf1} fill="var(--fill-0, #92B62B)" id="Vector_11" />
            <path d={svgPaths.p2971f200} fill="var(--fill-0, #92B62B)" id="Vector_12" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="col-1 h-[1.329px] ml-[26.04%] mt-0 relative row-1 w-[2.751px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.75052 1.32899">
        <g id="Group">
          <path d={svgPaths.p10429900} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="col-1 ml-0 mt-[62.88%] relative row-1 size-[0.973px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.972895 0.973429">
        <g id="Group">
          <path d={svgPaths.p11de200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[21.2%] mt-[33.12%] opacity-20 place-items-start relative row-1" data-name="Group">
      <Group18 />
      <Group19 />
    </div>
  );
}

function Group15() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Group16 />
      <div className="col-1 h-[1.909px] ml-[8.79px] mt-px relative row-1 w-[8.475px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.47453 1.90944">
          <path d={svgPaths.p1c564f00} fill="var(--fill-0, #EABE03)" id="Vector" />
        </svg>
      </div>
      <Group17 />
    </div>
  );
}

function Group13() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[27.15%] mt-0 place-items-start relative row-1" data-name="Group">
      <Group14 />
      <Group15 />
      <div className="col-1 h-[16.069px] ml-[10.61px] mt-[1.97px] relative row-1 w-[6.653px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.65329 16.069">
          <path d={svgPaths.p2e93f980} fill="var(--fill-0, #FFE03C)" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[15.478px] ml-[10.61px] mt-[2.56px] relative row-1 w-[6.654px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.6536 15.4775">
          <path d={svgPaths.p733f500} fill="var(--fill-0, #F9D12B)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="col-1 h-[3.257px] ml-0 mt-0 relative row-1 w-[0.677px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.676947 3.25737">
        <g id="Group">
          <path d={svgPaths.p39147380} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="col-1 h-[1.536px] ml-[3.31%] mt-[71.54%] relative row-1 w-[0.667px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.666759 1.5364">
        <g id="Group">
          <path d={svgPaths.p54d2980} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[70.49%] mt-[26.45%] opacity-30 place-items-start relative row-1" data-name="Group">
      <Group21 />
      <Group22 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <Group3 />
      <Group13 />
      <Group20 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#f8fafc] h-[78px] relative rounded-[4px] shrink-0 w-full" data-name="Card">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative size-full">
          <WalletBalance />
          <Group2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Segmented7() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Segmented">
      <div aria-hidden="true" className="absolute border border-[#0072ce] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative w-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#0072ce] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Plan 1 `}</p>
        </div>
      </div>
    </div>
  );
}

function Segmented8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Segmented">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Plan 2
          </p>
        </div>
      </div>
    </div>
  );
}

function Segmented9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Segmented">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Plan 3
          </p>
        </div>
      </div>
    </div>
  );
}

function SegmentedControl1() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[4px] shrink-0 w-full" data-name="Segmented control">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[2px] items-center p-[4px] relative w-full">
          <Segmented7 />
          <Segmented8 />
          <Segmented9 />
        </div>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Target
      </p>
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7a5af8] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[normal]"></p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#7a5af8] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        536 OMR
      </p>
    </div>
  );
}

function Field6() {
  return (
    <div className="bg-[#fafaff] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="field">
      <div aria-hidden="true" className="absolute border border-[#ebe9fe] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-[8px] py-[12px] relative size-full">
          <Text19 />
          <Text20 />
        </div>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Achieved %
      </p>
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#087443] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[normal]"></p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#087443] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        65%
      </p>
    </div>
  );
}

function Field7() {
  return (
    <div className="bg-[#edfcf2] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="field">
      <div aria-hidden="true" className="absolute border border-[#d3f8df] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-[8px] py-[12px] relative size-full">
          <Text21 />
          <Text22 />
        </div>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Commission `}</p>
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0072ce] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[normal]"></p>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#0072ce] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5369 OMR
      </p>
    </div>
  );
}

function Field8() {
  return (
    <div className="bg-[#f3f9fd] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="field">
      <div aria-hidden="true" className="absolute border border-[#dbedf8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-[8px] py-[12px] relative size-full">
          <Text23 />
          <Text24 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px relative w-full" data-name="Container">
      <Field6 />
      <Field7 />
      <Field8 />
    </div>
  );
}

function Card3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative w-full" data-name="Card">
      <SegmentedControl1 />
      <Container12 />
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

function WidgetLatestCommissionDetails() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Widget-Latest Commission Details">
      <Card1 />
    </div>
  );
}

function Widget4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Widget">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <WidgetTitle4 />
        <WidgetLatestCommissionDetails />
      </div>
    </div>
  );
}

function WidgetContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Widget Container">
      <WidgetColumn />
      <Widget3 />
      <Widget4 />
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Channel Member Information
      </p>
    </div>
  );
}

function Left5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="left">
      <div className="flex flex-row items-center self-stretch">
        <Text25 />
      </div>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Section-title">
      <Left5 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Group Name
      </p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-h-px min-w-px py-[8px] relative" data-name="Container">
      <Container14 />
    </div>
  );
}

function SubsectionTitle() {
  return (
    <div className="bg-[#f8fafc] relative shrink-0 w-full" data-name="Subsection-Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pr-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
              <div className="flex-none h-full rotate-90">
                <div className="h-full relative w-[33px]">
                  <div className="absolute inset-[-1px_-3.03%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 2">
                      <path d="M1 1H34" id="Line 1" stroke="var(--stroke-0, #8DC1EC)" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Container13 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Textfield1() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-px relative text-[#000b25] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            5456589
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Code
      </p>
      <Textfield1 />
    </div>
  );
}

function Textfield3() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-px relative text-[#000b25] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Reporting to
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Reporting to
      </p>
      <Textfield3 />
    </div>
  );
}

function Textfield5() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-px relative text-[#000b25] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Phone Number `}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Phone Number `}</p>
      <Textfield5 />
    </div>
  );
}

function ContentContactInformation() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <Textfield />
      <Textfield2 />
      <Textfield4 />
    </div>
  );
}

function ChannelMemberInformation() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Channel Member Information">
      <ContentContactInformation />
    </div>
  );
}

function Subsection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
      <SubsectionTitle />
      <ChannelMemberInformation />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Group Name
      </p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-h-px min-w-px py-[8px] relative" data-name="Container">
      <Container16 />
    </div>
  );
}

function SubsectionTitle1() {
  return (
    <div className="bg-[#f8fafc] relative shrink-0 w-full" data-name="Subsection-Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pr-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
              <div className="flex-none h-full rotate-90">
                <div className="h-full relative w-[33px]">
                  <div className="absolute inset-[-1px_-3.03%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 2">
                      <path d="M1 1H34" id="Line 1" stroke="var(--stroke-0, #8DC1EC)" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Container15 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Textfield7() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-px relative text-[#000b25] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Value
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Lebel
      </p>
      <Textfield7 />
    </div>
  );
}

function Textfield9() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-px relative text-[#000b25] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Value
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Lebel
      </p>
      <Textfield9 />
    </div>
  );
}

function Textfield11() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-px relative text-[#000b25] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Value
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Lebel
      </p>
      <Textfield11 />
    </div>
  );
}

function ContentContactInformation1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <Textfield6 />
      <Textfield8 />
      <Textfield10 />
    </div>
  );
}

function ChannelMemberInformation1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Channel Member Information">
      <ContentContactInformation1 />
    </div>
  );
}

function Subsection1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
      <SubsectionTitle1 />
      <ChannelMemberInformation1 />
    </div>
  );
}

function SectionBody() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <Subsection />
        <Subsection1 />
      </div>
    </div>
  );
}

function SalesPointSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="SalesPoint - Section">
      <SectionTitle />
      <SectionBody />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content Container">
      <Widget />
      <WidgetContainer />
      <SalesPointSection />
    </div>
  );
}

function Text26() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Profile Settings
      </p>
    </div>
  );
}

function Left6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="left">
      <div className="flex flex-row items-center self-stretch">
        <Text26 />
      </div>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Section-title">
      <Left6 />
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Is Trusted?
      </p>
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Enable trusted member privileges
      </p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Container">
      <Text27 />
      <Text28 />
    </div>
  );
}

function Handle() {
  return <div className="bg-white rounded-[160px] shrink-0 size-[16px]" data-name="Handle" />;
}

function Toggle1() {
  return (
    <div className="bg-[#0072ce] content-stretch flex h-[24px] items-center justify-end px-[4px] py-[2px] relative rounded-[160px] shrink-0 w-[40px]" data-name="Toggle">
      <Handle />
    </div>
  );
}

function Toggle() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Toggle">
      <Toggle1 />
    </div>
  );
}

function ControllersCard() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[4px] shrink-0 w-full" data-name="Controllers Card">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <Container17 />
          <Toggle />
        </div>
      </div>
    </div>
  );
}

function Subsection2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
      <ControllersCard />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Product & Channel Access`}</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-h-px min-w-px py-[8px] relative" data-name="Container">
      <Container19 />
    </div>
  );
}

function SubsectionTitle2() {
  return (
    <div className="bg-[#f8fafc] relative shrink-0 w-full" data-name="Subsection-Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pr-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
              <div className="flex-none h-full rotate-90">
                <div className="h-full relative w-[33px]">
                  <div className="absolute inset-[-1px_-3.03%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 2">
                      <path d="M1 1H34" id="Line 1" stroke="var(--stroke-0, #8DC1EC)" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Container18 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px]">ANGLE-DOWN</p>
    </div>
  );
}

function Textfield13() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            All product
          </p>
          <Icon4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Allowed Products
      </p>
      <Textfield13 />
    </div>
  );
}

function Textfield15() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Enter allowed channels
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Allowed Channels
      </p>
      <Textfield15 />
    </div>
  );
}

function ContentContactInformation2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <Textfield12 />
      <Textfield14 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px]">ANGLE-DOWN</p>
    </div>
  );
}

function Textfield17() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Select categories
          </p>
          <Icon5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Channel Categories
      </p>
      <Textfield17 />
    </div>
  );
}

function Textfield18() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px" data-name="Textfield" />;
}

function ContentContactInformation3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <Textfield16 />
      <Textfield18 />
    </div>
  );
}

function ProductChannelAccess() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Product & Channel Access">
      <ContentContactInformation2 />
      <ContentContactInformation3 />
    </div>
  );
}

function Subsection3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
      <SubsectionTitle2 />
      <ProductChannelAccess />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Hierarchy & Organization`}</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-h-px min-w-px py-[8px] relative" data-name="Container">
      <Container21 />
    </div>
  );
}

function SubsectionTitle3() {
  return (
    <div className="bg-[#f8fafc] relative shrink-0 w-full" data-name="Subsection-Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pr-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
              <div className="flex-none h-full rotate-90">
                <div className="h-full relative w-[33px]">
                  <div className="absolute inset-[-1px_-3.03%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 2">
                      <path d="M1 1H34" id="Line 1" stroke="var(--stroke-0, #8DC1EC)" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Container20 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px]">ANGLE-DOWN</p>
    </div>
  );
}

function Textfield20() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Hierarchy Type
          </p>
          <Icon6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Hierarchy Type
      </p>
      <Textfield20 />
    </div>
  );
}

function Textfield22() {
  return (
    <div className="bg-[#f5f5f5] h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Territory Type
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Territory Type
      </p>
      <Textfield22 />
    </div>
  );
}

function ContentContactInformation4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <Textfield19 />
      <Textfield21 />
    </div>
  );
}

function Textfield24() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Operator
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Parent
      </p>
      <Textfield24 />
    </div>
  );
}

function Textfield26() {
  return (
    <div className="bg-[#f5f5f5] h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Operator
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Related User
      </p>
      <Textfield26 />
    </div>
  );
}

function ContentContactInformation5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <Textfield23 />
      <Textfield25 />
    </div>
  );
}

function HierarchyOrganization() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Hierarchy & Organization">
      <ContentContactInformation4 />
      <ContentContactInformation5 />
    </div>
  );
}

function Subsection4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
      <SubsectionTitle3 />
      <HierarchyOrganization />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Account & Business Configuration`}</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-h-px min-w-px py-[8px] relative" data-name="Container">
      <Container23 />
    </div>
  );
}

function SubsectionTitle4() {
  return (
    <div className="bg-[#f8fafc] relative shrink-0 w-full" data-name="Subsection-Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pr-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
              <div className="flex-none h-full rotate-90">
                <div className="h-full relative w-[33px]">
                  <div className="absolute inset-[-1px_-3.03%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 2">
                      <path d="M1 1H34" id="Line 1" stroke="var(--stroke-0, #8DC1EC)" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Container22 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px]">angle-down</p>
    </div>
  );
}

function Textfield28() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Select business type `}</p>
          <Icon7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Business Type
      </p>
      <Textfield28 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px]">angle-down</p>
    </div>
  );
}

function Textfield30() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Allocation Mode
          </p>
          <Icon8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Allocation Mode
      </p>
      <Textfield30 />
    </div>
  );
}

function ContentContactInformation6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <Textfield27 />
      <Textfield29 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px]">angle-down</p>
    </div>
  );
}

function Textfield32() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Yousef@gmail .com
          </p>
          <Icon9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Account Type
      </p>
      <Textfield32 />
    </div>
  );
}

function Textfield33() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px" data-name="Textfield" />;
}

function ContentContactInformation7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Contact information">
      <Textfield31 />
      <Textfield33 />
    </div>
  );
}

function AccountBusinessConfiguration() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Account & Business Configuration">
      <ContentContactInformation6 />
      <ContentContactInformation7 />
    </div>
  );
}

function Subsection5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
      <SubsectionTitle4 />
      <AccountBusinessConfiguration />
    </div>
  );
}

function SectionBody1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <Subsection2 />
        <Subsection3 />
        <Subsection4 />
        <Subsection5 />
      </div>
    </div>
  );
}

function SalesPointSection1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[752px]" data-name="SalesPoint - Section">
      <SectionTitle1 />
      <SectionBody1 />
    </div>
  );
}

function Text29() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Channel Member Parents
      </p>
    </div>
  );
}

function Left7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="left">
      <div className="flex flex-row items-center self-stretch">
        <Text29 />
      </div>
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Section-title">
      <Left7 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="bg-[#7a5af8] content-stretch flex flex-col gap-[3.2px] items-center justify-center relative rounded-[128px] shrink-0 size-[32px]" data-name="Icon">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[12.8px] whitespace-nowrap">
        <p className="leading-[1.2]">O</p>
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Operator
      </p>
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Operator
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <Details />
      <Details1 />
    </div>
  );
}

function Inner() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Inner">
      <Icon10 />
      <Frame />
    </div>
  );
}

function Level1() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Level 6">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <Inner />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute inset-[0_-3.13%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 32">
          <g id="Frame 1321314681">
            <line id="Line 1" stroke="var(--stroke-0, #A8D0F0)" x1="32.5" x2="32.5" y1="2.18557e-08" y2="32" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="bg-[#0085ca] content-stretch flex flex-col gap-[3.2px] items-center justify-center relative rounded-[128px] shrink-0 size-[32px]" data-name="Icon">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[12.8px] whitespace-nowrap">
        <p className="leading-[1.2]">A</p>
      </div>
    </div>
  );
}

function Details2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Administrator
      </p>
    </div>
  );
}

function Details3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Operator
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <Details2 />
      <Details3 />
    </div>
  );
}

function Inner1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Inner">
      <Icon11 />
      <Frame1 />
    </div>
  );
}

function Level() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Level 2">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <Inner1 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute inset-[0_-3.13%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 32">
          <g id="Frame 1321314681">
            <line id="Line 1" stroke="var(--stroke-0, #A8D0F0)" x1="32.5" x2="32.5" y1="2.18557e-08" y2="32" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="bg-[#16b364] content-stretch flex flex-col gap-[3.2px] items-center justify-center relative rounded-[128px] shrink-0 size-[32px]" data-name="Icon">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[12.8px] whitespace-nowrap">
        <p className="leading-[1.2]">I</p>
      </div>
    </div>
  );
}

function Details4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Indirect Manager
      </p>
    </div>
  );
}

function Details5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Indirect Sales
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <Details4 />
      <Details5 />
    </div>
  );
}

function Inner2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Inner">
      <Icon12 />
      <Frame2 />
    </div>
  );
}

function Level6() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] shrink-0 w-full" data-name="Level 17">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <Inner2 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute inset-[0_-3.13%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 32">
          <g id="Frame 1321314681">
            <line id="Line 1" stroke="var(--stroke-0, #A8D0F0)" x1="32.5" x2="32.5" y1="2.18557e-08" y2="32" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="bg-[#4297dd] content-stretch flex flex-col gap-[3.2px] items-center justify-center relative rounded-[128px] shrink-0 size-[32px]" data-name="Icon">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[12.8px] whitespace-nowrap">
        <p className="leading-[1.2]">H</p>
      </div>
    </div>
  );
}

function Details6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Hamza `}</p>
    </div>
  );
}

function Details7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Distributor
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <Details6 />
      <Details7 />
    </div>
  );
}

function Inner3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Inner">
      <Icon13 />
      <Frame3 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pb-[10px] relative shrink-0">
      <div className="flex items-center justify-center mb-[-10px] relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative text-[16px] text-[rgba(0,11,37,0.64)]"></p>
        </div>
      </div>
      <div className="flex items-center justify-center mb-[-10px] relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative text-[16px] text-[rgba(0,11,37,0.64)]"></p>
        </div>
      </div>
    </div>
  );
}

function Level2() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[284px]" data-name="Level  11">
      <div aria-hidden="true" className="absolute border border-[#8dc1ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Inner3 />
      <Frame14 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end justify-center relative shrink-0 w-full">
      <div className="absolute left-[32px] rounded-bl-[16px] rounded-tr-[16px] size-[25px] top-0" data-name="Line">
        <div aria-hidden="true" className="absolute border-[#a8d0f0] border-b border-l border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-tr-[16px]" />
      </div>
      <Level2 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[32px] relative shrink-0 w-[80px]">
      <div className="absolute inset-[0_-1.25%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81 32">
          <g id="Frame 1321314694">
            <line id="Line 1" stroke="var(--stroke-0, #A8D0F0)" x1="80.5" x2="80.5" y1="2.18557e-08" y2="32" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="bg-[#ee46bc] content-stretch flex flex-col gap-[3.2px] items-center justify-center relative rounded-[128px] shrink-0 size-[32px]" data-name="Icon">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[12.8px] whitespace-nowrap">
        <p className="leading-[1.2]">S</p>
      </div>
    </div>
  );
}

function Details8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Store test
      </p>
    </div>
  );
}

function Details9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Store
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <Details8 />
      <Details9 />
    </div>
  );
}

function Inner4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Inner">
      <Icon14 />
      <Frame4 />
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

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full">
      <Level3 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-[32px] relative shrink-0 w-[80px]">
      <div className="absolute inset-[0_-1.25%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81 32">
          <g id="Frame 1321314694">
            <line id="Line 1" stroke="var(--stroke-0, #A8D0F0)" x1="80.5" x2="80.5" y1="2.18557e-08" y2="32" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="bg-[#00bfb3] content-stretch flex flex-col gap-[3.2px] items-center justify-center relative rounded-[128px] shrink-0 size-[32px]" data-name="Icon">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[12.8px] whitespace-nowrap">
        <p className="leading-[1.2]">S</p>
      </div>
    </div>
  );
}

function Details10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Store test
      </p>
    </div>
  );
}

function Details11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Store
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <Details10 />
      <Details11 />
    </div>
  );
}

function Inner5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Inner">
      <Icon15 />
      <Frame5 />
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

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full">
      <Level4 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-[32px] relative shrink-0 w-[80px]">
      <div className="absolute inset-[0_-1.25%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81 32">
          <g id="Frame 1321314694">
            <line id="Line 1" stroke="var(--stroke-0, #A8D0F0)" x1="80.5" x2="80.5" y1="2.18557e-08" y2="32" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="bg-[#f38744] content-stretch flex flex-col gap-[3.2px] items-center justify-center relative rounded-[128px] shrink-0 size-[32px]" data-name="Icon">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f8fafc] text-[12.8px] whitespace-nowrap">
        <p className="leading-[1.2]">S</p>
      </div>
    </div>
  );
}

function Details12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Store test
      </p>
    </div>
  );
}

function Details13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Details">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Store
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <Details12 />
      <Details13 />
    </div>
  );
}

function Inner6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Inner">
      <Icon16 />
      <Frame6 />
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

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full">
      <Level5 />
    </div>
  );
}

function Tree() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Tree">
      <Level1 />
      <Frame7 />
      <Level />
      <Frame9 />
      <Level6 />
      <Frame13 />
      <Frame8 />
      <Frame15 />
      <Frame10 />
      <Frame16 />
      <Frame11 />
      <Frame17 />
      <Frame12 />
    </div>
  );
}

function Subsection6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
      <Tree />
    </div>
  );
}

function SectionBody2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] w-full" data-name="Section-body">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
        <Subsection6 />
      </div>
    </div>
  );
}

function SalesPointSection2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative self-stretch" data-name="SalesPoint - Section">
      <SectionTitle2 />
      <SectionBody2 />
    </div>
  );
}

function ContentSection() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Content-section">
      <SalesPointSection1 />
      <SalesPointSection2 />
    </div>
  );
}

function Text30() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Upload Document
      </p>
    </div>
  );
}

function Left8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="left">
      <div className="flex flex-row items-center self-stretch">
        <Text30 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center leading-[0] px-[16px] relative rounded-[4px] shrink-0 text-[#0072ce] text-[14px] whitespace-nowrap" data-name="Button">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">View All</p>
      </div>
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0">
        <p className="leading-[normal]">Arrow-right</p>
      </div>
    </div>
  );
}

function Cta1() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="CTA">
      <Button5 />
    </div>
  );
}

function SectionTitle3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Section-title">
      <Left8 />
      <div className="flex flex-row items-center self-stretch">
        <Cta1 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px]">angle-down</p>
    </div>
  );
}

function Textfield34() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Select document type
          </p>
          <Icon17 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[500px]" data-name="Dropdown">
      <Textfield34 />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Dropdown">
      <Dropdown1 />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">
        <p className="leading-[normal]">ADD</p>
      </div>
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">upload</p>
      </div>
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] whitespace-nowrap">
        <p className="leading-[normal]">angle-down</p>
      </div>
    </div>
  );
}

function Cta2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="CTA">
      <Button6 />
    </div>
  );
}

function UploaderButtons() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Uploader Buttons">
      <Dropdown />
      <Cta2 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[15px] relative rounded-[12px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0 size-[60px]" data-name="Icon">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[30px] text-[#9e9e9e] text-[30px] text-center">
        <p className="leading-[normal] whitespace-pre-wrap"></p>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="Section">
      <Icon18 />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        No Document found
      </p>
    </div>
  );
}

function SupportedFormats() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Supported formats">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[12px] text-[rgba(0,11,37,0.64)] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2] whitespace-pre-wrap">Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
      </div>
    </div>
  );
}

function Empty() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-center ml-[40.28px] mt-[29px] relative row-1 w-[971.559px]" data-name="Empty">
      <Section />
      <SupportedFormats />
    </div>
  );
}

function Group23() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="bg-[#f8fafc] border border-[#8dc1ec] border-dashed col-1 h-[182px] ml-0 mt-0 rounded-[4px] row-1 w-[1100px]" data-name="Upload file background" />
      <Empty />
    </div>
  );
}

function ContentDocumentUploaderHorizontal() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content - Document uploader - Horizontal">
      <UploaderButtons />
      <Group23 />
    </div>
  );
}

function Subsection7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
      <ContentDocumentUploaderHorizontal />
    </div>
  );
}

function SectionBody3() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <Subsection7 />
      </div>
    </div>
  );
}

function SalesPointSection3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[1132px]" data-name="SalesPoint - Section">
      <SectionTitle3 />
      <SectionBody3 />
    </div>
  );
}

function Text31() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Locality Settings
      </p>
    </div>
  );
}

function Left9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="left">
      <div className="flex flex-row items-center self-stretch">
        <Text31 />
      </div>
    </div>
  );
}

function SectionTitle4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Section-title">
      <Left9 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[12px]"></p>
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[97px]" data-name="Table header">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] overflow-hidden relative shrink-0 text-[#000b25] text-[12px] text-ellipsis" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Name
      </p>
      <Icon19 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableHeader2 />
        </div>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[12px]"></p>
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[97px]" data-name="Table header">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] overflow-hidden relative shrink-0 text-[#000b25] text-[12px] text-ellipsis" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Code
      </p>
      <Icon20 />
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableHeader4 />
        </div>
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-[#f3f9fd] content-stretch flex items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Table-header">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <TableHeader1 />
      <TableHeader3 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Name
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Code
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table-row">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Name
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Code
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table-row">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <TableCell2 />
      <TableCell3 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Name
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Code
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table-row">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <TableCell4 />
      <TableCell5 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Name
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Code
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table-row">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#4297dd] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Add a line
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow4() {
  return (
    <div className="content-stretch flex items-start relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full" data-name="Table-row">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-br-[4px]" />
      <TableCell8 />
    </div>
  );
}

function LocalitySettings() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Locality Settings">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <TableHeader />
      <TableRow />
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
    </div>
  );
}

function Subsection8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
      <LocalitySettings />
    </div>
  );
}

function SectionBody4() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <Subsection8 />
      </div>
    </div>
  );
}

function SalesPointSection4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[1132px]" data-name="SalesPoint - Section">
      <SectionTitle4 />
      <SectionBody4 />
    </div>
  );
}

function Text32() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Configuration Settings
      </p>
    </div>
  );
}

function Left10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="left">
      <div className="flex flex-row items-center self-stretch">
        <Text32 />
      </div>
    </div>
  );
}

function SectionTitle5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Section-title">
      <Left10 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#dbedf8] content-stretch flex items-center justify-center relative rounded-[160px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dbedf8] border-solid inset-0 pointer-events-none rounded-[160px]" />
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0072ce] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">chevron-left</p>
      </div>
    </div>
  );
}

function Segmented10() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Segmented">
      <div aria-hidden="true" className="absolute border border-[#0072ce] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#0072ce] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        User Management
      </p>
    </div>
  );
}

function Segmented11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Segmented">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Location and  Address`}</p>
        </div>
      </div>
    </div>
  );
}

function Segmented12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Segmented">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Financial And Sales
          </p>
        </div>
      </div>
    </div>
  );
}

function Segmented13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Segmented">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Settings And Miscellaneous
      </p>
    </div>
  );
}

function Segmented14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Segmented">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            KPI Configuration
          </p>
        </div>
      </div>
    </div>
  );
}

function Segmented15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Segmented">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Commission Criteria
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-h-px min-w-px relative">
      <Segmented10 />
      <Segmented11 />
      <Segmented12 />
      <Segmented13 />
      <Segmented14 />
      <Segmented15 />
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#dbedf8] content-stretch flex items-center justify-center relative rounded-[160px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dbedf8] border-solid inset-0 pointer-events-none rounded-[160px]" />
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0072ce] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">chevron-right</p>
      </div>
    </div>
  );
}

function SegmentedControl2() {
  return (
    <div className="bg-[#f1f5f9] relative rounded-[4px] shrink-0 w-full" data-name="Segmented control">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative w-full">
          <Button7 />
          <Frame20 />
          <Button8 />
        </div>
      </div>
    </div>
  );
}

function Subsection9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Subsection">
      <SegmentedControl2 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[44px] items-start leading-[1.2] relative shrink-0 w-full">
      <p className="font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[#000b25] text-[16px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        User Management
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" dir="auto" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Configure user roles, permissions, and access controls
      </p>
    </div>
  );
}

function Segmented16() {
  return (
    <div className="bg-[#0072ce] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Segmented">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative w-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Sales App Rights Group
          </p>
        </div>
      </div>
    </div>
  );
}

function Segmented17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Segmented">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Additional Users
          </p>
        </div>
      </div>
    </div>
  );
}

function Segmented18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Segmented">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[8px] relative w-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Widgets
          </p>
        </div>
      </div>
    </div>
  );
}

function NestedSegmentedControl() {
  return (
    <div className="bg-white h-[41px] relative rounded-[4px] shrink-0 w-full" data-name="Nested Segmented control">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[2px] items-center p-[4px] relative size-full">
          <Segmented16 />
          <Segmented17 />
          <Segmented18 />
        </div>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[12px]"></p>
    </div>
  );
}

function TableHeader7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[97px]" data-name="Table header">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] overflow-hidden relative shrink-0 text-[#000b25] text-[12px] text-ellipsis" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Name
      </p>
      <Icon21 />
    </div>
  );
}

function TableHeader6() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableHeader7 />
        </div>
      </div>
    </div>
  );
}

function TableHeader5() {
  return (
    <div className="bg-[#f3f9fd] content-stretch flex items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Table-header">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <TableHeader6 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#4297dd] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Add a line
          </p>
        </div>
      </div>
    </div>
  );
}

function TableRow5() {
  return (
    <div className="content-stretch flex items-start relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full" data-name="Table-row">
      <TableCell9 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full" data-name="Table">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <TableHeader5 />
      <TableRow5 />
    </div>
  );
}

function UploadeFile() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[96px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Uploade file">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Table />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame18 />
      <NestedSegmentedControl />
      <UploadeFile />
    </div>
  );
}

function UserManagement() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[4px] shrink-0 w-full" data-name="User Management">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start px-[12px] py-[16px] relative w-full">
        <Frame19 />
      </div>
    </div>
  );
}

function Subsection10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Subsection">
      <UserManagement />
    </div>
  );
}

function SectionBody5() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <Subsection9 />
        <Subsection10 />
      </div>
    </div>
  );
}

function SalesPointSection5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[1132px]" data-name="SalesPoint - Section">
      <SectionTitle5 />
      <SectionBody5 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="Content">
      <SmartButtonsSection />
      <SmartButtonsSection1 />
      <ContentContainer />
      <ContentSection />
      <SalesPointSection3 />
      <SalesPointSection4 />
      <SalesPointSection5 />
    </div>
  );
}

export default function Content() {
  return (
    <div className="content-stretch flex items-start p-[24px] relative size-full" data-name="Content">
      <Content1 />
    </div>
  );
}