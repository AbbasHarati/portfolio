
import Link  from "@/node_modules/next/link";

export default function MenuOverlay(){

    const navLinks = [
        {
          title: "صفحه اصلی",
          path: `./`,
        },
        {
          title: "درباره من",
          path: `./about`,
        },
        {
          title: "خدمات",
          path: `./services`,
        },
        {
          title: "تماس با من",
          path: `./contact`,
        }
      ];

    return(
       <div className="md:hidden">
        <ul className="flex flex-col text-center py-4  ">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
}