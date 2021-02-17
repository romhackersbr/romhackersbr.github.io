Jekyll::Hooks.register :site, :post_read do |site|

    site.collections.each do collection
        collection.each do item
            # get the current post last modified time
            modification_time = File.mtime( item.path )

            # inject modification_time in post's datas.
            item.data['last_modified'] = modification_time
        end
    end

end