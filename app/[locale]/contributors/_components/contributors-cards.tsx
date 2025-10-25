import { TranslationProps } from "@/types/translation";
import { contributorsArray } from "@/content/contributors/contributors-cards";
import { ContributorCard } from "./contributor-card";

export const ContributorsCards = ({ t }: TranslationProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {contributorsArray.map((contributor, index) => (
      <ContributorCard
        t={t}
        key={"contributor-" + index}
        contributor={contributor}
      />
    ))}
  </div>
);
