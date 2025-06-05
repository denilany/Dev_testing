import { usePage } from '@inertiajs/react';
import DeveloperSection from './components/Developer_talent.jsx';
import { SampleTalents } from '../Home/Index';
import VetTalentSection from './components/How_we_vet.jsx';

export default function Talent() {
    const { talents } = usePage().props;

    return (
        <>
            <DeveloperSection talent={SampleTalents} />
            <VetTalentSection />
        </>
    );
}