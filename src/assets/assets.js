import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.png'
import roomImg2 from './roomImg2.png'
import roomImg3 from './roomImg3.png'
import roomImg4 from './roomImg4.png'
import regImage from './regImage.png'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";
import testimonia1 from "../assets/me.jpg"
import testimonia2 from "../assets/testimonial2.jpeg"
import testimonia3 from "../assets/testimonial3.jpg"
import luxuryImg1 from '../assets/luxuryImg1.webp'
import luxuryImg2 from '../assets/luxuryImg2.webp'
import luxuryImg3 from '../assets/luxuryImg3.webp'
import singleBedImg1 from '../assets/singleBedImg1.webp'
import singleBedImg2 from '../assets/singleBedImg2 (2).webp'
import singleBedImg3 from '../assets/singleBedImg3.webp'        
import DoubleBedImg1 from '../assets/doubleBedImg1.webp'
import DoubleBedImg2 from '../assets/doubleBedImg2.webp'
import DoubleBedImg3 from '../assets/doubleBedImg3.webp'
import FamilySuitesImg1 from '../assets/familyImg1.webp'
import FamilySuitesImg2 from '../assets/familyImg2.webp'   
import FamilySuitesImg3 from '../assets/familyImg3.webp'
import GymImg1 from '../assets/gymImg1.webp'
import GymImg2 from '../assets/gymImg2 (2).webp'
import GymImg3 from '../assets/gymImg3.webp'
import poolImg1 from '../assets/poolImg1.webp'
import poolImg2 from '../assets/poolImg2 (2) (1).webp'
import poolImg3 from '../assets/poolImg3.webp'


export const assets = {
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
    testimonia1,        
    testimonia2,        
    testimonia3,
    luxuryImg1,
    luxuryImg2,
    luxuryImg3,
    singleBedImg1,
    singleBedImg2,
    singleBedImg3,
    DoubleBedImg1,
    DoubleBedImg2,
    DoubleBedImg3,
    FamilySuitesImg1,
    FamilySuitesImg2,
    FamilySuitesImg3,
    GymImg1,
    GymImg2,
    GymImg3,
    poolImg1,
    poolImg2,
    poolImg3
}

export const cities = ["Dubai", "Singapore", "New York", "London"]

// ---------------- Exclusive Offers ----------------
export const exclusiveOffers = [
    { _id: 1, title: "Summer Escape Package", description: "Enjoy a complimentary night and daily breakfast", priceOff: 25, expiryDate: "Aug 31", image: exclusiveOfferCardImg1 },
    { _id: 2, title: "Romantic Getaway", description: "Special couples package including spa treatment", priceOff: 20, expiryDate: "Sep 20", image: exclusiveOfferCardImg2 },
    { _id: 3, title: "Luxury Retreat", description: "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.", priceOff: 30, expiryDate: "Sep 25", image: exclusiveOfferCardImg3 },
]

// ---------------- Testimonials ----------------
export const testimonials = [
    { id: 1, name: "Emma Rodriguez", address: "Barcelona, Spain", image: testimonia1, rating: 5, review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides." },
    { id: 2, name: "Liam Johnson", address: "New York, USA", image: testimonia2, rating: 4, review: "QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!" },
    { id: 3, name: "Sophia Lee", address: "Seoul, South Korea", image: testimonia3, rating: 5, review: "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!" }
]

// ---------------- Facility Icons ----------------
export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
}

// ---------------- Room Details Common Data ----------------
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
]

// ---------------- User ----------------
export const userDummyData = {
    "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "username": "Koola",
    "email": "agyeimchjunior@gmail.com",
    "image": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
    "role": "hotelOwner",
    "createdAt": "2025-03-25T09:29:16.367Z",
    "updatedAt": "2025-04-10T06:34:48.719Z",
    "__v": 1,
    "recentSearchedCities": ["New York"]
}

// ---------------- Hotels ----------------
export const hotelNamesDummyData = [
    "Grand Palace Hotel",
    "Oceanview Resort",
    "Mountain Retreat",
    "City Lights Inn",
]
export const exploreDummyData = [
  {
    id: 1,
    title: "Luxury Rooms",
    hotel: "Grand Palace Hotel",
    address: "123 Main St, Metropolis",
    pricePerNight: "230",
    images: [luxuryImg1, luxuryImg2, luxuryImg3],
    type: "luxury"
  },
  {
    id: 2,
    title: "Single Bed Rooms",
    hotel: "City Lights Inn",
    address: "456 Elm St, Gotham",
    pricePerNight: "120",
    images: [singleBedImg1, singleBedImg2, singleBedImg3],
    type: "single"
  },
  {
    id: 3,
    title: "Double Bed Rooms",
    hotel: "Oceanview Resort",
    address: "789 Pine St, Star City",
    pricePerNight: "180",
    images: [DoubleBedImg1, DoubleBedImg2, DoubleBedImg3],
    type: "double"
  },
  {
    id: 4,
    title: "Family Suites",
    hotel: "Mountain Retreat",
    pricePerNight: "300",
    address: "321 Oak St, Central City",
    images: [FamilySuitesImg1, FamilySuitesImg2, FamilySuitesImg3],
    type: "family"
  },
  {
    id: 5,
    title: "Gym & Wellness",
    price: "50",
    images: [GymImg1, GymImg2, GymImg3],
    type: "amenity"
  },
  {
    id: 6,
    title: "Swimming Pool",
    price: "70",
    images: [poolImg1, poolImg2, poolImg3],
    type: "amenity"
  }
]


export const hotelDummyDataArray = hotelNamesDummyData.map((name, index) => ({
    _id: `hotel_${index + 1}`,
    name: name,
    address: `Address for ${name}`,
    contact: `+012345678${index}`,
    owner: userDummyData,
    city: "Accra",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    __v: 0
}))

// ---------------- Guests ----------------
export const guestNamesDummyData = [
    { username: "Prudence ", email: "ama@example.com" },
    { username: "Kingsley", email: "kojo@example.com" },
    { username: "Michael", email: "abena@example.com" },
    { username: "Judith", email: "kwame@example.com" },
]

export const guestUsersDummyData = guestNamesDummyData.map((guest, index) => ({
    _id: `guest_${index + 1}`,
    username: guest.username,
    email: guest.email,
    image: `https://i.pravatar.cc/150?img=${index + 10}`,
    role: "guest",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    __v: 0
}))

// ---------------- Rooms ----------------
export const roomsDummyData = [
    {
        "_id": "67f7647c197ac559e4089b96",
        "hotel": hotelDummyDataArray[0],
        "roomType": "Double Bed",
        "pricePerNight": 399,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [roomImg1, roomImg2, roomImg3, roomImg4],
        "isAvailable": true,
        "createdAt": new Date().toISOString(),
        "updatedAt": new Date().toISOString(),
        "__v": 0
    },
    {
        "_id": "67f76452197ac559e4089b8e",
        "hotel": hotelDummyDataArray[1],
        "roomType": "Double Bed",
        "pricePerNight": 299,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [roomImg2, roomImg3, roomImg4, roomImg1],
        "isAvailable": true,
        "createdAt": new Date().toISOString(),
        "updatedAt": new Date().toISOString(),
        "__v": 0
    },
    {
        "_id": "67f76406197ac559e4089b82",
        "hotel": hotelDummyDataArray[2],
        "roomType": "Double Bed",
        "pricePerNight": 249,
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg3, roomImg4, roomImg1, roomImg2],
        "isAvailable": true,
        "createdAt": new Date().toISOString(),
        "updatedAt": new Date().toISOString(),
        "__v": 0
    },
    {
        "_id": "67f763d8197ac559e4089b7a",
        "hotel": hotelDummyDataArray[3],
        "roomType": "Single Bed",
        "pricePerNight": 199,
        "amenities": ["Free WiFi", "Room Service", "Pool Access"],
        "images": [roomImg4, roomImg1, roomImg2, roomImg3],
        "isAvailable": true,
        "createdAt": new Date().toISOString(),
        "updatedAt": new Date().toISOString(),
        "__v": 0
    }
]

// ---------------- User Bookings ----------------
export const userBookingsDummyData = roomsDummyData.map((room, index) => {
    const guest = guestUsersDummyData[index % guestUsersDummyData.length];
    return {
        _id: `booking_${index + 1}`,
        user: guest,
        room: room,
        hotel: room.hotel,
        checkInDate: new Date().toISOString(),
        checkOutDate: new Date(new Date().getTime() + 24*60*60*1000).toISOString(),
        totalPrice: room.pricePerNight,
        guests: 1,
        status: "pending",
        paymentMethod: index % 2 === 0 ? "Stripe" : "Pay At Hotel",
        isPaid: index % 2 === 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        __v: 0
    }
})

// ---------------- Dashboard ----------------
export const dashboardDummyData = {
    totalBookings: userBookingsDummyData.length,
    totalRevenue: userBookingsDummyData.reduce((sum, b) => sum + b.totalPrice, 0),
    bookings: userBookingsDummyData
}