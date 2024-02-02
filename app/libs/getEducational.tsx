
export default async function getEducational(id) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch post info.");
    }
    return await response.json();
  }
  