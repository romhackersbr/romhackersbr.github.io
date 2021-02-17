Jekyll::Hooks.register :utilitarios, :pre_render do |doc|
    doc.data['last_modified'] = "teste"
end