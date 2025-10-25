import { homeFeaturesArray } from "@/content/home/home-features";
import { HomeFeaturesCard } from "./home-features-card";
import { TranslationProps } from "@/types/translation";

export const HomeFeaturesCards = ({ t }: TranslationProps) => (
  <section id="features" className="py-20 bg-muted/50">
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t("features.title")}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t("features.subtitle")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {homeFeaturesArray(t).map((item, index) => (
          <HomeFeaturesCard
            key={"home-features-" + index}
            {...item}
            index={index}
          />
        ))}
      </div>
    </div>
  </section>
);
