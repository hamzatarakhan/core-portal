import clsx from "clsx";
type StatusBadgeTextProps = {
  text: string;
};

function StatusBadgeText({ text }: StatusBadgeTextProps) {
  return (
    <div className="bg-[#fff7e6] h-[26.5px] relative rounded-[3.35544e+07px] shrink-0 w-[100px]">
      <div aria-hidden="true" className="absolute border border-[#fff7e6] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[17px] py-[5px] relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[#fa8c16] text-[11px] text-nowrap">{text}</p>
      </div>
    </div>
  );
}
type TextText2Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText2({ text, additionalClassNames = "" }: TextText2Props) {
  return (
    <div className={clsx("absolute content-stretch flex h-[12px] items-start top-[21.25px] w-[17.281px]", additionalClassNames)}>
      <p className="font-['Arial:Regular',sans-serif] leading-[13.5px] not-italic relative shrink-0 text-[#99a1af] text-[9px] text-nowrap text-right">{text}</p>
    </div>
  );
}
type TableCellText2Props = {
  text: string;
  additionalClassNames?: string;
};

function TableCellText2({ text, additionalClassNames = "" }: TableCellText2Props) {
  return (
    <div className={clsx("absolute h-[55px] top-0 w-[169.063px]", additionalClassNames)}>
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[16.5px] left-[12px] not-italic text-[#99a1af] text-[11px] text-nowrap top-[17.25px]">{text}</p>
    </div>
  );
}
type TableCellText1Props = {
  text: string;
};

function TableCellText1({ text }: TableCellText1Props) {
  return (
    <div className="absolute h-[55px] left-[995.97px] top-0 w-[270.656px]">
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[15px] left-[12px] not-italic text-[#99a1af] text-[10px] text-nowrap top-[19px]">{text}</p>
    </div>
  );
}
type TableCellTextProps = {
  text: string;
};

function TableCellText({ text }: TableCellTextProps) {
  return (
    <div className="absolute h-[55px] left-[722.59px] top-0 w-[273.375px]">
      <p className="absolute font-['Arial:Italic',sans-serif] italic leading-[16.5px] left-[12px] text-[#6a7282] text-[11px] text-nowrap top-[17.25px]">{text}</p>
    </div>
  );
}
type TextText1Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText1({ text, additionalClassNames = "" }: TextText1Props) {
  return (
    <div className={clsx("h-[13.5px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[13.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[9px] tracking-[0.45px] uppercase">{text}</p>
      </div>
    </div>
  );
}
type TextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextText({ text, additionalClassNames = "" }: TextTextProps) {
  return (
    <div className={clsx("basis-0 grow min-h-px min-w-px relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16.5px] not-italic relative shrink-0 text-[#364153] text-[11px] text-nowrap">{text}</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#f3f9fd] content-stretch flex flex-col items-start relative size-full">
      <div className="h-[55px] relative shrink-0 w-full" data-name="Table Row">
        <div className="absolute border-[#e2e8f0] border-[0px_1px_0px_0px] border-solid h-[55px] left-0 top-0 w-[40px]" data-name="Table Cell" />
        <div className="absolute h-[55px] left-[40px] top-0 w-[682.594px]" data-name="Table Cell">
          <div className="absolute h-[30px] left-[12.5px] top-[12.5px] w-[658.094px]" data-name="Container">
            <div className="absolute bg-[#e5e7eb] h-[16px] left-[16px] top-[4px] w-px" data-name="Container" />
            <div className="absolute content-stretch flex flex-col h-[30px] items-start left-[25px] top-0 w-[124.953px]" data-name="Container">
              <TextText text="Extended Run - Region A" additionalClassNames="w-[124.953px]" />
              <TextText1 text="Extended Execution" additionalClassNames="w-[124.953px]" />
            </div>
          </div>
        </div>
        <TableCellText text="Senior Manager Plan" />
        <TableCellText1 text="2025-06-15 14:00" />
        <TableCellText2 text="2025-04-01" additionalClassNames="left-[1266.63px]" />
        <TableCellText2 text="2025-06-30" additionalClassNames="left-[1435.69px]" />
        <div className="absolute h-[55px] left-[1604.75px] top-0 w-[163.266px]" data-name="Table Cell">
          <p className="absolute font-['Arial:Regular',sans-serif] leading-[16.5px] left-[151.47px] not-italic text-[#99a1af] text-[11px] text-nowrap text-right top-[17.25px] translate-x-[-100%]">142</p>
        </div>
        <div className="absolute h-[55px] left-[1768.02px] top-0 w-[222.688px]" data-name="Table Cell">
          <TextText2 text="USD" additionalClassNames="left-[141.34px]" />
          <p className="absolute font-['Arial:Regular',sans-serif] leading-[16.5px] left-[211.63px] not-italic text-[#4a5565] text-[11px] text-nowrap text-right top-[17.25px] translate-x-[-100%]">12,450.00</p>
        </div>
        <div className="absolute h-[55px] left-[1990.7px] top-0 w-[261.297px]" data-name="Table Cell">
          <div className="absolute content-stretch flex h-[26.5px] items-start justify-center left-[12px] opacity-80 pl-0 pr-[0.016px] py-0 top-[14.25px] w-[237.297px]" data-name="Container">
            <StatusBadgeText text="Feeding" />
          </div>
        </div>
      </div>
      <div className="h-[55px] relative shrink-0 w-full" data-name="Table Row">
        <div className="absolute border-[#e2e8f0] border-[0px_1px_0px_0px] border-solid h-[55px] left-0 top-0 w-[40px]" data-name="Table Cell" />
        <div className="absolute h-[55px] left-[40px] top-0 w-[682.594px]" data-name="Table Cell">
          <div className="absolute h-[30px] left-[12.5px] top-[12.5px] w-[658.094px]" data-name="Container">
            <div className="absolute bg-[#e5e7eb] h-[16px] left-[16px] top-[4px] w-px" data-name="Container" />
            <div className="absolute content-stretch flex flex-col h-[30px] items-start left-[25px] top-0 w-[124.219px]" data-name="Container">
              <TextText text="Extended Run - Region B" additionalClassNames="w-[124.219px]" />
              <TextText1 text="Extended Execution" additionalClassNames="w-[124.219px]" />
            </div>
          </div>
        </div>
        <TableCellText text="Senior Manager Plan" />
        <TableCellText1 text="2025-06-16 09:30" />
        <TableCellText2 text="2025-04-01" additionalClassNames="left-[1266.63px]" />
        <TableCellText2 text="2025-06-30" additionalClassNames="left-[1435.69px]" />
        <div className="absolute h-[55px] left-[1604.75px] top-0 w-[163.266px]" data-name="Table Cell">
          <p className="absolute font-['Arial:Regular',sans-serif] leading-[16.5px] left-[151.41px] not-italic text-[#99a1af] text-[11px] text-nowrap text-right top-[17.25px] translate-x-[-100%]">89</p>
        </div>
        <div className="absolute h-[55px] left-[1768.02px] top-0 w-[222.688px]" data-name="Table Cell">
          <TextText2 text="USD" additionalClassNames="left-[147.45px]" />
          <p className="absolute font-['Arial:Regular',sans-serif] leading-[16.5px] left-[210.73px] not-italic text-[#4a5565] text-[11px] text-nowrap text-right top-[17.25px] translate-x-[-100%]">8,120.50</p>
        </div>
        <div className="absolute h-[55px] left-[1990.7px] top-0 w-[261.297px]" data-name="Table Cell">
          <div className="absolute content-stretch flex h-[26.5px] items-start justify-center left-[12px] opacity-80 pl-0 pr-[0.016px] py-0 top-[14.25px] w-[237.297px]" data-name="Container">
            <StatusBadgeText text="Feeding" />
          </div>
        </div>
      </div>
    </div>
  );
}