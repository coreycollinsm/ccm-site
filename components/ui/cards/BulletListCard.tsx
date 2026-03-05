import { CardHeader } from "@/components/ui";

type ListItemType = {
  header: string;
  listItems: string[];
};

interface Props {
  bulletListAsTextArray: ListItemType[];
  className?: string;
  header: string;
  subtitle?: string;
}

export const BulletListCard = ({
  bulletListAsTextArray,
  className,
  header,
  subtitle,
}: Props) => {
  return (
    <div className={`${className} card round padding flex flex-col gap-4`}>
      <CardHeader header={header} subtitle={subtitle} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 list">
        {bulletListAsTextArray.map((item) => {
          const { header, listItems } = item;
          return (
            <ListItem key={header} header={header} listItems={listItems} />
          );
        })}
      </div>
    </div>
  );
};

const ListItem = ({ header, listItems }: ListItemType) => {
  return (
    <div>
      <p className="text-sm font-semibold">{header}</p>
      {listItems.map((item) => {
        return (
          <p className="text-xs" key={item}>
            {item}
          </p>
        );
      })}
    </div>
  );
};
