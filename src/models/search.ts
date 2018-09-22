export class Search {
    // Keep record type of trip
    tripType?: any;
    name?:string;
    id?:number;
    // Keep record type of class
    classType?: any;
    // Total child
    childNumber: number = 0;
    // Total adult
    adultNumber: number = 0;
    // Total infant
    infantNumber: number = 0;
    // Total Rooms
    totalRoom: number = 0;
    // Total Seats
    totalSeats: number = 0;
    // Total Guest
    totalGuest: number = 0;
    // Departure Date
    departureDate: any = new Date();
    // Return Date
    returnDate: any = new Date();
    // Origin Location Name
    originLocationName: string;
    // Origin Location 3 Code
    originLocationAlpha3Code: string;
    // Destination Location Name
    destinationLocationname: string;
    // Destination Location 3 Code
    destinationLocationAlpha3Code: string;
}