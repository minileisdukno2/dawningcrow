import {useParams} from "react-router-dom";
import "./index.css";

const RelatedItem = ({ list }) => {

  const params = useParams();
  
  return (
    <div className="related_items_container">
      <div className="related_items">
        {list.slice(0,6).map((item) =>{ 
          return (
            <a href={`/${params.collection}/${item.id}`}>
            <img src={item.image} alt={item.title}/>
            <div>
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
          </a>
          )
        })}
        
      </div>
    </div>
  );
};

export default RelatedItem;
