import getEducationals from "../libs/getEducationals";

export default async function educationalsPage() {
  const educationals = await getEducationals();
  return (
    <>
      <p>مطالب آموزشی</p>
      <div>
        {educationals.map((educational) => {
          return(
          <div key={educational.id}>{educational.title}</div>
          )
        })}
      </div>
    </>
  );
}
