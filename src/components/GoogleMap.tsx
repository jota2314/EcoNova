'use client';

import { useEffect, useRef } from 'react';

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

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export default function GoogleMap({ 
  className = "w-full h-96", 
  center = { lat: 42.5584, lng: -71.1738 }, // Wilmington, MA
  zoom = 10,
  markers = []
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    const initializeMap = () => {
      if (!window.google || !mapRef.current) return;

      // Create map
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry.fill',
            stylers: [{ color: '#f5f5f5' }]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          },
          {
            featureType: 'poi',
            elementType: 'all',
            stylers: [{ visibility: 'simplified' }]
          },
          {
            featureType: 'road',
            elementType: 'all',
            stylers: [{ saturation: -100 }, { lightness: 45 }]
          },
          {
            featureType: 'water',
            elementType: 'all',
            stylers: [{ color: '#46bcec' }, { visibility: 'on' }]
          }
        ]
      });

      mapInstanceRef.current = map;

      // Add markers
      markers.forEach((marker) => {
        const mapMarker = new window.google.maps.Marker({
          position: marker.position,
          map,
          title: marker.title,
          icon: {
            url: 'data:image/svg+xml;base64,' + btoa(`
              <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 20 12 20s12-11 12-20c0-6.627-5.373-12-12-12z" fill="#059669"/>
                <circle cx="12" cy="12" r="6" fill="white"/>
                <circle cx="12" cy="12" r="3" fill="#059669"/>
              </svg>
            `),
            scaledSize: new window.google.maps.Size(24, 32),
            anchor: new window.google.maps.Point(12, 32)
          }
        });

        if (marker.info) {
          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 8px; max-width: 200px;">
                <h4 style="margin: 0 0 8px 0; color: #059669; font-weight: 600;">${marker.title}</h4>
                <p style="margin: 0; color: #374151; font-size: 14px;">${marker.info}</p>
              </div>
            `
          });

          mapMarker.addListener('click', () => {
            infoWindow.open(map, mapMarker);
          });
        }
      });

      // Add service area circle
      const serviceCircle = new window.google.maps.Circle({
        strokeColor: '#059669',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#059669',
        fillOpacity: 0.15,
        map,
        center,
        radius: 48280, // 30 miles radius (stays within MA)
      });
    };

    const loadGoogleMaps = () => {
      if (window.google) {
        initializeMap();
        return;
      }

      if (document.querySelector('script[src*="maps.googleapis.com"]')) {
        const checkGoogle = () => {
          if (window.google) {
            initializeMap();
          } else {
            setTimeout(checkGoogle, 100);
          }
        };
        checkGoogle();
        return;
      }

      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
      console.log('Google Maps API Key:', apiKey ? 'Found' : 'Missing');
      console.log('Environment:', process.env.NODE_ENV);
      
      if (!apiKey) {
        console.error('Google Maps API key is missing. Please check your Vercel environment variables.');
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=geometry&loading=async`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      script.onerror = () => {
        console.error('Failed to load Google Maps API');
      };
      document.head.appendChild(script);
    };

    loadGoogleMaps();

    return () => {
      // Cleanup if needed
    };
  }, [center, zoom, markers]);

  return (
    <div className={`${className} rounded-xl overflow-hidden shadow-2xl border border-emerald-100`}>
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}