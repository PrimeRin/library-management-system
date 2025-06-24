import {
    LayoutDashboardIcon,
    ListIcon,
    FolderIcon,
    UsersIcon,
    BarChartIcon,
  } from 'lucide-react'
  
  export const navMain = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Records",
      url: "/dashboard/records",
      icon: ListIcon,
    },
    {
      title: "Books",
      url: "/dashboard/books",
      icon: FolderIcon,
    },
    {
      title: "Users",
      url: "/dashboard/users",
      icon: UsersIcon,
    },
    {
      title: "Reports",
      url: "/dashboard/reports",
      icon: BarChartIcon,
    },
  ]
  