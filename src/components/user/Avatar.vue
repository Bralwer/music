/*
 * @Author: 情雨随风 
 * @Date: 2019-12-04 23:05:10 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-01-20 19:40:52
 * @Description: 头像信息组件
 */

<script>
import { Image,Row,Col,Button,Icon,ImagePreview } from 'vant';
import avatar from '@assets/image/avatar.jpg';
export default {
    name: 'Avatar',
    props: {
        avatarUrl: String,
        backgroundUrl: String,
        followeds: Number,
        follows: Number,
        gender: Number,
        nickname: String,
        userId: Number,
        eventCount: Number
    },
    methods: {
        //预览图片
        handelImage() {
            this.avatarUrl && ImagePreview({
                images: [this.avatarUrl],
                onClose() {}
            });
        },
        //open登录界面
        handelLogin() {
            this.$router.push({
                path: '/login'
            })
        }
    },
    render() {
        return (
            <div class="Avatar">
                <div class="Container">
                    <div class="Avatar-Container">
                        <Image
                            width={80}
                            height={80}
                            round={true}
                            fit="cover"
                            src={this.avatarUrl || avatar}
                            onClick={this.handelImage}
                        ></Image>
                        <div class="nickname">
                            <div class="van-name">{this.nickname || '未登录'}</div>
                        </div>
                        {this.userId && false && <Button
                            disabled={false}
                            hairline={true}
                            round={true}
                            color="#ee0a24"
                            plain={true}
                            size="small"
                        >签到</Button>}
                    </div>
                    {this.userId && <Row style={{marginBottom: '14px', height: '44px'}}>
                        <Col span={6} class="van-hairline--right">
                            <div class="van-tainer-box" onClick={() => {this.$emit('dynamic', this.userId)}}>
                                <div class="van-tainer">{this.eventCount || '--'}</div>
                                <div class="van-tainer">动态</div>
                            </div>
                        </Col>
                        <Col span={6} class="van-hairline--right">
                            <div class="van-tainer-box" onClick={() => {this.$emit('followers', this.userId)}}>
                                <div class="van-tainer">{this.follows || '--'}</div>
                                <div class="van-tainer">关注</div>
                            </div>
                        </Col>
                        <Col span={6} class="van-hairline--right">
                            <div class="van-tainer-box" onClick={() => {this.$emit('following', this.userId)}}>
                                <div class="van-tainer">{this.followeds || '--'}</div>
                                <div class="van-tainer">粉丝</div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div class="van-tainer-box" onClick={() => {this.$emit('setting', this.userId)}}>
                                <div class="van-tainer">
                                    <Icon name="setting-o" size={18} />
                                </div>
                                <div class="van-tainer">设置</div>
                            </div>
                        </Col>
                    </Row>}
                    {!this.userId && <Button
                        disabled={false}
                        hairline={true}
                        round={true}
                        block={true}
                        color="#ee0a24"
                        plain={true}
                        size="normal"
                        style={{cursor: 'pointer'}}
                        onClick={this.handelLogin}
                    >登录</Button>}
                </div>
            </div>
        )
    }
}
</script>

<style lang="less">
.Avatar {
    .Container {
        overflow: hidden;
        background-color: #ffffff;
    }
    .Avatar-Container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 24px 40px;
        .van-button--small {
            height: 26px;
            line-height: 24px;
        }
    }
    .nickname {
        // flex: 1;
        // margin-left: 24px;
        margin-top: 24px;
        .van-name {
            font-size: 18px;
            color: #333333;
            font-weight: 500;
        }
    }
    .van-col {
        display: flex;
        flex-direction: column;
        align-items: center;
        .van-tainer {
            height: 22px;
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #333333;
        }
        .van-tainer-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 5px;
        }
    }
    .van-button--normal {
        margin: 0 20px 14px;
        width: calc(100% - 40px);
    }
}
</style>