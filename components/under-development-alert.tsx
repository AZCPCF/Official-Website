import { ErrorAlert } from "@/components/ui/alert";
import { getTranslations } from "next-intl/server";

export default async function UnderDevelopmentAlert() {
  const t = await getTranslations("DocsContent.introduction.errorAlert");

  return <ErrorAlert title={t("title")}>{t("content")}</ErrorAlert>;
}
