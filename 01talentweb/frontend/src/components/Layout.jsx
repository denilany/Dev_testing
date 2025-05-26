import { Link } from "@inertiajs/react";
import Footer from "@/components/Footer.jsx";
import Navbar from '@/components/Navbar.jsx';

const Layout = ({children}) => (
<>
<main className="w-full h-screen overflow-hidden overflow-y-scroll">
       {/* <nav className="border border-gray-400 mb-2 flex justify-center items-center">
              <ul className="flex gap-2">
                     <li><Link href="/">Home</Link></li>
                     <li><Link href="/contact">Contact</Link></li>
              </ul>
       </nav> */}
       { children }
       <Footer />
</main>
</>
)

export default page => <Layout>{page}</Layout>;