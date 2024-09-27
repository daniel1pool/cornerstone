export async function GET(request: Request) {
  var data = {
    greeting: 'Hello!'
  }

  return Response.json({ data })
}