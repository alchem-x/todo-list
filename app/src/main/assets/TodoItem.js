export default {
  template: `
    <div @click="handleSelect" class="border p-2 my-2" :class="item.selected? 'border-blue-500 bg-blue-50' : ''">
    <div class="flex justify-between items-center">
      <span class="flex items-center">
        <input @click.stop @input="handleCheck" class="w-6 h-6 flex-none" type="checkbox" :checked="item.done">
        <h3 class="ml-2 text-xl cursor-default">{{ index }}. {{ item.title }}</h3>
      </span>
      <button @click="$emit('delete', index)" class="text-red-500 border border-red-500 text-xl flex-none px-1">
        删除
      </button>
    </div>
    <p class="text-base mt-2" v-if="item.content">
      {{ item.content }}
    </p>
    </div>
  `,
  props: {
      item: {
          type: Object,
          required: true,
      },
      index: {
          type: Number,
          required: true,
      }
  },
  methods: {
      handleCheck(ev) {
          this.$emit('check', {
              index: this.index,
              checked: ev.target.checked,
          })
      },
      handleSelect(ev) {
        this.$emit('select', {
          index: this.index,
          selected: !this.item.selected,
      })
      }
  }
}
