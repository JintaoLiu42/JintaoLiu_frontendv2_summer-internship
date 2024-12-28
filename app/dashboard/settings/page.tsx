import { SearchParams } from 'nuqs/parsers';
import SettingsPage from './_components/settings-view-page';

type pageProps = {
  searchParams: SearchParams;
};

export const metadata = {
  title: 'Dashboard : Settings'
};

export default async function Page({ searchParams }: pageProps) {
  return <SettingsPage />;
}
