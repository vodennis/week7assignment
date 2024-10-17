import Link from 'next/link';
import '/app/globals.css';

export default function Home() {
    return (
    <div>
        <h1>Restaurant</h1>
        <ul>
            <li><Link href="/appetizers">Appetizers</Link></li>
            <li><Link href="/entrees">Entrees</Link></li>
        </ul>
    </div>
    );
}
