export default function NotFoundPage() {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center bg-[url('/1920x1080/reacher-1920x1080-02.png')] bg-cover bg-center text-white`}
    >
      <div className="text-2xl font-semibold italic sm:text-4xl">
        &quot;I&apos;m not a vagrant. I&apos;m a hobo&quot;.
      </div>

      <h1 className="mt-10">404 - Page Not Found</h1>
    </div>
  );
}
