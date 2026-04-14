import { get, upload, del } from '../api.js'

export function registerMedia(program) {
  const media = program.command('media').description('Media management (images, videos, PDFs, PPTX)')

  media
    .command('list')
    .description('List uploaded media')
    .option('-t, --type <type>', 'Filter by type: image|video|document')
    .action(async (opts) => {
      const data = await get('/api/media')
      let list = Array.isArray(data) ? data : data.media || []
      if (opts.type) list = list.filter(m => m.media_type === opts.type)
      console.log(JSON.stringify(list, null, 2))
    })

  media
    .command('upload <file>')
    .description('Upload a media file (JPEG, PNG, GIF, MP4, WebM, MOV, PDF, PPTX)')
    .action(async (file) => {
      const data = await upload('/api/media', file)
      const type = data.media_type || 'image'
      const extra = data.duration ? `, duration: ${Math.floor(data.duration / 60)}:${String(data.duration % 60).padStart(2, '0')}` : ''
      console.error(`Uploaded ${type}: ${data.original_filename || data.filename} (id: ${data.id}${extra})`)
      console.log(JSON.stringify(data, null, 2))
    })

  media
    .command('delete <id>')
    .description('Delete a media item')
    .action(async (id) => {
      await del(`/api/media/${id}`)
      console.log(JSON.stringify({ ok: true, deleted: parseInt(id) }))
    })
}
