import { AUTH_TOKEN } from "../config";

try {
  const res = await fetch(
    `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
    { headers: { Authorization: AUTH_TOKEN } }
  );
  if (!res.ok) throw new Error("Errore nella fetch");
  const data = await res.json();
  setComments(data);
} catch (err) {
  setError(true);
  setComments([]); // svuota i commenti in caso di errore
}
