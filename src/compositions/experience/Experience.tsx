import "./Experience.module.scss";

export interface ExperienceProps {
  placeholder?: string;
}

const Experience = ({ placeholder = "Experience" }: ExperienceProps) => {
  return <p>{placeholder}</p>;
};

export default Experience;
