<template>
  <div id="app">
    <div class="container">
      <h1>Stamps on Image</h1>

      <div class="space">
        <Stamp v-for="s in stamps" :stamp="s"></Stamp>
        <img id="canvas" :src="image.url" :alt="image.alt">
      </div>

      <div class="stamps">
        <StampMaster v-for="sm in stampMasters" :stampMaster="sm" :image="image" @createStamp="createStamp"></StampMaster>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import StampMaster from 'StampMaster';
import Stamp from 'Stamp';

import Canvas from '../assets/img/karuizawa.jpg';
import Azarashi from '../assets/img/azarashi.png';
import Saru from '../assets/img/saru.png';
import Ushi from '../assets/img/ushi.png';

export default {
  name: 'App',
  components: {
    StampMaster,
    Stamp
  },
  props: {

  },
  data() {
    return {
      image: {
        offset: {top: 0, left: 0},
        url: Canvas,
        alt: '軽井沢'
      },
      stampMasters: [
        {
          src: Azarashi,
          alt: 'あざらし'
        },
        {
          src: Saru,
          alt: 'さる'
        },
        {
          src: Ushi,
          alt: 'うし'
        }
      ],
      stamps: []
    }
  },
  mounted() {
    let el = $(this.$el).find('.space');
    this.image.offset.top = el.offsetTop;
    this.image.offset.left = el.offsetLeft;
    console.log(el.offset());
  },
  methods: {
    createStamp: function (obj) {
      this.stamps.push(obj);
      console.log(this.stamps);
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}

.container {
  position: relative;
  width: 1080px;
  margin: 0 auto;
}

.space {
  display: inline-block;
  position: relative;
}
.space #canvas {
  max-width: 600px;
}

.stamps {
  display: flex;
  justify-content: center;
}

</style>
