import AppBarChart from "@/components/charts/AppBarChart";
import AppAreaChart from "@/components/charts/AppAreaChart"
import PieChart from "@/components/charts/AppPieChart"
import { AppCard } from "@/components/cards/AppCard";
import { ConnectionStatus } from "@/types/node"
import { NotificationsCard } from "@/components/notifications/Notifications";

function getRandomDateLastSevenDays(): Date {
  const today = new Date();
  const todayMs = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();

  const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
  const sevenDaysAgoMs = todayMs - sevenDaysMs;

  const randomMs = Math.random() * (todayMs - sevenDaysAgoMs) + sevenDaysAgoMs;

  return new Date(randomMs);
}


export default function HomePage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>

      <div className="flex flex-col gap-2 bg-primary-foreground p-4 rounded-lg">
        <AppCard name="Node-1" lastSeen={new Date()} status={ConnectionStatus.CONNECTED} />
        <AppCard name="Office" lastSeen={getRandomDateLastSevenDays()} status={ConnectionStatus.DISCONNECTED} />
        <AppCard name="Node-2" lastSeen={getRandomDateLastSevenDays()} status={ConnectionStatus.ERROR} />
        <AppCard name="Node-3" lastSeen={getRandomDateLastSevenDays()} status={ConnectionStatus.UNKNOWN} />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">
        <PieChart />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">TESTING</div>

      <NotificationsCard />

      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg">TESTING</div>

    </div>
  );
}
