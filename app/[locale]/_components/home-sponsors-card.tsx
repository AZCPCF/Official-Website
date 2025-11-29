import { Motion } from "@/components/motion";
import { HomeSponsor } from "@/content/home/home-sponsors";
import { Link } from "@/i18n/navigation";

export const HomeSponsorCard = (item: HomeSponsor) => (
  <Link href={item.url} key={item.imageName} target="_blank">
    <Motion
      className="p-2 rounded-lg border-3 bg-primary-light/20 dark:bg-neutral-600 border-transparent hover:bg-white dark:hover:bg-neutral-500 hover:not-dark:border-primary transition-colors duration-200 h-18 flex items-center justify-center hover:dark:*:grayscale-0"
      initial={{ y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.1 }}
    >
      <img
        src={"/sponsors/" + item.imageName}
        className="grayscale object-contain w-full h-full"
      />
    </Motion>
  </Link>
);
