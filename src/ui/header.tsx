import Image from "next/image";
import Link from "next/link";
import SearchToggle from "./searchToggle/searchToggle";

const pages = [
  {
    name: '主页',
    link: '/'
  },
  {
    name: '关于我们',
    link: '/about'
  },
  {
    name: '何为问题性皮肤',
    link: '/problematic-skin'
  },
  {
    name: '产品介绍',
    link: '/products'
  },
  {
    name: '联系我们',
    link: '/contact'
  }
];

export default function Header() {

  return (
      <header className='py-3 mr-auto ml-auto flex items-center justify-between max-w-[1560px] w-[90vw]'>
        <Link href={'/'} className="relative z-1">
          <Image src={'/baioke-logo.png'} width={181} height={75} alt="Baioke佰欧克logo"/>
        </Link>
        <nav className="flex flex-row gap-6">
          <ul className="relative z-1 flex flex-row gap-6 text-[19px]">
            {pages.map((page) => (
              <li key={page.name}>
                <Link href={page.link}>{page.name}</Link>
              </li>
            ))}
          </ul>
          <SearchToggle />
        </nav>
      </header>
  )
}