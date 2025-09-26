import { useState } from "react";
import { ReactComponent as Arrow } from "../assets/svg/arrow-right.svg";
import addresses from "../data/addresses.json";

const AddressDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => setIsOpen((prev) => !prev);

  const otherAddresses = addresses.slice(1); 

  return (
    <div className="adress" onClick={toggleList}>
      <p className="small">
        {addresses[0].city}, {addresses[0].street}
      </p>
      <div className="arrow-icon">
        <Arrow />
      </div>

      {isOpen && (
        <ul className="address-list">
          {otherAddresses.map((addr) => (
            <li key={addr.id} className="small">
              {addr.city}, {addr.street}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressDropdown;
