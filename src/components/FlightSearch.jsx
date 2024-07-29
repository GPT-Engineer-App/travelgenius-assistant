import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Amadeus from 'amadeus';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const amadeus = new Amadeus({
  clientId: 'YOUR_AMADEUS_API_KEY',
  clientSecret: 'YOUR_AMADEUS_API_SECRET'
});

const FlightSearch = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const { data: flights, isLoading, error, refetch } = useQuery({
    queryKey: ['flightSearch', origin, destination, departureDate],
    queryFn: async () => {
      if (!origin || !destination || !departureDate) return null;
      const response = await amadeus.shopping.flightOffersSearch.get({
        originLocationCode: origin,
        destinationLocationCode: destination,
        departureDate: departureDate,
        adults: '1'
      });
      return response.data;
    },
    enabled: false
  });

  const handleSearch = () => {
    refetch();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Flight Search</CardTitle>
        <CardDescription>Find the best flights for your trip</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="origin">Origin</Label>
            <Input
              id="origin"
              placeholder="e.g. LON"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="destination">Destination</Label>
            <Input
              id="destination"
              placeholder="e.g. NYC"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="departureDate">Departure Date</Label>
            <Input
              id="departureDate"
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>
        </div>
        <Button className="mt-4 w-full" onClick={handleSearch}>Search Flights</Button>
      </CardContent>
      <CardFooter>
        {isLoading && <p>Searching for flights...</p>}
        {error && <p>Error: {error.message}</p>}
        {flights && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Available Flights:</h3>
            <ul>
              {flights.map((flight, index) => (
                <li key={index} className="mb-2">
                  {flight.itineraries[0].segments.map((segment, idx) => (
                    <span key={idx}>
                      {segment.departure.iataCode} to {segment.arrival.iataCode}
                      {idx < flight.itineraries[0].segments.length - 1 ? ' → ' : ''}
                    </span>
                  ))}
                  <span className="ml-2">Price: {flight.price.total} {flight.price.currency}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default FlightSearch;
