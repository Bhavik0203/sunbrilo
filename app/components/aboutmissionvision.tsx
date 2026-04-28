// MissionVisionValues.jsx

export default function MissionVisionValues() {
  return (
    <div className="bg-[#D6E4F0] flex items-center justify-center p-8 rounded-xl">
      <div className="w-full max-w-4xl">

        {/* Title */}
        <h1 className="text-center text-2xl font-normal text-gray-700 mb-8">
          Mission, Vision & Values
        </h1>

        {/* Mission Row */}
        <div className="flex items-center ">
          <div className="flex flex-col items-center " style={{ minWidth: 130 }}>
            <MissionIcon />
            <p className="font-bold text-gray-800 mt-2 text-base">Mission</p>
          </div>
          <div className="bg-white p-5 flex-1 max-w-lg text-sm text-gray-600 leading-relaxed text-center">
            <span className="font-bold text-gray-800">Enterprise Software</span>
            {" "}: Customized enterprise software solutions designed to
            streamline business processes and improve operational efficiency.
          </div>
        </div>

        {/* Vision Row */}
        <div className="flex items-center justify-end">
          <div className="bg-white p-5 flex-1 max-w-lg text-sm text-gray-600 leading-relaxed  text-center">
            <span className="font-bold text-gray-800">Enterprise Software</span>
            {" "}: Customized enterprise software solutions designed to
            streamline business processes and improve operational efficiency.
          </div>
          <div className="flex flex-col items-center" style={{ minWidth: 130 }}>
            <VisionIcon />
            <p className="font-bold text-gray-800 mt-2 text-base">Vision</p>
          </div>
        </div>

      </div>
    </div>
  );
}

function MissionIcon() {
  return (
    <img 
      src="/images/mission.png" 
      alt="Mission" 
      width="260" 
      height="260"
      className="object-contain"
    />
  );
}

function VisionIcon() {
  return (
    <img 
      src="/images/vision.png" 
      alt="Vision" 
      width="260" 
      height="260"
      className="object-contain"
    />
  );
}