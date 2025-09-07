import { db } from "@/config/db.jsx";

const StaticPage = async () => {
  const [users] = await db.execute("select * from users");
  console.log("users", users);

  return (
    <>
      <ul>
        {users.map((users) => {
          return <li key={users.id}>{users.id} , {users.name} </li>;
        })}
      </ul>
    </>
  );
};

export default StaticPage;
