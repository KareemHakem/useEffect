import "./styleMenu.css";

export default function Menu({ item }) {
  return (
    <div
      className={item.size === "large" ? "menu_img_large" : "menu_img_small"}
      style={{
        backgroundImage: `url(${item.imageUrl})`,
      }}
    >
      <div className="box">
        <h3 className="title">{item.title}</h3>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
