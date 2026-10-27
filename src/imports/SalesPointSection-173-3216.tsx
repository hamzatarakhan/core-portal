function Text() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Credit Limit Control `}</p>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="left">
      <div className="flex flex-row items-center self-stretch">
        <Text />
      </div>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Section-title">
      <Left />
    </div>
  );
}

function Circle() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="circle">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.5px] text-[rgba(0,11,37,0.57)] text-center w-full">
        <p className="leading-[normal] whitespace-pre-wrap">circle</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#0072ce] content-stretch flex items-center justify-center left-[3px] overflow-clip px-[3px] py-[1.5px] rounded-[120px] top-[-6px]" data-name="Badge">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[7.5px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">16</p>
      </div>
    </div>
  );
}

function SmartButton() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] h-[30px] items-center px-[12px] relative rounded-[41.25px] shrink-0" data-name="Smart button">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[41.25px]" />
      <Circle />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[10.5px] text-[rgba(0,11,37,0.57)] text-ellipsis w-[107.7px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2] overflow-hidden">{`Order `}</p>
      </div>
      <Badge />
    </div>
  );
}

function Circle1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="circle">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.5px] text-[rgba(0,11,37,0.57)] text-center w-full">
        <p className="leading-[normal] whitespace-pre-wrap">circle</p>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#0072ce] content-stretch flex items-center justify-center left-[3px] overflow-clip px-[3px] py-[1.5px] rounded-[120px] top-[-6px]" data-name="Badge">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[7.5px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">16</p>
      </div>
    </div>
  );
}

function SmartButton1() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] h-[30px] items-center px-[12px] relative rounded-[41.25px] shrink-0" data-name="Smart button">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[41.25px]" />
      <Circle1 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[10.5px] text-[rgba(0,11,37,0.57)] text-ellipsis w-[107.7px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2] overflow-hidden">Receipts</p>
      </div>
      <Badge1 />
    </div>
  );
}

function Circle2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="circle">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.5px] text-[rgba(0,11,37,0.57)] text-center w-full">
        <p className="leading-[normal] whitespace-pre-wrap">circle</p>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#0072ce] content-stretch flex items-center justify-center left-[3px] overflow-clip px-[3px] py-[1.5px] rounded-[120px] top-[-6px]" data-name="Badge">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[7.5px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">16</p>
      </div>
    </div>
  );
}

function SmartButton2() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] h-[30px] items-center px-[12px] relative rounded-[41.25px] shrink-0" data-name="Smart button">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[41.25px]" />
      <Circle2 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[10.5px] text-[rgba(0,11,37,0.57)] text-ellipsis w-[107.7px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2] overflow-hidden">{`Invoices `}</p>
      </div>
      <Badge2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f3f9fd] mb-[-1px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l border-r border-solid border-t inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <div className="content-stretch flex gap-[8px] items-start px-[16px] py-[12px] relative w-full">
        <SmartButton />
        <SmartButton1 />
        <SmartButton2 />
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Title">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Available Credit Limit
      </p>
    </div>
  );
}

function Price1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="price">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[19px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        0
      </p>
    </div>
  );
}

function Price2() {
  return (
    <div className="content-stretch flex items-end justify-center pb-px relative shrink-0" data-name="price">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
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

function Card() {
  return (
    <div className="bg-[#f6fef9] flex-[1_0_0] h-[78px] min-h-px min-w-px relative rounded-[4px]" data-name="Card">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
          <WalletBalance />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d3f8df] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Title">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Total Amount Due
      </p>
    </div>
  );
}

function Price4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="price">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[19px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        0
      </p>
    </div>
  );
}

function Price5() {
  return (
    <div className="content-stretch flex items-end justify-center pb-px relative shrink-0" data-name="price">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">OMR</p>
      </div>
    </div>
  );
}

function Price3() {
  return (
    <div className="content-stretch flex gap-[4px] items-end justify-center relative shrink-0" data-name="Price">
      <Price4 />
      <Price5 />
    </div>
  );
}

function WalletBalance1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative" data-name="Wallet balance">
      <Title1 />
      <Price3 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#fff8f7] flex-[1_0_0] h-[78px] min-h-px min-w-px relative rounded-[4px]" data-name="Card">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
          <WalletBalance1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffccc7] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Title">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Remaining Balance
      </p>
    </div>
  );
}

function Price7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="price">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[19px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        0
      </p>
    </div>
  );
}

function Price8() {
  return (
    <div className="content-stretch flex items-end justify-center pb-px relative shrink-0" data-name="price">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">OMR</p>
      </div>
    </div>
  );
}

function Price6() {
  return (
    <div className="content-stretch flex gap-[4px] items-end justify-center relative shrink-0" data-name="Price">
      <Price7 />
      <Price8 />
    </div>
  );
}

function WalletBalance2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative" data-name="Wallet balance">
      <Title2 />
      <Price6 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#f5faff] flex-[1_0_0] h-[78px] min-h-px min-w-px relative rounded-[4px]" data-name="Card">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
          <WalletBalance2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1e9ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Title">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Pending Order Amount
      </p>
    </div>
  );
}

function Price10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="price">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[19px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        0
      </p>
    </div>
  );
}

function Price11() {
  return (
    <div className="content-stretch flex items-end justify-center pb-px relative shrink-0" data-name="price">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">OMR</p>
      </div>
    </div>
  );
}

function Price9() {
  return (
    <div className="content-stretch flex gap-[4px] items-end justify-center relative shrink-0" data-name="Price">
      <Price10 />
      <Price11 />
    </div>
  );
}

function WalletBalance3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative" data-name="Wallet balance">
      <Title3 />
      <Price9 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[#fefaf5] flex-[1_0_0] h-[78px] min-h-px min-w-px relative rounded-[4px]" data-name="Card">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
          <WalletBalance3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#fdead7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.91667 7H11.0833" id="Vector" stroke="var(--stroke-0, #0072CE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 2.91667V11.0833" id="Vector_2" stroke="var(--stroke-0, #0072CE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(0,114,206,0.08)] relative rounded-[33554400px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          No credit limit configured
        </p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.4)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Set a limit to control credit exposure
        </p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative">
        <Text1 />
        <Text2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] h-full items-center relative">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0072ce] h-[36px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0072ce] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center justify-center leading-[0] px-[16px] relative text-[12px] text-white whitespace-nowrap">
        <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0 text-center">
          <p className="leading-[normal]">plus</p>
        </div>
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[1.2]">Set Credit Limit</p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f3f9fd] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dbedf8] border-dashed inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[17px] py-[13px] relative w-full">
          <Container1 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame />
      <Container />
    </div>
  );
}

function SectionBody() {
  return (
    <div className="bg-white mb-[-1px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-br-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <Frame2 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full">
      <Frame1 />
      <SectionBody />
    </div>
  );
}

export default function SalesPointSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full" data-name="SalesPoint - Section">
      <SectionTitle />
      <Frame3 />
    </div>
  );
}