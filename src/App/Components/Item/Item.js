import ItemPreview from "../ItemPreview/ItemPreview";
import "./styleItem.css";

export default function Item({ item }) {
  return (
    <div className="item">
      <h2 className="item_title">{item.title}</h2>
      <div
        style={{
          display: "flex",
         
        }}
      >
        {item.items
          .filter((item, index) => index < 4)
          .map((item) => (
            <ItemPreview item={item} key={item.id} />
          ))}
      </div>
    </div>
  );
}
