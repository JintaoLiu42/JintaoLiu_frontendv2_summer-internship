import PageContainer from '@/components/layout/page-container';
import SettingsComponent from './settings-create-form';

export default function SettingsPage() {
  return (
    <PageContainer>
      <div className="space-y-4">
        <SettingsComponent />
      </div>
    </PageContainer>
  );
}
