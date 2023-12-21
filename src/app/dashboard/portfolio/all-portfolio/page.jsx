import DashboardMasterLayout from "@/layout/DashboardMasterLayout";
import PortfolioTable from "@/childComponents/PortfolioTable";


export default function Page() {
  return (
    <main>
      <DashboardMasterLayout>
        <PortfolioTable />
      </DashboardMasterLayout>
    </main>
  );
}
