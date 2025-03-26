import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function imgComment(plantName) {
  alert(`Vous voulez acheter 1 ${plantName}?  Très bon choix 🌱✨`);
}

export default function PlantItem({ cover, name, water, light, price }) {
  return (
    <li className="lmj-plant-item">
      <span className="lmj-plant-item-price">{price}$</span>
      <img
        src={cover}
        onClick={() => imgComment(name)}
        alt={`${name}cover`}
        className="lmj-plant-item-cover"
      />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}
