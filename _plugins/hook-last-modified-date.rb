Jekyll::Hooks.register :pages, :pre_render do |page|

    # get the current post last modified time
    modification_time = File.mtime( page.path )

    # inject modification_time in post's datas.
    page.data['last_modified'] = modification_time

end