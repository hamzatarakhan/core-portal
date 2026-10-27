import React from 'react';
import { Palette, Pencil, Trash2 } from 'lucide-react';

interface Brand {
  id: string;
  name: string;
  primaryColor: string;
  secondaryColor: string | null;
  logo: string;
  logoFileName?: string;
  logoFileSize?: string;
  isActive: boolean;
  createdAt: string;
}

interface BrandTableFigmaProps {
  brands: Brand[];
  onEdit: (brand: Brand) => void;
  onDelete: (id: string) => void;
}

export function BrandTableFigma({ brands, onEdit, onDelete }: BrandTableFigmaProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] bg-white overflow-hidden">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
      
      {/* Header Row */}
      <div className="flex w-full">
        {/* Checkbox Column Header */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[62px]">
          <div className="bg-[#f4f4f5] content-stretch flex h-[48px] items-center py-[10px] relative rounded-tl-[4px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px]" />
            <div className="flex-[1_0_0] min-h-px min-w-px relative">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[7px] items-center px-[16px] relative w-full">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                    <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[20px]">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <rect width="14" height="14" x="1" y="1" stroke="#000000" strokeWidth="1.5" rx="2" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Logo Header */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]">
          <div className="bg-[#f4f4f5] content-stretch flex h-[48px] items-center py-[10px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-center px-[16px] relative shrink-0">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]">
                <p className="font-medium leading-[1.2] relative shrink-0 text-[#000b25] whitespace-nowrap">
                  Brand Logo
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Name Header */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[180px]">
          <div className="bg-[#f4f4f5] content-stretch flex h-[48px] items-center py-[10px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-center px-[16px] relative shrink-0">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]">
                <p className="font-medium leading-[1.2] relative shrink-0 text-[#000b25] whitespace-nowrap">
                  Brand Name
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Status Header */}
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
          <div className="bg-[#f4f4f5] content-stretch flex h-[48px] items-center py-[10px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-center px-[16px] relative shrink-0">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]">
                <p className="font-medium leading-[1.2] relative shrink-0 text-[#000b25] whitespace-nowrap">
                  Status
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Color Header */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[160px]">
          <div className="bg-[#f4f4f5] content-stretch flex h-[48px] items-center py-[10px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-center px-[16px] relative shrink-0">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]">
                <p className="font-medium leading-[1.2] relative shrink-0 text-[#000b25] whitespace-nowrap">
                  Primary Color
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Color Header */}
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
          <div className="bg-[#f4f4f5] content-stretch flex h-[48px] items-center py-[10px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-center px-[16px] relative shrink-0">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]">
                <p className="font-medium leading-[1.2] relative shrink-0 text-[#000b25] whitespace-nowrap">
                  Secondary Color
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Created Date Header */}
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
          <div className="bg-[#f4f4f5] content-stretch flex h-[48px] items-center py-[10px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex items-center px-[16px] relative shrink-0">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]">
                <p className="font-medium leading-[1.2] relative shrink-0 text-[#000b25] whitespace-nowrap">
                  Created Date
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions Header */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[118px]">
          <div className="bg-[#f4f4f5] content-stretch flex h-[48px] items-center py-[10px] relative rounded-tr-[4px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none rounded-tr-[4px]" />
            <div className="content-stretch flex items-center px-[16px] relative shrink-0">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 text-[12px]">
                <p className="font-medium leading-[1.2] relative shrink-0 text-[#000b25] whitespace-nowrap">
                  Actions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Rows */}
      {brands.map((brand, index) => {
        const isLastRow = index === brands.length - 1;
        return (
          <div key={brand.id} className="flex w-full hover:bg-[#f8fafc] transition-colors">
            {/* Checkbox Column */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[62px]">
              <div className={`bg-white content-stretch flex h-[48px] items-center relative shrink-0 w-full ${isLastRow ? 'rounded-bl-[4px]' : ''}`}>
                <div className="content-stretch flex gap-[7px] items-center px-[16px] relative shrink-0">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                    <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[20px]">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <rect width="14" height="14" x="1" y="1" stroke="#000000" strokeWidth="1.5" rx="2" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              {!isLastRow && (
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 1">
                      <line stroke="#E2E8F0" x2="62" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Brand Logo Column */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]">
              <div className="bg-white content-stretch flex h-[48px] items-center px-[16px] relative shrink-0">
                {brand.logo ? (
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="w-[20px] h-[20px] object-contain rounded-[4px]"
                  />
                ) : (
                  <div className="w-[20px] h-[20px] flex items-center justify-center rounded-[4px] bg-[#f8fafc]">
                    <Palette className="w-[12px] h-[12px] text-[#3f3f46]" />
                  </div>
                )}
              </div>
              {!isLastRow && (
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 1">
                      <line stroke="#E2E8F0" x2="140" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Brand Name Column */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[180px]">
              <div className="bg-white content-stretch flex h-[48px] items-center px-[16px] relative shrink-0">
                <p className="font-normal leading-[1.2] relative shrink-0 text-[14px] text-[rgba(0,11,37,0.64)] truncate">
                  {brand.name}
                </p>
              </div>
              {!isLastRow && (
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
                      <line stroke="#E2E8F0" x2="180" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Status Column */}
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
              <div className="bg-white content-stretch flex gap-[4px] h-[48px] items-center px-[16px] relative shrink-0">
                <div className={`content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[30px] shrink-0 ${
                  brand.isActive ? 'bg-[#edfcf2]' : 'bg-[rgba(0,11,37,0.04)]'
                }`}>
                  <div aria-hidden="true" className={`absolute border-[0.5px] border-solid inset-0 pointer-events-none rounded-[30px] ${
                    brand.isActive ? 'border-[#d3f8df]' : 'border-[rgba(0,11,37,0.08)]'
                  }`} />
                  <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
                    <p className={`leading-[normal] not-italic relative shrink-0 text-[4px] whitespace-nowrap ${
                      brand.isActive ? 'text-[#16b364]' : 'text-[rgba(0,11,37,0.48)]'
                    }`}>●</p>
                  </div>
                  <p className={`font-normal leading-[1.2] relative shrink-0 text-[10px] whitespace-nowrap ${
                    brand.isActive ? 'text-[#16b364]' : 'text-[rgba(0,11,37,0.48)]'
                  }`}>
                    {brand.isActive ? 'Active' : 'Inactive'}
                  </p>
                </div>
              </div>
              {!isLastRow && (
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 1">
                      <line stroke="#E2E8F0" x2="120" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Primary Color Column */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[160px]">
              <div className="bg-white content-stretch flex h-[48px] items-center px-[16px] relative shrink-0">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="bg-white relative rounded-[4px] shrink-0 size-[20px]">
                    <div className="content-stretch flex gap-[2px] items-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
                      <div 
                        className="flex-[1_0_0] h-full min-h-px min-w-px rounded-[2px]" 
                        style={{ backgroundColor: brand.primaryColor }}
                      />
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  </div>
                  <p className="font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[12px] whitespace-nowrap">
                    {brand.primaryColor}
                  </p>
                </div>
              </div>
              {!isLastRow && (
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 1">
                      <line stroke="#E2E8F0" x2="160" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Secondary Color Column */}
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
              <div className="bg-white content-stretch flex h-[48px] items-center px-[16px] relative shrink-0">
                {brand.secondaryColor ? (
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <div className="bg-white relative rounded-[4px] shrink-0 size-[20px]">
                      <div className="content-stretch flex gap-[4px] items-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
                        <div 
                          className="flex-[1_0_0] h-full min-h-px min-w-px rounded-[2px]" 
                          style={{ backgroundColor: brand.secondaryColor }}
                        />
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    </div>
                    <p className="font-normal leading-[1.2] relative shrink-0 text-[#000b25] text-[12px] whitespace-nowrap">
                      {brand.secondaryColor}
                    </p>
                  </div>
                ) : (
                  <p className="font-normal italic leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.48)] whitespace-nowrap">
                    Uses primary
                  </p>
                )}
              </div>
              {!isLastRow && (
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 1">
                      <line stroke="#E2E8F0" x2="120" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Created Date Column */}
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
              <div className="bg-white content-stretch flex h-[48px] items-center px-[16px] relative shrink-0">
                <p className="font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,11,37,0.64)] whitespace-nowrap">
                  {new Date(brand.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </p>
              </div>
              {!isLastRow && (
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 1">
                      <line stroke="#E2E8F0" x2="120" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Actions Column */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[118px]">
              <div className={`bg-white content-stretch flex h-[48px] items-center px-[16px] relative shrink-0 ${isLastRow ? 'rounded-br-[4px]' : ''}`}>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onEdit(brand)}
                    className="relative size-[24px] flex items-center justify-center rounded-full hover:bg-[#000000]/5 transition-all active:scale-95"
                    title="Edit brand"
                  >
                    <Pencil className="w-[12px] h-[12px] text-[#000000]" />
                  </button>
                  <button
                    onClick={() => onDelete(brand.id)}
                    className="relative size-[24px] flex items-center justify-center rounded-full hover:bg-[#f02b02]/5 transition-all active:scale-95"
                    title="Delete brand"
                  >
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" fill="#F02B02" fillOpacity="0.05" r="12" />
                    </svg>
                    <Trash2 className="w-[12px] h-[12px] text-[#f02b02] relative z-10" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
