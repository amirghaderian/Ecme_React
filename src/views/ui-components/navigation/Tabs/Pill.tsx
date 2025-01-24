import Tabs from '@/components/ui/Tabs'

const { TabNav, TabList, TabContent } = Tabs

const Pill = () => {
    return (
        <div>
        <Tabs defaultValue="tab1" variant="pill">
            <TabList>
                <TabNav value="tab1">خانه</TabNav>
                <TabNav value="tab2">پروفایل</TabNav>
                <TabNav value="tab3">تماس</TabNav>
            </TabList>
            <div className="p-4">
                <TabContent value="tab1">
                    <p>
                        اگر سازندگان ساختمان‌ها را همانطور که برنامه‌نویسان برنامه‌ها را می‌نویسند، می‌ساختند، اولین دارکوبی که می‌آمد، تمدن را نابود می‌کرد. (جرالد واینبرگ)
                    </p>
                </TabContent>
                <TabContent value="tab2">
                    <p>
                        یک کامپیوتر به شما این امکان را می‌دهد که اشتباهات بیشتری را سریع‌تر از هر اختراعی در تاریخ بشر مرتکب شوید، به جز شاید اسلحه‌ها و تکلا. (میتچ رادکلیف)
                    </p>
                </TabContent>
                <TabContent value="tab3">
                    <p>
                        در C++ سخت‌تر است که خودتان را به‌طور تصادفی بزنید، اما وقتی این کار را می‌کنید، کل پایتان را از دست می‌دهید. (بیارن استروستروپ)
                    </p>
                </TabContent>
            </div>
        </Tabs>
    </div>
    
    )
}

export default Pill
