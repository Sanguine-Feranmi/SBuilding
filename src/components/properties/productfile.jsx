import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '/fcard.png';
import { DoorOpen, BedDouble, Bath } from 'lucide-react';

const cardTxt = [
  {
    id: "seaside-serenity-villa",
    title: 'Seaside Serenity Villa',
    location: 'Malibu, California',
    desc: 'Discover your piece of paradise with the Seaside Serenity Villa. This stunning property features open floor plans, breathtaking ocean views, and direct access to pristine sandy beaches.',
    images: [image],
    icons: [
      { name: '4-Bedroom', icon: <BedDouble size={18} /> },
      { name: '3-Bathroom', icon: <Bath size={18} /> },
      { name: 'Villa', icon: <DoorOpen size={18} /> }
    ],
    price: 1250000,
    btn: 'View Property Details'
  },
  {
    id: "rusty-retreat-cottage",
    title: 'Rusty Retreat Cottage',
    location: 'Mountain View, Colorado',
    desc: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community with modern amenities and beautiful mountain views.',
    images: [image],
    icons: [
      { name: '3-Bedroom', icon: <BedDouble size={18} /> },
      { name: '2-Bathroom', icon: <Bath size={18} /> },
      { name: 'Cottage', icon: <DoorOpen size={18} /> }
    ],
    price: 550000,
    btn: 'View Property Details'
  },
  {
    id: "urban-loft-downtown",
    title: 'Urban Loft Downtown',
    location: 'New York, NY',
    desc: 'Modern downtown loft with industrial design, high ceilings, and panoramic city views in the heart of Manhattan.',
    images: [image],
    icons: [
      { name: '2-Bedroom', icon: <BedDouble size={18} /> },
      { name: '2-Bathroom', icon: <Bath size={18} /> },
      { name: 'Loft', icon: <DoorOpen size={18} /> }
    ],
    price: 850000,
    btn: 'View Property Details'
  },
  {
    id: "family-estate-suburbs",
    title: 'Family Estate Suburbs',
    location: 'Austin, Texas',
    desc: 'Spacious family home with large backyard, modern kitchen, and excellent school district in quiet suburban neighborhood.',
    images: [image],
    icons: [
      { name: '5-Bedroom', icon: <BedDouble size={18} /> },
      { name: '4-Bathroom', icon: <Bath size={18} /> },
      { name: 'House', icon: <DoorOpen size={18} /> }
    ],
    price: 720000,
    btn: 'View Property Details'
  },
];

export const Productfile = () => {
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const MAX_LENGTH = 70;

  const visibleCards = showAll ? cardTxt : cardTxt.slice(0, 4);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-8 w-full md:w-full mx-auto mt-20">
      <div className="prod-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mx-auto ">
        {visibleCards.map((item, index) => {
          const isExpanded = expandedIndex === index;
          const shortText = item.desc.slice(0, MAX_LENGTH);

          return (
            <div 
              key={item.id} 
              className="prod-card cursor-pointer" 
              onClick={() => navigate(`/property/${item.id}`)}
            >
              <img src={item.images[0]} alt={item.title} className="w-full mb-2" />

              <div className="desc flex flex-col items-start w-full">
                <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.location}</p>

                <p className="text-gray-400 mt-2">
                  {isExpanded ? item.desc : shortText}
                  {!isExpanded && item.desc.length > MAX_LENGTH && '...'}
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleReadMore(index);
                    }}
                    className="ml-2 text-purple-500 cursor-pointer font-medium"
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </span>
                </p>

                <div className="icons flex gap-4 mt-3">
                  {item.icons.map((iconItem, idx) => (
                    <span key={idx} className="flex items-center gap-2 rounded px-[4px] text-sm border-2">
                      {iconItem.icon}
                      <span>{iconItem.name}</span>
                    </span>
                  ))}
                </div>

                <p className="font-bold mt-2">
                  ${item.price.toLocaleString()}
                </p>
              </div>

              <button className="mt-4 w-full bg-purple-600 text-white py-3 rounded-xl">
                {item.btn}
              </button>
            </div>
          );
        })}
      </div>

      {cardTxt.length > 3 && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className=" transition text-purple-600 hover:text-purple-400 underline cursor-pointer px-6 py-3 rounded-xl font-medium"
          >
            {showAll ? 'Close View' : 'View All Properties'}
          </button>
        </div>
      )}
    </div>
  );
};
