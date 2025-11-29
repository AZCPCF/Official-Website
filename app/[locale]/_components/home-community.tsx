import { homeCommunityArray } from "@/content/home/home-community";
import { TranslationProps } from "@/types/translation";
import { HomeCommunityCard } from "./home-community-card";

export const HomeCommunityCards = ({ t }: TranslationProps) => (
  <section id="community" className="py-20 bg-muted/50">
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t("community.title")}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t("community.subtitle")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {homeCommunityArray(t).map((item, index) => (
          <HomeCommunityCard
            key={"home-community-" + index}
            {...item}
            index={index}
          />
        ))}
      </div>
    </div>
  </section>
);
