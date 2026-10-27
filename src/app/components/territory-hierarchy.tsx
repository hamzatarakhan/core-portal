import React, { useState, useEffect, useRef } from 'react';
import { Search, Plus, ChevronRight, ChevronDown, MapPin } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import svgPaths from "@/imports/svg-6ne8231agq";

// Fix for default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface Territory {
  id: string;
  name: string;
  count: number;
  lat: number;
  lng: number;
  level?: number;
  children?: Territory[];
}

const territoryData: Territory[] = [
  { 
    id: '1-1', 
    name: 'Al Khoudh', 
    count: 3, 
    lat: 23.5942, 
    lng: 58.1765, 
    level: 0,
    children: [
      { 
        id: '1-1-1', 
        name: 'North Al Khoudh', 
        count: 2, 
        lat: 23.5962, 
        lng: 58.1785, 
        level: 1,
        children: [
          { 
            id: '1-1-1-1', 
            name: 'Zone A', 
            count: 1, 
            lat: 23.5972, 
            lng: 58.1795, 
            level: 2,
            children: [
              { 
                id: '1-1-1-1-1', 
                name: 'District 1', 
                count: 1, 
                lat: 23.5975, 
                lng: 58.1798, 
                level: 3,
                children: [
                  {
                    id: '1-1-1-1-1-1',
                    name: 'Sector A1',
                    count: 1,
                    lat: 23.5976,
                    lng: 58.1799,
                    level: 4,
                    children: [
                      {
                        id: '1-1-1-1-1-1-1',
                        name: 'Block 1A',
                        count: 1,
                        lat: 23.5977,
                        lng: 58.1800,
                        level: 5,
                        children: [
                          {
                            id: '1-1-1-1-1-1-1-1',
                            name: 'Unit 1A-01',
                            count: 1,
                            lat: 23.5977,
                            lng: 58.1800,
                            level: 6,
                            children: [
                              {
                                id: '1-1-1-1-1-1-1-1-1',
                                name: 'Apartment 101',
                                count: 1,
                                lat: 23.5978,
                                lng: 58.1801,
                                level: 7,
                                children: [
                                  {
                                    id: '1-1-1-1-1-1-1-1-1-1',
                                    name: 'Room A',
                                    count: 1,
                                    lat: 23.5978,
                                    lng: 58.1801,
                                    level: 8
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          { 
            id: '1-1-1-2', 
            name: 'Zone B', 
            count: 1, 
            lat: 23.5978, 
            lng: 58.1802, 
            level: 2,
            children: [
              {
                id: '1-1-1-2-1',
                name: 'District 2',
                count: 1,
                lat: 23.5979,
                lng: 58.1803,
                level: 3,
                children: [
                  {
                    id: '1-1-1-2-1-1',
                    name: 'Sector B1',
                    count: 1,
                    lat: 23.5980,
                    lng: 58.1804,
                    level: 4,
                    children: [
                      {
                        id: '1-1-1-2-1-1-1',
                        name: 'Block 2B',
                        count: 1,
                        lat: 23.5981,
                        lng: 58.1805,
                        level: 5
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      { 
        id: '1-1-2', 
        name: 'South Al Khoudh', 
        count: 1, 
        lat: 23.5932, 
        lng: 58.1755, 
        level: 1,
        children: [
          {
            id: '1-1-2-1',
            name: 'Zone C',
            count: 1,
            lat: 23.5933,
            lng: 58.1756,
            level: 2,
            children: [
              {
                id: '1-1-2-1-1',
                name: 'District 3',
                count: 1,
                lat: 23.5934,
                lng: 58.1757,
                level: 3,
                children: [
                  {
                    id: '1-1-2-1-1-1',
                    name: 'Sector C1',
                    count: 1,
                    lat: 23.5935,
                    lng: 58.1758,
                    level: 4
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  { 
    id: '1-2', 
    name: 'MUSCAT', 
    count: 4, 
    lat: 23.5880, 
    lng: 58.3829, 
    level: 0,
    children: [
      { 
        id: '1-2-1', 
        name: 'Old Muscat', 
        count: 2, 
        lat: 23.5900, 
        lng: 58.3850, 
        level: 1,
        children: [
          { 
            id: '1-2-1-1', 
            name: 'Port Area', 
            count: 1, 
            lat: 23.5910, 
            lng: 58.3860, 
            level: 2,
            children: [
              {
                id: '1-2-1-1-1',
                name: 'Dock 1',
                count: 1,
                lat: 23.5911,
                lng: 58.3861,
                level: 3,
                children: [
                  {
                    id: '1-2-1-1-1-1',
                    name: 'Terminal A',
                    count: 1,
                    lat: 23.5912,
                    lng: 58.3862,
                    level: 4,
                    children: [
                      {
                        id: '1-2-1-1-1-1-1',
                        name: 'Gate 1',
                        count: 1,
                        lat: 23.5913,
                        lng: 58.3863,
                        level: 5,
                        children: [
                          {
                            id: '1-2-1-1-1-1-1-1',
                            name: 'Berth 1A',
                            count: 1,
                            lat: 23.5914,
                            lng: 58.3864,
                            level: 6,
                            children: [
                              {
                                id: '1-2-1-1-1-1-1-1-1',
                                name: 'Dock Station 1',
                                count: 1,
                                lat: 23.5915,
                                lng: 58.3865,
                                level: 7,
                                children: [
                                  {
                                    id: '1-2-1-1-1-1-1-1-1-1',
                                    name: 'Loading Bay A',
                                    count: 1,
                                    lat: 23.5916,
                                    lng: 58.3866,
                                    level: 8,
                                    children: [
                                      {
                                        id: '1-2-1-1-1-1-1-1-1-1-1',
                                        name: 'Container Zone 1',
                                        count: 1,
                                        lat: 23.5916,
                                        lng: 58.3866,
                                        level: 9
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          { 
            id: '1-2-1-2', 
            name: 'Palace District', 
            count: 1, 
            lat: 23.5920, 
            lng: 58.3870, 
            level: 2,
            children: [
              {
                id: '1-2-1-2-1',
                name: 'Royal Quarter',
                count: 1,
                lat: 23.5921,
                lng: 58.3871,
                level: 3,
                children: [
                  {
                    id: '1-2-1-2-1-1',
                    name: 'Wing A',
                    count: 1,
                    lat: 23.5922,
                    lng: 58.3872,
                    level: 4,
                    children: [
                      {
                        id: '1-2-1-2-1-1-1',
                        name: 'Hall 1',
                        count: 1,
                        lat: 23.5923,
                        lng: 58.3873,
                        level: 5
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      { 
        id: '1-2-2', 
        name: 'Muttrah', 
        count: 2, 
        lat: 23.5860, 
        lng: 58.3810, 
        level: 1,
        children: [
          { 
            id: '1-2-2-1', 
            name: 'Souq Area', 
            count: 1, 
            lat: 23.5865, 
            lng: 58.3815, 
            level: 2,
            children: [
              {
                id: '1-2-2-1-1',
                name: 'Market Section',
                count: 1,
                lat: 23.5866,
                lng: 58.3816,
                level: 3,
                children: [
                  {
                    id: '1-2-2-1-1-1',
                    name: 'Stall Row 1',
                    count: 1,
                    lat: 23.5867,
                    lng: 58.3817,
                    level: 4,
                    children: [
                      {
                        id: '1-2-2-1-1-1-1',
                        name: 'Shop 1',
                        count: 1,
                        lat: 23.5868,
                        lng: 58.3818,
                        level: 5,
                        children: [
                          {
                            id: '1-2-2-1-1-1-1-1',
                            name: 'Counter A',
                            count: 1,
                            lat: 23.5869,
                            lng: 58.3819,
                            level: 6
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  { 
    id: '1-3', 
    name: 'Seeb', 
    count: 3, 
    lat: 23.6705, 
    lng: 58.1890, 
    level: 0,
    children: [
      { 
        id: '1-3-1', 
        name: 'Al Khoudh', 
        count: 2, 
        lat: 23.6750, 
        lng: 58.1950, 
        level: 1,
        children: [
          { 
            id: '1-3-1-1', 
            name: 'University Area', 
            count: 1, 
            lat: 23.6760, 
            lng: 58.1960, 
            level: 2,
            children: [
              { 
                id: '1-3-1-1-1', 
                name: 'Campus North', 
                count: 1, 
                lat: 23.6765, 
                lng: 58.1965, 
                level: 3,
                children: [
                  {
                    id: '1-3-1-1-1-1',
                    name: 'Building A',
                    count: 1,
                    lat: 23.6766,
                    lng: 58.1966,
                    level: 4,
                    children: [
                      {
                        id: '1-3-1-1-1-1-1',
                        name: 'Floor 1',
                        count: 1,
                        lat: 23.6767,
                        lng: 58.1967,
                        level: 5,
                        children: [
                          {
                            id: '1-3-1-1-1-1-1-1',
                            name: 'Room 101',
                            count: 1,
                            lat: 23.6768,
                            lng: 58.1968,
                            level: 6
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      { 
        id: '1-3-2', 
        name: 'Industrial Seeb', 
        count: 1, 
        lat: 23.6700, 
        lng: 58.1880, 
        level: 1,
        children: [
          {
            id: '1-3-2-1',
            name: 'Factory Zone',
            count: 1,
            lat: 23.6701,
            lng: 58.1881,
            level: 2,
            children: [
              {
                id: '1-3-2-1-1',
                name: 'Warehouse District',
                count: 1,
                lat: 23.6702,
                lng: 58.1882,
                level: 3,
                children: [
                  {
                    id: '1-3-2-1-1-1',
                    name: 'Facility 1',
                    count: 1,
                    lat: 23.6703,
                    lng: 58.1883,
                    level: 4
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  { 
    id: '1-4', 
    name: 'Al Khuwair', 
    count: 2, 
    lat: 23.6000, 
    lng: 58.4100, 
    level: 0,
    children: [
      { 
        id: '1-4-1', 
        name: 'Commercial Zone', 
        count: 1, 
        lat: 23.6010, 
        lng: 58.4110, 
        level: 1,
        children: [
          {
            id: '1-4-1-1',
            name: 'Business Park',
            count: 1,
            lat: 23.6011,
            lng: 58.4111,
            level: 2,
            children: [
              {
                id: '1-4-1-1-1',
                name: 'Office Complex A',
                count: 1,
                lat: 23.6012,
                lng: 58.4112,
                level: 3,
                children: [
                  {
                    id: '1-4-1-1-1-1',
                    name: 'Tower 1',
                    count: 1,
                    lat: 23.6013,
                    lng: 58.4113,
                    level: 4,
                    children: [
                      {
                        id: '1-4-1-1-1-1-1',
                        name: 'Floor 10',
                        count: 1,
                        lat: 23.6014,
                        lng: 58.4114,
                        level: 5
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      { 
        id: '1-4-2', 
        name: 'Residential Zone', 
        count: 1, 
        lat: 23.6020, 
        lng: 58.4120, 
        level: 1,
        children: [
          {
            id: '1-4-2-1',
            name: 'Housing Area',
            count: 1,
            lat: 23.6021,
            lng: 58.4121,
            level: 2,
            children: [
              {
                id: '1-4-2-1-1',
                name: 'Villa District',
                count: 1,
                lat: 23.6022,
                lng: 58.4122,
                level: 3,
                children: [
                  {
                    id: '1-4-2-1-1-1',
                    name: 'Street 1',
                    count: 1,
                    lat: 23.6023,
                    lng: 58.4123,
                    level: 4
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  { 
    id: '1-5', 
    name: 'Ruwi', 
    count: 3, 
    lat: 23.5947, 
    lng: 58.5459, 
    level: 0,
    children: [
      { 
        id: '1-5-1', 
        name: 'Central Ruwi', 
        count: 2, 
        lat: 23.5950, 
        lng: 58.5465, 
        level: 1,
        children: [
          { 
            id: '1-5-1-1', 
            name: 'Business District', 
            count: 1, 
            lat: 23.5955, 
            lng: 58.5470, 
            level: 2,
            children: [
              {
                id: '1-5-1-1-1',
                name: 'Financial Center',
                count: 1,
                lat: 23.5956,
                lng: 58.5471,
                level: 3,
                children: [
                  {
                    id: '1-5-1-1-1-1',
                    name: 'Bank Row',
                    count: 1,
                    lat: 23.5957,
                    lng: 58.5472,
                    level: 4,
                    children: [
                      {
                        id: '1-5-1-1-1-1-1',
                        name: 'Branch 1',
                        count: 1,
                        lat: 23.5958,
                        lng: 58.5473,
                        level: 5,
                        children: [
                          {
                            id: '1-5-1-1-1-1-1-1',
                            name: 'Floor 3',
                            count: 1,
                            lat: 23.5959,
                            lng: 58.5474,
                            level: 6
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      { 
        id: '1-5-2', 
        name: 'East Ruwi', 
        count: 1, 
        lat: 23.5940, 
        lng: 58.5450, 
        level: 1,
        children: [
          {
            id: '1-5-2-1',
            name: 'Retail Area',
            count: 1,
            lat: 23.5941,
            lng: 58.5451,
            level: 2,
            children: [
              {
                id: '1-5-2-1-1',
                name: 'Shopping Street',
                count: 1,
                lat: 23.5942,
                lng: 58.5452,
                level: 3,
                children: [
                  {
                    id: '1-5-2-1-1-1',
                    name: 'Mall 1',
                    count: 1,
                    lat: 23.5943,
                    lng: 58.5453,
                    level: 4,
                    children: [
                      {
                        id: '1-5-2-1-1-1-1',
                        name: 'Level 2',
                        count: 1,
                        lat: 23.5944,
                        lng: 58.5454,
                        level: 5
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  { id: '1-6', name: 'Al Haffa', count: 1, lat: 23.5700, lng: 58.5100, level: 0 },
  { id: '1-7', name: 'Al Slahiyah', count: 1, lat: 23.6100, lng: 58.4700, level: 0 },
  { id: '1-8', name: 'Sumhuram', count: 1, lat: 23.5500, lng: 58.6200, level: 0 },
  { id: '1-9', name: 'Haisk', count: 1, lat: 23.6200, lng: 58.3500, level: 0 },
  { id: '1-10', name: 'Shtuut', count: 1, lat: 23.5400, lng: 58.2800, level: 0 },
];

function MapTypeToggle({ mapType, setMapType }: { mapType: 'map' | 'satellite', setMapType: (type: 'map' | 'satellite') => void }) {
  return (
    <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[1000] bg-white rounded-lg shadow-md flex border border-border">
      <button
        onClick={() => setMapType('map')}
        className={`px-6 py-2 text-sm font-medium rounded-l-lg transition-all ${
          mapType === 'map'
            ? 'bg-black text-white'
            : 'text-gray-700 hover:bg-gray-50'
        }`}
      >
        Map
      </button>
      <button
        onClick={() => setMapType('satellite')}
        className={`px-6 py-2 text-sm font-medium rounded-r-lg transition-all ${
          mapType === 'satellite'
            ? 'bg-black text-white'
            : 'text-gray-700 hover:bg-gray-50'
        }`}
      >
        Satellite
      </button>
    </div>
  );
}

export function TerritoryHierarchy() {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const [mapType, setMapType] = useState<'map' | 'satellite'>('map');
  const [selectedTerritory, setSelectedTerritory] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<string[]>(['1-1', '1-2', '1-3']);
  const [searchQuery, setSearchQuery] = useState('');
  const [mapCenter, setMapCenter] = useState<[number, number]>([23.5880, 58.3829]);
  const [mapZoom, setMapZoom] = useState(11);
  const [sidebarWidth, setSidebarWidth] = useState(320); // 320px = w-80
  const [isResizing, setIsResizing] = useState(false);
  const [showScrollShadow, setShowScrollShadow] = useState({ top: false, bottom: true });
  const [isLoading, setIsLoading] = useState(false);

  // Flatten all territories recursively for map markers
  const flattenTerritories = (territories: Territory[]): Territory[] => {
    return territories.reduce((acc, territory) => {
      const children = territory.children ? flattenTerritories(territory.children) : [];
      return [...acc, territory, ...children];
    }, [] as Territory[]);
  };

  const flatTerritories = flattenTerritories(territoryData);

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current).setView(mapCenter, mapZoom);
    mapRef.current = map;

    const tileLayerUrl = mapType === 'map'
      ? 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      : 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

    L.tileLayer(tileLayerUrl, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add markers
    flatTerritories.forEach(territory => {
      const marker = L.marker([territory.lat, territory.lng])
        .bindPopup(`<div class="text-sm"><div class="font-semibold">${territory.name}</div><div class="text-gray-500">Count: ${territory.count}</div></div>`)
        .addTo(map);
      
      marker.on('click', () => {
        handleTerritoryClick(territory);
      });

      markersRef.current.push(marker);
    });

    return () => {
      if (mapRef.current) {
        markersRef.current.forEach(marker => marker.remove());
        markersRef.current = [];
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Update tile layer when mapType changes
  useEffect(() => {
    if (!mapRef.current) return;

    const tileLayerUrl = mapType === 'map'
      ? 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      : 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

    mapRef.current.eachLayer((layer) => {
      if (layer instanceof L.TileLayer) {
        layer.remove();
      }
    });

    L.tileLayer(tileLayerUrl, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapRef.current);
  }, [mapType]);

  // Update map view when center/zoom changes
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(mapCenter, mapZoom);
    }
  }, [mapCenter, mapZoom]);

  // Handle sidebar resizing
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      
      const newWidth = window.innerWidth - e.clientX;
      // Constrain width between 250px and 600px
      const constrainedWidth = Math.max(250, Math.min(600, newWidth));
      setSidebarWidth(constrainedWidth);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };

    if (isResizing) {
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  // Handle scroll shadow detection
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      const isAtTop = scrollTop === 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5;
      
      setShowScrollShadow({
        top: !isAtTop,
        bottom: !isAtBottom
      });
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleExpandAll = () => {
    const allIds = flatTerritories.map(t => t.id);
    setExpandedItems(allIds);
  };

  const handleCollapseAll = () => {
    setExpandedItems([]);
  };

  const handleTerritoryClick = (territory: Territory) => {
    setSelectedTerritory(territory.id);
    setMapCenter([territory.lat, territory.lng]);
    setMapZoom(13);
  };

  // Helper function to get icon color based on level and index
  const getIconColor = (level: number, index: number) => {
    if (level === 0) return 'bg-black';
    if (level === 1) return 'bg-black';
    if (level === 2) return 'bg-purple-500';
    if (level === 3) return 'bg-pink-500';
    if (level === 4) return 'bg-rose-500';
    if (level === 5) return 'bg-orange-500';
    if (level === 6) return 'bg-amber-500';
    if (level === 7) return 'bg-yellow-500';
    if (level === 8) return 'bg-lime-500';
    if (level === 9) return 'bg-green-500';
    return 'bg-gray-500';
  };

  // Helper function to get background color for selected state based on level
  const getSelectedBgColor = (level: number) => {
    if (level === 0) return 'bg-zinc-100';
    if (level === 1) return 'bg-zinc-100';
    if (level === 2) return 'bg-purple-50';
    if (level === 3) return 'bg-pink-50';
    if (level === 4) return 'bg-rose-50';
    if (level === 5) return 'bg-orange-50';
    if (level === 6) return 'bg-amber-50';
    if (level === 7) return 'bg-yellow-50';
    if (level === 8) return 'bg-lime-50';
    if (level === 9) return 'bg-green-50';
    return 'bg-gray-50';
  };

  // Helper function to get text color for selected state based on level
  const getSelectedTextColor = (level: number) => {
    if (level === 0) return 'text-black';
    if (level === 1) return 'text-black';
    if (level === 2) return 'text-purple-600';
    if (level === 3) return 'text-pink-600';
    if (level === 4) return 'text-rose-600';
    if (level === 5) return 'text-orange-600';
    if (level === 6) return 'text-amber-600';
    if (level === 7) return 'text-yellow-600';
    if (level === 8) return 'text-lime-600';
    if (level === 9) return 'text-green-600';
    return 'text-gray-600';
  };

  // Recursive component to render territory items with hierarchy
  const TerritoryItem = ({ territory, level = 0, index = 0 }: { territory: Territory; level?: number; index?: number }) => {
    const hasChildren = territory.children && territory.children.length > 0;
    const isExpanded = expandedItems.includes(territory.id);
    const isSelected = selectedTerritory === territory.id;
    const isNarrow = sidebarWidth < 280;

    return (
      <div>
        <div className="flex items-center gap-1">
          {/* Expand/Collapse button or spacer */}
          {hasChildren ? (
            <button
              onClick={() => toggleExpand(territory.id)}
              className={`hover:bg-gray-100 rounded flex-shrink-0 ${isNarrow ? 'p-0.5' : 'p-1'}`}
            >
              {isExpanded ? (
                <ChevronDown size={isNarrow ? 14 : 16} className={isSelected ? getSelectedTextColor(level) : 'text-gray-600'} />
              ) : (
                <ChevronRight size={isNarrow ? 14 : 16} className="text-gray-400" />
              )}
            </button>
          ) : (
            <div className={`flex-shrink-0 ${isNarrow ? 'w-5' : 'w-6'}`} />
          )}

          {/* Territory button */}
          <button
            onClick={() => handleTerritoryClick(territory)}
            className={`flex-1 flex items-center justify-between rounded-lg transition-all text-left min-w-0 ${
              isNarrow ? 'py-1.5 px-1.5' : 'py-2 px-2'
            } ${
              isSelected
                ? getSelectedBgColor(level)
                : 'hover:bg-gray-50'
            }`}
            title={territory.name}
          >
            <div className={`flex items-center min-w-0 flex-1 ${isNarrow ? 'gap-1.5' : 'gap-2'}`}>
              {level > 0 && !isNarrow && (
                <div className={`rounded-full flex items-center justify-center flex-shrink-0 ${isNarrow ? 'w-5 h-5' : 'w-6 h-6'} ${getIconColor(level, index)}`}>
                  <MapPin size={10} className="text-white" />
                </div>
              )}
              {level > 0 && isNarrow && (
                <div className={`rounded-full flex-shrink-0 ${isNarrow ? 'w-2 h-2' : 'w-2.5 h-2.5'} ${getIconColor(level, index)}`} />
              )}
              <span className={`truncate ${isNarrow ? 'text-xs' : 'text-sm'} ${isSelected ? `${getSelectedTextColor(level)} font-medium` : 'text-gray-700'}`}>
                {territory.name}
              </span>
            </div>
            <div className={`border rounded flex-shrink-0 ${isNarrow ? 'px-1.5 py-0.5 text-[10px] ml-1' : 'px-2 py-0.5 text-xs ml-2'} ${
              isSelected 
                ? `${getSelectedTextColor(level)} border-current`
                : 'text-gray-700 border-gray-300'
            }`}>
              {territory.count}
            </div>
          </button>
        </div>

        {/* Children */}
        {hasChildren && isExpanded && (
          <div className={`border-l-2 border-gray-200 ${isNarrow ? 'ml-2 pl-2' : 'ml-4 pl-3'}`}>
            {territory.children!.map((child, idx) => (
              <TerritoryItem key={child.id} territory={child} level={level + 1} index={idx} />
            ))}
          </div>
        )}
      </div>
    );
  };

  const filteredTerritories = flatTerritories.filter(t =>
    t.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full flex bg-background">
      {/* Left Sidebar - Territory Hierarchy */}
      <div className="hidden w-64 border-r border-border bg-white flex flex-col">
        <div className="p-6 border-b border-border">
          <div className="text-xs text-gray-500 mb-1">Territory</div>
          <div className="text-sm font-medium text-gray-700">Type</div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {territoryData.map(territory => (
            <div key={territory.id}>
              <button
                onClick={() => toggleExpand(territory.id)}
                className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">{territory.name}</span>
                </div>
                {expandedItems.includes(territory.id) ? (
                  <ChevronDown size={16} className="text-gray-400" />
                ) : (
                  <ChevronRight size={16} className="text-gray-400" />
                )}
              </button>

              {expandedItems.includes(territory.id) && territory.children && (
                <div className="ml-6 mt-1 space-y-1">
                  {territory.children.map(child => (
                    <button
                      key={child.id}
                      onClick={() => handleTerritoryClick(child)}
                      className={`w-full flex items-center gap-2 p-2 rounded-lg text-left transition-colors ${
                        selectedTerritory === child.id
                          ? 'bg-zinc-100 text-black'
                          : 'hover:bg-gray-50 text-gray-600'
                      }`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-current" />
                      <span className="text-sm">{child.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-border text-xs text-gray-500">
          Powered by Leading Point
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-1 relative">
        <MapTypeToggle mapType={mapType} setMapType={setMapType} />
        <div ref={mapContainerRef} className="h-full w-full" />
      </div>

      {/* Right Sidebar - Territory List */}
      <div 
        className="border-l border-border bg-white flex flex-col relative"
        style={{ width: `${sidebarWidth}px` }}
      >
        {/* Enhanced Resize Handle with Visual Grip */}
        <div
          onMouseDown={() => setIsResizing(true)}
          onDoubleClick={() => setSidebarWidth(320)} // Double-click to reset
          className="absolute left-0 top-0 bottom-0 w-1.5 cursor-col-resize z-10 group"
          title="Drag to resize, double-click to reset"
        >
          {/* Hover indicator */}
          <div className="absolute left-0 top-0 bottom-0 w-full bg-transparent group-hover:bg-zinc-500 transition-all duration-200" />
          
          {/* Grip lines - visible on hover */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="flex flex-col gap-1">
              <div className="w-0.5 h-8 bg-white rounded-full" />
            </div>
          </div>
          
          {/* Width indicator during resize */}
          {isResizing && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-lg whitespace-nowrap pointer-events-none">
              {sidebarWidth}px
            </div>
          )}
        </div>

        {/* Header with controls - Responsive */}
        <div className={`border-b border-border bg-white relative z-[1] transition-all ${
          sidebarWidth < 280 ? 'p-3' : 'p-6'
        }`}>
          <div className={`flex items-center justify-between ${sidebarWidth < 280 ? 'mb-2' : 'mb-4'}`}>
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <h2 className={`font-semibold text-gray-900 truncate ${
                sidebarWidth < 280 ? 'text-base' : 'text-lg'
              }`}>
                {sidebarWidth >= 280 ? 'Territory' : 'Terr.'}
              </h2>
              {sidebarWidth >= 280 && (
                <div className="px-2 py-0.5 bg-zinc-100 text-zinc-800 text-xs font-medium rounded-full flex-shrink-0">
                  {territoryData.length}
                </div>
              )}
            </div>
            <div className="flex items-center gap-0.5 flex-shrink-0">
              {sidebarWidth >= 300 && (
                <>
                  <button 
                    onClick={handleExpandAll}
                    className="p-1.5 rounded hover:bg-gray-100 transition-colors"
                    title="Expand All"
                  >
                    <ChevronDown size={14} className="text-gray-600" />
                  </button>
                  <button 
                    onClick={handleCollapseAll}
                    className="p-1.5 rounded hover:bg-gray-100 transition-colors"
                    title="Collapse All"
                  >
                    <ChevronRight size={14} className="text-gray-600" />
                  </button>
                  <div className="w-px h-4 bg-gray-300 mx-0.5" />
                </>
              )}
              <button 
                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                title="Add Territory"
              >
                <Plus size={16} className="text-gray-600" />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white flex gap-[8px] items-center px-[11px] py-[9px] rounded-[6px] relative">
              <div aria-hidden="true" className="absolute border border-[#e6e9f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
              <div className="flex flex-col items-center justify-center relative shrink-0">
                <div className="relative shrink-0 size-[18px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g>
                      <path d="M15.75 15.75L12.495 12.495" stroke="#9CA3AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p334b2b00} stroke="#9CA3AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </g>
                  </svg>
                </div>
              </div>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 font-['Roboto',sans-serif] text-[14px] text-[rgba(0,11,37,0.64)] placeholder:text-[rgba(0,11,37,0.64)] bg-transparent border-0 outline-none p-0 leading-[1.2]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                  title="Clear search"
                >
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
            </div>
          </div>

          {searchQuery && sidebarWidth >= 280 && (
            <div className="mt-2 text-xs text-gray-500 truncate">
              Found {filteredTerritories.length} {filteredTerritories.length === 1 ? 'territory' : 'territories'}
            </div>
          )}
        </div>

        {/* Scrollable content area with shadows */}
        <div className="flex-1 relative overflow-hidden">
          {/* Top scroll shadow */}
          <div 
            className={`absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white/80 to-transparent pointer-events-none z-[1] transition-opacity duration-300 ${
              showScrollShadow.top ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Scrollable list with custom scrollbar */}
          <div 
            ref={scrollContainerRef}
            className={`h-full overflow-y-auto scroll-smooth ${
              sidebarWidth < 280 ? 'px-2 py-2' : 'px-4 py-3'
            }`}
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#CBD5E1 transparent',
            }}
          >
            <style>{`
              .scroll-smooth::-webkit-scrollbar {
                width: 6px;
              }
              .scroll-smooth::-webkit-scrollbar-track {
                background: transparent;
              }
              .scroll-smooth::-webkit-scrollbar-thumb {
                background: #CBD5E1;
                border-radius: 3px;
              }
              .scroll-smooth::-webkit-scrollbar-thumb:hover {
                background: #94A3B8;
              }
            `}</style>
            
            {isLoading ? (
              // Loading skeleton
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="flex items-center gap-2 py-2 px-2">
                      <div className="w-4 h-4 bg-gray-200 rounded" />
                      <div className="flex-1 h-8 bg-gray-200 rounded-lg" />
                    </div>
                  </div>
                ))}
              </div>
            ) : territoryData.length === 0 ? (
              // Empty state - Responsive
              <div className={`flex flex-col items-center justify-center h-full text-center ${
                sidebarWidth < 280 ? 'px-2 py-8' : 'px-4 py-12'
              }`}>
                <div className={`bg-gray-100 rounded-full flex items-center justify-center mb-3 ${
                  sidebarWidth < 280 ? 'w-12 h-12' : 'w-16 h-16'
                }`}>
                  <MapPin size={sidebarWidth < 280 ? 24 : 32} className="text-gray-400" />
                </div>
                <h3 className={`font-medium text-gray-900 mb-1 ${
                  sidebarWidth < 280 ? 'text-xs' : 'text-sm'
                }`}>
                  {sidebarWidth >= 280 ? 'No territories' : 'No data'}
                </h3>
                {sidebarWidth >= 280 && (
                  <p className="text-xs text-gray-500 mb-4">Get started by adding your first territory</p>
                )}
                <button className={`bg-black text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors flex items-center gap-1.5 ${
                  sidebarWidth < 280 ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'
                }`}>
                  <Plus size={14} />
                  {sidebarWidth >= 280 && 'Add Territory'}
                </button>
              </div>
            ) : searchQuery && filteredTerritories.length === 0 ? (
              // No search results - Responsive
              <div className={`flex flex-col items-center justify-center h-full text-center ${
                sidebarWidth < 280 ? 'px-2 py-8' : 'px-4 py-12'
              }`}>
                <div className={`bg-gray-100 rounded-full flex items-center justify-center mb-3 ${
                  sidebarWidth < 280 ? 'w-12 h-12' : 'w-16 h-16'
                }`}>
                  <Search size={sidebarWidth < 280 ? 24 : 32} className="text-gray-400" />
                </div>
                <h3 className={`font-medium text-gray-900 mb-1 ${
                  sidebarWidth < 280 ? 'text-xs' : 'text-sm'
                }`}>
                  {sidebarWidth >= 280 ? 'No results found' : 'No results'}
                </h3>
                {sidebarWidth >= 280 && (
                  <p className="text-xs text-gray-500">Try adjusting your search query</p>
                )}
              </div>
            ) : (
              <div className="space-y-0.5">
                {territoryData.map((territory) => (
                  <TerritoryItem key={territory.id} territory={territory} level={0} index={0} />
                ))}
              </div>
            )}
          </div>
          
          {/* Bottom scroll shadow */}
          <div 
            className={`absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white/80 to-transparent pointer-events-none z-[1] transition-opacity duration-300 ${
              showScrollShadow.bottom ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </div>
    </div>
  );
}