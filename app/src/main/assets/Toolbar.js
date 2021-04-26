export default {
    template: `
      <div class="my-2">
      <button class="text-blue-500 text-xl" v-if="!editing" @click="handleEdit">
        新增
      </button>
      <form ref="form" class="mt-4" v-if="editing" @submit.prevent="handleSubmit">
        <input name="title" placeholder="标题" type="text" @keydown.enter="handleSave"
               @keydown.esc="handleCancel"
               class="border-b outline-none w-full text-xl" required>
        <textarea name="content" placeholder="内容" rows="5" @keydown.esc="handleCancel"
                  class="border p-1 mt-2 outline-none w-full text-xl" />
        <div class="mt-2 text-xl">
          <button class="text-blue-500" @click="handleCancel">
            取消
          </button>
          <button type="submit" class="text-blue-500">
            保存
          </button>
        </div>
      </form>
      </div>
    `,
    data() {
        return {
            editing: false
        }
    },
    methods: {
        handleEdit() {
            this.editing = true
            this.$nextTick(() => {
                this.$refs.form.title.focus()
            })
        },
        handleSubmit(ev) {
            this.handleSave()
        },
        handleSave() {
            const form = this.$refs.form
            const title = String(form.title.value).trim()
            const content = String(form.content.value).trim()
            if (!title) {
                return
            }
            this.$emit('add', { title, content })
            this.editing = false
        },
        handleCancel() {
            this.editing = false
        },
    }
}
