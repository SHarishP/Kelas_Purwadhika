import Link from "next/link";
export default function AboutUsView() {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1 className="text-lg">About Us Page</h1>
      <Link href="/about-us/5-manfaat-kesehatan">5 Manfaat Kesehatan</Link>
    </div>
  );
}
