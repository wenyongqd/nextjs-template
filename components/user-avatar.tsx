import { AvatarProps } from "@radix-ui/react-avatar"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"
import { IconUser } from "./icons"

interface UserAvatarProps extends AvatarProps {
  user: any
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user.image ? (
        <AvatarImage alt="Picture" src={user.image} />
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user.name}</span>
          <IconUser className="h-4 w-4" />
        </AvatarFallback>
      )}
    </Avatar>
  )
}
