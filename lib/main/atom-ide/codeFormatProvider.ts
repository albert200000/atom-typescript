import {TextEditor} from "atom"
import {FileCodeFormatProvider, RangeCodeFormatProvider} from "atom-ide-base"
import {GetClientFunction} from "../../client"
import {CodeEdit, LocationRangeQuery, rangeToLocationRange, spanToRange} from "../atom/utils"

async function formatCode(editor, getClient) {
  const filePath = editor.getPath()
  if (filePath === undefined) return

  const ranges: LocationRangeQuery[] = []

  for (const selection of editor.getSelectedBufferRanges()) {
    if (!selection.isEmpty()) {
      ranges.push(rangeToLocationRange(selection))
    }
  }

  // Format the whole document if there are no ranges added
  if (ranges.length === 0) {
    const end = editor.getBuffer().getEndPosition()
    ranges.push({
      line: 1,
      offset: 1,
      endLine: end.row + 1,
      endOffset: end.column + 1,
    })
  }

  const client = await getClient(filePath)
  const edits: CodeEdit[] = []

  // Collect all edits together so we can update everything in a single transaction
  for (const range of ranges) {
    const result = await client.execute("format", {...range, file: filePath})
    if (result.body) {
      edits.push(...result.body)
    }
  }

  if (edits.length > 0) {
    editor.transact(() => {
      // The code edits need to be applied in reverse order
      for (let i = edits.length - 1; i >= 0; i--) {
        editor.setTextInBufferRange(spanToRange(edits[i]), edits[i].newText)
      }
    })
  }
}

export function getFileCodeFormatProvider(getClient: GetClientFunction): FileCodeFormatProvider {
  return {
    formatEntireFile: (editor: TextEditor) => {
      formatCode(editor, getClient)

      return null
    },
  }
}

export function getRangeCodeFormatProvider(getClient: GetClientFunction): RangeCodeFormatProvider {
  return {
    formatCode: (editor: TextEditor) => {
      formatCode(editor, getClient)

      return []
    },
  }
}
