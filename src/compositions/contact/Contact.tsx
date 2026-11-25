import "./Contact.module.scss";

export interface ContactProps {
  placeholder?: string;
}

const Contact = ({ placeholder = "Contact" }: ContactProps) => {
  return <p>{placeholder}</p>;
};

export default Contact;
