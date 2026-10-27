import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2 } from 'lucide-react';

interface Brand {
  id: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  status: 'Active' | 'Inactive';
  usersLinked: number;
  createdDate: string;
}

interface BrandListProps {
  onBrandClick: (brandId: string) => void;
  onCreateBrand: () => void;
}

export function BrandList({ onBrandClick, onCreateBrand }: BrandListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Mock data - replace with actual data from your backend
  const [brands] = useState<Brand[]>([
    { id: '1', name: 'Leading Point', primaryColor: '#000000', secondaryColor: '#000000', status: 'Active', usersLinked: 16, createdDate: '2024-01-15' },
    { id: '2', name: 'TechCorp', primaryColor: '#FF6B35', secondaryColor: '#FFA500', status: 'Active', usersLinked: 8, createdDate: '2024-02-20' },
    { id: '3', name: 'GlobalSales', primaryColor: '#4CAF50', secondaryColor: '#8BC34A', status: 'Inactive', usersLinked: 12, createdDate: '2024-03-10' },
    { id: '4', name: 'MegaBrand', primaryColor: '#9C27B0', secondaryColor: '#E91E63', status: 'Active', usersLinked: 24, createdDate: '2024-01-05' },
    { id: '5', name: 'ElitePartners', primaryColor: '#F44336', secondaryColor: '#FF5722', status: 'Active', usersLinked: 5, createdDate: '2024-04-12' },
  ]);

  // Filter brands based on search
  const filteredBrands = brands.filter(brand =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredBrands.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBrands = filteredBrands.slice(startIndex, startIndex + itemsPerPage);

  const handleDelete = (brandId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    // Add delete confirmation logic here
    console.log('Delete brand:', brandId);
  };

  return (
    <div className="flex flex-col h-full bg-[#f8fafc] overflow-hidden">
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-auto custom-scrollbar">
        <div className="p-6 space-y-6">
          {/* Header Actions */}
          <div className="flex items-center justify-between gap-4">
            {/* Search Bar */}
            <div className="bg-white relative rounded-[4px] flex-1 max-w-[400px]">
              <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="flex items-center gap-2 px-3 h-[38px]">
                <Search className="w-4 h-4 text-[rgba(0,11,37,0.57)]" />
                <input
                  type="text"
                  placeholder="Search brands..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1); // Reset to first page on search
                  }}
                  className="flex-1 bg-transparent text-[14px] text-[rgba(0,11,37,0.57)] placeholder:text-[rgba(0,11,37,0.4)] focus:outline-none"
                />
              </div>
            </div>

            {/* Add Brand Button */}
            <button
              onClick={onCreateBrand}
              className="bg-[#000000] text-white px-4 h-[38px] rounded-[4px] flex items-center gap-2 text-[14px] font-medium hover:bg-[#262626] transition-colors active:scale-95"
            >
              <Plus className="w-4 h-4" />
              Add New Brand
            </button>
          </div>

          {/* Brands Table */}
          <div className="bg-white relative rounded-[4px]">
            <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
            
            <div className="overflow-x-auto">
              <table className="w-full">
                {/* Table Header */}
                <thead>
                  <tr className="bg-[#e4e4e7] h-[48px]">
                    <th className="text-left px-4 py-3">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-[#000b25] text-[12px]">Brand Name</p>
                      </div>
                    </th>
                    <th className="text-left px-4 py-3">
                      <p className="font-medium text-[#000b25] text-[12px]">Primary Color</p>
                    </th>
                    <th className="text-left px-4 py-3">
                      <p className="font-medium text-[#000b25] text-[12px]">Status</p>
                    </th>
                    <th className="text-left px-4 py-3">
                      <p className="font-medium text-[#000b25] text-[12px]">Users Linked</p>
                    </th>
                    <th className="text-left px-4 py-3">
                      <p className="font-medium text-[#000b25] text-[12px]">Created Date</p>
                    </th>
                    <th className="text-left px-4 py-3">
                      <p className="font-medium text-[#000b25] text-[12px]">Actions</p>
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {paginatedBrands.map((brand, index) => {
                    const rowBg = (index >= 2 && index % 2 === 0) ? 'bg-[#f8fafc]' : 'bg-white';
                    return (
                      <tr
                        key={brand.id}
                        onClick={() => onBrandClick(brand.id)}
                        className={`${rowBg} h-[48px] border-b border-[#e2e8f0] cursor-pointer hover:bg-[#f0f8ff] transition-colors`}
                      >
                        <td className="px-4 py-3">
                          <p className="font-medium text-[14px] text-[#000b25]">{brand.name}</p>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-6 h-6 rounded border border-[#e2e8f0]"
                              style={{ backgroundColor: brand.primaryColor }}
                            />
                            <p className="font-normal text-[12px] text-[rgba(0,11,37,0.64)]">{brand.primaryColor}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-[11px] font-medium ${
                            brand.status === 'Active'
                              ? 'bg-[#e6f7ed] text-[#0e8345]'
                              : 'bg-[#f5f5f5] text-[#666666]'
                          }`}>
                            {brand.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-normal text-[12px] text-[rgba(0,11,37,0.64)]">{brand.usersLinked}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-normal text-[12px] text-[rgba(0,11,37,0.64)]">{brand.createdDate}</p>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onBrandClick(brand.id);
                              }}
                              className="relative size-[24px] flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
                            >
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" fill="#000000" fillOpacity="0.05" r="12" />
                              </svg>
                              <Edit className="w-[12px] h-[12px] text-[#000000] relative z-10" />
                            </button>
                            <button
                              onClick={(e) => handleDelete(brand.id, e)}
                              className="relative size-[24px] flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
                            >
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" fill="#F02B02" fillOpacity="0.05" r="12" />
                              </svg>
                              <Trash2 className="w-[12px] h-[12px] text-[#f02b02] relative z-10" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* Empty State */}
              {paginatedBrands.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12">
                  <p className="text-[14px] text-[rgba(0,11,37,0.64)] mb-4">
                    {searchQuery ? 'No brands found matching your search' : 'No brands created yet'}
                  </p>
                  {!searchQuery && (
                    <button
                      onClick={onCreateBrand}
                      className="bg-[#000000] text-white px-4 h-[38px] rounded-[4px] flex items-center gap-2 text-[14px] font-medium hover:bg-[#262626] transition-colors active:scale-95"
                    >
                      <Plus className="w-4 h-4" />
                      Add Your First Brand
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredBrands.length > itemsPerPage && (
              <div className="border-t border-[#e2e8f0] px-4 py-3 flex items-center justify-between">
                <p className="text-[12px] text-[rgba(0,11,37,0.64)]">
                  Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredBrands.length)} of {filteredBrands.length} brands
                </p>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="px-3 h-[32px] rounded-[4px] text-[12px] font-medium border border-[#e2e8f0] bg-white hover:bg-[#f8fafc] transition-colors active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`size-[32px] rounded-[4px] text-[12px] font-medium transition-colors active:scale-95 ${
                          currentPage === page
                            ? 'bg-[#000000] text-white'
                            : 'border border-[#e2e8f0] bg-white hover:bg-[#f8fafc]'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 h-[32px] rounded-[4px] text-[12px] font-medium border border-[#e2e8f0] bg-white hover:bg-[#f8fafc] transition-colors active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
