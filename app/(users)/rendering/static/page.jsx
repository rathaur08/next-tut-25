import { db } from "@/config/db.jsx";

export const revalidate = 30;

const StaticPage = async () => {
  const [users] = await db.execute("select * from users");
  console.log("users", users);

  return (
    <>
      <p>Total Users: {users.length}</p>
      <UsersList users={users} />
    </>
  );
};

export default StaticPage;

const UsersList = ({ users }) => {
  return (
    <>
      <h1>Users List</h1>
      <ul>
        {users.map((users) => {
          return (
            <li key={users.id}>
              {users.id} , {users.name}{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
};
