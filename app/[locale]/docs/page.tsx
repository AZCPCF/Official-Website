import { redirect } from '@/i18n/navigation';
import { getLocale } from 'next-intl/server';

export const href = '/docs/getting-started/introduction';

export const dynamic = 'force-static';

export default async function DocsMainPage() {
  const locale = await getLocale();
  redirect({ href, locale });
}