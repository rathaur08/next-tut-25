import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "nexttut25",
});

db.getConnection()
  .then((connection) => {
    console.log("DB is connected");
    connection.release();
  })
  .catch((err) => {
    console.error("DB connection error:", err);
    process.exit(1);
  });

// try {
//   const connection = await db.getConnection();
//   console.log("✅ Database connected successfully.");
//   connection.release(); // important to release back to pool
// } catch (err) {
//   console.error("❌ Database connection failed:", err);
//   process.exit(1); // optional: stop server if DB is essential
// }
