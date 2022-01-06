<template>
  <img :src="stamp.src" :alt="stamp.alt">
</template>

<script>
import $ from 'jquery';

export default {
  name: "Stamp",
  props: {
    stamp: {
      src: null,
      alt: null,
      top: 0,
      left: 0
    }
  },
  mounted() {
    $(this.$el)
        .css({
          top: this.stamp.top,
          left: this.stamp.left
        })
        .on('mousedown touchdown', this.dragStart);
    this.element = $(this.$el);
    console.log(this.element);
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
    }
  }
}
</script>

<style scoped>

img {
  width: 32px;
  height: 32px;
  position: absolute;
  z-index: 100;
  top: 0px;
  left: 0px;
}

</style>