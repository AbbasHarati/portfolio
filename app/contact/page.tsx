export default function contactPage() {
  return (
    <>
      <div className="m-2">Contact page</div>
      <form className="flex flex-col">
        <input type="text" className="border-2 m-1 rounded" />
        <input type="text" className="border-2 m-1 rounded" />
        <button className="bg-blue-500 rounded-lg">ارسال</button>
      </form>
    </>
  );
}
