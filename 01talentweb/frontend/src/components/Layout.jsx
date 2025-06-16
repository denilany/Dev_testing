import { Link } from "@inertiajs/react";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";

// Create a container component for consistent spacing
export const Container = ({ children, className = "" }) => {
  return (
    <div 
      className={`mx-[clamp(0.5rem,5vw,8rem)] ${className}`}
    >
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