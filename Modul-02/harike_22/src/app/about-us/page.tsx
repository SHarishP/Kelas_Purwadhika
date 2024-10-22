/* 
    page.tsx akan otomatis langsung dibaca oleh Next.JS, tetapi dalam 1 folder, maksimal hanya ada 1 page.tsx
    Dan kita tidak mennggunakan index.tsx lagi
*/
import AboutUsView from "@/views/pages/about-us";

export default function AboutUs() {
  return (
    <div>
      <AboutUsView />
    </div>
  );
}
