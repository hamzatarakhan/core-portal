function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative rounded-[8px]" data-name="Title">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000b25] text-[19px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">Override Late Dues</p>
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

function CloseButton() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Close button">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-[16px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <span className="leading-[24px]">{`Are you sure you want to `}</span>
        <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[24px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          override
        </span>
        <span className="leading-[24px]">{` this Distributor?`}</span>
      </p>
    </div>
  );
}

function ModalBody() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Modal body">
      <CloseButton />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px]">angle-down</p>
    </div>
  );
}

function Textfield1() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-px relative text-[#000b25] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Reason
          </p>
          <Icon />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Override Reason
      </p>
      <Textfield1 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[17px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Other Attachments
      </p>
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

function PaginationItem() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8px] relative rounded-[4px] shrink-0" data-name="Pagination item">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#000000] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">1</p>
      </div>
    </div>
  );
}

function Slash() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Slash">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">
        <p className="leading-[1.2]">/</p>
      </div>
    </div>
  );
}

function PaginationItem1() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8px] relative rounded-[4px] shrink-0" data-name="Pagination item">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,11,37,0.64)] text-center whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px]">55</p>
      </div>
    </div>
  );
}

function PagesNumber() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative rounded-[4px] shrink-0" data-name="Pages number">
      <div aria-hidden="true" className="absolute border border-[#d2d2d2] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
      <PaginationItem />
      <Slash />
      <PaginationItem1 />
    </div>
  );
}

function PaginationItem2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[40px]" data-name="Pagination item">
      <div aria-hidden="true" className="absolute border border-[#cbd5e1] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] text-center whitespace-nowrap">
        <p className="leading-[normal]">angle-left</p>
      </div>
    </div>
  );
}

function PaginationItem3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[40px]" data-name="Pagination item">
      <div aria-hidden="true" className="absolute border border-[#cbd5e1] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] text-center whitespace-nowrap">
        <p className="leading-[normal]">angle-right</p>
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Pagination">
      <PaginationItem2 />
      <PaginationItem3 />
    </div>
  );
}

function TableFooter() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-name="Table footer">
      <PagesNumber />
      <Pagination />
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Section-title">
      <Left />
      <TableFooter />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Title
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <p className="font-['Font_Awesome_6_Duotone:Solid',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#000b25] text-[13px]"></p>
    </div>
  );
}

function TableText() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Table text">
      <Text1 />
      <Icon1 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <TableText />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Effective Date
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <p className="font-['Font_Awesome_6_Duotone:Solid',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#000b25] text-[13px]"></p>
    </div>
  );
}

function TableText1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Table text">
      <Text2 />
      <Icon2 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <TableText1 />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Description
      </p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <p className="font-['Font_Awesome_6_Duotone:Solid',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#000b25] text-[13px]"></p>
    </div>
  );
}

function TableText2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Table text">
      <Text3 />
      <Icon3 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableText2 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Bank File
      </p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <p className="font-['Font_Awesome_6_Duotone:Solid',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#000b25] text-[13px]"></p>
    </div>
  );
}

function TableText3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Table text">
      <Text4 />
      <Icon4 />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableText3 />
        </div>
      </div>
    </div>
  );
}

function TableCell4() {
  return <div className="content-stretch flex h-full items-center px-[16px] py-[12px] shrink-0 w-[80px]" data-name="Table cell" />;
}

function Tr() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative self-stretch z-[1]" data-name="tr">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
    </div>
  );
}

function Thead() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex isolate items-start shrink-0 sticky top-0 w-full z-[2]" data-name="thead">
      <Tr />
    </div>
  );
}

function TableText4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Regular Text `}</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <TableText4 />
        </div>
      </div>
    </div>
  );
}

function TableText5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Regular Text `}</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <TableText5 />
        </div>
      </div>
    </div>
  );
}

function TableText6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Regular Text `}</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <TableText6 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[4px] relative shrink-0 size-[20px]" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000000] text-[11px]">eye</p>
    </div>
  );
}

function DocumentInfo() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Document Info">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000000] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Document Name
      </p>
      <Icon5 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <DocumentInfo />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f02b02] text-[17px]"></p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="content-stretch flex h-[41px] items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[80px]" data-name="Table cell">
      <Icon6 />
    </div>
  );
}

function Bg() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bg">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
    </div>
  );
}

function TableText7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Regular Text `}</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <TableText7 />
        </div>
      </div>
    </div>
  );
}

function TableText8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Regular Text `}</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <TableText8 />
        </div>
      </div>
    </div>
  );
}

function TableText9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Regular Text `}</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <TableText9 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[4px] relative shrink-0 size-[20px]" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000000] text-[11px]">eye</p>
    </div>
  );
}

function DocumentInfo1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Document Info">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000000] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Document Name
      </p>
      <Icon7 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <DocumentInfo1 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f02b02] text-[17px]"></p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="content-stretch flex h-[41px] items-center justify-center px-[16px] py-[12px] relative shrink-0 w-[80px]" data-name="Table cell">
      <Icon8 />
    </div>
  );
}

function Bg1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bg">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="flex-[1_0_0] h-[44px] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#3f3f46] text-[14px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Add  Attachments`}</p>
        </div>
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="content-stretch flex items-start relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full" data-name="Table-row">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-br-[4px]" />
      <TableCell15 />
    </div>
  );
}

function Tbody() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full z-[1]" data-name="tbody">
      <Bg />
      <Bg1 />
      <TableRow />
    </div>
  );
}

function OtherAttachments() {
  return (
    <div className="bg-white h-[170px] relative rounded-[4px] shrink-0 w-full" data-name="Other Attachments">
      <div className="content-stretch flex flex-col isolate items-start overflow-x-clip overflow-y-auto relative size-full">
        <Thead />
        <Tbody />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function SectionBody() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <OtherAttachments />
    </div>
  );
}

function ContentSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content-section">
      <SectionTitle />
      <SectionBody />
    </div>
  );
}

function PopupOverrideLateDues() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Popup_Override Late Dues">
      <ModalBody />
      <Textfield />
      <ContentSection />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start p-[16px] relative w-full">
        <PopupOverrideLateDues />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">Cancel</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#000000] content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">Submit</p>
      </div>
    </div>
  );
}

function ModalFooter() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="Modal footer">
      <Button />
      <Button1 />
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
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start max-w-[1100px] min-w-[1100px] p-[16px] relative rounded-[8px] shrink-0 w-[1100px]" data-name="Modal V1">
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