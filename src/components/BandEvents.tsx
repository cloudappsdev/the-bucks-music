import { BandEvent } from "./BandEvent";
import "./BandEvents.scss";
// Sample data matching the BandEvent interface
const bandEvents: BandEvent[] = [
  {
    venue: "The Blue Note",
    city: "Austin",
    location: "2028 E Riverside Dr",
    date: "April 15, 2025",
    time: "8:00 PM",
    cover: "$12 in advance, $15 at the door",
    details: "Live rock performance with special guest opening act",
    eventLink: "https://example.com/tickets/blueNote",
    smLink: "https://instagram.com/bandpage",
  },
  {
    venue: "Sunset Lounge",
    city: "San Diego",
    location: "1234 Ocean View Blvd",
    date: "April 22, 2025",
    time: "9:00 PM",
    cover: "$10 cover",
    details: "Indie rock night with local bands",
    eventLink: "https://example.com/tickets/sunsetLounge",
    smLink: "https://facebook.com/bandpage",
  },
  {
    venue: "Rock Central",
    city: "Chicago",
    location: "456 Music Street",
    date: "May 1, 2025",
    time: "7:30 PM",
    cover: "$15",
    details: "Album release party",
    eventLink: "https://example.com/tickets/rockCentral",
    smLink: "https://twitter.com/bandpage",
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
