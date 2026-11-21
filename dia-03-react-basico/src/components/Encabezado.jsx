export const Encabezado =({titulo, subtitulo='Subtitulo por defecto' }) => {
    return (
        <header>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
        </header>
    )
}