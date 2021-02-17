Jekyll::Hooks.register :documents, :pre_render do |doc|
    # get the current post last modified time
    modification_time = File.mtime( doc.path )

    # inject modification_time in post's datas.
    doc.data['last_modified'] = modification_time
end