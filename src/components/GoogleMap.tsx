'use client';

// Force cache refresh for deployment
interface GoogleMapProps {
  className?: string;
  center?: { lat: number; lng: number };
  zoom?: number;
  markers?: Array<{
    position: { lat: number; lng: number };
    title: string;
    info?: string;
  }>;
}

export default function GoogleMap({ 
  className = "w-full h-96", 
  markers = []
}: GoogleMapProps) {
  return (
    <div className={`${className} rounded-xl overflow-hidden shadow-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-green-100`}>
      <div className="w-full h-full flex flex-col">
        {/* Map Header */}
        <div className="bg-emerald-600 text-white p-4">
          <h3 className="text-lg font-semibold mb-2">Massachusetts Service Areas</h3>
          <p className="text-emerald-100 text-sm">30-mile radius coverage across Massachusetts</p>
        </div>
        
        {/* Service Area Visual */}
        <div className="flex-1 relative bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50 p-6">
          {/* Massachusetts Outline Representation */}
          <div className="absolute inset-4 bg-gradient-to-r from-emerald-200/40 to-green-200/40 rounded-lg border-2 border-emerald-300/50"></div>
          
          {/* Service Locations Grid */}
          <div className="relative z-10 h-full flex flex-col justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {markers.slice(0, 6).map((marker, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md border border-emerald-200/50 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-emerald-600 rounded-full mr-2"></div>
                    <h4 className="font-semibold text-gray-900 text-sm">{marker.title}</h4>
                  </div>
                  {marker.info && (
                    <p className="text-xs text-gray-600 line-clamp-2">{marker.info}</p>
                  )}
                </div>
              ))}
            </div>
            
            {/* Coverage Indicator */}
            <div className="text-center mt-6">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-emerald-700 border border-emerald-200">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
                30+ Communities Served
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-50 px-4 py-3 text-center">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-emerald-600">Professional Installation</span> • 
            <span className="font-medium text-emerald-600 ml-1">Mass Save® Rebates</span> • 
            <span className="font-medium text-emerald-600 ml-1">Licensed & Insured</span>
          </p>
        </div>
      </div>
    </div>
  );
}