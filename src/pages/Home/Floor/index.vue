<template>
  <div class="floor">
    <div class="py-container">
      <div class="title clearfix">
        <h3 class="fl">{{list.name}}</h3>
        <div class="fr">
          <ul class="nav-tabs clearfix">
            <li class="active">
              <a href="" data-toggle="tab">热门</a>
            </li>
            <li>
              <a href="" data-toggle="tab">大家电</a>
            </li>
            <li>
              <a href="" data-toggle="tab">生活电器</a>
            </li>
            <li>
              <a href="" data-toggle="tab">厨房电器</a>
            </li>
            <li>
              <a href="" data-toggle="tab">应季电器</a>
            </li>
            <li>
              <a href="" data-toggle="tab">空气/净水</a>
            </li>
            <li>
              <a href="" data-toggle="tab">高端电器</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab-content">
        <div class="tab-pane">
          <div class="floor-1">
            <div class="blockgary">
              <ul class="jd-list">
                <li v-for="(li,index) in list.keywords" :key="index">{{li}}</li>

              </ul>
              <img :src="list.imgUrl" alt="pic" />
            </div>
            <div class="floorBanner">
<!--              <div class="swiper-container" id="floor1Swiper" ref="mySwiper">-->
<!--                <div class="swiper-wrapper">-->
<!--                  <div class="swiper-slide" v-for="(current) in list.carouselList" :key="current.id">-->
<!--                    <img :src="current.imgUrl" alt="pic" >-->
<!--                  </div>-->
<!--&lt;!&ndash;                  <div class="swiper-slide">&ndash;&gt;-->
<!--&lt;!&ndash;                    <img src="./images/home/floor-1-b02.png" alt="pic" >&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--&lt;!&ndash;                  <div class="swiper-slide">&ndash;&gt;-->
<!--&lt;!&ndash;                    <img src="./images/home/floor-1-b03.png" alt="pic" >&ndash;&gt;-->
<!--&lt;!&ndash;                  </div>&ndash;&gt;-->
<!--                </div>-->
<!--                &lt;!&ndash; 如果需要分页器 &ndash;&gt;-->
<!--                <div class="swiper-pagination"></div>-->

<!--                &lt;!&ndash; 如果需要导航按钮 &ndash;&gt;-->
<!--                <div class="swiper-button-prev"></div>-->
<!--                <div class="swiper-button-next"></div>-->
<!--              </div>-->
              <swiper :list="list.carouselList"></swiper>
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img :src="list.recommendList[0]" alt="pic" />
              </div>
              <div class="floor-conver-pit">
                <img :src="list.recommendList[1]" alt="pic" />
              </div>
            </div>
            <div class="split center">
              <img :src="list.bigImg" alt="pic" />
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img :src="list.recommendList[2]" alt="pic" />
              </div>
              <div class="floor-conver-pit">
                <img :src="list.recommendList[3]" alt="pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Swiper from 'swiper';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Floor",
  props: ['list'],
  watch:{
    list:{
      immediate:true,
      handler(){
        this.$nextTick(()=>{
          const mySwiper = new Swiper(this.$refs.mySwiper, {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable:true
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            // scrollbar: {
            //   el: '.swiper-scrollbar',
            // },
          });
          mySwiper.fuck='fuck-you'


        })



      }
    }


}
}
</script>

<style  lang="less" scoped>
.floor {
  margin-top: 15px;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .title {
      .fl {
        float: left;
        color: #c81623;
        font-size: 20px;
        line-height: 30px;
        margin: 9px 0;
        font-weight: 700;
      }

      .fr {
        float: right;

        .nav-tabs {
          margin: 10px 0 0;
          display: inline-block;

          li {
            float: left;
            line-height: 18px;

            a {
              padding-top: 1px;
              font-weight: 400;
              background-color: #fff;

              &::after {
                content: "|";
                padding: 0 10px;
              }
            }

            &:nth-child(7) {
              a {
                &::after {
                  content: "";
                }
              }
            }

            &.active {
              a {
                color: #e1251b;
              }
            }
          }
        }
      }
    }

    .tab-content {
      border-top: 2px solid #c81623;
      border-bottom: 1px solid #e4e4e4;

      .tab-pane {
        .floor-1 {
          height: 360px;
          display: flex;

          .blockgary {
            width: 210px;
            height: 100%;
            background: #f7f7f7;

            .jd-list {
              padding: 15px 0;
              overflow: hidden;

              li {
                list-style-type: none;
                float: left;
                width: 40%;
                margin: 0 10px;
                border-bottom: 1px solid #e4e4e4;
                text-align: center;
                line-height: 26px;
              }
            }

            img {
              width: 100%;
            }
          }

          .floorBanner {
            width: 330px;
            height: 100%;
          }

          .split {
            width: 220px;
            height: 100%;
            position: relative;

            .floor-x-line {
              position: absolute;
              background: #e4e4e4;
              width: 220px;
              height: 1px;
              top: 180px;
            }

            .floor-conver-pit {
              width: 100%;
              height: 50%;

              img {
                width: 100%;
                height: 100%;
                transition: all 400ms;

                &:hover {
                  opacity: 0.8;
                }
              }
            }
          }

          .center {
            border: 1px solid #e4e4e4;
          }
        }
      }
    }
  }
}

</style>