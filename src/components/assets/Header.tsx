import Hamburger from "./Hamburger";
import Human from "./Human";
import Language from "./Language";
import Logo from "./Logo";
import Phone from "./Phone";

export default function Header() {
    const navitem = ['ارتباط با ما', 'رویداد ها', 'راهنمای گردشگری تهران', 'امکانات و خدمات']

    return (
        <div className="container mx-auto h-[65.6px] bg-[#FFFFFF] border border-[#F0F0F0] p-4 flex justify-center items-center">
            <div className="w-full h-full flex justify-between max-w-[1200px]">
                <div className="flex justify-between md:gap-x-8 gap-x-[6px]">
                    <button className="w-7 h-full"><Language /></button>
                    <button className="md:w-auto w-7 h-full flex justify-between items-center gap-x-1">
                        <div className="md:flex justify-between text-xs hidden gap-x-2">
                            <p>ثبت‌ نام</p>
                            <p>ورود</p>
                        </div>
                        <Human />
                    </button>
                    <button className="lg:w-auto w-7 h-full flex justify-between items-center gap-x-1">
                        <p className="font-bold lg:block hidden">۰۲۱-۲۷۲۰</p>
                        <Phone />
                    </button>
                </div>
                <div className="flex justify-between sm:gap-x-8 gap-x-2">
                    <div className="hidden sm:flex justify-between xl:gap-x-6 gap-x-4 items-center">
                        {navitem.map((item, index) => (
                            <p key={index} className="xl:text-sm leading-[22px] text-xs text-[#161616]">{item}</p>
                        ))}
                    </div>
                    <Logo />
                    <button className="w-7 h-full sm:hidden"><Hamburger /></button>
                </div>
            </div>
        </div>
    )
}