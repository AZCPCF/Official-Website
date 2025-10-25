import { TranslationProps } from "@/types/translation";
import { Code } from "lucide-react";

export const PlaygroundTitle = ({ t }: TranslationProps) => {
  return (
    <div className="text-center mb-12">
      <Code className="mx-auto h-16 w-16 text-blue-500 mb-4" />
      <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
        {t("title")}
      </h1>
      <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto">
        {t("subtitle")}
      </p>
    </div>
  );
};
