import Link from 'next/link';
import { useRouter } from 'next/router';

import style from './Layout.module.css';

interface LayoutProps {
    children: React.ReactChild | React.ReactChild[];
}

const Layout = ({ children }: LayoutProps) => {
    const router = useRouter();

    return (
        <div className={style['layout-container']}>
            <nav className={style['navigation-bar']}>
                <h1>Prepared for Disaster</h1>
                <div>
                    <li>New Plan</li>
                    <li>About</li>
                </div>
            </nav>
            <div className={style.steps}>
                <ul>
                    <li className={router.asPath === "/new-plan" ? "active" : ''}>
                        <Link href="/new">User Information</Link>
                    </li>
                    <li className={router.asPath === "/new-plan/step2" ? "active" : ''}>
                        <Link href="/new-plan/step2">Loved Ones</Link>
                    </li>
                    <li className={router.asPath === "/new-plan/step3" ? "active" : ''}>
                        <Link href="/new-plan/step3">Rally Points</Link>
                    </li>
                    <li className={router.asPath === "/new-plan/step4" ? "active" : ''}>
                        <Link href="/new-plan/step4">Emergency Kit</Link>
                    </li>
                </ul>
            </div>
            <main className={style['main-content']}>{ children }</main>
        </div>
    )
}

export default Layout;