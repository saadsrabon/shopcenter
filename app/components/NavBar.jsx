import Image from "next/image"

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto ">
    <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
      <div className="flex items-center gap-2">
        <Image width={50} height={50} src="./menu.svg" className="lg:hidden w-5 h-5" alt="" />
        <a href="./index.html">
          <Image width={100} height={10} src="./lws-logo-black.svg" className="h-10" alt="" />
        </a>
      </div>
    </div>
    <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
      <Image  width={100} height={100} src="./avatar.svg" className="hidden lg:block w-[18px] h-[18px]" alt="login acount avatar" />
      <Image width={100} height={100} src="./shopping-Cart.svg" className="block w-5 h-5" alt="shopping cart icon" />
    </div>
  </nav>
  )
}

export default NavBar