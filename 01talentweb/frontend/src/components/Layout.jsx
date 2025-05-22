import { Link } from "@inertiajs/react";
import Footer from "@/components/Footer.jsx";
import WhoWeAre from '@/components/WhoWeAre.jsx';
import Navbar from '@/components/Navbar.jsx';
import Hero from '@/components/Hero.jsx';
import Stats from '@/components/Stats.jsx';
import CompanyLogos from '@/components/CompanyLogos.jsx';

const Layout = ({children}) => (
<>
{/* <nav className="border border-gray-400 mb-2 flex justify-center items-center">
       <ul className="flex gap-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/contact">Contact</Link></li>
       </ul>
</nav> */}
<main className="flex justify-center items-center">
       { children }
</main>
<Navbar />
<Hero />
<Stats />
<CompanyLogos />
<WhoWeAre />
<Footer />
</>
)

export default page => <Layout>{page}</Layout>;