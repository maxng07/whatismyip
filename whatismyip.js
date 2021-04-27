ddEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})


async function handleRequest(request) {
 // Return Client's IP address
  const clientIP = request.headers.get("CF-Connecting-IP")
  return new Response(clientIP, { status: 200 })
}