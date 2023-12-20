import Link from "@/node_modules/next/link";

export default function Home() {
  return (
    <>
      <div className="rtl m-2">
        <div className="font-vazir">
        <Link href={`./`}>صفحه اصلی</Link>
        </div>
        <div>
          <Link href={`./pages/about`}>درباره من</Link>
        </div>
        <div>
          <Link href={`./pages/services`}>خدمات</Link>
        </div>
        <div>
          <Link href={`./pages/contact`}>تماس</Link>
        </div>
      </div>
    </>
  );
}
