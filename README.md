This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Ref

![youtube](https://www.youtube.com/watch?v=7MKEOfSP2s4)

## UI - Shadcn, Lucide React, Tailwind-CSS

### Shadcn

- Shadcn is not a npm package as of now.
- It's a collection of re-usable components that you can copy and paste into your apps.
- The creator wants us to have ownership of the code, so only need to copy the component we need.
- Uses ![shadcn](https://ui.shadcn.com/docs) - Re-usable components built using Radix UI and Tailwind CSS
- Follow the manual installation guide ![here](https://ui.shadcn.com/docs/installation) to add to your project

## CLI to Add Components

To add a shadcn component, simply run:

```bash
npx shadcn-ui add <component_name>
npx shadcn-ui add skeleton
```

This will auto add the **<component_name>.tsx** file under **components\ui** directory.
Then just import and use the component:

```javascript
import { Skeleton } from "@/components/ui/skeleton";
<Skeleton className="w-[100px] h-[20px] rounded-full" />;
```

### Lucide React

- an open-source icon library that provides 1000+ vector (svg) files for displaying icons and symbols
- Lucide contains icons with different variants and states
- Lucide uses SVG compression and specific code architecture for tree-shaking abilities.
- After tree-shaking, you only ship the icons you used, which helps to keep software distribution size to a minimum.
- See ![Documentation](https://lucide.dev/guide/)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
