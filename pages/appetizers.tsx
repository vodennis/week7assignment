import Link from 'next/link';
import '/app/globals.css';

export default function Appetizers() {
    return (
        <div>
            <h1>Appetizers</h1>
            <ul>
                <li>Bread</li>
                <li>Salad</li>
                <li>French Fries</li>
            </ul>
            <Link href="/">Go back to the Main Menu</Link>
        </div>
    );
}
