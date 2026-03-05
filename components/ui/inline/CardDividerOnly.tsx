interface Props {
  className?: string;
  darkMode?: boolean;
}

export const CardDividerOnly = ({ className, darkMode = false }: Props) => {
  const dividerStyles = darkMode ? "bg-(--dark-gray)" : "bg-(--border)";

  return <div className={`${className} h-0.5 my-4 ${dividerStyles}`} />;
};
