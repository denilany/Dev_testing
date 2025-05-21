import { usePage } from '@inertiajs/react';
import Hero from './components/Hero.jsx';
import FeaturedProfiles from './components/FeaturedProfiles.jsx';

export default function Index() {
    const { talents = [] } = usePage().props;

    return (
        <div className="min-h-screen">
            <Hero />
            <FeaturedProfiles talents={talents} />
        </div>
    );
}