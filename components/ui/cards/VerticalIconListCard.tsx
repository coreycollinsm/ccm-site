import { IconType } from "react-icons";
import { CardHeader } from "@/components/ui";

type ListType = {
  icon: IconType;
  title: string;
  description: string;
};

interface Props {
  className?: string;
  header: string;
  list: ListType[];
  subtitle?: string;
}

export const VerticalIconListCard = ({
  className,
  header,
  list,
  subtitle,
}: Props) => {
  return (
    <div
      className={`card round padding ${className} flex flex-col gap-4 justify-between`}
    >
      <CardHeader header={header} subtitle={subtitle} />
      <div className="flex flex-col gap-8">
        {list.map((entry) => {
          const { icon: Icon, title, description } = entry;
          return (
            <div key={title} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Icon className="text-2xl" />
                <p>{title}</p>
              </div>
              <p className="text-(--light-gray) text-sm">{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
