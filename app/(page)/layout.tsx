import AltNav from "@/components/altnav";

export default function AltRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div
        className={` antialiased bg-neutral-950 text-cyberpurp bg-[url("https://i.pinimg.com/1200x/fe/06/7b/fe067ba785ea0b7f58a03d74b6998518.jpg")] bg-cover`}
      >
        <AltNav />
        {children}
      </div>
  );
}
