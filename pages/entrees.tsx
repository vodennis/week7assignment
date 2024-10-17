import { useEffect, useState } from 'react';
import Link from 'next/link';
import '/app/globals.css';

export default function Entrees() {
    const [entrees, setEntrees] = useState<string>('');

    useEffect(() => {
    const fetchEntrees = async () => {
        const response = await fetch('/entrees.txt');
        const data = await response.text();
        setEntrees(data);
    };
    fetchEntrees();
    }, []);

    return (
    <div>
        <h1>Entrees</h1>
        <p>{entrees}</p>
        <Link href="/">Go back to the Main Menu</Link>
    </div>
    );
}
