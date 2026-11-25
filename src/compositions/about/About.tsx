import "./About.module.scss";

export interface AboutProps {
  placeholder?: string;
}

const About = ({ placeholder = "About" }: AboutProps) => {
  return <p>{placeholder}</p>;
};

export default About;
