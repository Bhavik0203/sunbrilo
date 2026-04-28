// MissionVisionValues.jsx

export default function OurApproach() {
  return (
    <div className=" flex items-center justify-center p-8 rounded-xl">
      <div className="w-full max-w-4xl">

        {/* Title */}
        <h1 className="text-center text-2xl font-normal text-gray-700 mb-8">
         Our Approach
        </h1>

       
      
        {/* Vision Row */}
        <div className="flex items-center justify-end">
          <div className="bg-white p-5 flex-1 max-w-lg text-sm text-gray-600 leading-relaxed  text-center">
            <span className="font-bold text-gray-800">Enterprise Software</span>
            {" "}: Customized enterprise software solutions designed to
            streamline business processes and improve operational efficiency.
          </div>
          <div className="flex flex-col items-center" style={{ minWidth: 130 }}>
            <VisionIcon />
          </div>
        </div>

      </div>
    </div>
  );
}



function VisionIcon() {
  return (
    <img 
      src="/images/growth.png" 
      alt="Vision" 
      width="460" 
      height="460"
      className="object-contain"
    />
  );
}