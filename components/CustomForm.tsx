export default function CustomForm() {
  return (
    <form className="mb-2">
        <h2 className="mb-1">Crear un nuevo comentario</h2>
        <div className="flex w-full flex-row gap-4 mb-1">       
            <div>
                <label htmlFor="author" className="block text-sm text-gray-400 mb-1">Autor:</label>
                <input type="text" id="author" name="author" className="w-full rounded-md bg-zinc-800 border border-zinc-700 text-gray-200 
               px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600" />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email (opcional):</label>
                <input type="email" id="email" name="email" className="w-full rounded-md bg-zinc-800 border border-zinc-700 text-gray-200 
               px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600" />
            </div>
        </div>
        <div>
            <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Comentario:</label>
            <textarea 
                id="comment"
                name="comment"
                rows={4}    
                className="w-full rounded-md bg-zinc-800 border border-zinc-700 text-gray-200 
               px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600 resize-none"
            />
        </div>
        <button type="submit" className="w-full bg-gray-700 hover:bg-gray-600 text-gray-100 
             font-medium py-2 rounded-md transition">Enviar Comentario</button>
    </form>
  )
}