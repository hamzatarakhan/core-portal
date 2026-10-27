import img59 from "figma:asset/b24745fcb2f3b6fd6f823ae99430dfe5ab8cd460.png";

function BreadcrumbText() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Breadcrumb Text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Commission Management
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[5px] py-px relative shrink-0" data-name="Icon">
      <div className="css-g0mm18 flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)]">
        <p className="css-ew64yg leading-[1.2]"></p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <BreadcrumbText />
      <Icon />
    </div>
  );
}

function BreadcrumbText1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Breadcrumb Text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cycle Plans
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[5px] py-px relative shrink-0" data-name="Icon">
      <div className="css-g0mm18 flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)]">
        <p className="css-ew64yg leading-[1.2]"></p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Item">
      <BreadcrumbText1 />
      <Icon1 />
    </div>
  );
}

function BreadcrumbText2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Breadcrumb Text">
      <p className="css-ew64yg font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Create Cycle
      </p>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Item">
      <BreadcrumbText2 />
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="content-stretch flex gap-[4px] h-[41px] items-center px-[16px] py-[12px] relative rounded-[4px] shrink-0" data-name="Breadcrumb">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[160px] shrink-0 size-[40px]" data-name="Button">
      <div className="css-g0mm18 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(0,11,37,0.57)] text-center">
        <p className="css-ew64yg leading-[normal]"></p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[160px] shrink-0 size-[40px]" data-name="Button">
      <div className="css-g0mm18 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(0,11,37,0.57)] text-center">
        <p className="css-ew64yg leading-[normal]">Clock</p>
      </div>
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative self-stretch shrink-0" data-name="Icons">
      <Button />
      <Button1 />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute bg-white inset-0 overflow-clip rounded-[7000px]" data-name="Image">
      <div className="absolute inset-0 rounded-[282.342px]" data-name="59">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[282.342px] size-full" src={img59} />
      </div>
    </div>
  );
}

function DisplayPictureVariants() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Display Picture Variants">
      <Image />
    </div>
  );
}

function Profile() {
  return (
    <div className="content-stretch flex h-full items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="Profile">
      <DisplayPictureVariants />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <p className="css-4hzbpn font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#000b25] text-[14px] w-[94px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mitchell Admin
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
      <div className="css-g0mm18 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000b25] text-[14px]">
        <p className="css-ew64yg leading-[normal]"></p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex h-full items-center justify-center p-[4px] relative rounded-[8px] shrink-0" data-name="Icon">
      <Button2 />
    </div>
  );
}

function ProfileSettings() {
  return (
    <div className="content-stretch flex items-center relative self-stretch shrink-0" data-name="Profile settings">
      <Profile />
      <Name />
      <Icon2 />
    </div>
  );
}

function SearchConatiner() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Search conatiner">
      <Icons />
      <ProfileSettings />
    </div>
  );
}

function UserCard() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[237px]" data-name="User card">
      <SearchConatiner />
    </div>
  );
}

function TopHeader() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Top-header">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <Breadcrumb />
          <UserCard />
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] py-0 relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#000000] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">Discard</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#000000] content-stretch flex gap-[8px] h-[40px] items-center justify-center leading-[0] px-[16px] py-0 relative rounded-[4px] shrink-0 text-[14px] text-white" data-name="Button">
      <div className="css-g0mm18 flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center not-italic relative shrink-0 text-center">
        <p className="css-ew64yg leading-[normal]">save</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[1.2]">Save</p>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="CTA">
      <Button3 />
      <Button4 />
    </div>
  );
}

function CtaPagination() {
  return (
    <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-name="CTA + Pagination">
      <Cta />
    </div>
  );
}

function ActionBar() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Action bar">
      <div aria-hidden="true" className="absolute border-[#e1e1e1] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[24px] py-[12px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <CtaPagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <TopHeader />
      <ActionBar />
    </div>
  );
}