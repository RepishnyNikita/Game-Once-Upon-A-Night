import Cell from "./Cell.jsx";
import { maxCellInventory } from "./inventory.js";
import "./Inventory.scss";


export default function Inventory({ activeMenu }) {
 
  return (
    <ul className={activeMenu === 'inventory' ? 'inventory is-active' : 'inventory'}>
        {maxCellInventory.map(idCell => <Cell key={idCell} itemId={idCell}/>)}
    </ul>
  );
}
