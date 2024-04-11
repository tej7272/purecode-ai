import { Suspense } from "react";
import { Footer, Preloader } from "@/components";
import { Topbar, Navbar } from "@/components/layout/admin";
import { WalletPage } from "../app/admin/wallet";

const AdminLayout = () => {

  return (
    <Suspense>
      <Suspense>
        <Topbar />
      </Suspense>

      <Suspense>
        <Navbar />
      </Suspense>

      <Suspense fallback={<Preloader />}><WalletPage /></Suspense>

      <Suspense>
        <Footer hideLinks />
      </Suspense>
    </Suspense>
  );
};

export default AdminLayout;
