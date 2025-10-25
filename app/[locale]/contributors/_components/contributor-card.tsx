import { TranslationProps } from "@/types/translation";
import { contributorsSocialIconsArray } from "@/content/contributors/contributors-social-icons";
import { Contributor } from "@/content/contributors/type";
import { Link } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";
import Image from "next/image";

export const ContributorCard = async ({
  contributor,
  t,
}: TranslationProps & {
  contributor: Contributor;
}) => {
  const getTranslatedTitle = (title: string) => {
    if (title === "Creator") return t("roles.creator");
    if (title === "Contributor") return t("roles.contributor");
    return title;
  };
  const locale = await getLocale();

  const getDisplayName = () =>
    locale === "fa" && contributor.nameFa
      ? contributor.nameFa
      : contributor.name;

  return (
    <div className="rounded-2xl pt-5 px-3 border hover:scale-105 duration-300 shadow-sm hover:shadow-md transition-all">
      <div className="flex flex-col items-center w-full gap-2 mb-4">
        <div className="text-xl font-bold">{getDisplayName()}</div>
        <div className="text-sm text-muted-foreground">
          {getTranslatedTitle(contributor.title)}
        </div>
      </div>

      <div className="flex justify-center items-center w-full h-[400px] sm:h-[300px] relative overflow-hidden rounded-lg">
        <Image
          src={contributor.picture}
          alt={getDisplayName()}
          fill
          className="object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-row justify-evenly items-center gap-2 mt-3 pb-2">
        {contributorsSocialIconsArray(contributor).map(
          (item) =>
            item.url && (
              <Link
                key={item.key}
                href={item.url}
                className="flex justify-center items-center w-10 h-10 rounded-full transition transform duration-300 hover:bg-primary/10"
              >
                <Image
                  src={item.icon}
                  alt={getDisplayName()}
                  width={20}
                  height={20}
                  className="object-cover object-center dark:brightness-100 dark:invert hover:brightness-125 transition duration-300"
                />
              </Link>
            )
        )}
      </div>
    </div>
  );
};
