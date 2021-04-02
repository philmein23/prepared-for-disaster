import Link from 'next/link';

import style from './Layout.module.css';

interface LayoutProps {
    children: React.ReactChild | React.ReactChild[];
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={style['registration-container']}>
            <div className={style.steps}>
                <nav>
                    <li>
                        <Link href="/new">User Information</Link>
                    </li>
                    <li>
                        <Link href="/new/step2">Loved Ones</Link>
                    </li>
                    <li>
                        <Link href="/new/step3">Rally Points</Link>
                    </li>
                    <li>
                        <Link href="/new/step4">Emergency Kit</Link>
                    </li>
                </nav>
            </div>
            <main className={style['main-content']}>{ children }</main>
        </div>
    )
}

export default Layout;