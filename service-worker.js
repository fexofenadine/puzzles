//the games' worker lived here, this retires it and the cache named after its scope
self.addEventListener('install', () => self.skipWaiting())

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      await caches.delete(self.registration.scope)
      await self.registration.unregister()
      const tabs = await self.clients.matchAll({ type: 'window' })
      tabs.forEach((tab) => tab.navigate(tab.url))
    })(),
  )
})
