module Jekyll
    module ModifiedTime

        # run before most other hooks
        LOW_PRIORITY = Jekyll::Hooks::PRIORITY_MAP[:low]

        # Various constants
        MTIME_PAGE_VAR = 'last_modified'

        Jekyll::Hooks.register(:documents, :post_init, priority: LOW_PRIORITY) do |doc|
            doc.data[MTIME_PAGE_VAR] = File.mtime(doc.path)
        end

    end 
end