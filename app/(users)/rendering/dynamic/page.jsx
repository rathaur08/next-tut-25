import { db } from "@/config/db.jsx";
import { cache } from "react";

export const dynamic = "force-dynamic";

const DynamicPage = async () => {
  const doctors = await getAllUsers();

  return (
    <>
      <p>Total Users: {users.length}</p>
      <UsersList users={users} />
    </>
  );
};

export default DynamicPage;

const UsersList = async () => {
  const users = await getAllUsers();
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

const getAllUsers = cache(async () => {
  const [users] = await db.execute("select * from users");
  console.log("users", users);
  return users;
});
