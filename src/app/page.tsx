'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Card from './../components/Card'


export default function Home() {
  const handleTitleClick = () => {
    alert('ollaaaaaaaaaa')
  }

  return (
    <main className={styles.main }>
      <div className={styles.description}>
        <p onClick={handleTitleClick}>
          Klik ada Alert Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
        

          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        

      <Card title="Docs" subtitle="Walaupun class sama, tapi klo beda component/props, style nya engga inherit." link="https://alinea.id" />
      <Card  />
      <Card title="Template" subtitle="Learning a little each day adds up. Research shows that students who make" link="https://facebook.com" />
      <Card title="Deploy" subtitle="Master core React principles with easy practical guide, incl. hooks, REST API, authentication, routing and many more!" link="https://x.com" />

        

        
      </div>
    </main>
  )
}
