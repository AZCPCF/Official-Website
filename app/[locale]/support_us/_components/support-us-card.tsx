import { Motion } from "@/components/motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SupportUsCardType } from "@/content/support-us/type";

export const SupportUsCard = ({
  index,
  ...item
}: SupportUsCardType & { index: number }) => {
  return (
    <Motion
      key={"support-us-card-" + index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.03, transition: { duration: 0.15 } }}
    >
      <Card className="shadow-lg border rounded-2xl transition-all duration-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {item.icon}
            {item.title}
          </CardTitle>
          <CardDescription>{item.desc}</CardDescription>
        </CardHeader>
        <CardContent>{item.content}</CardContent>
      </Card>
    </Motion>
  );
};
