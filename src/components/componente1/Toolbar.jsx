import Button from "react-bootstrap/esm/Button";

export default function Toolbar({onPlayMovie,onUploadImage}) {
    return(
        <>
            <div>
                <Button2 onClick={onPlayMovie}>Cargar peli</Button2>{' '}
                <Button2 onClick={onUploadImage}>Cargar imagen</Button2>
            </div>
        </>
    )
}

function Button2({onClick,children}) {
    return(
        <Button variant="success" onClick={onClick}>{children}</Button>
    )
}