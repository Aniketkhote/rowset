import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import {
  Folder,
  Forward,
  MoreHorizontal,
  Trash2,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon, IconSvgElement } from '@hugeicons/react'
import { Link } from '@tanstack/react-router'

export function NavMain({
  items,
}: {
  items: {
    name: string
    url: string
    icon: IconSvgElement
  }[]
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton
              render={
                <Link to={item.url}>
                  <HugeiconsIcon icon={item.icon} />
                  <span>{item.name}</span>
                </Link>
              }
            />

            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <SidebarMenuAction showOnHover>
                    <HugeiconsIcon icon={MoreHorizontal} />
                    <span className="sr-only">More</span>
                  </SidebarMenuAction>
                }
              ></DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? 'bottom' : 'right'}
                align={isMobile ? 'end' : 'start'}
              >
                <DropdownMenuItem>
                  <HugeiconsIcon icon={Folder} />
                  <span>View Project</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HugeiconsIcon icon={Forward} />
                  <span>Share Project</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <HugeiconsIcon icon={Trash2} />
                  <span>Delete Project</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
