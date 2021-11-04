import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function FirstPost() {
    const router = useRouter()
    const { id } = router.query
    return <>
        <head>
            <title>imanuel</title>
        </head>
        <Image src="/images/profile.jpg" alt="Your Name"
            width={300} height={400} />
        <h1 className="title">
            <Link href='/'>go back</Link>
        </h1>
        <h1>First Post:{id}</h1>
    </>
}