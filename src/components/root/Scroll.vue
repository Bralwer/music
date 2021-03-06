<script>
import BScroll from "better-scroll";
export default {
    name: 'Scroll',
    props: {
        //1-会截流   2-不会截流   3-看文档
        probeType: {
            type: Number,
            default: 1
        },
        //点击列表是否派发click事件
        click: {
            type: Boolean,
            default: true
        },
        //是否开启横向滚动
        scrollX: {
            type: Boolean,
            default: false
        },
        //是否派发滚动事件
        listenScroll: {
            type: Boolean,
            default: false
        },
        //列表的数据
        data: {
            type: Array,
            default: null
        },
        //是否派发滚动到底部的事件，用于上拉加载
        pullup: {
            type: Boolean,
            default: false
        },
        //是否派发顶部下拉的事件，用于下拉刷新
        pulldown: {
            type: Boolean,
            default: false
        },
        //是否派发列表滚动开始的事件
        beforeScroll: {
            type: Boolean,
            default: false
        },
        //当数据更新后，刷新scroll的延时。
        refreshDelay: {
            type: Number,
            default: 20
        },
        //是否随滚轮滚动
        mouseWheel: {
            type: Boolean,
            default: true
        },
        //是否开启页面回弹
        bounce: {
            type: Boolean,
            default: true
        },
        //动画回弹时间
        bounceTime: {
            type: Number,
            default: 300
        }
    },
    mounted() {
        //保证在DOM渲染完毕后初始化better-scroll
        this.$nextTick(() => {
            setTimeout(() => {
                this._initScroll();
            }, 20);
        })
    },
    methods: {
        _initScroll() {
            if (!this.$refs.wrapper) {
                return;
            }
            //better-scroll的初始化
            this.scroll = new BScroll(this.$refs.wrapper, {
                probeType: this.probeType,
                click: this.click,
                scrollX: this.scrollX,
                mouseWheel: this.mouseWheel,
                bounce: this.bounce,
                bounceTime: this.bounceTime
            });
    
            //是否派发滚动事件
            if (this.listenScroll) {
                let me = this;
                this.scroll.on("scroll", pos => {
                    me.$emit("scroll", pos);
                });
            }
    
            //是否派发滚动到底部事件，用于上拉加载
            if (this.pullup) {
                this.scroll.on("scrollEnd", () => {
                    //滚动到底部
                    if (this.scroll.y <= this.scroll.maxScrollY + 50) {
                        this.$emit("scrollToEnd");
                    }
                });
            }
    
            //是否派发顶部下拉事件，用于下拉刷新
            if (this.pulldown) {
                this.scroll.on("touchend", pos => {
                    //下拉动作
                    if (pos.y > 50) {
                        this.$emit("pulldown");
                    }
                });
            }
    
            //是否派发列表滚动开始的事件
            if (this.beforeScroll) {
                this.scroll.on("beforeScrollStart", () => {
                    this.$emit("beforeScroll");
                });
            }
        },
        disable() {
            //代理better-scroll的disable方法
            this.scroll && this.scroll.disable();
        },
        enable() {
            //代理better-scroll的enable方法
            this.scroll && this.scroll.enable();
        },
        refresh() {
            //代理better-scroll的refresh方法
            this.scroll && this.scroll.refresh();
        },
        scrollTo() {
            //代理better-scroll的scrollTo方法
            this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
        },
        scrollToElement() {
            //代理better-scroll的scrollToElement方法
            this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
        }
    },
    watch: {
        //监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
        data() {
            setTimeout(() => {
                this.refresh();
            }, this.refreshDelay);
        }
    },
    render() {
        return (
            <div ref="wrapper">
                {this.$slots.default}
            </div>
        )
    }
}
</script>