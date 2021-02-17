module Jekyll
    module ModifiedTime
        class GitError < StandardError; end

        # run before most other hooks
        LOW_PRIORITY = Jekyll::Hooks::PRIORITY_MAP[:low]

        # Various constants
        MTIME_PAGE_VAR = 'last_modified'

        def self.get_mtime(path=nil)
            additional_status_options = ''
            additional_log_options = ''

            if (path != nil)
                additional_status_options = "--ignored -- #{path}"
                additional_log_options = "-- #{path}"
            end

            git_status_str = `git status --porcelain -uall #{additional_status_options}`
            if ($? != 0)
                raise GitError, "git status failed"
            end

            if (!git_status_str.empty?)
                # git status reported that the file or workspace has been modified/ignored/staged/...
                return nil
            else
                git_log_str = `git log -1 --format=format:"%ct" #{additional_log_options}`
                if ($? != 0 || git_log_str.empty?)
                    raise GitError, "git log failed"
                end

                return Time.at git_log_str.to_i
            end
        end

        Jekyll::Hooks.register(:documents, :post_init, priority: LOW_PRIORITY) do |doc|
            doc.data[MTIME_PAGE_VAR] = get_mtime(doc.path) || File.mtime(doc.path)
        end

    end 
end