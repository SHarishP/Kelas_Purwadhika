export default function Page({ params }: { params: { slug: string } }) {
  return <p>{params.slug}</p>;
}

/* 
  [slug] digunakan untuk membuat dinamic URL / Dynamic Routing
  Penggunanan page.tsx pada folder [slug] itu adalah folder terakhir / routing terakhir

  Jadi, jika kita menuliskan local localhost:3000/about-us/[nama routing bebas], makan pada <p> akan muncul [nama routing bebas]
*/
