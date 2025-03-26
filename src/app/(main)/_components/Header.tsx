import Logo from "~/app/(main)/_components/Logo";

export default function Header() {
  return (
    <div className="my-3 mt-6 flex w-full flex-row">
      <Logo className="flex flex-row justify-center text-5xl" />
    </div>
  );
}
