import { Link } from "react-router-dom";
import { EDIT_PHOTOS_PATH } from "../routes";

interface CellProps {
  imagePath: string;
  albumTitle: string;
}

const Cell: React.FC<CellProps> = ({ imagePath, albumTitle }) => {    
  return (
    <Link to={EDIT_PHOTOS_PATH + albumTitle} className="honeycomb-cell">
      <img className="honeycomb-cell__image" src={imagePath} alt={albumTitle} />
      <div className="honeycomb-cell__title">{albumTitle}</div>
    </Link>
  );
};

export default Cell;
