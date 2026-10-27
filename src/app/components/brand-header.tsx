import React from 'react';
import { ArrowLeft } from 'lucide-react';
import img59 from "figma:asset/b24745fcb2f3b6fd6f823ae99430dfe5ab8cd460.png";

function Icon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[5px] py-px relative shrink-0" data-name="Icon">
      <div className="flex flex-col font-['Font_Awesome_6_Pro:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,11,37,0.57)] whitespace-nowrap">
        <p className="leading-[1.2]">{`\uF105`}</p>
      </div>
    </div>
  );
}

function Item({ onClick, isClickable }: { onClick?: () => void; isClickable?: boolean }) {
  return (
    <button 
      onClick={onClick}
      disabled={!isClickable}
      className={`content-stretch flex gap-[4px] items-center relative shrink-0 ${isClickable ? 'cursor-pointer hover:bg-[#f8fafc] rounded px-2 py-1 -mx-2 -my-1 transition-colors active:scale-95' : 'cursor-default'}`}
      data-name="Item"
    >
      <div className="content-stretch flex items-center relative shrink-0" data-name="Breadcrumb Text">
        <p className={`font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] whitespace-nowrap ${isClickable ? 'text-[#0072ce] hover:text-[#005fa3]' : 'text-[rgba(0,11,37,0.64)]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
          Brands
        </p>
      </div>
      <Icon />
    </button>
  );
}

function BreadcrumbText() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Breadcrumb Text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Brand X Details
      </p>
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
    <div className="h-full relative rounded-[4px] shrink-0" data-name="Profile">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-full items-center justify-center p-[8px] relative">
          <DisplayPictureVariants />
        </div>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#000b25] text-[14px] w-[94px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mitchell Admin
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-full relative rounded-[8px] shrink-0" data-name="Icon">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-full items-center justify-center p-[4px] relative">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Button">
            <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap">
              <p className="leading-[normal]">{`\uF107`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchConatiner() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Search conatiner">
      <div className="content-stretch flex items-center justify-center relative rounded-[160px] shrink-0 size-[40px]" data-name="Button">
        <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">
          <p className="leading-[normal]">{`\uF4B6`}</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[160px] shrink-0 size-[40px]" data-name="Button">
        <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(0,11,37,0.57)] text-center whitespace-nowrap">
          <p className="leading-[normal]">Clock</p>
        </div>
      </div>
      <div className="content-stretch flex items-center px-[8px] relative self-stretch shrink-0" data-name="User">
        <Profile />
        <Name />
        <Icon1 />
      </div>
    </div>
  );
}

function Search() {
  return <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[40px] items-center min-h-px min-w-px" data-name="Search" />;
}

function Cta() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-h-px min-w-px relative" data-name="CTA">
      <button className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0 hover:bg-[#f8fafc] transition-colors active:scale-95" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#0072ce] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0071cd] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[normal]">close</p>
        </div>
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0071cd] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[1.2]">{`Cancel `}</p>
        </div>
      </button>
      <button className="bg-[#0072ce] content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0 hover:bg-[#0066ba] transition-colors active:scale-95" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#0072ce] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[normal]">save</p>
        </div>
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[1.2]">Save</p>
        </div>
      </button>
    </div>
  );
}

interface BrandHeaderProps {
  isDetailView?: boolean;
  brandName?: string;
  onBack?: () => void;
  onSave?: () => void;
  onCancel?: () => void;
}

export function BrandHeader({ isDetailView = false, brandName = 'Brand X', onBack, onSave, onCancel }: BrandHeaderProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[0px_3px_20px_0px_rgba(0,0,0,0.05)] w-full" data-name="SalesPoint - Top Bar">
      <div className="bg-white relative shrink-0 w-full" data-name="SalesPoint - Top-header">
        <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] py-[12px] relative w-full">
            <div className="content-stretch flex gap-[4px] h-[40px] items-center px-[16px] py-[12px] relative rounded-[4px] shrink-0" data-name="Breadcrumb">
              {isDetailView && onBack && (
                <button
                  onClick={onBack}
                  className="flex items-center gap-2 mr-2 text-[rgba(0,11,37,0.64)] hover:text-[#000b25] transition-colors active:scale-95"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              <Item onClick={onBack} isClickable={isDetailView} />
              <div className="content-stretch flex items-center relative shrink-0" data-name="Item">
                {isDetailView ? (
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Breadcrumb Text">
                    <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#000b25] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {brandName} Details
                    </p>
                  </div>
                ) : (
                  <BreadcrumbText />
                )}
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0" data-name="User card">
              <SearchConatiner />
            </div>
          </div>
        </div>
      </div>
      {isDetailView && (
        <div className="bg-white relative shrink-0 w-full" data-name="SalesPoint - Action Bar">
          <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative w-full">
              <Search />
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-h-px min-w-px relative" data-name="CTA">
                <button
                  onClick={onCancel || onBack}
                  className="content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0 hover:bg-[#f8fafc] transition-colors active:scale-95"
                  data-name="Button"
                >
                  <div aria-hidden="true" className="absolute border border-[#0072ce] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0071cd] text-[14px] text-center whitespace-nowrap">
                    <p className="leading-[normal]">close</p>
                  </div>
                  <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0071cd] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.2]">{`Cancel `}</p>
                  </div>
                </button>
                <button
                  onClick={onSave}
                  className="bg-[#0072ce] content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] relative rounded-[4px] shrink-0 hover:bg-[#0066ba] transition-colors active:scale-95"
                  data-name="Button"
                >
                  <div aria-hidden="true" className="absolute border border-[#0072ce] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <div className="flex flex-col font-['Font_Awesome_6_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
                    <p className="leading-[normal]">save</p>
                  </div>
                  <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.2]">Save</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}