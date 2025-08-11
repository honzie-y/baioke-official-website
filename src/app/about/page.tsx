import Image from "next/image";

export default function Page() {
    return (
        <main className="px-7 mt-8">
            <section className="">

            </section>
            <div className="flex flex-row gap-10 w-[70vw]">
                <p className="w-[40vw] border-b-4 pb-4 text-xl">佰欧克于2016年在美丽的杭州诞生。自成立以来，始终致力于研究问题性皮肤和提供科学有效的生物护肤方案。</p>
                <h1 className="text-4xl">起源，与目标。</h1>
            </div>
            <Image src={''} width={850} height={400} alt="公司照片" className="my-5"/>
            <div className="border-t-4 w-[70vw]">
                <h1 className="text-4xl">未来。</h1>
                <p>在未来的十年，佰欧克将继续关注皮肤细胞健康，倡导科学养肤的理念，为所有消费者提供专业安全的创新护肤方案。佰欧克将沿着时代的发展道路不断前进，持续扩大品牌的影响力，成长为具有社会影响力和责任感的品牌。</p>
            </div>
            <p>在过去的十年间，佰欧克深耕生命科学与皮肤科学领域，已成功研发和生产解决祛斑、祛痘、抗皱、敏感肌及激素依赖性皮炎等一系列具有代表性的皮肤问题的功能性生物护肤品，让广大消费者在裸肌状态下也能焕发光彩。</p>
            
        </main>
    );
}