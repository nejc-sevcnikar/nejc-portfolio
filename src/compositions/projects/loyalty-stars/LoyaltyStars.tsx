import "./LoyaltyStars.module.scss";

export interface LoyaltyStarsProps {
  placeholder?: string;
}

const LoyaltyStars = ({ placeholder = "Loyalty Stars" }: LoyaltyStarsProps) => {
  return <p>{placeholder}</p>;
};

export default LoyaltyStars;
