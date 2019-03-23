<template>
  <div id="app">
    <div class="box" v-lazyload v-for="(item, index) in imageSoures" :key="index">
      <div class="ripple">
        <div class="ripple__circle"></div>
        <div class="ripple__circle ripple__inner-circle"></div>
      </div>
      <img :data-url="item.url" :alt="item.title" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      imageSoures: [
        {
          title: 'Homee Sales Surge',
          url: '//www.nar.realtor/sites/default/files/condo-building-GettyImages-152123643-1200w-628h.jpg'
        },
        {
          title: 'WDRB and WBKI back on DIRECTV',
          url: 'https://bloximages.newyork1.vip.townnews.com/wdrb.com/content/tncms/assets/v3/editorial/c/f4/cf4a7d28-4d03-11e9-b23b-9b91808872ab/5c957fd70619c.image.jpg?resize=1120%2C630'
        },
        {
          title: 'Inverted Yield Curve',
          url: 'https://media.npr.org/assets/img/2019/03/22/gettyimages-1137624930_wide-84bdfc64a10c03813681fedeb4c92d2c5320c38b.jpg?s=1400'
        },
        {
          title: 'img1',
          url: 'https://cdn.pixabay.com/photo/2018/11/04/11/49/dawn-3793717_1280.jpg'
        },
        {
          title: 'img2',
          url: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg'
        },
        {
          title: 'img3',
          url: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg'
        },
        {
          title: 'img4',
          url: 'https://cdn.pixabay.com/photo/2017/01/09/00/49/winter-1964361_1280.jpg'
        },
        {
          title: 'Homee Sales Surge',
          url: '//www.nar.realtor/sites/default/files/condo-building-GettyImages-152123643-1200w-628h.jpg'
        },
        {
          title: 'WDRB and WBKI back on DIRECTV',
          url: 'https://bloximages.newyork1.vip.townnews.com/wdrb.com/content/tncms/assets/v3/editorial/c/f4/cf4a7d28-4d03-11e9-b23b-9b91808872ab/5c957fd70619c.image.jpg?resize=1120%2C630'
        },
        {
          title: 'Inverted Yield Curve',
          url: 'https://media.npr.org/assets/img/2019/03/22/gettyimages-1137624930_wide-84bdfc64a10c03813681fedeb4c92d2c5320c38b.jpg?s=1400'
        },
        {
          title: 'img1',
          url: 'https://cdn.pixabay.com/photo/2018/11/04/11/49/dawn-3793717_1280.jpg'
        },
        {
          title: 'img2',
          url: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg'
        },
        {
          title: 'img3',
          url: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg'
        },
        {
          title: 'img4',
          url: 'https://cdn.pixabay.com/photo/2017/01/09/00/49/winter-1964361_1280.jpg'
        },
        {
          title: 'Homee Sales Surge',
          url: '//www.nar.realtor/sites/default/files/condo-building-GettyImages-152123643-1200w-628h.jpg'
        },
        {
          title: 'WDRB and WBKI back on DIRECTV',
          url: 'https://bloximages.newyork1.vip.townnews.com/wdrb.com/content/tncms/assets/v3/editorial/c/f4/cf4a7d28-4d03-11e9-b23b-9b91808872ab/5c957fd70619c.image.jpg?resize=1120%2C630'
        },
        {
          title: 'Inverted Yield Curve',
          url: 'https://media.npr.org/assets/img/2019/03/22/gettyimages-1137624930_wide-84bdfc64a10c03813681fedeb4c92d2c5320c38b.jpg?s=1400'
        },
        {
          title: 'img1',
          url: 'https://cdn.pixabay.com/photo/2018/11/04/11/49/dawn-3793717_1280.jpg'
        },
        {
          title: 'img2',
          url: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg'
        },
        {
          title: 'img3',
          url: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg'
        },
        {
          title: 'img4',
          url: 'https://cdn.pixabay.com/photo/2017/01/09/00/49/winter-1964361_1280.jpg'
        },
        {
          title: 'Homee Sales Surge',
          url: '//www.nar.realtor/sites/default/files/condo-building-GettyImages-152123643-1200w-628h.jpg'
        },
        {
          title: 'WDRB and WBKI back on DIRECTV',
          url: 'https://bloximages.newyork1.vip.townnews.com/wdrb.com/content/tncms/assets/v3/editorial/c/f4/cf4a7d28-4d03-11e9-b23b-9b91808872ab/5c957fd70619c.image.jpg?resize=1120%2C630'
        },
        {
          title: 'Inverted Yield Curve',
          url: 'https://media.npr.org/assets/img/2019/03/22/gettyimages-1137624930_wide-84bdfc64a10c03813681fedeb4c92d2c5320c38b.jpg?s=1400'
        },
        {
          title: 'img1',
          url: 'https://cdn.pixabay.com/photo/2018/11/04/11/49/dawn-3793717_1280.jpg'
        },
        {
          title: 'img2',
          url: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg'
        },
        {
          title: 'img3',
          url: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg'
        },
        {
          title: 'img4',
          url: 'https://cdn.pixabay.com/photo/2017/01/09/00/49/winter-1964361_1280.jpg'
        },
        {
          title: 'Homee Sales Surge',
          url: '//www.nar.realtor/sites/default/files/condo-building-GettyImages-152123643-1200w-628h.jpg'
        },
        {
          title: 'WDRB and WBKI back on DIRECTV',
          url: 'https://bloximages.newyork1.vip.townnews.com/wdrb.com/content/tncms/assets/v3/editorial/c/f4/cf4a7d28-4d03-11e9-b23b-9b91808872ab/5c957fd70619c.image.jpg?resize=1120%2C630'
        },
        {
          title: 'Inverted Yield Curve',
          url: 'https://media.npr.org/assets/img/2019/03/22/gettyimages-1137624930_wide-84bdfc64a10c03813681fedeb4c92d2c5320c38b.jpg?s=1400'
        },
        {
          title: 'img1',
          url: 'https://cdn.pixabay.com/photo/2018/11/04/11/49/dawn-3793717_1280.jpg'
        },
        {
          title: 'img2',
          url: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg'
        },
        {
          title: 'img3',
          url: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg'
        },
        {
          title: 'img4',
          url: 'https://cdn.pixabay.com/photo/2017/01/09/00/49/winter-1964361_1280.jpg'
        },
        {
          title: 'Homee Sales Surge',
          url: '//www.nar.realtor/sites/default/files/condo-building-GettyImages-152123643-1200w-628h.jpg'
        },
        {
          title: 'WDRB and WBKI back on DIRECTV',
          url: 'https://bloximages.newyork1.vip.townnews.com/wdrb.com/content/tncms/assets/v3/editorial/c/f4/cf4a7d28-4d03-11e9-b23b-9b91808872ab/5c957fd70619c.image.jpg?resize=1120%2C630'
        },
        {
          title: 'Inverted Yield Curve',
          url: 'https://media.npr.org/assets/img/2019/03/22/gettyimages-1137624930_wide-84bdfc64a10c03813681fedeb4c92d2c5320c38b.jpg?s=1400'
        },
        {
          title: 'img1',
          url: 'https://cdn.pixabay.com/photo/2018/11/04/11/49/dawn-3793717_1280.jpg'
        },
        {
          title: 'img2',
          url: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg'
        },
        {
          title: 'img3',
          url: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg'
        },
        {
          title: 'img4',
          url: 'https://cdn.pixabay.com/photo/2017/01/09/00/49/winter-1964361_1280.jpg'
        },
        {
          title: 'Homee Sales Surge',
          url: '//www.nar.realtor/sites/default/files/condo-building-GettyImages-152123643-1200w-628h.jpg'
        },
        {
          title: 'WDRB and WBKI back on DIRECTV',
          url: 'https://bloximages.newyork1.vip.townnews.com/wdrb.com/content/tncms/assets/v3/editorial/c/f4/cf4a7d28-4d03-11e9-b23b-9b91808872ab/5c957fd70619c.image.jpg?resize=1120%2C630'
        },
        {
          title: 'Inverted Yield Curve',
          url: 'https://media.npr.org/assets/img/2019/03/22/gettyimages-1137624930_wide-84bdfc64a10c03813681fedeb4c92d2c5320c38b.jpg?s=1400'
        },
        {
          title: 'img1',
          url: 'https://cdn.pixabay.com/photo/2018/11/04/11/49/dawn-3793717_1280.jpg'
        },
        {
          title: 'img2',
          url: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg'
        },
        {
          title: 'img3',
          url: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg'
        },
        {
          title: 'img4',
          url: 'https://cdn.pixabay.com/photo/2017/01/09/00/49/winter-1964361_1280.jpg'
        },
        {
          title: 'Homee Sales Surge',
          url: '//www.nar.realtor/sites/default/files/condo-building-GettyImages-152123643-1200w-628h.jpg'
        },
        {
          title: 'WDRB and WBKI back on DIRECTV',
          url: 'https://bloximages.newyork1.vip.townnews.com/wdrb.com/content/tncms/assets/v3/editorial/c/f4/cf4a7d28-4d03-11e9-b23b-9b91808872ab/5c957fd70619c.image.jpg?resize=1120%2C630'
        },
        {
          title: 'Inverted Yield Curve',
          url: 'https://media.npr.org/assets/img/2019/03/22/gettyimages-1137624930_wide-84bdfc64a10c03813681fedeb4c92d2c5320c38b.jpg?s=1400'
        },
        {
          title: 'img1',
          url: 'https://cdn.pixabay.com/photo/2018/11/04/11/49/dawn-3793717_1280.jpg'
        },
        {
          title: 'img2',
          url: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg'
        },
        {
          title: 'img3',
          url: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg'
        },
        {
          title: 'img4',
          url: 'https://cdn.pixabay.com/photo/2017/01/09/00/49/winter-1964361_1280.jpg'
        },
        {
          title: 'Homee Sales Surge',
          url: '//www.nar.realtor/sites/default/files/condo-building-GettyImages-152123643-1200w-628h.jpg'
        },
        {
          title: 'WDRB and WBKI back on DIRECTV',
          url: 'https://bloximages.newyork1.vip.townnews.com/wdrb.com/content/tncms/assets/v3/editorial/c/f4/cf4a7d28-4d03-11e9-b23b-9b91808872ab/5c957fd70619c.image.jpg?resize=1120%2C630'
        },
        {
          title: 'Inverted Yield Curve',
          url: 'https://media.npr.org/assets/img/2019/03/22/gettyimages-1137624930_wide-84bdfc64a10c03813681fedeb4c92d2c5320c38b.jpg?s=1400'
        },
        {
          title: 'img1',
          url: 'https://cdn.pixabay.com/photo/2018/11/04/11/49/dawn-3793717_1280.jpg'
        },
        {
          title: 'img2',
          url: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg'
        },
        {
          title: 'img3',
          url: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg'
        },
        {
          title: 'img4',
          url: 'https://cdn.pixabay.com/photo/2017/01/09/00/49/winter-1964361_1280.jpg'
        },
        {
          title: 'Homee Sales Surge',
          url: '//www.nar.realtor/sites/default/files/condo-building-GettyImages-152123643-1200w-628h.jpg'
        },
        {
          title: 'WDRB and WBKI back on DIRECTV',
          url: 'https://bloximages.newyork1.vip.townnews.com/wdrb.com/content/tncms/assets/v3/editorial/c/f4/cf4a7d28-4d03-11e9-b23b-9b91808872ab/5c957fd70619c.image.jpg?resize=1120%2C630'
        },
        {
          title: 'Inverted Yield Curve',
          url: 'https://media.npr.org/assets/img/2019/03/22/gettyimages-1137624930_wide-84bdfc64a10c03813681fedeb4c92d2c5320c38b.jpg?s=1400'
        },
        {
          title: 'img1',
          url: 'https://cdn.pixabay.com/photo/2018/11/04/11/49/dawn-3793717_1280.jpg'
        },
        {
          title: 'img2',
          url: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg'
        },
        {
          title: 'img3',
          url: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg'
        },
        {
          title: 'img4',
          url: 'https://cdn.pixabay.com/photo/2017/01/09/00/49/winter-1964361_1280.jpg'
        },
        {
          title: 'Homee Sales Surge',
          url: '//www.nar.realtor/sites/default/files/condo-building-GettyImages-152123643-1200w-628h.jpg'
        },
        {
          title: 'WDRB and WBKI back on DIRECTV',
          url: 'https://bloximages.newyork1.vip.townnews.com/wdrb.com/content/tncms/assets/v3/editorial/c/f4/cf4a7d28-4d03-11e9-b23b-9b91808872ab/5c957fd70619c.image.jpg?resize=1120%2C630'
        },
        {
          title: 'Inverted Yield Curve',
          url: 'https://media.npr.org/assets/img/2019/03/22/gettyimages-1137624930_wide-84bdfc64a10c03813681fedeb4c92d2c5320c38b.jpg?s=1400'
        },
        {
          title: 'img1',
          url: 'https://cdn.pixabay.com/photo/2018/11/04/11/49/dawn-3793717_1280.jpg'
        },
        {
          title: 'img2',
          url: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg'
        },
        {
          title: 'img3',
          url: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg'
        },
        {
          title: 'img4',
          url: 'https://cdn.pixabay.com/photo/2017/01/09/00/49/winter-1964361_1280.jpg'
        },
        {
          title: 'Homee Sales Surge',
          url: '//www.nar.realtor/sites/default/files/condo-building-GettyImages-152123643-1200w-628h.jpg'
        },
        {
          title: 'WDRB and WBKI back on DIRECTV',
          url: 'https://bloximages.newyork1.vip.townnews.com/wdrb.com/content/tncms/assets/v3/editorial/c/f4/cf4a7d28-4d03-11e9-b23b-9b91808872ab/5c957fd70619c.image.jpg?resize=1120%2C630'
        },
        {
          title: 'Inverted Yield Curve',
          url: 'https://media.npr.org/assets/img/2019/03/22/gettyimages-1137624930_wide-84bdfc64a10c03813681fedeb4c92d2c5320c38b.jpg?s=1400'
        },
        {
          title: 'img1',
          url: 'https://cdn.pixabay.com/photo/2018/11/04/11/49/dawn-3793717_1280.jpg'
        },
        {
          title: 'img2',
          url: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg'
        },
        {
          title: 'img3',
          url: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg'
        },
        {
          title: 'img4',
          url: 'https://cdn.pixabay.com/photo/2017/01/09/00/49/winter-1964361_1280.jpg'
        },
        {
          title: 'Homee Sales Surge',
          url: '//www.nar.realtor/sites/default/files/condo-building-GettyImages-152123643-1200w-628h.jpg'
        },
        {
          title: 'WDRB and WBKI back on DIRECTV',
          url: 'https://bloximages.newyork1.vip.townnews.com/wdrb.com/content/tncms/assets/v3/editorial/c/f4/cf4a7d28-4d03-11e9-b23b-9b91808872ab/5c957fd70619c.image.jpg?resize=1120%2C630'
        },
        {
          title: 'Inverted Yield Curve',
          url: 'https://media.npr.org/assets/img/2019/03/22/gettyimages-1137624930_wide-84bdfc64a10c03813681fedeb4c92d2c5320c38b.jpg?s=1400'
        },
        {
          title: 'img1',
          url: 'https://cdn.pixabay.com/photo/2018/11/04/11/49/dawn-3793717_1280.jpg'
        },
        {
          title: 'img2',
          url: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg'
        },
        {
          title: 'img3',
          url: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg'
        },
        {
          title: 'img4',
          url: 'https://cdn.pixabay.com/photo/2017/01/09/00/49/winter-1964361_1280.jpg'
        },
        {
          title: 'Homee Sales Surge',
          url: '//www.nar.realtor/sites/default/files/condo-building-GettyImages-152123643-1200w-628h.jpg'
        },
        {
          title: 'WDRB and WBKI back on DIRECTV',
          url: 'https://bloximages.newyork1.vip.townnews.com/wdrb.com/content/tncms/assets/v3/editorial/c/f4/cf4a7d28-4d03-11e9-b23b-9b91808872ab/5c957fd70619c.image.jpg?resize=1120%2C630'
        },
        {
          title: 'Inverted Yield Curve',
          url: 'https://media.npr.org/assets/img/2019/03/22/gettyimages-1137624930_wide-84bdfc64a10c03813681fedeb4c92d2c5320c38b.jpg?s=1400'
        },
        {
          title: 'img1',
          url: 'https://cdn.pixabay.com/photo/2018/11/04/11/49/dawn-3793717_1280.jpg'
        },
        {
          title: 'img2',
          url: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg'
        },
        {
          title: 'img3',
          url: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg'
        },
        {
          title: 'img4',
          url: 'https://cdn.pixabay.com/photo/2017/01/09/00/49/winter-1964361_1280.jpg'
        },
        {
          title: 'Homee Sales Surge',
          url: '//www.nar.realtor/sites/default/files/condo-building-GettyImages-152123643-1200w-628h.jpg'
        },
        {
          title: 'WDRB and WBKI back on DIRECTV',
          url: 'https://bloximages.newyork1.vip.townnews.com/wdrb.com/content/tncms/assets/v3/editorial/c/f4/cf4a7d28-4d03-11e9-b23b-9b91808872ab/5c957fd70619c.image.jpg?resize=1120%2C630'
        },
        {
          title: 'Inverted Yield Curve',
          url: 'https://media.npr.org/assets/img/2019/03/22/gettyimages-1137624930_wide-84bdfc64a10c03813681fedeb4c92d2c5320c38b.jpg?s=1400'
        },
        {
          title: 'img1',
          url: 'https://cdn.pixabay.com/photo/2018/11/04/11/49/dawn-3793717_1280.jpg'
        },
        {
          title: 'img2',
          url: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg'
        },
        {
          title: 'img3',
          url: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg'
        },
        {
          title: 'img4',
          url: 'https://cdn.pixabay.com/photo/2017/01/09/00/49/winter-1964361_1280.jpg'
        },
        {
          title: 'Homee Sales Surge',
          url: '//www.nar.realtor/sites/default/files/condo-building-GettyImages-152123643-1200w-628h.jpg'
        },
        {
          title: 'WDRB and WBKI back on DIRECTV',
          url: 'https://bloximages.newyork1.vip.townnews.com/wdrb.com/content/tncms/assets/v3/editorial/c/f4/cf4a7d28-4d03-11e9-b23b-9b91808872ab/5c957fd70619c.image.jpg?resize=1120%2C630'
        },
        {
          title: 'Inverted Yield Curve',
          url: 'https://media.npr.org/assets/img/2019/03/22/gettyimages-1137624930_wide-84bdfc64a10c03813681fedeb4c92d2c5320c38b.jpg?s=1400'
        },
        {
          title: 'img1',
          url: 'https://cdn.pixabay.com/photo/2018/11/04/11/49/dawn-3793717_1280.jpg'
        },
        {
          title: 'img2',
          url: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg'
        },
        {
          title: 'img3',
          url: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg'
        },
        {
          title: 'img4',
          url: 'https://cdn.pixabay.com/photo/2017/01/09/00/49/winter-1964361_1280.jpg'
        },
        {
          title: 'Homee Sales Surge',
          url: '//www.nar.realtor/sites/default/files/condo-building-GettyImages-152123643-1200w-628h.jpg'
        },
        {
          title: 'WDRB and WBKI back on DIRECTV',
          url: 'https://bloximages.newyork1.vip.townnews.com/wdrb.com/content/tncms/assets/v3/editorial/c/f4/cf4a7d28-4d03-11e9-b23b-9b91808872ab/5c957fd70619c.image.jpg?resize=1120%2C630'
        },
        {
          title: 'Inverted Yield Curve',
          url: 'https://media.npr.org/assets/img/2019/03/22/gettyimages-1137624930_wide-84bdfc64a10c03813681fedeb4c92d2c5320c38b.jpg?s=1400'
        },
        {
          title: 'img1',
          url: 'https://cdn.pixabay.com/photo/2018/11/04/11/49/dawn-3793717_1280.jpg'
        },
        {
          title: 'img2',
          url: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg'
        },
        {
          title: 'img3',
          url: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg'
        },
        {
          title: 'img4',
          url: 'https://cdn.pixabay.com/photo/2017/01/09/00/49/winter-1964361_1280.jpg'
        },
        {
          title: 'Homee Sales Surge',
          url: '//www.nar.realtor/sites/default/files/condo-building-GettyImages-152123643-1200w-628h.jpg'
        },
        {
          title: 'WDRB and WBKI back on DIRECTV',
          url: 'https://bloximages.newyork1.vip.townnews.com/wdrb.com/content/tncms/assets/v3/editorial/c/f4/cf4a7d28-4d03-11e9-b23b-9b91808872ab/5c957fd70619c.image.jpg?resize=1120%2C630'
        },
        {
          title: 'Inverted Yield Curve',
          url: 'https://media.npr.org/assets/img/2019/03/22/gettyimages-1137624930_wide-84bdfc64a10c03813681fedeb4c92d2c5320c38b.jpg?s=1400'
        },
        {
          title: 'img1',
          url: 'https://cdn.pixabay.com/photo/2018/11/04/11/49/dawn-3793717_1280.jpg'
        },
        {
          title: 'img2',
          url: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg'
        },
        {
          title: 'img3',
          url: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_1280.jpg'
        },
        {
          title: 'img4',
          url: 'https://cdn.pixabay.com/photo/2017/01/09/00/49/winter-1964361_1280.jpg'
        }
      ]
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 10px;
}

.box {
  border: 1px solid #cecece;
  box-shadow: 1px 1px 2px rgba(0,0,0,.25);
  border-radius: 4px;
  min-height: 20vh;
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box img {
  max-width: 100%;
  height: auto;
}

.ripple {
  display: inline-block;
  position: absolute;
  width: 64px;
  height: 64px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.ripple__circle {
    position: absolute;
    border: 4px solid rgb(96, 208, 112);
    opacity: 1;
    border-radius: 50%;
    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.ripple__inner-circle {
    animation-delay: -0.5s;
}
.loaded .ripple {
  display: none;
}
@keyframes ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}
</style>
