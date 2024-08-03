export async function ping() {
    const response = await fetch("http://localhost:3000/ping");
    const data = await response.json();
    return data
  }