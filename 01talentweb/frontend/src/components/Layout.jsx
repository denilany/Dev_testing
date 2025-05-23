import { Link } from "@inertiajs/react";
import Footer from "@/components/Footer.jsx";

import Navbar from '@/components/Navbar.jsx';
import Hero from '@/components/Hero.jsx';
import Stats from '@/components/Stats.jsx';
import CompanyLogos from '@/components/CompanyLogos.jsx';

const Layout = ({children}) => (
<>

<main className="flex justify-center items-center">
       { children }
</main>
<Navbar />
<Footer />
</>
)

export default page => <Layout>{page}</Layout>;