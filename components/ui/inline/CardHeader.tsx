interface Props {
  className?: string;
  darkMode?: boolean;
  header: string;
  subtitle?: string;
}

export const CardHeader = ({
  className,
  darkMode = false,
  header,
  subtitle,
}: Props) => {
  const dividerStyles = darkMode ? "border-(--dark-gray)" : "border-(--border)";

  return (
    <div className={`${className} border-b-2 pb-4 mb-4 ${dividerStyles}`}>
      <h3 className="mb-2">{header}</h3>
      {subtitle && <p className="">{subtitle}</p>}
    </div>
  );
};
