import Image from "@/node_modules/next/image";

export default function AboutSection() {
  return (
    <section className="grid sm:grid-cols-2 border m-4">
      <div className="flex items-center justify-center h-full">
        <Image
          src="/pics/about-section.PNG"
          width={150}
          height={150}
          alt="about_section"
          className=""
        />
        
      </div>
      <div className="mt-4">
        <h2 className="text-4xl">درباره من</h2>
        <p className="text-justify m-4">
          یکی از پرکاربردترین آزمون فرضیه‌ها، استفاده از آزمون‌های فرضیه مربوط
          به میانگین (دو یا چند جامعه) می‌باشد. از آنجا که میانگین به عنوان یکی
          از اصلی‌ترین پارامترهای تعیین کننده ویژگی و مشخصات جوامع مطرح است،
          استفاده از آزمون‌های مربوط به میانگین می‌تواند به ما در درک درست
          تفاوت‌ها و یا همانندی جوامع کمک کند.
        </p>
      </div>
    </section>
  );
}
