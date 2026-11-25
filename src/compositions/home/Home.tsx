import "./Home.module.scss";

export interface HomeProps {
  placeholder?: string;
}

const Home = ({ placeholder = "Home" }: HomeProps) => {
  return <p>{placeholder}</p>;
};

export default Home;
