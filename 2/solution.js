import postgres from "postgres";

const config = {
  host: "127.0.0.1",
  user: "postgres",
  password: "",
  port: 5432,
};

// BEGIN (write your solution here)
const solution = async (articles) => {
  const sql = postgres(config);

  const inserted = await sql`
    INSERT INTO articles ${sql(articles, 'title', 'description')}
    RETURNING id
  `;
  
  return inserted.map(row => row.id);
}

export default solution
// END
