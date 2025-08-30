// Mock API service to replace external API calls
export interface MockUser {
  user_id: string;
  full_name: string;
  email: string;
}

export interface MockShipmentData {
  barcode: string;
  modified: string;
  sender_name?: string;
  sender?: string;
  consignee_name?: string;
  consignee?: string;
  origin_zone?: string;
  origin_area?: string;
  origin_city?: string;
  origin_state?: string;
  origin_country?: string;
  destination_zone?: string;
  destination_area?: string;
  destination_city?: string;
  destination_state?: string;
  destination_country?: string;
  shipping_service?: string;
  total_cod?: string;
  company_currency?: string;
  scans?: MockScan[];
}

export interface MockScan {
  creation: string;
  scan: string;
  scan_comment: string;
  owner: string;
}

// Mock user credentials
const MOCK_USERS: Record<string, { password: string; user: MockUser }> = {
  "test@shippex.com": {
    password: "testy123@",
    user: {
      user_id: "USR001",
      full_name: "Test User",
      email: "test@shippex.com",
    },
  },
};

// Mock shipment data
const MOCK_SHIPMENTS: Record<string, MockShipmentData> = {
  "210173066689": {
    barcode: "210173066689",
    modified: "2024-01-15T10:30:00Z",
    sender_name: "John Smith",
    sender: "John Smith",
    consignee_name: "Jane Doe",
    consignee: "Jane Doe",
    origin_zone: "Zone A",
    origin_area: "Downtown",
    origin_city: "New York",
    origin_state: "NY",
    origin_country: "United States",
    destination_zone: "Zone B",
    destination_area: "Uptown",
    destination_city: "Los Angeles",
    destination_state: "CA",
    destination_country: "United States",
    shipping_service: "Express Delivery",
    total_cod: "150.00",
    company_currency: "USD",
    scans: [
      {
        creation: "2024-01-15T08:00:00Z",
        scan: "Package Picked Up",
        scan_comment: "Package collected from sender",
        owner: "John Courier",
      },
      {
        creation: "2024-01-15T10:30:00Z",
        scan: "In Transit",
        scan_comment: "Package is on the way to destination",
        owner: "Transit Hub",
      },
      {
        creation: "2024-01-15T14:15:00Z",
        scan: "Out for Delivery",
        scan_comment: "Package is out for final delivery",
        owner: "Local Delivery",
      },
      {
        creation: "2024-01-15T16:45:00Z",
        scan: "Delivered",
        scan_comment: "Package successfully delivered to recipient",
        owner: "Delivery Agent",
      },
    ],
  },
  "123456789012": {
    barcode: "123456789012",
    modified: "2024-01-14T15:20:00Z",
    sender_name: "Alice Johnson",
    sender: "Alice Johnson",
    consignee_name: "Bob Wilson",
    consignee: "Bob Wilson",
    origin_zone: "Zone C",
    origin_area: "Industrial",
    origin_city: "Chicago",
    origin_state: "IL",
    origin_country: "United States",
    destination_zone: "Zone D",
    destination_area: "Residential",
    destination_city: "Miami",
    destination_state: "FL",
    destination_country: "United States",
    shipping_service: "Standard Delivery",
    total_cod: "75.50",
    company_currency: "USD",
    scans: [
      {
        creation: "2024-01-14T09:00:00Z",
        scan: "Package Received",
        scan_comment: "Package received at origin facility",
        owner: "Origin Hub",
      },
      {
        creation: "2024-01-14T15:20:00Z",
        scan: "Processing",
        scan_comment: "Package being processed for shipment",
        owner: "Processing Team",
      },
    ],
  },
};

// Mock login function
export const mockLogin = async (
  username: string,
  password: string
): Promise<{ success: boolean; user?: MockUser; message?: string }> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const userRecord = MOCK_USERS[username];

  if (!userRecord || userRecord.password !== password) {
    return {
      success: false,
      message: "Invalid Username or Password",
    };
  }

  return {
    success: true,
    user: userRecord.user,
    message: "Logged In",
  };
};

// Mock tracking function
export const mockTrackShipment = async (
  awb: string
): Promise<{ success: boolean; data?: MockShipmentData; message?: string }> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  const shipment = MOCK_SHIPMENTS[awb];

  if (!shipment) {
    return {
      success: false,
      message: "Shipment not found",
    };
  }

  return {
    success: true,
    data: shipment,
  };
};

// Get all available AWB numbers for testing
export const getAvailableAWBs = (): string[] => {
  return Object.keys(MOCK_SHIPMENTS);
};

