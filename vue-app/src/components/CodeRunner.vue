<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">JavaScript Code Runner</h2>
    <div v-if="code" class="mb-4">
      <label class="block mb-2 font-semibold">Code (read-only):</label>
      <pre class="bg-black-100 p-2 rounded overflow-x-auto max-w-full" style="max-height: 300px;">{{ code }}</pre>
    </div>
    <div class="mb-4">
      <button @click="runCode" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Run Code</button>
    </div>
    <div>
      <label class="block mb-2 font-semibold">Output:</label>
      <pre class="bg-black text-green-400 p-2 rounded h-48 overflow-y-auto whitespace-pre-wrap">{{ output }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  selectedFile: {
    type: String,
    required: true,
  },
})

const code = ref('')
const output = ref('')

const loadFile = async () => {
  if (!props.selectedFile) {
    code.value = ''
    output.value = ''
    return
  }
  try {
    const response = await fetch(props.selectedFile)
    if (!response.ok) throw new Error('Failed to load file')
    code.value = await response.text()
    output.value = ''
  } catch (err) {
    code.value = ''
    output.value = 'Error loading file: ' + err.message
  }
}

const runCode = () => {
  output.value = ''
  try {
    const logs = []
    const originalConsoleLog = console.log
    console.log = (...args) => {
      logs.push(args.map(a => String(a)).join(' '))
      originalConsoleLog.apply(console, args)
    }
    const func = new Function(code.value)
    func()
    console.log = originalConsoleLog
    output.value = logs.join('\n') || 'Code executed with no output.'
  } catch (err) {
    output.value = 'Error during execution: ' + err.message
  }
}

watch(() => props.selectedFile, () => {
  loadFile()
}, { immediate: true })
</script>

<style scoped>
pre {
  font-family: monospace;
  font-size: 0.9rem;
}
</style>
