import React, { useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  Typography,
  Button,
} from "@mui/material";

const Dashboard = () => {
  const [selectedMovie, setSelectedMovie] = useState("movie1");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [occupiedSeats, setOccupiedSeats] = useState({
    movie1: [],
    movie2: [],
    movie3: [],
    movie4: [],
  });
  const [isBookingConfirmed, setBookingConfirmed] = useState(false);

  const handleMovieChange = (event) => {
    setSelectedMovie(event.target.value);
    setSelectedSeats([]);
    setBookingConfirmed(false);
  };

  const handleSeatClick = (seat) => {
    if (!isBookingConfirmed) {
      // Logic for handling seat selection only if booking is not confirmed
      if (!selectedSeats.includes(seat) && !occupiedSeats[selectedMovie].includes(seat)) {
        setSelectedSeats([...selectedSeats, seat]);
      } else {
        setSelectedSeats(selectedSeats.filter((s) => s !== seat));
      }
    }
  };

  const calculateTotalPrice = () => {
    // Placeholder prices for each movie
    const moviePrices = {
      movie1: 100,
      movie2: 250,
      movie3: 200,
      movie4: 150,
    };

    return selectedSeats.reduce(
      (total, seat) => total + moviePrices[selectedMovie],
      0
    );
  };

  const handleBookButtonClick = () => {
    // Logic for handling the booking (changing selected seats to occupied)
    setBookingConfirmed(true);
    setOccupiedSeats({
      ...occupiedSeats,
      [selectedMovie]: [...occupiedSeats[selectedMovie], ...selectedSeats],
    });
    setSelectedSeats([]);
  };

  const availableSeats = [
    "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10",
    "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10",
    "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10",
    "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10",
  ];

  const getSeatColor = (seat) => {
    if (selectedSeats.includes(seat)) {
      return "green"; // Indicate selected seats with green color
    } else if (occupiedSeats[selectedMovie].includes(seat)) {
      return "darkviolet"; // Indicate occupied seats with dark violet color
    } else {
      return "white";
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      {/* Movie Selection */}
      <FormControl>
        <Typography variant="h5" style={{ color: "red", paddingRight: "20px" }}>
          Select the movie:
        </Typography>
        <Select
          labelId="movie-label"
          id="movie-select"
          value={selectedMovie}
          onChange={handleMovieChange}
          style={{ minWidth: "200px", margin: "20px auto" }}
        >
          <MenuItem value="movie1">Leo</MenuItem>
          <MenuItem value="movie2">Jailer</MenuItem>
          <MenuItem value="movie3">Vikram</MenuItem>
          <MenuItem value="movie4">RRR</MenuItem>
        </Select>
      </FormControl>

      {/* Seats Row */}
      <div
        style={{
          backgroundColor: "#dddddd",
          padding: "10px",
          margin: "0 auto",
          width: "60%",
        }}
      >
        {/* Render available seats */}
        {availableSeats.map((seat) => (
          <div
            key={seat}
            onClick={() => handleSeatClick(seat)}
            style={{
              display: "inline-block",
              margin: "22px",
              width: "30px",
              height: "30px",
              backgroundColor: getSeatColor(seat),
              border: "1px solid black",
              textAlign: "center",
              lineHeight: "30px",
              cursor: isBookingConfirmed ? "default" : "pointer",
            }}
          >
            {seat}
          </div>
        ))}
      </div>

      {/* Selected Seats and Total Price */}
      <Typography variant="body1" style={{ margin: "20px" }}>
        {selectedSeats.length > 0 ? (
          <>
            Selected Seats: {selectedSeats.join(", ")}
            <br />
            Total Price: ₹{calculateTotalPrice()}
          </>
        ) : (
          "Select seats to see the total price."
        )}
      </Typography>

      {/* Book Button */}
      {selectedSeats.length > 0 && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleBookButtonClick}
          disabled={isBookingConfirmed}
        >
          {isBookingConfirmed ? "Booking Confirmed!" : "Book"}
        </Button>
      )}
    </div>
  );
};

export default Dashboard;
