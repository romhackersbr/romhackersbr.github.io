Jekyll::Hooks.register :collections, :pre_render do |collection|

    # get the current post last modified time
    modification_time = File.mtime( collection.path )

    # inject modification_time in post's datas.
    collection.data['last_modified'] = modification_time

end