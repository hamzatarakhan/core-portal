import svgPaths from "./svg-3evxv121nd";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <div className="absolute inset-0" style={{ "--stroke-0": "rgba(0, 113, 205, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Icon">
            <path d={svgPaths.p17146600} stroke="var(--stroke-0, #0071CD)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
      <Icon />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
      <Left />
    </div>
  );
}

function TableCell() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Table cell">
      <Checkbox />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cycle name
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Duotone:Solid',sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableText() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Table text">
      <Text />
      <Icon1 />
    </div>
  );
}

function TableCell1() {
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

function Text1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cycle Type
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Duotone:Solid',sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableText1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Table text">
      <Text1 />
      <Icon2 />
    </div>
  );
}

function TableCell2() {
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

function Text2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Frequency
      </p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Duotone:Solid',sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableText2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Table text">
      <Text2 />
      <Icon3 />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <TableText2 />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cycle Day
      </p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Duotone:Solid',sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableText3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Table text">
      <Text3 />
      <Icon4 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <TableText3 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Publish Date
      </p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Duotone:Solid',sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableText4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Table text">
      <Text4 />
      <Icon5 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableText4 />
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Linked Pans
      </p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Duotone:Solid',sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableText5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Table text">
      <Text5 />
      <Icon6 />
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

function Text6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] overflow-hidden relative shrink-0 text-[#000b25] text-[12px] text-ellipsis" style={{ fontVariationSettings: "'wdth' 100" }}>
        Execution Date Time
      </p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Duotone:Solid',sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableText6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Table text">
      <Text6 />
      <Icon7 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="content-stretch flex h-full items-center px-[16px] py-[12px] relative shrink-0" data-name="Table cell">
      <TableText6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Total Runs
      </p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Duotone:Solid',sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableText7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Table text">
      <Text7 />
      <Icon8 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableText7 />
        </div>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Active
      </p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="icon">
      <p className="css-ew64yg font-['Font_Awesome_6_Duotone:Solid',sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[rgba(0,11,37,0.57)]"></p>
    </div>
  );
}

function TableText8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Table text">
      <Text8 />
      <Icon9 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Table cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <TableText8 />
        </div>
      </div>
    </div>
  );
}

function Tr() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative self-stretch z-[1]" data-name="tr">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
    </div>
  );
}

function Thead() {
  return (
    <div className="bg-[#e6f1fa] content-stretch flex isolate items-start shrink-0 sticky top-0 w-full" data-name="thead">
      <Tr />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <div className="absolute inset-0" style={{ "--stroke-0": "rgba(0, 113, 205, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Icon">
            <path d={svgPaths.p17146600} stroke="var(--stroke-0, #0071CD)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
      <Icon10 />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Checkbox">
      <Left1 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="content-stretch flex flex-col h-[41px] items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Table cell">
      <Checkbox1 />
    </div>
  );
}

function TableText9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Cycle 1 `}</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-[12px] relative shrink-0 w-[117.13px]" data-name="Table cell">
      <TableText9 />
    </div>
  );
}

function TableText10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[78px]" data-name="Table text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Schedule..
      </p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-[12px] relative shrink-0 w-[117.13px]" data-name="Table cell">
      <TableText10 />
    </div>
  );
}

function TableText11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Monthly
      </p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-[12px] relative shrink-0 w-[117.13px]" data-name="Table cell">
      <TableText11 />
    </div>
  );
}

function TableText12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        12
      </p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-[12px] relative shrink-0 w-[117.13px]" data-name="Table cell">
      <TableText12 />
    </div>
  );
}

function TableText13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>{`2024/11/15 `}</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="content-stretch flex items-center justify-center pl-0 pr-[16px] py-[12px] relative shrink-0 w-[117.13px]" data-name="Table cell">
      <TableText13 />
    </div>
  );
}

function Tagchip() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[50px] shrink-0" data-name="Tagchip">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3
      </p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-[12px] relative shrink-0 w-[117.13px]" data-name="Table cell">
      <Tagchip />
    </div>
  );
}

function TableText14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        07/10/2025 11:00 PM
      </p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[16px] py-[12px] relative shrink-0 w-[171px]" data-name="Table cell">
      <TableText14 />
    </div>
  );
}

function Handle() {
  return <div className="bg-white rounded-[160px] shrink-0 size-[12px]" data-name="Handle" />;
}

function Toggle() {
  return (
    <div className="bg-[#bebebe] content-stretch flex h-[18px] items-center justify-end px-[3px] py-[1.5px] relative rounded-[160px] w-[30px]" data-name="Toggle">
      <Handle />
    </div>
  );
}

function Toggle1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Toggle">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Toggle />
        </div>
      </div>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="content-stretch flex h-[41px] items-center px-[16px] py-[12px] relative shrink-0 w-[117.13px]" data-name="Table cell">
      <Toggle1 />
    </div>
  );
}

function Bg() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bg">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell16 />
      <TableCell18 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <div className="absolute inset-0" style={{ "--stroke-0": "rgba(0, 113, 205, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Icon">
            <path d={svgPaths.p17146600} stroke="var(--stroke-0, #0071CD)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Left">
      <Icon11 />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Checkbox">
      <Left2 />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="content-stretch flex flex-col h-[41px] items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Table cell">
      <Checkbox2 />
    </div>
  );
}

function TableText15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Cycle 1 `}</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-[12px] relative shrink-0 w-[117.13px]" data-name="Table cell">
      <TableText15 />
    </div>
  );
}

function TableText16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[78px]" data-name="Table text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Triggered Cycle
      </p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-[12px] relative shrink-0 w-[117.13px]" data-name="Table cell">
      <TableText16 />
    </div>
  );
}

function TableText17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        -------
      </p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-[12px] relative shrink-0 w-[117.13px]" data-name="Table cell">
      <TableText17 />
    </div>
  );
}

function TableText18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        12
      </p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-[12px] relative shrink-0 w-[117.13px]" data-name="Table cell">
      <TableText18 />
    </div>
  );
}

function TableText19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>{`2024/11/15 `}</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="content-stretch flex items-center justify-center pl-0 pr-[16px] py-[12px] relative shrink-0 w-[117.13px]" data-name="Table cell">
      <TableText19 />
    </div>
  );
}

function Tagchip1() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[50px] shrink-0" data-name="Tagchip">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3
      </p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-[12px] relative shrink-0 w-[117.13px]" data-name="Table cell">
      <Tagchip1 />
    </div>
  );
}

function TableText20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table text">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        07/10/2025 11:00 PM
      </p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[16px] py-[12px] relative shrink-0 w-[171px]" data-name="Table cell">
      <TableText20 />
    </div>
  );
}

function Handle1() {
  return <div className="bg-white rounded-[160px] shrink-0 size-[12px]" data-name="Handle" />;
}

function Toggle2() {
  return (
    <div className="bg-[#bebebe] content-stretch flex h-[18px] items-center justify-end px-[3px] py-[1.5px] relative rounded-[160px] w-[30px]" data-name="Toggle">
      <Handle1 />
    </div>
  );
}

function Toggle3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Toggle">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Toggle2 />
        </div>
      </div>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="content-stretch flex h-[41px] items-center px-[16px] py-[12px] relative shrink-0 w-[117.13px]" data-name="Table cell">
      <Toggle3 />
    </div>
  );
}

function Bg1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="bg">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell25 />
      <TableCell27 />
    </div>
  );
}

function Tbody() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="tbody">
      <Bg />
      <Bg1 />
      <Bg />
    </div>
  );
}

function ContentCycleDetailsBillingContentTable() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content - Cycle Details/Billing Content - Table">
      <Thead />
      <Tbody />
    </div>
  );
}

function SectionBody() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Section-body">
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <ContentCycleDetailsBillingContentTable />
    </div>
  );
}

function ContentSection() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative z-[1]" data-name="Content-section">
      <SectionBody />
    </div>
  );
}

export default function Content() {
  return (
    <div className="content-stretch flex isolate items-start relative size-full" data-name="Content">
      <ContentSection />
    </div>
  );
}