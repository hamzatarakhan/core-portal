import React, { useState } from 'react';
import { Sidebar } from './components/sidebar';
import { Header } from './components/header';
import { BrandHeader } from './components/brand-header';
import { CycleTable } from './components/cycle-table';
import { CommissionPlansTable } from './components/commission-plans-table';
import { CommissionPlanForm } from './components/commission-plan-form';
import { CycleForm } from './components/cycle-form';
import { ActionsList } from './components/actions-list';
import { CycleRunDetails, ExcludedMembersView } from './components/cycle-run-details';
import { TerritoryHierarchy } from './components/territory-hierarchy';
import { OrgHierarchyPage } from './components/org-hierarchy-page';
import { StcHierarchyPage } from './components/stc-hierarchy-page';
import { FeaturesDashboard } from './components/features-dashboard';
import { SalesTeamProfile } from './components/sales-team-profile';
import { BrandList } from './components/brand-list';
import { BrandDetails } from './components/brand-management';
import { OnboardingRejectionReport } from './components/onboarding-rejection-report';
import { ComponentStates } from './components/component-states';
import { Toaster } from 'sonner';

export default function App() {
  const [currentSubItem, setCurrentSubItem] = useState('Dashboard');
  const [selectedCycle, setSelectedCycle] = useState<any | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);
  const [selectedBrandId, setSelectedBrandId] = useState<string | null>(null);

  const handleSubItemClick = (item: string) => {
    setCurrentSubItem(item);
    setSelectedCycle(null); // Reset detail view when switching sidebar items
    setSelectedPlan(null);
    setSelectedBrandId(null); // Reset brand selection
  };

  const renderContent = () => {
    if (currentSubItem === 'Dashboard') {
      return <FeaturesDashboard />;
    }

    if (currentSubItem === 'Brand Management') {
      if (selectedBrandId) {
        return (
          <BrandDetails
            brandId={selectedBrandId}
            onBack={() => setSelectedBrandId(null)}
          />
        );
      }
      return (
        <BrandList
          onBrandClick={(brandId) => setSelectedBrandId(brandId)}
          onCreateBrand={() => setSelectedBrandId('new')}
        />
      );
    }

    if (currentSubItem === 'Component States') {
      return <ComponentStates />;
    }

    if (currentSubItem === 'Onboarding Rejection Report') {
      return <OnboardingRejectionReport />;
    }

    if (currentSubItem === 'Territory Hierarchy') {
      return <OrgHierarchyPage />;
    }

    if (currentSubItem === 'STC Hierarchy') {
      return <StcHierarchyPage />;
    }

    if (currentSubItem === 'Territory Map') {
      return <TerritoryHierarchy />;
    }

    if (currentSubItem === 'Profile') {
      return <SalesTeamProfile onOpenHierarchySettings={() => handleSubItemClick('Territory Hierarchy')} />;
    }

    if (currentSubItem === 'Excluded Members') {
      return (
        <ExcludedMembersView 
          onRowClick={(cycle) => {
            setSelectedCycle(cycle);
            setCurrentSubItem('Cycle Runs');
          }} 
        />
      );
    }

    if (currentSubItem === 'Cycle Runs' && selectedCycle) {
      return <CycleRunDetails onBack={() => setSelectedCycle(null)} />;
    }

    if (currentSubItem === 'Actions') {
      return <ActionsList />;
    }

    if (currentSubItem === 'Cycle Plans') {
      if (selectedPlan) {
        return (
          <CycleForm 
            plan={selectedPlan} 
            onBack={() => setSelectedPlan(null)} 
            onSave={(data) => {
              console.log('Saving plan:', data);
              setSelectedPlan(null);
            }} 
          />
        );
      }
      return (
        <CommissionPlansTable 
          title="Cycle Plans" 
          onRowClick={(plan) => setSelectedPlan(plan)} 
        />
      );
    }

    if (currentSubItem === 'Commission Plans') {
      if (selectedPlan) {
        return (
          <CommissionPlanForm 
            plan={selectedPlan} 
            onBack={() => setSelectedPlan(null)} 
            onSave={(data) => {
              console.log('Saving commission plan:', data);
              setSelectedPlan(null);
            }} 
          />
        );
      }
      return <CommissionPlansTable onRowClick={(plan) => setSelectedPlan(plan)} />;
    }

    // Pass onRowClick only if it's "Cycle Runs" so "Cycle Plans" isn't clickable
    return (
      <CycleTable 
        title={currentSubItem}
        onRowClick={currentSubItem === 'Cycle Runs' ? (cycle) => {
          setSelectedCycle(cycle);
        } : undefined} 
      />
    );
  };

  return (
    <div className="flex h-screen w-full bg-background text-foreground overflow-hidden font-sans">
      <Toaster position="top-right" richColors />
      <Sidebar activeSubItem={currentSubItem} onSubItemClick={handleSubItemClick} />
      <div className="flex-1 flex flex-col min-w-0">
        {currentSubItem === 'Brand Management' ? (
          <BrandHeader 
            isDetailView={!!selectedBrandId}
            brandName={selectedBrandId === 'new' ? 'New Brand' : 'Leading Point'}
            onBack={() => setSelectedBrandId(null)}
            onSave={() => {
              console.log('Save brand');
              // Handle save logic here
            }}
          />
        ) : (currentSubItem !== 'Territory Map' && !selectedPlan) && (
          <Header 
            title={selectedCycle ? 'Cycle Run Details' : (currentSubItem === 'Excluded Members' ? 'Excluded Members' : (currentSubItem === 'Cycle Runs' ? 'Cycles Run' : currentSubItem))} 
            description={currentSubItem === 'Excluded Members' ? 'Overview of all members excluded across different calculation cycles.' : undefined}
          />
        )}
        <main className="flex-1 overflow-hidden">
          <div className="h-full flex flex-col bg-background">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}