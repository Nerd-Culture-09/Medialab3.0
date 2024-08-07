"use client";

import * as Avatar from "@radix-ui/react-avatar";

export default function Partner() {
  const avatarSize = "h-16 w-16"; // Uniform size for all avatars

  return (
    <div className="flex flex-col items-center justify-center gap-y-8">
      <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
      <div className="flex items-center justify-center gap-x-8">
        <Avatar.Root className={`bg-white ${avatarSize} overflow-hidden rounded-full`}>
          <Avatar.Image
            src="https://randomuser.me/api/portraits/women/79.jpg"
            className="object-cover"
          />
          <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root className={`bg-white ${avatarSize} overflow-hidden rounded-full`}>
          <Avatar.Image
            src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
            className="object-cover"
          />
          <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root className={`bg-white ${avatarSize} overflow-hidden rounded-full`}>
          <Avatar.Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
            className="object-cover"
          />
          <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root className={`bg-white ${avatarSize} overflow-hidden rounded-full`}>
          <Avatar.Image
            src="https://randomuser.me/api/portraits/men/86.jpg"
            className="object-cover"
          />
          <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root className={`bg-white ${avatarSize} overflow-hidden rounded-full`}>
          <Avatar.Image
            src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
            className="object-cover"
          />
          <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
        </Avatar.Root>
      </div>
    </div>
  );
}
