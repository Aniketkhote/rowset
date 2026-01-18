import { Button } from '@/components/ui/button'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <h1>Rowset</h1>
      <Button render={<Link to="/dashboard">Navigate to Dashboard</Link>} />
    </>
  )
}
