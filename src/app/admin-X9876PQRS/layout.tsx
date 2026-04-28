import DashboardLayout from "@/components/AdminPanel/components/DashBoardLayout";
// import {Toaster} from "react-hot-toast";

export default  async function RootLayout({ children }: { children: React.ReactNode }) {


    return (
        <div className=" bg-gray-50">

            <DashboardLayout>{children}</DashboardLayout>
            {/* <Toaster/> */}

        </div>
    )
}