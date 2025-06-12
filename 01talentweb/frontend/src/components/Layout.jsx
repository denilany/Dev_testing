import { Link } from "@inertiajs/react";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";

// Create a container component for consistent spacing
export const Container = ({ children, className = "" }) => {
  return (
    // <div className={`mx-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-24 2xl:mx-48 ${className}`}>
    <div className={`mx-4 xxs:mx-4 sm:mx-20 mx-auto ${className}`}>
      {children}
    </div>
  );
};

const Layout = ({children}) => (
<>
<main className="w-full h-screen overflow-hidden overflow-y-scroll">
       <Navbar />
       { children }
       <Footer />
</main>

</>
)

export default page => <Layout>{page}</Layout>;