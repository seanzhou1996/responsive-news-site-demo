var app = new Vue({
    el: '#vue-app',
    data: {
        brand: 'BBC中文网',
        sections: [
            { name: '主页', isActive: true },
            { name: '中国' },
            { name: '国际' },
            { name: '评论' },
            { name: '科技' },
            { name: '财经' },
            { name: '图辑' },
            { name: '音频' },
            { name: '视频' }
        ],
        headline: {
            title: '头条新闻标题',
            desc: '头条新闻介绍',
            img: 'sample.jpg',
            imgDesc: '头条图片介绍'
        },
        topStories: [
            { title: '头条新闻标题' },
            { title: '头条新闻标题' },
            { title: '头条新闻标题' },
            { title: '头条新闻标题' }
        ],
        trending: [
            { title: '热门新闻标题' },
            { title: '热门新闻标题' },
            { title: '热门新闻标题' },
            { title: '热门新闻标题' }
        ],
        featured: [
            {
                title: '专题新闻标题',
                desc: '专题新闻介绍',
                img: 'sample.jpg',
                imgDesc: '图片介绍'
            },
            {
                title: '专题新闻标题',
                desc: '专题新闻介绍',
                img: 'sample.jpg',
                imgDesc: '图片介绍'
            }
        ],
        otherStories: [
            { title: 'Title 1', desc: 'Description 1' },
            { title: 'Title 1', desc: 'Description 1' },
            { title: 'Title 1', desc: 'Description 1' },
            { title: 'Title 1', desc: 'Description 1' },
            { title: 'Title 1', desc: 'Description 1' },
            { title: 'Title 1', desc: 'Description 1' },
            { title: 'Title 1', desc: 'Description 1' },
            { title: 'Title 1', desc: 'Description 1' }
        ]
    }
});

(function () {
    var navbarHeight = document.getElementById('header').clientHeight;
    document.getElementById('headline').style.marginTop = navbarHeight + 'px';
})();