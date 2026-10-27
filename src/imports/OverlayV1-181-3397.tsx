function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative rounded-[8px]" data-name="Title">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000b25] text-[19px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">{`Change Credit Limit `}</p>
      </div>
    </div>
  );
}

function ModalHeader() {
  return (
    <div className="content-stretch flex gap-[16px] h-[23px] items-center justify-center relative shrink-0 w-full" data-name="Modal header">
      <Title />
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-[rgba(0,11,37,0.57)]">close</p>
    </div>
  );
}

function Textfield1() {
  return (
    <div className="bg-[#f5f5f5] h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-px relative text-[16px] text-[rgba(0,11,37,0.57)] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            1,000,00
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Current Credit Limit
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
            50000
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        New Credit Limit Amount
      </p>
      <Textfield3 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Row">
      <Textfield2 />
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
    <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Issue Value
      </p>
    </div>
  );
}

function Cell() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
      <TableElements1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 147.2 1">
            <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="147.2" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TableElements2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative" data-name="Table Elements">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Issue Value
      </p>
    </div>
  );
}

function Cell1() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
      <TableElements2 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 147.2 1">
            <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="147.2" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] whitespace-nowrap" data-name="Button">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0">
        <p className="leading-[normal]">plus</p>
      </div>
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">Add Bank Guarantee</p>
      </div>
    </div>
  );
}

function TableElements3() {
  return (
    <div className="content-stretch flex gap-[7px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
      <Button />
    </div>
  );
}

function Cell2() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center relative rounded-bl-[4px] shrink-0 w-full" data-name="Cell">
      <TableElements3 />
    </div>
  );
}

function TablesColumns() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Table\'s Columns">
      <HeaderCell />
      <Cell />
      <Cell1 />
      <Cell2 />
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

function TableElements4() {
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
      <TableElements4 />
    </div>
  );
}

function TableElements5() {
  return (
    <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Amount
      </p>
    </div>
  );
}

function Cell3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
      <TableElements5 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 147.2 1">
            <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="147.2" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TableElements6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative" data-name="Table Elements">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Amount
      </p>
    </div>
  );
}

function Cell4() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
      <TableElements6 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 147.2 1">
            <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="147.2" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TableElements7() {
  return <div className="content-stretch flex h-[48px] items-center px-[16px] shrink-0" data-name="Table Elements" />;
}

function Cell5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
      <TableElements7 />
    </div>
  );
}

function TablesColumns1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Table\'s Columns">
      <HeaderCell1 />
      <Cell3 />
      <Cell4 />
      <Cell5 />
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

function TableElements8() {
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
      <TableElements8 />
    </div>
  );
}

function TableElements9() {
  return (
    <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Date
      </p>
    </div>
  );
}

function Cell6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
      <TableElements9 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 147.2 1">
            <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="147.2" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TableElements10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative" data-name="Table Elements">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Date
      </p>
    </div>
  );
}

function Cell7() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
      <TableElements10 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 147.2 1">
            <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="147.2" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TableElements11() {
  return <div className="content-stretch flex h-[48px] items-center px-[16px] shrink-0" data-name="Table Elements" />;
}

function Cell8() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
      <TableElements11 />
    </div>
  );
}

function TablesColumns2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Table\'s Columns">
      <HeaderCell2 />
      <Cell6 />
      <Cell7 />
      <Cell8 />
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

function TableElements12() {
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
      <TableElements12 />
    </div>
  );
}

function TableElements13() {
  return (
    <div className="content-stretch flex h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Date
      </p>
    </div>
  );
}

function Cell9() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
      <TableElements13 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 147.2 1">
            <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="147.2" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TableElements14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[16px] relative" data-name="Table Elements">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Date
      </p>
    </div>
  );
}

function Cell10() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
      <TableElements14 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 147.2 1">
            <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="147.2" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TableElements15() {
  return <div className="content-stretch flex h-[48px] items-center px-[16px] shrink-0" data-name="Table Elements" />;
}

function Cell11() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
      <TableElements15 />
    </div>
  );
}

function TablesColumns3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Table\'s Columns">
      <HeaderCell3 />
      <Cell9 />
      <Cell10 />
      <Cell11 />
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

function TableElements16() {
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
      <TableElements16 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] whitespace-nowrap" data-name="Button">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">Bank File</p>
      </div>
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0">
        <p className="leading-[normal]">eye</p>
      </div>
    </div>
  );
}

function TableElements17() {
  return (
    <div className="content-stretch flex gap-[7px] h-[48px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
      <Button1 />
    </div>
  );
}

function Cell12() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Cell">
      <TableElements17 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 147.2 1">
            <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="147.2" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] relative shrink-0 text-[#000000] text-[12px] whitespace-nowrap" data-name="Button">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">Bank File</p>
      </div>
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0">
        <p className="leading-[normal]">eye</p>
      </div>
    </div>
  );
}

function TableElements18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[7px] items-center min-h-px min-w-px px-[16px] relative" data-name="Table Elements">
      <Button2 />
    </div>
  );
}

function Cell13() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Cell">
      <TableElements18 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 147.2 1">
            <line id="Line 11" stroke="var(--stroke-0, #E2E8F0)" x2="147.2" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TableElements19() {
  return <div className="content-stretch flex gap-[7px] items-center px-[16px] shrink-0" data-name="Table Elements" />;
}

function Cell14() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center relative rounded-br-[4px] shrink-0 w-full" data-name="Cell">
      <TableElements19 />
    </div>
  );
}

function TablesColumns4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Table\'s Columns">
      <HeaderCell4 />
      <Cell12 />
      <Cell13 />
      <Cell14 />
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

function PopupAddBankGuarantee() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative self-stretch" data-name="Popup_Add Bank Guarantee">
      <Textfield />
      <Row />
      <NewTable />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start p-[16px] relative w-full">
        <PopupAddBankGuarantee />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">Discard</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#000000] content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">Save Changes</p>
      </div>
    </div>
  );
}

function ModalFooter() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="Modal footer">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <ModalHeader />
      <Container1 />
      <ModalFooter />
    </div>
  );
}

function ModalV() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start max-w-[800px] min-w-[800px] p-[16px] relative rounded-[8px] shrink-0 w-[800px]" data-name="Modal V1">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-[1.556px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container />
    </div>
  );
}

export default function OverlayV() {
  return (
    <div className="bg-[rgba(0,11,37,0.57)] content-stretch flex items-center justify-center relative size-full" data-name="Overlay V1">
      <ModalV />
    </div>
  );
}