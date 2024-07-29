import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plane, Hotel, Utensils, Calendar, CreditCard, Map } from 'lucide-react';
import FlightSearch from '@/components/FlightSearch';

const Index = () => {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">AI Travel Assistant</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Plan Your Trip</CardTitle>
          <CardDescription>Enter your travel details to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="destination">Destination</Label>
              <Input
                id="destination"
                placeholder="Enter destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="dates">Travel Dates</Label>
              <Input
                id="dates"
                placeholder="DD/MM/YYYY - DD/MM/YYYY"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
              />
            </div>
          </div>
          <Button className="mt-4 w-full">Search</Button>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="flights">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="flights"><Plane className="mr-2 h-4 w-4" /> Flights</TabsTrigger>
          <TabsTrigger value="accommodations"><Hotel className="mr-2 h-4 w-4" /> Accommodations</TabsTrigger>
          <TabsTrigger value="activities"><Utensils className="mr-2 h-4 w-4" /> Activities</TabsTrigger>
          <TabsTrigger value="calendar"><Calendar className="mr-2 h-4 w-4" /> Calendar</TabsTrigger>
          <TabsTrigger value="expenses"><CreditCard className="mr-2 h-4 w-4" /> Expenses</TabsTrigger>
          <TabsTrigger value="map"><Map className="mr-2 h-4 w-4" /> Map</TabsTrigger>
        </TabsList>
        <TabsContent value="flights">
          <FlightSearch />
        </TabsContent>
        <TabsContent value="accommodations">
          <Card>
            <CardHeader>
              <CardTitle>Accommodation Booking</CardTitle>
              <CardDescription>Find and book the perfect place to stay</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Accommodation booking functionality will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="activities">
          <Card>
            <CardHeader>
              <CardTitle>Activities and Restaurants</CardTitle>
              <CardDescription>Discover local attractions and dining options</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Activity and restaurant recommendation functionality will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="calendar">
          <Card>
            <CardHeader>
              <CardTitle>Calendar Integration</CardTitle>
              <CardDescription>Sync your travel plans with your calendar</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Calendar integration functionality will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="expenses">
          <Card>
            <CardHeader>
              <CardTitle>Expense Reporting</CardTitle>
              <CardDescription>Track and manage your travel expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Expense reporting functionality will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="map">
          <Card>
            <CardHeader>
              <CardTitle>Map</CardTitle>
              <CardDescription>Explore your destination and get directions</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Map integration functionality will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
