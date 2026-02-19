const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Prince@8857",
  database: "movie_ticket_booking"
});

db.connect((err) => {
  if (err) {
    console.log("❌ DB Connection Error:", err.message);
  } else {
    console.log("✅ MySQL Connected Successfully");
  }
});


// ===============================
// ✅ 1️⃣ Add Movie (POST)
// ===============================
app.post("/add-movie", (req, res) => {
  const { movie_image, movie_name, description, price, total_tickets } = req.body;

  if (!movie_name || !price) {
    return res.status(400).json({ message: "Movie name and price are required" });
  }

  const sql = `
    INSERT INTO movies 
    (movie_image, movie_name, description, price, total_tickets) 
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [movie_image, movie_name, description, price, total_tickets],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: "🎬 Movie Added Successfully" });
    }
  );
});


// ===============================
// ✅ 2️⃣ Get All Movies (GET)
// ===============================
app.get("/movies", (req, res) => {
  db.query("SELECT * FROM movies", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: err.message });
    }

    res.status(200).json(result);   // ✅ Always return array
  });
});


// ===============================
// ✅ 3️⃣ Update Movie (PUT)
// ===============================
app.put("/update-movie/:id", (req, res) => {
  const { movie_image, movie_name, description, price, total_tickets } = req.body;
  const { id } = req.params;

  const sql = `
    UPDATE movies 
    SET movie_image=?, movie_name=?, description=?, price=?, total_tickets=? 
    WHERE id=?
  `;

  db.query(
    sql,
    [movie_image, movie_name, description, price, total_tickets, id],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: err.message });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Movie Not Found" });
      }

      res.json({ message: "✏ Movie Updated Successfully" });
    }
  );
});


// ===============================
// ✅ 4️⃣ Delete Movie (DELETE)
// ===============================
app.delete("/delete-movie/:id", (req, res) => {
  const id = parseInt(req.params.id, 10); // ensure integer
  if (isNaN(id)) return res.status(400).send("Invalid ID");

  db.query("DELETE FROM movies WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) return res.status(404).send("Movie not found");
    res.send("Movie Deleted Successfully");
  });
});




app.post("/book-ticket/:id", (req, res) => {
  const movieId = req.params.id;
  const { quantity } = req.body;

  db.query(
    "UPDATE movies SET total_tickets = total_tickets - ? WHERE id = ? AND total_tickets >= ?",
    [quantity, movieId, quantity],
    (err, result) => {
      if (err) return res.status(500).send(err);

      if (result.affectedRows === 0) {
        return res.status(400).send("Not enough tickets available");
      }

      res.send("Booking successful!");
    }
  );
});




// ===============================
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
