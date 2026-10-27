function Icon() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[11.2px]" data-name="Icon">
      <p className="bg-clip-text bg-gradient-to-r css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] from-[#4b79a1] leading-[normal] not-italic relative shrink-0 text-[12.8px] text-center to-[#283e51]" style={{ WebkitTextFillColor: "transparent" }}>
        
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">Schedule Cycle</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Icon />
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.2]">Define specific pricing for different usage ranges</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative">
      <Frame3 />
      <Frame />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Title">
      <Frame4 />
    </div>
  );
}

function Circle() {
  return <div className="bg-[#0071cd] rounded-[160px] shrink-0 size-[8px]" data-name="Circle" />;
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[160px] shrink-0 size-[16px]" data-name="Icon">
      <div aria-hidden="true" className="absolute border-2 border-[#0071cd] border-solid inset-0 pointer-events-none rounded-[160px]" />
      <Circle />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
      <Icon1 />
    </div>
  );
}

function RadioButton() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Radio button">
      <Left />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Content">
      <Title />
      <RadioButton />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Content />
    </div>
  );
}

function NumberCard() {
  return (
    <div className="bg-[#f3f9fd] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Number card">
      <div aria-hidden="true" className="absolute border border-[#8dc1ec] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center p-[16px] relative w-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[11.2px]" data-name="Icon">
      <p className="bg-clip-text bg-gradient-to-r css-ew64yg font-['Font_Awesome_6_Pro:Solid',sans-serif] from-[#4b79a1] leading-[normal] not-italic relative shrink-0 text-[12.8px] text-center to-[#283e51]" style={{ WebkitTextFillColor: "transparent" }}>
        Percentage
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">Triggered Cycle</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Icon2 />
      <Frame5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[1.2]">Apply percentage-based weights for billing allocation</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative">
      <Frame6 />
      <Frame1 />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Title">
      <Frame7 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[160px] shrink-0 size-[16px]" data-name="Icon">
      <div aria-hidden="true" className="absolute border-2 border-[#0071cd] border-solid inset-0 pointer-events-none rounded-[160px]" />
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
      <Icon3 />
    </div>
  );
}

function RadioButton1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Radio button">
      <Left1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Content">
      <Title1 />
      <RadioButton1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Content1 />
    </div>
  );
}

function NumberCard1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Number card">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

export default function Contacts() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative size-full" data-name="Contacts">
      <NumberCard />
      <NumberCard1 />
    </div>
  );
}