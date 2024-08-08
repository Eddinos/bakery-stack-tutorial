import { Hono } from 'hono'
import { html } from 'hono/html'
import Card from './components/Card'
import { serveStatic } from 'hono/bun'
import profiles from './data/profiles'
import DefaultLayout from './layout/default'
import Home from './page/Home'
import { jsxRenderer } from 'hono/jsx-renderer' 
import { JSXNode } from 'hono/jsx'

function getProfileFromID (id: string) {
  return profiles[parseInt(id)]
}

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))

app.get('/app/*', jsxRenderer(({children}) => 
  <DefaultLayout>
      { children }
  </DefaultLayout>)
)

app.get('/app', c => {
  return c.render(<Home />)
})

app.get('/card', c => {
  const { profileID } = c.req.query()

  const profile = getProfileFromID(profileID)

  if (!profile) return c.html('', 200)

  return c.html(<Card name={profile.name} abilities={profile.abilities} picture={profile.picture} />)
})

export default app
