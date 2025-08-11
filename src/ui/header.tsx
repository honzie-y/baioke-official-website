import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className='px-7 py-3 flex items-center bg-gray-300/30'>
        <Link href={'/'} className="mr-30">
        <Image src={'/baioke-logo.png'} width={181} height={75} alt="Baioke佰欧克logo"/>
        </Link>
        <form action="" className="flex flex-grow gap-3">
          <input type="search" placeholder="搜索" className="border-2 flex flex-grow px-1 rounded-xl text-xl"/>
          <button type="submit"><Image src={'/search-logo.png'} width={20} height={20} alt="搜索logo"/></button>
        </form>
        <nav className="ml-5">
          <ul className="flex flex-row gap-6 text-[19px]">
            <li>
              <Link href={'/about'}>关于我们</Link>
            </li>
            <li>
              <Link href={'/problematic-skin'}>何为问题性皮肤</Link>
            </li>
            <li>
              <Link href={'/products'}>产品介绍</Link>
            </li>
            <li>
              <Link href={'/contact'}>联系我们</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
}