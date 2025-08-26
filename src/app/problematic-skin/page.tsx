

export default function Page() {
    return (
        <main>
            <section className="grid grid-cols-[2fr_2fr_3fr] mt-[5rem]">
                <div className="grid grid-rows-5 items-center justify-center text-xl">
                    <div className="border-2 p-1.5">
                        <p>问题一</p>
                    </div>
                    <div className="border-2 p-1.5">
                        <p>问题二</p>
                    </div>
                    <div className="border-2 p-1.5">
                        <p>问题三</p>
                    </div>
                    <div className="border-2 p-1.5">
                        <p>问题四</p>
                    </div>
                    <div className="border-2 p-1.5">
                        <p>问题五</p>
                    </div>
                </div>
                <img src="/empty-filler.png" alt="皮肤图片" className="border-2 w-80 h-100 rounded-[50%]"/>
                <p>问题描述</p>
            </section>
        </main>
    )
}