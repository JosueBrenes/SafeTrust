import React from "react";

interface PropertyCardProps {
  image: string;
  title: string;
  distance: string;
  price: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  distance,
  price,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-orange-500 font-bold">{title}</h3>
        <p className="text-gray-600">{distance}</p>
        <p className="font-bold text-gray-900">${price} USD / month</p>
      </div>
      <div className="p-4 flex justify-between items-center">
        <span className="text-sm text-gray-600">Nuevo</span>
        <i className="fas fa-heart text-gray-400"></i>
      </div>
    </div>
  );
};

export default PropertyCard;