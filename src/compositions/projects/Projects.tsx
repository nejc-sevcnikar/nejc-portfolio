import "./Projects.module.scss";

export interface ProjectsProps {
  placeholder?: string;
}

const Projects = ({ placeholder = "Projects" }: ProjectsProps) => {
  return <p>{placeholder}</p>;
};

export default Projects;
