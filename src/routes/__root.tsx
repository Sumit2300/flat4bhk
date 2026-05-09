import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

const GTM_ID = "GTM-5X5T7V6B";
const TURNSTILE_SITE_KEY = String(import.meta.env.VITE_TURNSTILE_SITE_KEY ?? "").trim();
const META_PIXEL_ID = String(import.meta.env.VITE_META_PIXEL_ID ?? "").trim();

type ScriptTag = React.JSX.IntrinsicElements["script"];

const GTM_HEAD_SNIPPET =
  `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':` +
  `new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],` +
  `j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=` +
  `'https://www.googletagmanager.com/gtm.js?id='+i+dl;` +
  `f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`;

function buildTrackingScripts(): ScriptTag[] {
  const scripts: ScriptTag[] = [];

  if (META_PIXEL_ID) {
    scripts.push({
      dangerouslySetInnerHTML: {
        __html:
          "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?" +
          "n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;" +
          "n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;" +
          "t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}" +
          "(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');" +
          `fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`,
      },
    });
  }

  if (TURNSTILE_SITE_KEY) {
    scripts.push({
      src: "https://challenges.cloudflare.com/turnstile/v0/api.js",
      async: true,
      defer: true,
    });
  }

  return scripts;
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Picasa Residencies 4BHK Luxury Floors in Kharar" },
      {
        name: "description",
        content:
          "Premium 4BHK + Store low-rise floors in Kharar with premium interiors, parking, MC Kharar approval and PR-1 connectivity.",
      },
      { name: "author", content: "MV Realtor" },
      { property: "og:title", content: "Picasa Residencies 4BHK Luxury Floors in Kharar" },
      {
        property: "og:description",
        content:
          "1350 sq. ft. 4BHK + Store homes with modular kitchen, wardrobes, TV panels, flexible payment options and PNB Housing Finance support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Picasa Residencies 4BHK Luxury Floors in Kharar" },
      {
        name: "twitter:description",
        content:
          "Premium 4BHK + Store low-rise floors in Kharar with interiors included, parking, financing support and highway connectivity.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4c66f4fa-7861-452f-a8c3-dd920961b2bd/id-preview-0f2ed7f6--9afa102a-c1a3-4785-8ede-05cdef15dbd5.lovable.app-1778143837953.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4c66f4fa-7861-452f-a8c3-dd920961b2bd/id-preview-0f2ed7f6--9afa102a-c1a3-4785-8ede-05cdef15dbd5.lovable.app-1778143837953.png",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: buildTrackingScripts(),
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {/* Google Tag Manager — placed immediately after opening <body> */}
        <script dangerouslySetInnerHTML={{ __html: GTM_HEAD_SNIPPET }} />
        {/* GTM noscript fallback — required by Google's implementation spec */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
