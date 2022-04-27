const API_URL = "https://edgemony-backend.herokuapp.com/movies";

// GET
const GET = () => fetch(API_URL).then((res) => res.json());


// POST
const POST = (body) =>
  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });


// DELETE
const DELETE = (id) => fetch(`${API_URL}/${id}`, { method: "DELETE" });


// PUT
const PUT = (id, body) =>
  fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

export { GET, POST, DELETE, PUT };