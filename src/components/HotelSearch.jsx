import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const HotelSearch = () => {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const { data: hotels, isLoading, error, refetch } = useQuery({
    queryKey: ['hotelSearch', destination, checkIn, checkOut],
    queryFn: async () => {
      if (!destination || !checkIn || !checkOut) return null;
      const options = {
        method: 'GET',
        url: 'https://hotels4.p.rapidapi.com/locations/v3/search',
        params: {q: destination, locale: 'en_US', langid: '1033', siteid: '300000001'},
        headers: {
          'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
          'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
      };
      const response = await axios.request(options);
      return response.data.sr;
    },
    enabled: false
  });

  const handleSearch = () => {
    refetch();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hotel Search</CardTitle>
        <CardDescription>Find the perfect place to stay</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="destination">Destination</Label>
            <Input
              id="destination"
              placeholder="e.g. New York"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="checkIn">Check-in Date</Label>
            <Input
              id="checkIn"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="checkOut">Check-out Date</Label>
            <Input
              id="checkOut"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>
        <Button className="mt-4 w-full" onClick={handleSearch}>Search Hotels</Button>
      </CardContent>
      <CardFooter>
        {isLoading && <p>Searching for hotels...</p>}
        {error && <p>Error: {error.message}</p>}
        {hotels && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Available Hotels:</h3>
            <ul>
              {hotels.map((hotel, index) => (
                <li key={index} className="mb-2">
                  {hotel.regionNames.fullName}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default HotelSearch;
