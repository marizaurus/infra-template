import fetch from "node-fetch";

fetch(`https://api.tracker.yandex.net/v2/issues/${process.env.TICKET_ID}/comments`, {
  method: "POST",
  headers: {
    Authorization: `OAuth ${process.env.AUTH_TOKEN}`,
    "X-Org-ID": `${process.env.ORG_ID}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ text: "Тест" }),
});
