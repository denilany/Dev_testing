import { Link } from "@inertiajs/react";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";

// Create a container component for consistent spacing
export const Container = ({ children, className = "" }) => (
  <div className={`mx-4 xxs:mx-4 sm:mx-20 mx-auto ${className}`}>
    {children}
  </div>
);

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
              <Navbar />

       <Footer />
</main>

</>
)

export default page => <Layout>{page}</Layout>;