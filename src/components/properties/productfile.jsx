import { useState } from 'react';
import image from '/fcard.png';
import { DoorOpen, BedDouble, Bath } from 'lucide-react';
import { useEffect } from 'react';

const cardTxt = [
  {
    title: 'Rusty Retreat Cottage',
    desc: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community jhvgvdvhfdcfdfhed f dhbvwfwfvhwef j fhwfwefwr fejhfwefwe rfhwefjhwe fhwebfjhwefedhfbwd fhwebfjhwebf ehfe fhwebf wh fwe fhwef wefbwehfe fwef  c c   hebc cjh jhe ejhcbeh eh jh cjh vh v h kh dhd',
    icons: [
      { name: '4-Bedroom', icon: <BedDouble size={18} /> },
      { name: '3-Bathroom', icon: <Bath size={18} /> },
      { name: 'Villa', icon: <DoorOpen size={18} /> }
    ],
    price: 550000,
    btn: 'View Property Details'
  },
  {
    title: 'Rusty Retreat Cottage',
    desc: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community jhvgvdvhfdcfdfhed f dhbvwfwfvhwef j fhwfwefwr fejhfwefwe rfhwefjhwe fhwebfjhwefedhfbwd fhwebfjhwebf ehfe fhwebf wh fwe fhwef wefbwehfe fwef  c c   hebc cjh jhe ejhcbeh eh jh cjh vh v h kh dhd',
    icons: [
      { name: '4-Bedroom', icon: <BedDouble size={18} /> },
      { name: '3-Bathroom', icon: <Bath size={18} /> },
      { name: 'Villa', icon: <DoorOpen size={18} /> }
    ],
    price: 550000,
    btn: 'View Property Details'
  },
  {
    title: 'Rusty Retreat Cottage',
    desc: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community jhvgvdvhfdcfdfhed f dhbvwfwfvhwef j fhwfwefwr fejhfwefwe rfhwefjhwe fhwebfjhwefedhfbwd fhwebfjhwebf ehfe fhwebf wh fwe fhwef wefbwehfe fwef  c c   hebc cjh jhe ejhcbeh eh jh cjh vh v h kh dhd',
    icons: [
      { name: '4-Bedroom', icon: <BedDouble size={18} /> },
      { name: '3-Bathroom', icon: <Bath size={18} /> },
      { name: 'Villa', icon: <DoorOpen size={18} /> }
    ],
    price: 550000,
    btn: 'View Property Details'
  },
  {
    title: 'Rusty Retreat Cottage',
    desc: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community jhvgvdvhfdcfdfhed f dhbvwfwfvhwef j fhwfwefwr fejhfwefwe rfhwefjhwe fhwebfjhwefedhfbwd fhwebfjhwebf ehfe fhwebf wh fwe fhwef wefbwehfe fwef  c c   hebc cjh jhe ejhcbeh eh jh cjh vh v h kh dhd',
    icons: [
      { name: '4-Bedroom', icon: <BedDouble size={18} /> },
      { name: '3-Bathroom', icon: <Bath size={18} /> },
      { name: 'Villa', icon: <DoorOpen size={18} /> }
    ],
    price: 550000,
    btn: 'View Property Details'
  },
];

export const Productfile = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const MAX_LENGTH = 70;

  // Responsive description length based on screen width
  const getResponsiveLength = () => {
    if (window.innerWidth < 640) return 40;
    if (window.innerWidth < 1024) return 60;
    return MAX_LENGTH;
  };

  const [descLength, setDescLength] = useState(getResponsiveLength());

  useEffect(() => {
    const handleResize = () => setDescLength(getResponsiveLength());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleCards = showAll ? cardTxt : cardTxt.slice(0, 4);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-8 w-full md:w-full mx-auto mt-20">
      <div className="prod-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mx-auto ">
        {visibleCards.map((item, index) => {
          const isExpanded = expandedIndex === index;
          const responsiveShortText = item.desc.slice(0, descLength);

          return (
            <div key={index} className="prod-card flex flex-col items-start text-left">
              <img src={image} className="w-full mb-2 self-center" alt={item.title} />

              <div className="desc flex flex-col items-start w-full">
                <h1>{item.title}</h1>

                <p className="text-gray-400">
                  {isExpanded ? item.desc : responsiveShortText}
                  {!isExpanded && item.desc.length > descLength && '...'}
                  <span
                    onClick={() => toggleReadMore(index)}
                    className="ml-2 text-purple-500 cursor-pointer font-medium"
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </span>
                </p>

                <div className="icons flex gap-4 mt-3 ">
                  {item.icons.map((iconItem, idx) => (
                    <span key={idx} className="flex items-center gap-2 rounded px-[4px] text-sm border-2" >
                      {iconItem.icon}
                      <span>{iconItem.name}</span>
                    </span>
                  ))}
                </div>

                <div className="price font-bold mt-2">
                  ${item.price.toLocaleString()}
                </div>
              </div>

              <button className="btn mt-4 bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-xl font-medium self-center text-[15px] ">
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
