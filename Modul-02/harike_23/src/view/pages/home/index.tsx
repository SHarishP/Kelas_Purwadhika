import Link from "next/link";

const getUsers = async () => {
  try {
    const data = await fetch("http://localhost:3000/api/users");
    const parse = await data.json();
  } catch (err) {
    console.log(err);
  }
};

export default function HomeView() {
  const users = getUsers();
  console.log(users);
  return (
    <div>
      <p className="text-lg">Home Page</p>
      <Link href="/about-us">About-Us</Link>
    </div>
  );
}
