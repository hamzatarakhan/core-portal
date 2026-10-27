function Frame1() {
  return (
    <div className="content-stretch flex items-center py-[4px] relative shrink-0 w-[132px]">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        1000
      </p>
    </div>
  );
}

function ButtonOmr() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex h-[27px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button - OMR">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[8px] text-[rgba(0,11,37,0.6)] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        OMR
      </p>
    </div>
  );
}

function Textfield1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-[190px]" data-name="Textfield">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip pl-[12px] relative rounded-[inherit] w-full">
        <Frame1 />
        <ButtonOmr />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Amount
      </p>
      <Textfield1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0072ce] content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0072ce] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">save</p>
      </div>
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">Save</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0072ce] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">close</p>
      </div>
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0072ce] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">Cancel</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-[1066px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative w-full">
        <Textfield />
        <Frame />
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

function Button2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center leading-[0] relative shrink-0 text-[#0072ce] text-[12px] whitespace-nowrap" data-name="Button">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0">
        <p className="leading-[normal]">plus</p>
      </div>
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">Add Bank Guarantee</p>
      </div>
    </div>
  );
}

function TableElements1() {
  return (
    <div className="content-stretch flex gap-[7px] items-center px-[16px] relative shrink-0" data-name="Table Elements">
      <Button2 />
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
  return <div className="content-stretch flex h-[48px] items-center px-[16px] shrink-0 w-[56px]" data-name="Table Elements" />;
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
  return <div className="content-stretch flex h-[48px] items-center px-[16px] shrink-0 w-[56px]" data-name="Table Elements" />;
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
  return <div className="content-stretch flex h-[48px] items-center px-[16px] shrink-0 w-[56px]" data-name="Table Elements" />;
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

function TableElements9() {
  return <div className="content-stretch flex items-center px-[16px] shrink-0 w-[56px]" data-name="Table Elements" />;
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
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="New Table">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <TablesColumns />
        <TablesColumns1 />
        <TablesColumns2 />
        <TablesColumns3 />
        <TablesColumns4 />
      </div>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="bg-[rgba(240,43,2,0.15)] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 size-[20px]" data-name="Icon container">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] h-[13px] justify-center leading-[0] not-italic relative shrink-0 text-[#f02b02] text-[12px] w-[12px]">
        <p className="leading-[20px] whitespace-pre-wrap"></p>
      </div>
    </div>
  );
}

function AlertMessage() {
  return (
    <div className="relative shrink-0 w-[313px]" data-name="Alert message">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <IconContainer />
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#f02b02] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          At least one bank guarantee is required before saving.
        </p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#f3f9fd] content-stretch flex flex-col gap-[16px] items-start px-[17px] py-[13px] relative rounded-[4px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dbedf8] border-dashed inset-0 pointer-events-none rounded-[4px]" />
      <Frame2 />
      <NewTable />
      <AlertMessage />
    </div>
  );
}