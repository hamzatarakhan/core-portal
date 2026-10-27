function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative rounded-[8px]" data-name="Title">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000b25] text-[19px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">Add Attachment</p>
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
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-px relative text-[#000b25] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            Title
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Title
      </p>
      <Textfield1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Icon">
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000b25] text-[17px]">calendar</p>
    </div>
  );
}

function Textfield3() {
  return (
    <div className="bg-white h-[38px] relative rounded-[4px] shrink-0 w-full" data-name="Textfield">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-px relative text-[#000b25] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
            17/10/2024
          </p>
          <Icon />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[63px] items-start relative shrink-0 w-full" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Effective Date
      </p>
      <Textfield3 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <Textfield />
      <Textfield2 />
    </div>
  );
}

function Fileds() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Fileds">
      <Row />
    </div>
  );
}

function Line() {
  return <div className="bg-[rgba(0,11,37,0.57)] h-px shrink-0 w-[12px]" data-name="Line" />;
}

function Line1() {
  return <div className="bg-[rgba(0,11,37,0.57)] h-px shrink-0 w-[8px]" data-name="Line" />;
}

function Icon1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative" data-name="Icon">
      <Line />
      <Line1 />
    </div>
  );
}

function TextfArea() {
  return (
    <div className="bg-white h-[80px] relative rounded-[4px] shrink-0 w-full" data-name="TextfArea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start p-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-px relative text-[#000b25] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Description text  , Description text  , Description text `}</p>
          <div className="absolute bottom-[0.17px] flex items-center justify-center right-[-0.31px] size-[11.314px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-45 flex-none">
              <Icon1 />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Textfield4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Textfield">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.57)]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Description
      </p>
      <TextfArea />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0072ce] content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0072ce] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]"></p>
      </div>
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">{`Upload file `}</p>
      </div>
    </div>
  );
}

function UploadeFile() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Uploade file">
      <Button />
    </div>
  );
}

function UploadSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Upload Section">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Upload Bank Guarantee
      </p>
      <UploadeFile />
    </div>
  );
}

function ContentEditCustomerInformation() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Content - Edit customer information">
      <Fileds />
      <Textfield4 />
      <UploadSection />
    </div>
  );
}

function PopupAddAttachement() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Popup_Add Attachement">
      <ContentEditCustomerInformation />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex items-start p-[16px] relative w-full">
        <PopupAddAttachement />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0072ce] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0072ce] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">Discard</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0072ce] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0072ce] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">{`Save & New`}</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#0072ce] content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0072ce] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.2]">{`Save & Close`}</p>
      </div>
    </div>
  );
}

function ModalFooter() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="Modal footer">
      <Button1 />
      <Button2 />
      <Button3 />
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