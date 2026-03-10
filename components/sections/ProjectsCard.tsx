import { LinkButtonProps, ButtonLink, CardHeader } from "@/components/ui";
import { FaTags } from "react-icons/fa";

type ProjectType = {
  header: string;
  description: string;
  features: string[];
  ctas?: LinkButtonProps[];
  tags?: string[];
};

interface Props {
  className?: string;
  header: string;
  projects: ProjectType[];
  subtitle?: string;
}

export const ProjectsCard = ({
  className,
  header,
  projects,
  subtitle,
}: Props) => {
  return (
    <div
      className={`${className} bg-(--black) padding text-white card round flex flex-col gap-4`}
    >
      <CardHeader header={header} subtitle={subtitle} darkMode />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          const { header, description, features, ctas, tags } = project;
          return (
            <ProjectCard
              key={`project-${header}`}
              header={header}
              description={description}
              features={features}
              ctas={ctas}
              tags={tags}
            />
          );
        })}
      </div>
    </div>
  );
};

const ProjectCard = ({
  header,
  description,
  features,
  ctas,
  tags,
}: ProjectType) => {
  return (
    <div className="flex flex-col gap-8 card padding round text-(--black)">
      <ProjectCardHeader header={header} description={description} />
      <ProjectFeatureList features={features} />
      {tags && <ProjectTags tags={tags} />}
      {ctas && <ProjectButtons ctas={ctas} />}
    </div>
  );
};

const ProjectCardHeader = ({
  header,
  description,
}: {
  header: string;
  description: string;
}) => {
  return (
    <div>
      <p className="text-2xl">{header}</p>
      <p className="text-(--medium-gray)">{description}</p>
    </div>
  );
};

const ProjectFeatureList = ({ features }: { features: string[] }) => {
  return (
    <div className="flex flex-col gap-2">
      {features.map((feature) => {
        return (
          <p key={feature} className="text-xs">
            {feature}
          </p>
        );
      })}
    </div>
  );
};

const ProjectButtons = ({ ctas }: { ctas: LinkButtonProps[] }) => {
  return (
    <div className="flex gap-4 text-sm">
      {ctas.map((cta, index) => {
        const { buttonId, href, page, text } = cta;
        return (
          <ButtonLink
            buttonId={buttonId}
            external
            key={text}
            href={href}
            newTab
            page={page}
            size="small"
            style={index == 0 ? "primary" : "secondary"}
            text={text}
          />
        );
      })}
    </div>
  );
};

const ProjectTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex items-center flex-wrap gap-2 text-xs text-(--medium-gray)">
      <FaTags />
      {tags.map((tag, index) => {
        return <p key={`project${index}-tag-`}>{tag}</p>;
      })}
    </div>
  );
};
