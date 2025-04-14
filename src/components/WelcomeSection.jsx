import { Link } from "react-router";
import MoreButton from '../components/MoreButton';

function WelcomeSection() {
    return (
        <div>
            <div className="welcomeSection w-full block md:hidden">
                {/* 圖片區塊 */}
                <div className="relative w-full mt-2">
                    <img 
                        src="/images/welcome-section.svg" 
                        className="w-full h-auto object-cover" 
                        alt="Welcome Banner" 
                    />
                </div>

                {/* 名稱 + 背景區塊 */}
                <div className="bg-[#FFFBF3] w-full py-5 px-4 h-40">
                    <div className="text-center">
                        <p className="text-[24px] font-bold">名畫檔案</p>
                        <MoreButton className="mt-10"/>
                    </div>
                    
                </div>
            </div>


            <div className='welcomeSection w-full h-90 hidden md:block'>
                {/* <img src="./images/welcome-section.jpg" className="" /> */}
                {/* tiltle & button */}
                <div className='bg-[#FFFFFF] h-2/5'></div>
                
                <div className="bg-[#FFFBF3] h-3/5 flex flex-col justify-between items-end p-4">
                    <div className="font-bold sm:text-[12px] mr-60">
                        <h1>名畫檔案</h1>
                    </div>

                    <MoreButton className="mb-3 mr-20"/>
                    </div>
                    
                
                {/* <h1 className='ml-10'>名畫檔案</h1> */}
                <div></div>
                <img src="/images/welcome-section.svg" className="relative -top-7/8 h-4/5 ml-20" />
            </div>
        </div>

    );
}

export default WelcomeSection;
