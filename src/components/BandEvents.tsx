import { BandEvent } from "./BandEvent";
import "./BandEvents.scss";
// Sample data matching the BandEvent interface
const bandEvents: BandEvent[] = [
  {
    venue: "St Cletus",
    city: "LaGrange",
    location: "St Cletus on 55th Street",
    date: "April 27, 2025",
    time: "3 PM",
    cover: "Parish Festival",
    details: "The Bucks - Live on Stage",
    eventLink: "https://example.com/tickets/blueNote",
    smLink: "https://instagram.com/bandpage",
  },
  {
    venue: "Bannerman's",
    city: "Schaumburg",
    location: "858 S Rt 59, Bartlett, IL 60103",
    date: "May 10, 2025",
    time: "8:00 PM",
    cover: "$12 in advance, $15 at the door",
    details: "Live rock performance with special guest opening act",
    eventLink: "",
    smLink: "",
  },
  {
    venue: "Evenflow Music and Spirits",
    city: "Geneva, IL",
    location: "302 W State St",
    date: "May 23, 2025",
    time: "7 PM",
    cover: "$8 at the door",
    details: "Great sound and drinks at this intimate club",
    eventLink: "",
    smLink: "",
  },
  {
    venue: "115 Bourbon Street",
    city: "Merrionette Park, IL",
    location: "115 Bourbon Street",
    date: "June 07, 2025",
    time: "8:00 PM",
    cover: "Free Show",
    details: "Outdoor Show",
    eventLink: "",
    smLink: "",
  },
  {
    venue: "Joe's on Weed Street",
    city: "Chicago",
    location: "Weed Street",
    date: "June 29, 2025",
    time: "8:00 PM",
    cover: "$6 Cover",
    details: "Doors open 6pm, 7pm opening act",
    eventLink: "",
    smLink: "",
  },
  {
    venue: "Broken Oar",
    city: "Port Barrington",
    location: "Rawson Bridge Rd",
    date: "Sunday- June 28, 2025",
    time: "3:00 PM",
    cover: "Outdoor, Show on the Patio Stage",
    details: "Nice Weather and this is going to be a Party!",
    eventLink: "",
    smLink: "",
  },
];

const BandEvents = () => {
  const bandEventParent = {
    textAlign: "left" as const,
    marginTop: "2rem" as const,
    "background-color": "#FFF",
    color: "black",
  };

  return (
    <>
      <div style={bandEventParent}>
        <div className="p-4 max-w-2xl mx-auto" style={{ padding: "12px" }}>
          <h2 className="text-center">Upcoming Shows</h2>
          {bandEvents.map((event, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4 mb-4 last:border-b-0"
            >
              <div className="mb-2">
                <h3 className="text-xl font-semibold">{event.venue}</h3>
                <div className="text-gray-600">
                  {event.city} - {event.location}
                </div>
                <div className="font-medium">
                  {event.date} at {event.time}
                </div>
                <div className="text-gray-700">{event.cover}</div>
              </div>

              <p className="mb-2 italic">{event.details}</p>

              <div className="space-y-1">
                <div>
                  <a
                    href={event.eventLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:underline"
                  >
                    {event.eventLink}
                  </a>
                </div>

                <div>
                  <a
                    href={event.smLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:underline"
                  >
                    {event.smLink}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BandEvents;
