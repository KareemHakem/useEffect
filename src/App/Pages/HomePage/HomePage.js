import Menu from "../../Components/Menu/Menu";
import menu from "../../Data/Menu";
export default function HomePage() {
  return (
    <div style={{width: '90%', margin: 'auto'}}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {menu.map((item) => (
          <Menu key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
