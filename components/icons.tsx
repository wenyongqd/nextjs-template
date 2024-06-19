import { cn } from "@/lib/utils"
import { User, Pilcrow, LayoutDashboard, Settings } from "lucide-react"

export const Icons = {
  user: User,
  pilcrow: Pilcrow,
  dashboard: LayoutDashboard,
  settings: Settings
}

export function SiteLogo({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 250 250"
          fill="currentColor"
          className={cn('h-6 w-6', className)}
          {...props}
      >
        <path fill="#0d0e10" d="M 41.287 59.462 C 49.374 60.07 51.435 59.628 59.9 60.551 C 64.855 60.965 65.983 62.613 67.72 65.563 C 70.11 74.052 66.387 80.229 56.975 80.552 C 18.836 81.862 -1.641 66.428 3.045 34.069 C 5.446 17.49 17.57 8.227 30.22 6.742 C 92.84 5.661 155.107 6.638 217.864 6.966 C 247.237 16.77 251.053 47.669 236.815 67.853 C 230.404 76.315 221.595 80.223 211.272 81.653 C 179.963 82.194 154.26 81.311 122.95 81.852 C 115.997 84.709 111.307 85.262 109.517 96.556 C 108.391 117.517 108.86 129.403 109.104 150.658 C 108.874 172.413 109.441 189.401 109.565 210.789 C 118.064 222.6 131.433 220.63 138.332 209.754 C 138.881 179.987 139.042 151.198 139.591 121.433 C 143.004 113.895 148.773 111.46 156.893 114.127 C 159.905 116.001 161.367 118.533 162.66 121.433 C 163.76 150.658 163.76 179.883 162.66 209.109 C 159.614 251.983 94.758 255.646 85.211 212.356 C 84.112 171.766 84.112 131.174 85.211 90.585 C 88.779 75.687 92.605 65.625 112.401 60.547 C 144.809 60.006 177.216 59.464 209.626 58.923 C 219.524 55.382 223.095 48.618 220.336 38.627 C 218.413 34.57 215.392 31.593 211.272 29.699 C 153.048 28.616 94.823 28.616 36.598 29.699 C 20.05 36.489 26.071 58.319 41.287 59.462 Z"></path>
      </svg>
  )
}

export function IconUser({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Z" />
    </svg>
  )
}
