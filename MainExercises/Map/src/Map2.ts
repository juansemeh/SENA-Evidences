import * as readline from 'readline';

// Define room status type
type RoomStatus = 0 | 1; // 0 = Available, 1 = Occupied

// Middleware for logging actions
const logMiddleware = (action: string, roomNumber?: number): void => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Action: ${action}${roomNumber ? ` | Room: ${roomNumber}` : ''}`);
};

// Initialize rooms with their status
let rooms: Map<number, RoomStatus> = new Map([
  [1, 0],
  [2, 0],
  [3, 0],
  [4, 0],
  [5, 0]
]);

// Display the status of all rooms
const displayRoomStatus = (): void => {
  logMiddleware('Display Room Status');
  console.log('\n=== ROOM STATUS ===');
  
  rooms.forEach((roomStatus, roomNumber) => {
    console.log(`Room ${roomNumber}: ${roomStatus === 0 ? 'Available' : 'Occupied'}`);
  });
  
  console.log('===================\n');
};

// Reserve a room
const reserveRoom = (roomNumber: number): void => {
  logMiddleware('Reserve Room', roomNumber);
  
  if (!rooms.has(roomNumber)) {
    console.log('Invalid room number. Please use numbers 1-5.');
  } else if (rooms.get(roomNumber) === 1) {
    console.log(`Room ${roomNumber} is already occupied.`);
  } else {
    rooms.set(roomNumber, 1);
    console.log(`Room ${roomNumber} has been successfully reserved.`);
    displayRoomStatus();
  }
};

// Release a room
const releaseRoom = (roomNumber: number): void => {
  logMiddleware('Release Room', roomNumber);
  
  if (!rooms.has(roomNumber)) {
    console.log('Invalid room number. Please use numbers 1-5.');
  } else if (rooms.get(roomNumber) === 0) {
    console.log(`Room ${roomNumber} is already available.`);
  } else {
    rooms.set(roomNumber, 0);
    console.log(`Room ${roomNumber} has been successfully released.`);
    displayRoomStatus();
  }
};

// Statistics middleware
const statisticsMiddleware = (): void => {
  let availableRooms = 0;
  let occupiedRooms = 0;
  
  rooms.forEach((status) => {
    if (status === 0) availableRooms++;
    else occupiedRooms++;
  });
  
  console.log('\n=== HOTEL STATISTICS ===');
  console.log(`Available Rooms: ${availableRooms}`);
  console.log(`Occupied Rooms: ${occupiedRooms}`);
  console.log(`Occupancy Rate: ${(occupiedRooms / rooms.size * 100).toFixed(2)}%`);
  console.log('========================\n');
};

// Main menu for the hotel reservation system
const hotelMenu = async (): Promise<void> => {
  // Create readline interface
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Helper function to ask questions
  const question = (query: string): Promise<string> => {
    return new Promise((resolve) => {
      rl.question(query, resolve);
    });
  };
  
  try {
    console.log('Welcome to the Hotel Reservation System');
    
    while (true) {
      console.log('\n=== MAIN MENU ===');
      console.log('1. View Room Status');
      console.log('2. Reserve a Room');
      console.log('3. Release a Room');
      console.log('4. View Statistics');
      console.log('5. Exit');
      console.log('================\n');
      
      const option = await question('Choose an option (1-5): ');
      
      switch (option) {
        case '1':
          displayRoomStatus();
          break;
          
        case '2':
          const roomToReserve = parseInt(await question('Enter room number (1-5): '));
          reserveRoom(roomToReserve);
          break;
          
        case '3':
          const roomToRelease = parseInt(await question('Enter room number (1-5): '));
          releaseRoom(roomToRelease);
          break;
          
        case '4':
          statisticsMiddleware();
          break;
          
        case '5':
          console.log('Exiting the Hotel Reservation System. Goodbye!');
          rl.close();
          return;
          
        default:
          console.log('Invalid option. Please try again.');
      }
      
      // Pause before showing the menu again
      await question('\nPress Enter to continue...');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    rl.close();
  }
};

// Start the hotel reservation system
hotelMenu().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});