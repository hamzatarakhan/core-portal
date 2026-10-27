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
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center w-full">
        <p className="leading-[normal] whitespace-pre-wrap">circle</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#000000] content-stretch flex items-center justify-center left-[4px] overflow-clip px-[4px] py-[2px] rounded-[160px] top-[-8px]" data-name="Badge">
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
            <p className="leading-[1.2] overflow-hidden">{`Order `}</p>
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

function Badge1() {
  return (
    <div className="absolute bg-[#000000] content-stretch flex items-center justify-center left-[4px] overflow-clip px-[4px] py-[2px] rounded-[160px] top-[-8px]" data-name="Badge">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">16</p>
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
            <p className="leading-[1.2] overflow-hidden">Receipts</p>
          </div>
          <Badge1 />
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

function Badge2() {
  return (
    <div className="absolute bg-[#000000] content-stretch flex items-center justify-center left-[4px] overflow-clip px-[4px] py-[2px] rounded-[160px] top-[-8px]" data-name="Badge">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">16</p>
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
            <p className="leading-[1.2] overflow-hidden">{`Invoices `}</p>
          </div>
          <Badge2 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <SmartButton />
      <SmartButton1 />
      <SmartButton2 />
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

function Card1() {
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

function Card2() {
  return (
    <div className="bg-[#fff8f7] flex-[1_0_0] h-[78px] min-h-px min-w-px relative rounded-[4px]" data-name="Card">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
          <WalletBalance1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ffccc7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Card3() {
  return (
    <div className="bg-[#f4f4f5] flex-[1_0_0] h-[78px] min-h-px min-w-px relative rounded-[4px]" data-name="Card">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative size-full">
          <WalletBalance2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Card4() {
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

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Container">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Bank Guarantee Details `}</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] relative rounded-[4px] shrink-0 text-[#000000] text-[14px] whitespace-nowrap" data-name="Button">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">Add New Guarantee</p>
      </div>
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0">
        <p className="leading-[normal]">plus</p>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="CTA">
      <Button />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-h-px min-w-px py-[8px] relative" data-name="Container">
      <Container1 />
      <Cta />
    </div>
  );
}

function SubsectionTitle() {
  return (
    <div className="bg-[#f8fafc] relative shrink-0 w-full" data-name="Subsection-Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pr-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
              <div className="flex-none h-full rotate-90">
                <div className="h-full relative w-[33px]">
                  <div className="absolute inset-[-1px_-3.03%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 2">
                      <path d="M1 1H34" id="Line 1" stroke="var(--stroke-0, #d4d4d8)" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Container />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 size-[40px]" data-name="icon">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Font_Awesome_6_Pro:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-[rgba(0,11,37,0.64)]"></p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[12px] whitespace-pre-wrap" data-name="Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Bank Guarantee 1.CSV
      </p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[rgba(0,11,37,0.64)] w-full">200 KB</p>
    </div>
  );
}

function Col() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="col">
      <Content1 />
    </div>
  );
}

function Delete() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Delete">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[30px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <circle cx="15" cy="15" fill="var(--fill-0, #3B82F6)" fillOpacity="0.15" id="Ellipse 5" r="15" />
        </svg>
      </div>
      <div className="col-1 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[26.25px] justify-center ml-[2.81px] mt-[1.88px] not-italic relative row-1 text-[#3b82f6] text-[10.5px] text-center w-[24.375px]">
        <p className="leading-[normal] whitespace-pre-wrap">Edit</p>
      </div>
    </div>
  );
}

function Delete1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Delete">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[30px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <circle cx="15" cy="15" fill="var(--fill-0, #F02B02)" fillOpacity="0.05" id="Ellipse 5" r="15" />
        </svg>
      </div>
      <div className="col-1 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[26.25px] justify-center ml-[2.81px] mt-[1.88px] not-italic relative row-1 text-[#f02b02] text-[10.5px] text-center w-[24.375px]">
        <p className="leading-[normal] whitespace-pre-wrap">trash</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon />
      <Col />
      <Delete />
      <Delete1 />
    </div>
  );
}

function UploadedItem() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Uploaded item">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[12px] relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 size-[40px]" data-name="icon">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Font_Awesome_6_Pro:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-[rgba(0,11,37,0.64)]"></p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[12px] whitespace-pre-wrap" data-name="Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Bank Guarantee 2.CSV
      </p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[rgba(0,11,37,0.64)] w-full">200 KB</p>
    </div>
  );
}

function Col1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="col">
      <Content3 />
    </div>
  );
}

function Delete2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Delete">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[30px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <circle cx="15" cy="15" fill="var(--fill-0, #3B82F6)" fillOpacity="0.15" id="Ellipse 5" r="15" />
        </svg>
      </div>
      <div className="col-1 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[26.25px] justify-center ml-[2.81px] mt-[1.88px] not-italic relative row-1 text-[#3b82f6] text-[10.5px] text-center w-[24.375px]">
        <p className="leading-[normal] whitespace-pre-wrap">Edit</p>
      </div>
    </div>
  );
}

function Delete3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Delete">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[30px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <circle cx="15" cy="15" fill="var(--fill-0, #F02B02)" fillOpacity="0.05" id="Ellipse 5" r="15" />
        </svg>
      </div>
      <div className="col-1 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[26.25px] justify-center ml-[2.81px] mt-[1.88px] not-italic relative row-1 text-[#f02b02] text-[10.5px] text-center w-[24.375px]">
        <p className="leading-[normal] whitespace-pre-wrap">trash</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon1 />
      <Col1 />
      <Delete2 />
      <Delete3 />
    </div>
  );
}

function UploadedItem1() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Uploaded item">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[12px] relative w-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 size-[40px]" data-name="icon">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Font_Awesome_6_Pro:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-[rgba(0,11,37,0.64)]"></p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[12px] whitespace-pre-wrap" data-name="Content">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Bank Guarantee 3.CSV
      </p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[rgba(0,11,37,0.64)] w-full">200 KB</p>
    </div>
  );
}

function Col2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="col">
      <Content5 />
    </div>
  );
}

function Delete4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Delete">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[30px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <circle cx="15" cy="15" fill="var(--fill-0, #3B82F6)" fillOpacity="0.15" id="Ellipse 5" r="15" />
        </svg>
      </div>
      <div className="col-1 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[26.25px] justify-center ml-[2.81px] mt-[1.88px] not-italic relative row-1 text-[#3b82f6] text-[10.5px] text-center w-[24.375px]">
        <p className="leading-[normal] whitespace-pre-wrap">Edit</p>
      </div>
    </div>
  );
}

function Delete5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Delete">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[30px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <circle cx="15" cy="15" fill="var(--fill-0, #F02B02)" fillOpacity="0.05" id="Ellipse 5" r="15" />
        </svg>
      </div>
      <div className="col-1 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[26.25px] justify-center ml-[2.81px] mt-[1.88px] not-italic relative row-1 text-[#f02b02] text-[10.5px] text-center w-[24.375px]">
        <p className="leading-[normal] whitespace-pre-wrap">trash</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon2 />
      <Col2 />
      <Delete4 />
      <Delete5 />
    </div>
  );
}

function UploadedItem2() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Uploaded item">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[12px] relative w-full">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <UploadedItem />
      <UploadedItem1 />
      <UploadedItem2 />
    </div>
  );
}

function DynamicFields() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Dynamic Fields">
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <SubsectionTitle />
      <DynamicFields />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Override Late Dues Invoices
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Container">
      <Text1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#e4e4e7] content-stretch flex gap-[8px] h-[24px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[normal]">plus</p>
      </div>
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">Add Credit Limit</p>
      </div>
    </div>
  );
}

function ControllersCard() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Controllers Card">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <Container2 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Override Late Dues Invoices
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Container">
      <Text2 />
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

function ControllersCard1() {
  return (
    <div className="bg-[#f8fafc] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Controllers Card">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <Container3 />
          <Toggle />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <ControllersCard />
      <ControllersCard1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Card">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function SectionBody() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
        <Card />
      </div>
    </div>
  );
}

export default function SalesPointSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full" data-name="SalesPoint - Section">
      <SectionTitle />
      <SectionBody />
    </div>
  );
}