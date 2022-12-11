import bulbOff from "./assets/bulboff.jpg";
import BulbOn from "./BulbOn";

export default function BulbOff({ props }) {
  return (
    <div>
      {props ? <BulbOn /> : <img src={bulbOff} alt='bulboff' width='350px' />}
    </div>
  );
}
