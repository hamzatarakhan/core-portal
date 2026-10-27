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

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative size-full">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}