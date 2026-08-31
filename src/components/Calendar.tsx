import React from "react";
import { Clock, MapPin, Timer } from "lucide-react";

export function Calendar() {
  const sessions = [
    {
      id: "01",
      date: "24 - 26 septembre 2026",
      time: "11h00 - 17h00",
      location: "Lomé, Togo",
      duration: "6h par jour · 3 jours consécutifs"
    },
    {
      id: "02",
      date: "22 - 25 octobre 2026",
      time: "11h00 - 17h00",
      location: "Lomé, Togo",
      duration: "6h par jour · 4 jours consécutifs"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white flex justify-center">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-12">
          <h3 className="text-blue-500 font-bold text-xs tracking-[0.2em] uppercase mb-4">CALENDRIER</h3>
          <h2 className="text-3xl font-black text-bafe-blue">Choisissez votre session</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sessions.map((session, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-[1.5rem] p-8 shadow-[0_2px_15px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-50 text-blue-500 font-bold text-sm px-4 py-1.5 rounded-full inline-block mb-6">
                {session.id}
              </div>
              
              <h4 className="text-2xl font-black text-bafe-blue mb-6">{session.date}</h4>
              
              <div className="space-y-4 text-gray-600 font-medium">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-bafe-blue font-bold">{session.time}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span>{session.location}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Timer className="w-5 h-5 text-gray-400" />
                  <span>{session.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
