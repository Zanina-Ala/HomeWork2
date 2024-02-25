import './Category.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Category({ icon, value1, value2, bgcolor, txtcolor, bgborder }) {
    return (
      <div className="category-txt" style={{ backgroundColor: bgcolor, color: txtcolor, border: bgborder }}>
        <div className="first-category-txt">
          <span className="icon">
            <FontAwesomeIcon icon={icon} />
          </span>
          <span className="value1">{value1}</span>
        </div>
        <span className="value2">{value2}</span>
      </div>
    );
  }
  
  export default Category;