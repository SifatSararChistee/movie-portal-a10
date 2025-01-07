require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.esc8v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();
    const movieCollection = client.db("movieDB").collection("movie");
    const favoriteCollection = client.db("favoriteDB").collection("favMovie");

    //lowest rated movies
    app.get("/movies/lowest", async (req, res) => {
      const cursor = movieCollection.find({}).sort({ rating: 1 });
      const result = await cursor.toArray();
      res.send(result);
    });

    //highest rated movies
    app.get("/movies/highest", async (req, res) => {
      const cursor = movieCollection.find({}).sort({ rating: -1 });
      const result = await cursor.toArray();
      res.send(result);
    });

    //top 8 highest rated movies
    app.get("/movies/highest-rated", async (req, res) => {
      const cursor = movieCollection.find({}).sort({ rating: -1 }).limit(8);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.post("/favorites", async (req, res) => {
      try {
        const movieData = req.body;
        console.log("Received data:", movieData);
        const result = await favoriteCollection.insertOne(movieData);
        res.status(201).send(result);
      } catch (error) {
        console.error("Error inserting movie:", error);
        res.status(500).send({ error: "Failed to insert movie" });
      }
    });

    app.get("/favorites", async (req, res) => {
      const cursor = favoriteCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.delete("/favorites/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: id };
      const result = await favoriteCollection.deleteOne(query);
      res.send(result);
    });

    app.get("/movies", async (req, res) => {
      const { searchParams } = req.query;
      let option = {};

      if (searchParams) {
        option = { title: { $regex: searchParams, $options: "i" } };
      }

      try {
        const result = await movieCollection.find(option).toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: "Failed to fetch movies" });
      }
    });

    app.get("/movies", async (req, res) => {
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/movie-details/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const movie = await movieCollection.findOne(query);
      res.send(movie);
    });

    app.put("/movie-details/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const updateMovies = req.body;
      const movie = {
        $set: {
          title: updateMovies.title,
          poster: updateMovies.poster,
          genre: updateMovies.genre,
          duration: updateMovies.duration,
          releaseYear: updateMovies.releaseYear,
          rating: updateMovies.rating,
          summary: updateMovies.summary,
        },
      };
      const options = { upsert: true };
      try {
        const result = await movieCollection.updateOne(query, movie, options);
        res.send(result);
      } catch (error) {
        console.error("Error updating movie:", error);
        res.status(500).send({ error: "Failed to update movie" });
      }
    });

    app.delete("/movies/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await movieCollection.deleteOne(query);
      res.send(result);
    });

    app.post("/movies", async (req, res) => {
      try {
        const movieData = req.body;
        console.log("Received data:", movieData);
        const result = await movieCollection.insertOne(movieData);
        res.status(201).send(result);
      } catch (error) {
        console.error("Error inserting movie:", error);
        res.status(500).send({ error: "Failed to insert movie" });
      }
    });

    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Connection error:", error);
  }
}

run().catch(console.dir);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
