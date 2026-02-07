// app/api/todos/route.js
let todos = [];

export async function GET() {
  return Response.json(todos);
}

export async function POST(req) {
  const body = await req.json();
  todos.push({ id: Date.now(), text: body.text });
  return Response.json({ success: true });
}
