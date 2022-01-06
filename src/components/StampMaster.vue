<template>
  <div class="stamp">
    <img class="stamp-master" :src="stampMaster.src" :alt="stampMaster.alt">
    <img :src="stampMaster.src" :alt="stampMaster.alt">
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "StampMaster",
   data() {
    return {
      element: null,
      x: 0,
      y: 0,
      create: false
    }
  },
  props: {
    stampMaster: {
      src: '@/assets/img/azarashi.png',
      alt: 'アザラシ'
    },
    image: {
      offset: {},
      url: '',
      alt: ''
    }
  },
  mounted() {
    this.element = $(this.$el).find('.stamp-master');
    this.element.on('mousedown touchdown', this.dragStart);
  },
  methods: {
    dragStart: function (event) {
      event = event.type === 'mousedown' ? event : event.changedTouches[0];
      this.create = true;

      // position
      this.x = event.pageX - this.element.offset().left;
      this.y = event.pageY - this.element.offset().top;

      // callback event
      $(document.body).on('mousemove touchmove', this.drag);
    },
    drag: function (event) {
      event = event.type === 'mousemove' ? event : event.changedTouches[0];
      event.preventDefault();

      this.element.css({
        position: 'fixed',
        top: (event.pageY - this.y) + 'px',
        left: (event.pageX - this.x) + 'px'
      });

      // event handler
      this.element.on('mouseup touchend', this.dragEnd);
      $(document.body).on('mouseleave touchleave', this.dragEnd);
    },
    dragEnd: function (event) {
      // event handler
      this.element.off('mouseup touchend');
      $(document.body).off('mousemove touchmove');

      // style
      this.element.css({
        position: 'relative',
        top: 0,
        left: 0
      });

      if (this.create) {
        let el = $('#canvas').offset();
        this.$emit('createStamp', {
          src: this.stampMaster.src,
          alt: this.stampMaster.alt,
          top: event.pageY - el.top - this.y,
          left: event.pageX - el.left - this.x
        });
        this.create = false;
      }
    }
  }
}
</script>

<style scoped>

.stamp {
  position: relative;
  width: 32px;
  height: 32px;
}

.stamp img {
  width: 32px;
  height: 32px;
  position: absolute;
  top: 0;
  left: 0;
}

.stamp .stamp-master {
  z-index: 2;
}

</style>