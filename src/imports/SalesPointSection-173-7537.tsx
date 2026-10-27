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
        1000
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
        500
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
        500
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
        600
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

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#0072ce] text-[19px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          1000
        </p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-[2px] relative">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          OMR
        </p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-end justify-center relative">
        <Text1 />
        <Text2 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#dbedf8] h-[36px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dbedf8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center justify-center leading-[0] px-[16px] relative text-[#0072ce] text-[12px] whitespace-nowrap">
        <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0 text-center">
          <p className="leading-[normal]">edit</p>
        </div>
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[1.2]">Change Credit Limit</p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f3f9fd] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dbedf8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[17px] py-[13px] relative w-full">
          <Container1 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Bank Guarantees
        </p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#0072ce] h-[15.5px] relative rounded-[33554400px] shrink-0 w-[16px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[4px] py-px relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[13.5px] not-italic relative shrink-0 text-[9px] text-white">1</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[18px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center relative">
        <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0072ce] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]"></p>
        </div>
        <Text3 />
        <Text4 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#dbedf8] h-[27px] relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#dbedf8] border-[0.75px] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] h-full items-center justify-center leading-[0] px-[12px] relative text-[#0072ce] text-[9px] whitespace-nowrap">
        <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0 text-center">
          <p className="leading-[normal]">plus</p>
        </div>
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[1.2]">Add</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 text-[#0072ce] text-center">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9px] whitespace-nowrap">
        <p className="leading-[normal]">eye</p>
      </div>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Show
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-full relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center px-[8px] py-[4px] relative">
        <Frame4 />
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none">
            <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative text-[9px] text-[rgba(0,11,37,0.6)] text-center whitespace-nowrap">
              <p className="leading-[normal]"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <Button1 />
        <div className="flex flex-row items-center self-stretch">
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[17px] py-[13px] relative w-full">
          <Container3 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Sorting() {
  return (
    <div className="content-stretch flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[12px] items-center justify-center not-italic pb-[6px] relative shrink-0 text-[rgba(0,11,37,0.57)] w-[9px]" data-name="Sorting">
      <p className="leading-[normal] relative shrink-0 w-full whitespace-pre-wrap">angle-up</p>
      <div className="flex flex-col justify-end leading-[0] mb-[-6px] relative shrink-0 w-full">
        <p className="leading-[normal] whitespace-pre-wrap"></p>
      </div>
    </div>
  );
}

function Th() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]" data-name="TH">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Issuing Bank `}</p>
      <Sorting />
    </div>
  );
}

function TableElements() {
  return (
    <div className="content-stretch flex items-center px-[16px] relative shrink-0 w-[118px]" data-name="Table Elements">
      <Th />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex h-[48px] items-center py-[10px] relative rounded-tl-[4px] shrink-0 w-full" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px]" />
      <TableElements />
    </div>
  );
}

function TableElements1() {
  return (
    <div className="content-stretch flex h-full items-center px-[16px] relative shrink-0" data-name="Table Elements">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Issue Value
      </p>
    </div>
  );
}

function Cell() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center relative rounded-bl-[4px] shrink-0 w-full" data-name="Cell">
      <TableElements1 />
    </div>
  );
}

function TablesColumns() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Table\'s Columns">
      <HeaderCell />
      <Cell />
    </div>
  );
}

function Sorting1() {
  return (
    <div className="content-stretch flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[12px] items-center justify-center not-italic pb-[6px] relative shrink-0 text-[rgba(0,11,37,0.57)] w-[9px]" data-name="Sorting">
      <p className="leading-[normal] relative shrink-0 w-full whitespace-pre-wrap">angle-up</p>
      <div className="flex flex-col justify-end leading-[0] mb-[-6px] relative shrink-0 w-full">
        <p className="leading-[normal] whitespace-pre-wrap"></p>
      </div>
    </div>
  );
}

function Th1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]" data-name="TH">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Guarantee Amount
      </p>
      <Sorting1 />
    </div>
  );
}

function TableElements2() {
  return (
    <div className="content-stretch flex items-center px-[16px] relative shrink-0 w-[118px]" data-name="Table Elements">
      <Th1 />
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex h-[48px] items-center py-[10px] relative shrink-0 w-full" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <TableElements2 />
    </div>
  );
}

function TableElements3() {
  return (
    <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Amount
      </p>
    </div>
  );
}

function Cell1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
      <TableElements3 />
    </div>
  );
}

function TablesColumns1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Table\'s Columns">
      <HeaderCell1 />
      <Cell1 />
    </div>
  );
}

function Sorting2() {
  return (
    <div className="content-stretch flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[12px] items-center justify-center not-italic pb-[6px] relative shrink-0 text-[rgba(0,11,37,0.57)] w-[9px]" data-name="Sorting">
      <p className="leading-[normal] relative shrink-0 w-full whitespace-pre-wrap">angle-up</p>
      <div className="flex flex-col justify-end leading-[0] mb-[-6px] relative shrink-0 w-full">
        <p className="leading-[normal] whitespace-pre-wrap"></p>
      </div>
    </div>
  );
}

function Th2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]" data-name="TH">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Effective Date
      </p>
      <Sorting2 />
    </div>
  );
}

function TableElements4() {
  return (
    <div className="content-stretch flex items-center px-[16px] relative shrink-0 w-[118px]" data-name="Table Elements">
      <Th2 />
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex h-[48px] items-center py-[10px] relative shrink-0 w-full" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <TableElements4 />
    </div>
  );
}

function TableElements5() {
  return (
    <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Date
      </p>
    </div>
  );
}

function Cell2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
      <TableElements5 />
    </div>
  );
}

function TablesColumns2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Table\'s Columns">
      <HeaderCell2 />
      <Cell2 />
    </div>
  );
}

function Sorting3() {
  return (
    <div className="content-stretch flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[12px] items-center justify-center not-italic pb-[6px] relative shrink-0 text-[rgba(0,11,37,0.57)] w-[9px]" data-name="Sorting">
      <p className="leading-[normal] relative shrink-0 w-full whitespace-pre-wrap">angle-up</p>
      <div className="flex flex-col justify-end leading-[0] mb-[-6px] relative shrink-0 w-full">
        <p className="leading-[normal] whitespace-pre-wrap"></p>
      </div>
    </div>
  );
}

function Th3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]" data-name="TH">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Expiry Date
      </p>
      <Sorting3 />
    </div>
  );
}

function TableElements6() {
  return (
    <div className="content-stretch flex items-center px-[16px] relative shrink-0 w-[118px]" data-name="Table Elements">
      <Th3 />
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex h-[48px] items-center py-[10px] relative shrink-0 w-full" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <TableElements6 />
    </div>
  );
}

function TableElements7() {
  return (
    <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Date
      </p>
    </div>
  );
}

function Cell3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
      <TableElements7 />
    </div>
  );
}

function TablesColumns3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Table\'s Columns">
      <HeaderCell3 />
      <Cell3 />
    </div>
  );
}

function Sorting4() {
  return (
    <div className="content-stretch flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[12px] items-center justify-center not-italic pb-[6px] relative shrink-0 text-[rgba(0,11,37,0.57)] w-[9px]" data-name="Sorting">
      <p className="leading-[normal] relative shrink-0 w-full whitespace-pre-wrap">angle-up</p>
      <div className="flex flex-col justify-end leading-[0] mb-[-6px] relative shrink-0 w-full">
        <p className="leading-[normal] whitespace-pre-wrap"></p>
      </div>
    </div>
  );
}

function Th4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]" data-name="TH">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Bank File
      </p>
      <Sorting4 />
    </div>
  );
}

function TableElements8() {
  return (
    <div className="content-stretch flex items-center px-[16px] relative shrink-0 w-[118px]" data-name="Table Elements">
      <Th4 />
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex h-[48px] items-center py-[10px] relative rounded-tr-[4px] shrink-0 w-full" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none rounded-tr-[4px]" />
      <TableElements8 />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] relative shrink-0 text-[#0072ce] text-[12px] whitespace-nowrap" data-name="Button">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0">
        <p className="leading-[normal]">eye</p>
      </div>
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">Bank File</p>
      </div>
    </div>
  );
}

function TableElements9() {
  return (
    <div className="content-stretch flex gap-[7px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
      <Button3 />
    </div>
  );
}

function Cell4() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center relative rounded-br-[4px] shrink-0 w-full" data-name="Cell">
      <TableElements9 />
    </div>
  );
}

function TablesColumns4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Table\'s Columns">
      <HeaderCell4 />
      <Cell4 />
    </div>
  );
}

function NewTable() {
  return (
    <div className="content-stretch flex items-center relative rounded-[4px] shrink-0 w-full" data-name="New Table">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <TablesColumns />
      <TablesColumns1 />
      <TablesColumns2 />
      <TablesColumns3 />
      <TablesColumns4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Override Late Dues Invoices
      </p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Enable to allow late dues invoices to bypass credit limits
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Handle() {
  return <div className="bg-white rounded-[160px] shrink-0 size-[16px]" data-name="Handle" />;
}

function Toggle1() {
  return (
    <div className="bg-[#bebebe] content-stretch flex h-[24px] items-center justify-end px-[4px] py-[2px] relative rounded-[160px] w-[40px]" data-name="Toggle">
      <Handle />
    </div>
  );
}

function Toggle() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Toggle">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Toggle1 />
        </div>
      </div>
    </div>
  );
}

function ControllersCard() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[4px] shrink-0 w-full" data-name="Controllers Card">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <Container5 />
          <Toggle />
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
      <Container2 />
      <NewTable />
      <ControllersCard />
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