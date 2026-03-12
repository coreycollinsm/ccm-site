import { CardHeader } from "@/components/ui";

type Metric = {
  metric: string;
  description: string;
};

interface Props {
  className?: string;
  header: string;
  metrics: Metric[];
  subtitle?: string;
}

export const MetricsCard = ({
  className,
  header,
  metrics,
  subtitle,
}: Props) => {
  return (
    <div
      className={`${className} padding card round flex flex-col justify-between gap-8 sm:gap-16`}
    >
      <CardHeader header={header} subtitle={subtitle} />
      <div className="grid grid-cols-2 gap-8">
        {metrics.map((i) => {
          const { metric, description } = i;
          return (
            <div key={description}>
              <p className="text-3xl font-semibold">{metric}</p>
              <p className="text-(--medium-gray)">{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
