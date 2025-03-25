import DevWindowBreakpoint from "~/components/DevWindowBreakpoint";
import MaintenanceMode from "~/app/main/_components/MaintenanceMode";
import { isDev, isProd } from "~/utilities/platform";

type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const MAINTENANCE_MODE = false;

export default async function MainLayout({ children }: LayoutProps) {
  if (MAINTENANCE_MODE && isProd) {
    return <MaintenanceMode />;
  }

  return (
    <>
      <div className="flex h-full min-h-full flex-col">
        {isDev && !isProd && <DevWindowBreakpoint />}
        <main className="flex grow flex-col items-center">{children}</main>
      </div>
    </>
  );
}
