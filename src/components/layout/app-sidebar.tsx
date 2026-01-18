import * as React from 'react'

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { Chart, DashboardCircleIcon } from '@hugeicons/core-free-icons'
import { DatabaseSwitcher } from './database-switcher'
import { NavMain } from './nav-main'

// This is sample data.
const data = {
  databases: ['postgres', 'mysql', 'mariadb'],
  navMain: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: DashboardCircleIcon,
    },
    {
      name: 'Sales & Marketing',
      url: '/dashboard',
      icon: Chart,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <DatabaseSwitcher
          databases={data.databases}
          defaultDatabase="postgres"
        />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
