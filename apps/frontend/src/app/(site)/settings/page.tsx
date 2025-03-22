import { SettingsPopup } from '@gitroom/frontend/components/layout/settings.component';
import { BRAND_NAME } from '@gitroom/helpers/brand';

export const dynamic = 'force-dynamic';

import { Metadata } from 'next';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';

export const metadata: Metadata = {
  title: `${BRAND_NAME} Settings`,
  description: '',
};
export default async function Index({
  searchParams,
}: {
  searchParams: { code: string };
}) {
  return <SettingsPopup />;
}
