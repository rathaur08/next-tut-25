export const metadata = {
  title: "Contact Page",
  description: "this is my Contact page",
  authors: [
    { name: "Sunny" },
    { name: "Sunny", url: "sunny.com" },
  ],
  keywords: ["nextjs", "react_js", "fullstack"],
};

const page = () => {
  return (
    <>
      <div>
        <h1>Contact Page</h1>
        <p>This is the contact page of our Next.js application.</p>
      </div>
    </>
  )
}

export default page
