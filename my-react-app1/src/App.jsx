import './App.css';
function App() {
    return (
        <>
            <header>
                <div className="wrap">
                    {/* 首頁廣告 */}
                    <div className="header">
                        <img src="../images/banner.jpg" alt="" />
                    </div>
                </div>
            </header>
            {/* 特色區 */}
            <div class="content">
                <div class="box">
                    <h2><strong>教學影音</strong></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime maiores voluptate enim in quos</p>
                </div>
                <div class="box">
                    <h2><strong>良性互動</strong> </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime maiores voluptate enim in quos</p>
                </div>
                <div class="box">
                    <h2><strong>趨勢分享</strong></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime maiores voluptate enim in quos</p>
                </div>
            </div>
            {/* 主標 */}
            <div class="abc"><h3>讓學習成為一種習慣</h3></div>

            {/* 推薦課程 */}
            <div className='content2'>
                <h1>推薦課程</h1>
                <div className="contentClass">
                    {/* 商品1 */}
                    <div className="box2">
                        <p><img src="../public/images/unity.jpg" alt="" /></p>
                        <p><h3>Unity</h3></p>
                        <p className='p-blue'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>講師</p>
                        <p>課程時數</p>
                        <p><span className='span1'>原價 1600</span><span>1200</span></p>
                        <p><button>付款上課去</button></p>
                    </div>
                    {/* 商品2 */}
                    <div className="box2">
                        <p><img src="../public/images/gamesalad.jpg" alt="" /></p>
                        <p><h3>gamesalad</h3></p>
                        <p className='p-blue'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>講師</p>
                        <p>課程時數</p>
                        <p><span className='span1'>原價 1600</span><span>1200</span></p>
                        <p><button>付款上課去</button></p>
                    </div>
                    {/* 商品3 */}
                    <div className="box2">
                        <p><img src="../public/images/gwd.jpg" alt="" /></p>
                        <p><h3>google web</h3></p>
                        <p className='p-blue'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>講師</p>
                        <p>課程時數</p>
                        <p><span className='span1'>原價 1600</span><span>1200</span></p>
                        <p><button>付款上課去</button></p>
                    </div>
                </div>
            </div>

            {/* 頁尾 */}

            <footer>
                <p>王育瑱 1112</p>
            </footer>
        </>
    )
}

export default App
