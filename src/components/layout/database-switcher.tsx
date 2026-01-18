import * as React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import {
  AiNetworkIcon,
  Check,
  UnfoldMoreIcon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

export function DatabaseSwitcher({
  databases,
  defaultDatabase,
}: {
  databases: string[]
  defaultDatabase: string
}) {
  const [selectedDatabase, setSelectedDatabase] =
    React.useState(defaultDatabase)

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <HugeiconsIcon icon={AiNetworkIcon} className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Database</span>
                  <span className="">{selectedDatabase}</span>
                </div>
                <HugeiconsIcon icon={UnfoldMoreIcon} className="ml-auto" />
              </SidebarMenuButton>
            }
          ></DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width)"
            align="start"
          >
            {databases.map((database) => (
              <DropdownMenuItem
                key={database}
                onClick={() => setSelectedDatabase(database)}
              >
                {database}{' '}
                {database === selectedDatabase && (
                  <HugeiconsIcon icon={Check} className="ml-auto" />
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
