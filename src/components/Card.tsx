import { Link } from "react-router-dom";
import { EDIT_PHOTOS_PATH } from "../routes";

interface CardProps {
  title: string;
  imagePath: string;
}
const Card: React.FC<CardProps> = ({ imagePath, title }) => {
  return (
    <>
      <Link
        to={EDIT_PHOTOS_PATH + title}
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <img src={imagePath} alt={title} />
      </Link>
    </>
  );
};

export default Card;
